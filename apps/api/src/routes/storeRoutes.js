const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Category = require('../models/Category');
const Order = require('../models/Order');
const StoreSettings = require('../models/StoreSettings');
const Coupon = require('../models/Coupon');
const DeliveryZone = require('../models/DeliveryZone');
const Banner = require('../models/Banner');

// Get Store Settings
router.get('/settings', async (req, res) => {
  try {
    const settings = await StoreSettings.findOne();
    res.json({ success: true, data: settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get Banners (Public)
router.get('/banners', async (req, res) => {
  try {
    const banners = await Banner.find({ isActive: true });
    res.json({ success: true, data: banners });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Check Delivery
router.post('/delivery-check', async (req, res) => {
  try {
    const { pincode } = req.body;
    const zone = await DeliveryZone.findOne({
      $or: [
        { pincodes: pincode },
        { pincodeRanges: { $elemMatch: { min: { $lte: pincode }, max: { $gte: pincode } } } }
      ]
    });

    if (zone) {
      res.json({ success: true, available: true, deliveryFee: zone.deliveryFee });
    } else {
      res.json({ success: true, available: false });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Validate Coupon
router.post('/validate-coupon', async (req, res) => {
  try {
    const { code } = req.body;
    const coupon = await Coupon.findOne({ code, isActive: true });

    if (!coupon) {
      return res.status(404).json({ success: false, message: 'Invalid or expired coupon' });
    }

    res.json({ success: true, data: coupon });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Create Order
router.post('/order', async (req, res) => {
  try {
    const orderData = {
      ...req.body,
      orderId: 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase()
    };
    const order = await Order.create(orderData);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
