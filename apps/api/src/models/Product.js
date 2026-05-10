const mongoose = require('mongoose');

const variantOptionSchema = new mongoose.Schema({
  value: { type: String, required: true },
  additionalPrice: { type: Number, default: 0 },
  stock: { type: Number, default: 0 },
  sku: String
});

const variantSchema = new mongoose.Schema({
  label: { type: String, required: true },
  options: [variantOptionSchema]
});

const productSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  nameHi: String,
  nameAr: String,
  description: String,
  descriptionHi: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  images: [String],
  video: String,
  price: { type: Number, required: true },
  originalPrice: Number,
  discountPercent: Number,
  variants: [variantSchema],
  stock: { type: Number, default: 0 },
  sku: String,
  unit: { type: String, default: 'piece' },
  minOrderQty: { type: Number, default: 1 },
  maxOrderQty: Number,
  tags: [String],
  isFeatured: { type: Boolean, default: false },
  isNewArrival: { type: Boolean, default: false },
  isBestseller: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  whatsappNote: String,
  shareText: String,
  ratings: {
    average: { type: Number, default: 0 },
    count: { type: Number, default: 0 }
  },
  displayOrder: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
