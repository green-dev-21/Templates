import React from 'react';
import { Search, Mail, Phone, MessageCircle, MoreVertical } from 'lucide-react';

export default function AdminCustomersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
        <p className="text-gray-500">View and manage your customer list</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Total Orders</th>
                <th className="px-6 py-4">Total Spent</th>
                <th className="px-6 py-4">Last Order</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                        JD
                      </div>
                      <div>
                        <span className="font-medium text-gray-900 block">John Doe</span>
                        <span className="text-xs text-gray-500">Mumbai, India</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-green-100 hover:text-green-600 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                        <Phone className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">12</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-bold">₹18,499</td>
                  <td className="px-6 py-4 text-sm text-gray-500">2 days ago</td>
                  <td className="px-6 py-4">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
