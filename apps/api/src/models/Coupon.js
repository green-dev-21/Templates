const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  type: { type: String, enum: ['flat', 'percent'], default: 'flat' },
  value: { type: Number, required: true },
  minOrderValue: { type: Number, default: 0 },
  maxDiscount: Number,
  usageLimit: Number,
  usedCount: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  expiresAt: Date
}, { timestamps: true });

module.exports = mongoose.model('Coupon', couponSchema);
