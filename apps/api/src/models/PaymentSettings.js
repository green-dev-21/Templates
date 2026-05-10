const mongoose = require('mongoose');

const paymentSettingsSchema = new mongoose.Schema({
  upi: {
    ids: [
      {
        label: String,
        id: String,
        qrUrl: String
      }
    ],
    instructions: String
  },
  bankTransfer: {
    accountName: String,
    accountNumber: String,
    ifsc: String,
    bankName: String,
    branch: String
  },
  cod: {
    available: { type: Boolean, default: true },
    extraCharge: { type: Number, default: 0 },
    maxOrderValue: Number,
    instructions: String
  }
}, { timestamps: true });

module.exports = mongoose.model('PaymentSettings', paymentSettingsSchema);
