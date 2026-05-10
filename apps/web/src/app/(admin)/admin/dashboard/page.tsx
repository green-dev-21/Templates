'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { adminApi } from '@/lib/api';
import { ShoppingBag, Users, Package, TrendingUp, Loader2 } from 'lucide-react';

export default function AdminDashboard() {
  const { data: response, isLoading } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: () => adminApi.getStats(),
  });

  const statsData = response?.data || {
    totalOrders: 0,
    totalRevenue: 0,
    totalCustomers: 0,
    lowStockCount: 0,
    recentOrders: []
  };

  const stats = [
    { name: "Total Orders", value: statsData.totalOrders, icon: ShoppingBag, color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: "Total Revenue", value: `₹${statsData.totalRevenue}`, icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-100' },
    { name: 'Total Customers', value: statsData.totalCustomers, icon: Users, color: 'text-purple-600', bg: 'bg-purple-100' },
    { name: 'Low Stock', value: statsData.lowStockCount, icon: Package, color: 'text-red-600', bg: 'bg-red-100' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome back, admin!</p>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.name} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className={`${stat.bg} ${stat.color} p-4 rounded-xl`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{stat.name}</p>
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Orders</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase">
                    <tr>
                      <th className="px-4 py-3">Order ID</th>
                      <th className="px-4 py-3">Customer</th>
                      <th className="px-4 py-3">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {statsData.recentOrders?.map((order: any) => (
                      <tr key={order._id}>
                        <td className="px-4 py-3 text-sm font-medium">#{order.orderId}</td>
                        <td className="px-4 py-3 text-sm">{order.customer?.name}</td>
                        <td className="px-4 py-3 text-sm font-bold">₹{order.totalAmount}</td>
                      </tr>
                    ))}
                    {(!statsData.recentOrders || statsData.recentOrders.length === 0) && (
                      <tr>
                        <td colSpan={3} className="px-4 py-10 text-center text-gray-500">No recent orders.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Store Health</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                   <span className="text-sm font-medium">Active Products</span>
                   <span className="font-bold">Check Catalog</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                   <span className="text-sm font-medium">Payment Options</span>
                   <span className="font-bold">Enabled</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
