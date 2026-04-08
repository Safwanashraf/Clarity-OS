import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import Order from '../models/Order.js';
import Template from '../models/Template.js';
import User from '../models/User.js';
import Referral from '../models/Referral.js';
import { authMiddleware } from './authRoutes.js';

const router = express.Router();

let razorpay;
try {
  razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || 'dummy_id',
    key_secret: process.env.RAZORPAY_KEY_SECRET || 'dummy_secret',
  });
} catch (e) {
  console.log("Razorpay not configured yet");
}

router.post('/create-order', authMiddleware, async (req, res) => {
  try {
    const { templateId, referredBy } = req.body;
    const template = await Template.findById(templateId);
    if (!template) return res.status(404).json({ msg: 'Template not found' });

    const amount = template.price * 100; // Razorpay takes amount in paise

    const options = {
      amount,
      currency: 'INR',
      receipt: `receipt_order_${Math.random() * 1000}`
    };

    const order = await razorpay.orders.create(options);

    const newOrder = new Order({
      user: req.user.id,
      template: templateId,
      amount: template.price, // Store in actual INR, not paise
      razorpayOrderId: order.id,
      referredBy: referredBy || null
    });

    await newOrder.save();
    res.json({ orderId: order.id, amount, currency: 'INR' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.post('/verify-payment', authMiddleware, async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || 'dummy_secret')
      .update(sign.toString())
      .digest('hex');

    if (razorpay_signature === expectedSign) {
      // Payment validated
      const order = await Order.findOne({ razorpayOrderId: razorpay_order_id });
      if (!order) return res.status(404).json({ msg: 'Order not found' });

      order.status = 'completed';
      order.razorpayPaymentId = razorpay_payment_id;
      await order.save();

      // Add to user's purchased templates
      const user = await User.findById(order.user);
      if (!user.purchasedTemplates.includes(order.template)) {
        user.purchasedTemplates.push(order.template);
        await user.save();
      }

      // Handle Referral commission if referredBy exists
      if (order.referredBy) {
        const commission = order.amount * 0.3; // 30% commission
        const referral = new Referral({
          referrer: order.referredBy,
          referredUser: user._id,
          order: order._id,
          type: 'purchase',
          commissionAmount: commission,
          status: 'pending' // Admin will pay this out later
        });
        await referral.save();
      }

      return res.json({ msg: 'Payment verified successfully' });
    } else {
      return res.status(400).json({ msg: 'Invalid signature sent!' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

export default router;
