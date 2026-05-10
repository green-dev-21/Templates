'use client';

import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { adminApi } from '@/lib/api';
import { Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function AdminOrdersPage() {
  const queryClient = useQueryClient();
  const { data: response, isLoading } = useQuery({
    queryKey: ['admin-orders'],
    queryFn: () => adminApi.getOrders(),
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) =>
      adminApi.updateOrderStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-orders'] });
      toast.success('Order status updated');
    }
  });

  const orders = response?.data?.data || [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <p className="text-gray-500">Manage customer orders</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase">
                <tr>
                  <th className="px-6 py-4">Order Number</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.map((order: any) => (
                  <tr key={order._id}>
                    <td className="px-6 py-4 font-medium">#{order.orderNumber}</td>
                    <td className="px-6 py-4">{order.customer?.name}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full uppercase">
                        {order.orderStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold">₹{order.total}</td>
                    <td className="px-6 py-4">
                      <select
                        className="text-xs border rounded p-1"
                        value={order.orderStatus}
                        onChange={(e) => updateStatusMutation.mutate({ id: order._id, status: e.target.value })}
                      >
                        <option value="new">New</option>
                        <option value="confirmed">Confirm</option>
                        <option value="shipped">Ship</option>
                        <option value="delivered">Deliver</option>
                        <option value="cancelled">Cancel</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
