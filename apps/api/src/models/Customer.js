const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  whatsappNumber: String,
  email: String,
  city: String,
  address: String,
  pincode: String,
  totalOrders: { type: Number, default: 0 },
  totalSpent: { type: Number, default: 0 },
  lastOrderDate: Date,
  tags: [String],
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);
