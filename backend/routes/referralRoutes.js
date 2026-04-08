import express from 'express';
import Referral from '../models/Referral.js';
import User from '../models/User.js';
import { authMiddleware } from './authRoutes.js';

const router = express.Router();

// Record a simple referral click
router.post('/click', async (req, res) => {
  try {
    const { code } = req.body;
    const referrer = await User.findOne({ referralCode: code });
    if (!referrer) return res.status(404).json({ msg: 'Referrer not found' });

    const referralClick = new Referral({
      referrer: referrer._id,
      type: 'click'
    });
    await referralClick.save();

    res.json({ msg: 'Click recorded', referrerId: referrer._id });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Get Referral Dashboard Stats
router.get('/stats', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    
    // Aggregation pipeline to get stats for the logged in user
    const stats = await Referral.aggregate([
      { $match: { referrer: userId } },
      {
        $group: {
          _id: '$type',
          count: { $sum: 1 },
          totalCommission: { $sum: '$commissionAmount' }
        }
      }
    ]);

    // Format stats appropriately
    let formattedStats = { clicks: 0, signups: 0, purchases: 0, totalEarned: 0 };
    stats.forEach(stat => {
      if (stat._id === 'click') formattedStats.clicks = stat.count;
      if (stat._id === 'signup') formattedStats.signups = stat.count;
      if (stat._id === 'purchase') {
        formattedStats.purchases = stat.count;
        formattedStats.totalEarned = stat.totalCommission;
      }
    });

    const user = await User.findById(userId).select('referralCode');

    res.json({ stats: formattedStats, link: `http://localhost:5173/?ref=${user.referralCode}` });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

export default router;
