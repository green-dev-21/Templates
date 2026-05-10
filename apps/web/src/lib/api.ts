import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the auth token
api.interceptors.request.use(
  (config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

export const storefrontApi = {
  getProducts: (params?: any) => api.get('/products', { params }),
  getProductBySlug: (slug: string) => api.get(`/products/${slug}`),
  getCategories: () => api.get('/categories'),
  getCategoryBySlug: (slug: string) => api.get(`/categories/${slug}`),
  getStoreSettings: () => api.get('/store/settings'),
  getBanners: () => api.get('/store/banners'),
  checkDelivery: (pincode: string) => api.post('/store/delivery-check', { pincode }),
  validateCoupon: (code: string) => api.post('/store/validate-coupon', { code }),
  createOrder: (orderData: any) => api.post('/store/order', orderData),
};

export const adminApi = {
  login: (credentials: any) => api.post('/auth/login', credentials),
  getMe: () => api.get('/auth/me'),

  // Products
  getProducts: (params?: any) => api.get('/admin/products', { params }),
  createProduct: (data: any) => api.post('/admin/products', data),
  updateProduct: (id: string, data: any) => api.put(`/admin/products/${id}`, data),
  deleteProduct: (id: string) => api.delete(`/admin/products/${id}`),

  // Categories
  getCategories: () => api.get('/admin/categories'),
  createCategory: (data: any) => api.post('/admin/categories', data),
  updateCategory: (id: string, data: any) => api.put(`/admin/categories/${id}`, data),
  deleteCategory: (id: string) => api.delete(`/admin/categories/${id}`),

  // Orders
  getOrders: (params?: any) => api.get('/admin/orders', { params }),
  updateOrderStatus: (id: string, status: string) => api.patch(`/admin/orders/${id}/status`, { status }),

  // Stats
  getStats: () => api.get('/admin/dashboard/stats'),

  // Settings
  getSettings: () => api.get('/admin/settings'),
  updateSettings: (data: any) => api.put('/admin/settings', data),

  // Banners
  getBanners: () => api.get('/admin/banners'),
  createBanner: (data: any) => api.post('/admin/banners', data),
  deleteBanner: (id: string) => api.delete(`/admin/banners/${id}`),
};
