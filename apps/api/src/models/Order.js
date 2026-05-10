const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true, unique: true },
  customer: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    whatsappNumber: String,
    city: String,
    address: { type: String, required: true },
    pincode: String
  },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      productName: String,
      productImage: String,
      variant: String,
      quantity: { type: Number, required: true },
      unitPrice: { type: Number, required: true },
      totalPrice: { type: Number, required: true }
    }
  ],
  subtotal: { type: Number, required: true },
  deliveryCharge: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  couponCode: String,
  total: { type: Number, required: true },
  paymentMethod: { type: String, enum: ['upi', 'cod', 'bank_transfer', 'online'], required: true },
  paymentStatus: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
  paymentRef: String,
  orderStatus: {
    type: String,
    enum: ['new', 'confirmed', 'packed', 'shipped', 'delivered', 'cancelled'],
    default: 'new'
  },
  source: { type: String, enum: ['whatsapp', 'manual', 'catalog_link'], default: 'whatsapp' },
  notes: String,
  statusHistory: [
    {
      status: String,
      updatedAt: { type: Date, default: Date.now },
      note: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
