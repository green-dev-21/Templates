'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { MessageCircle } from 'lucide-react';
import { storefrontApi } from '@/lib/api';
import { buildWhatsAppMessage, redirectToWhatsApp } from '@/lib/whatsapp';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function OrderPage() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'UPI',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    setLoading(true);
    try {
      const orderData = {
        customer: formData,
        items: items.map(item => ({
          product: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          variant: item.variant,
        })),
        totalAmount: total,
        paymentMethod: formData.paymentMethod,
      };

      const response = await storefrontApi.createOrder(orderData);
      const order = response.data;

      toast.success('Order created successfully!');

      // Build WhatsApp message and redirect
      const message = buildWhatsAppMessage({
        orderId: order.orderId,
        items: order.items,
        total: order.totalAmount,
        customer: order.customer,
        paymentMethod: order.paymentMethod,
      });

      // We'd get the store phone from settings, but hardcoding for now
      const storePhone = '919876543210';

      redirectToWhatsApp(storePhone, message);

      clearCart();
      router.push('/');
    } catch (error: any) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Shipping Details</h1>
        <p className="text-gray-500 mt-1">Please provide your details to place the order.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Full delivery address"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary h-24"
            required
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Your city"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Postal code"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <h2 className="text-lg font-bold text-gray-900">Select Payment Method</h2>
          <div className="grid grid-cols-1 gap-3">
            {[
              { id: 'UPI', label: 'UPI / QR' },
              { id: 'COD', label: 'Cash on Delivery' },
              { id: 'BANK', label: 'Bank Transfer' }
            ].map((method) => (
              <label key={method.id} className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-primary transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.id}
                  className="w-4 h-4 text-primary"
                  checked={formData.paymentMethod === method.id}
                  onChange={handleChange}
                />
                <span className="ml-3 font-medium">{method.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
          <p className="text-sm text-gray-600">
            <span className="font-bold">Total Payable: </span>
            <span className="text-lg font-bold text-primary">₹{total}</span>
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition-colors disabled:bg-gray-400"
        >
          <MessageCircle className="w-5 h-5" />
          {loading ? 'Processing...' : 'Send Order on WhatsApp'}
        </button>
      </form>
    </div>
  );
}
