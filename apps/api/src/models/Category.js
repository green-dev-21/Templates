const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  nameHi: String,
  nameAr: String,
  image: String,
  description: String,
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null },
  displayOrder: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  productCount: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
