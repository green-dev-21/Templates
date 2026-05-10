const mongoose = require('mongoose');

const deliveryZoneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['pincode', 'city', 'state', 'country'], default: 'city' },
  pincodes: [String],
  cities: [String],
  states: [String],
  deliveryCharge: { type: Number, default: 0 },
  freeDeliveryAbove: { type: Number, default: 0 },
  estimatedDays: String,
  isActive: { type: Boolean, default: true },
  displayOrder: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('DeliveryZone', deliveryZoneSchema);
