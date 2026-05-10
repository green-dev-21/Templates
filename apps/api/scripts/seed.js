const mongoose = require('mongoose');
const Product = require('../src/models/Product');
const Category = require('../src/models/Category');
const StoreSettings = require('../src/models/StoreSettings');
const User = require('../src/models/User');
require('dotenv').config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');

    // Clear existing data
    await Product.deleteMany({});
    await Category.deleteMany({});
    await StoreSettings.deleteMany({});
    await User.deleteMany({});

    // Create Admin User
    await User.create({
      name: 'Admin User',
      email: 'admin@demo.com',
      password: 'admin123', // Will be hashed by pre-save hook
      role: 'owner'
    });

    // Create Store Settings
    await StoreSettings.create({
      storeName: 'Riya Footwear',
      tagline: 'Trendy Shoes at Wholesale Prices',
      whatsappNumber: '+919876543210',
      currency: { code: 'INR', symbol: '₹', position: 'before' },
      theme: { primaryColor: '#FF3D00', secondaryColor: '#212121', accentColor: '#FFD600' }
    });

    // Create Categories
    const cat1 = await Category.create({ name: 'Mens Shoes', slug: 'mens-shoes', isActive: true });
    const cat2 = await Category.create({ name: 'Womens Shoes', slug: 'womens-shoes', isActive: true });

    // Create Products
    await Product.create([
      {
        name: 'Nike Air Max 270',
        slug: 'nike-air-max-270',
        price: 4999,
        originalPrice: 7999,
        categoryId: cat1._id,
        images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff'],
        isFeatured: true,
        stock: 15,
        isActive: true
      },
      {
        name: 'Adidas Ultraboost',
        slug: 'adidas-ultraboost',
        price: 5999,
        originalPrice: 9999,
        categoryId: cat1._id,
        images: ['https://images.unsplash.com/photo-1587563871167-1ee9c731aefb'],
        isNewArrival: true,
        stock: 10,
        isActive: true
      }
    ]);

    console.log('Database seeded successfully!');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
