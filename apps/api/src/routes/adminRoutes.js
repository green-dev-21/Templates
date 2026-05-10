const express = require('express');
const router = express.Router();
const {
  getStats,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getOrders,
  updateOrderStatus,
  getStoreSettings,
  updateStoreSettings,
  getBanners,
  createBanner,
  deleteBanner
} = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/auth');

// All admin routes are protected
router.use(protect);
router.use(authorize('admin'));

router.get('/dashboard/stats', getStats);

router.route('/products')
  .get(getProducts)
  .post(createProduct);

router.route('/products/:id')
  .put(updateProduct)
  .delete(deleteProduct);

router.route('/categories')
  .get(getCategories)
  .post(createCategory);

router.route('/categories/:id')
  .put(updateCategory)
  .delete(deleteCategory);

router.get('/orders', getOrders);
router.patch('/orders/:id/status', updateOrderStatus);

router.route('/settings')
  .get(getStoreSettings)
  .put(updateStoreSettings);

router.route('/banners')
  .get(getBanners)
  .post(createBanner);

router.delete('/banners/:id', deleteBanner);

module.exports = router;
