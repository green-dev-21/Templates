const mongoose = require('mongoose');
const Product = require('../src/models/Product');
const Category = require('../src/models/Category');
const StoreSettings = require('../src/models/StoreSettings');
const User = require('../src/models/User');
const Banner = require('../src/models/Banner');
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
    await Banner.deleteMany({});

    // Create Admin User
    await User.create({
      name: 'Admin User',
      email: 'admin@demo.com',
      password: 'admin123',
      role: 'owner'
    });

    // Create Store Settings
    await StoreSettings.create({
      storeName: 'NicheCommerce Store',
      tagline: 'All your needs in one place',
      whatsappNumber: '919876543210',
      currency: { code: 'INR', symbol: '₹', position: 'before' },
      theme: { primaryColor: '#22c55e', secondaryColor: '#1e293b', accentColor: '#3b82f6' }
    });

    // Create Banners
    await Banner.create([
      { title: 'New Season Sale', imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8', isActive: true },
      { title: 'Gadgets Galore', imageUrl: 'https://images.unsplash.com/photo-1498049794561-7780e7231661', isActive: true }
    ]);

    // Create Categories for 8 Niches
    const niches = [
      { name: 'Shoes', slug: 'shoes' },
      { name: 'Fashion', slug: 'fashion' },
      { name: 'Electronics', slug: 'electronics' },
      { name: 'Grocery', slug: 'grocery' },
      { name: 'Beauty', slug: 'beauty' },
      { name: 'Home Decor', slug: 'home-decor' },
      { name: 'Toys', slug: 'toys' },
      { name: 'Pets', slug: 'pets' }
    ];

    const createdCategories = await Category.create(niches);

    // Create Products for each niche
    const products = [
      { name: 'Sporty Sneakers', price: 2999, originalPrice: 4999, categoryId: createdCategories[0]._id, slug: 'sporty-sneakers' },
      { name: 'Cotton T-Shirt', price: 999, originalPrice: 1499, categoryId: createdCategories[1]._id, slug: 'cotton-tshirt' },
      { name: 'Wireless Earbuds', price: 1999, originalPrice: 3999, categoryId: createdCategories[2]._id, slug: 'wireless-earbuds' },
      { name: 'Organic Apples', price: 200, originalPrice: 250, categoryId: createdCategories[3]._id, slug: 'organic-apples' },
      { name: 'Facial Serum', price: 899, originalPrice: 1299, categoryId: createdCategories[4]._id, slug: 'facial-serum' },
      { name: 'Modern Lamp', price: 1500, originalPrice: 2500, categoryId: createdCategories[5]._id, slug: 'modern-lamp' },
      { name: 'Action Figure', price: 499, originalPrice: 799, categoryId: createdCategories[6]._id, slug: 'action-figure' },
      { name: 'Dog Treats', price: 350, originalPrice: 450, categoryId: createdCategories[7]._id, slug: 'dog-treats' }
    ];

    await Product.create(products.map(p => ({
      ...p,
      images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e'],
      isFeatured: true,
      stock: 20,
      isActive: true
    })));

    console.log('Database seeded successfully with 8 niches!');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
