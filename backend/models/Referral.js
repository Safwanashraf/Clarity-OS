import mongoose from 'mongoose';

const ReferralSchema = new mongoose.Schema({
  referrer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  referredUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Can be null if it's just a click without signup
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' }, // Can be null if they signed up but didn't buy
  type: { type: String, enum: ['click', 'signup', 'purchase'], required: true },
  commissionAmount: { type: Number, default: 0 },
  status: { type: String, enum: ['pending', 'paid'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Referral', ReferralSchema);
