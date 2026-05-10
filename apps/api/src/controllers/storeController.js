const StoreSettings = require('../models/StoreSettings');
const DeliveryZone = require('../models/DeliveryZone');
const Coupon = require('../models/Coupon');
const Review = require('../models/Review');
const Order = require('../models/Order');

const getStoreSettings = async (req, res) => {
  try {
    const settings = await StoreSettings.findOne();
    res.json({ success: true, data: settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const checkDelivery = async (req, res) => {
  try {
    const { pincode, city } = req.body;
    let zone;
    if (pincode) {
      zone = await DeliveryZone.findOne({ pincodes: pincode, isActive: true });
    } else if (city) {
      zone = await DeliveryZone.findOne({ cities: city, isActive: true });
    }

    if (zone) {
      res.json({
        success: true,
        data: {
          available: true,
          zone: zone.name,
          charge: zone.deliveryCharge,
          freeAbove: zone.freeDeliveryAbove,
          estimatedDays: zone.estimatedDays
        }
      });
    } else {
      res.json({ success: true, data: { available: false } });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const validateCoupon = async (req, res) => {
  try {
    const { code, orderValue } = req.body;
    const coupon = await Coupon.findOne({ code, isActive: true });

    if (!coupon) {
      return res.status(404).json({ success: false, message: 'Invalid coupon code' });
    }

    if (coupon.expiresAt && coupon.expiresAt < new Date()) {
      return res.status(400).json({ success: false, message: 'Coupon expired' });
    }

    if (coupon.minOrderValue && orderValue < coupon.minOrderValue) {
      return res.status(400).json({ success: false, message: `Minimum order value for this coupon is ${coupon.minOrderValue}` });
    }

    res.json({ success: true, data: coupon });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const orderData = req.body;
    // Generate order number (simple example)
    const count = await Order.countDocuments();
    orderData.orderNumber = `WA-${Date.now()}-${count + 1}`;

    const order = await Order.create(orderData);
    res.status(201).json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const submitReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json({ success: true, data: review, message: 'Review submitted for approval' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.query.productId, isApproved: true });
    res.json({ success: true, data: reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getStoreSettings,
  checkDelivery,
  validateCoupon,
  createOrder,
  submitReview,
  getReviews
};
