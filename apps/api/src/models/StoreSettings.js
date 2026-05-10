const mongoose = require('mongoose');

const storeSettingsSchema = new mongoose.Schema({
  storeName: { type: String, required: true },
  tagline: String,
  logo: String,
  favicon: String,
  whatsappNumber: { type: String, required: true },
  whatsappBusinessName: String,
  phone: [String],
  email: String,
  address: String,
  city: String,
  country: String,
  currency: {
    code: { type: String, default: 'INR' },
    symbol: { type: String, default: '₹' },
    position: { type: String, enum: ['before', 'after'], default: 'before' }
  },
  socialLinks: {
    instagram: String,
    facebook: String,
    youtube: String,
    telegram: String
  },
  upi: {
    id: String,
    qrImageUrl: String,
    name: String
  },
  paymentMethods: {
    upi: { type: Boolean, default: true },
    cod: { type: Boolean, default: true },
    bankTransfer: { type: Boolean, default: false },
    online: { type: Boolean, default: false }
  },
  orderMessage: {
    template: String,
    defaultGreeting: String
  },
  seo: {
    metaTitle: String,
    metaDescription: String,
    keywords: [String],
    ogImage: String
  },
  theme: {
    primaryColor: String,
    secondaryColor: String,
    accentColor: String,
    font: { type: String, default: 'Nunito' }
  },
  languages: { type: [String], default: ['en'] },
  businessHours: {
    open: String,
    close: String,
    days: [String],
    timezone: String
  },
  minimumOrderValue: { type: Number, default: 0 },
  isStoreOpen: { type: Boolean, default: true },
  closedMessage: String
}, { timestamps: true });

module.exports = mongoose.model('StoreSettings', storeSettingsSchema);
