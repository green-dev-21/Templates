import React from 'react';
import { Plus, Edit, Trash2, Ticket } from 'lucide-react';

export default function AdminCouponsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Coupons</h1>
          <p className="text-gray-500">Create and manage discount codes</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors">
          <Plus className="w-5 h-5" />
          Add Coupon
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['SAVE10', 'WELCOME20', 'FESTIVE50'].map((code) => (
          <div key={code} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4 group">
            <div className="flex justify-between items-start">
              <div className="bg-primary/10 text-primary p-3 rounded-xl font-bold">
                {code}
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">10% OFF on all items</h3>
              <p className="text-sm text-gray-500">Min Order: ₹999 • Expires: 31 Dec 2024</p>
            </div>
            <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400 font-bold uppercase tracking-wider">
              <span>Used 42 times</span>
              <span className="text-green-600 bg-green-100 px-2 py-1 rounded">Active</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
