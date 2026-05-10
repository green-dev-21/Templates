const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  image: { type: String, required: true },
  mobileImage: String,
  ctaText: String,
  ctaLink: String,
  position: { type: String, enum: ['hero', 'middle', 'bottom'], default: 'hero' },
  isActive: { type: Boolean, default: true },
  displayOrder: { type: Number, default: 0 },
  startDate: Date,
  endDate: Date
}, { timestamps: true });

module.exports = mongoose.model('Banner', bannerSchema);
