import React from 'react';
import { MoreVertical, MessageCircle, Truck, CheckCircle2 } from 'lucide-react';

export default function AdminOrdersPage() {
  const columns = [
    { title: 'New', count: 3, color: 'border-blue-500' },
    { title: 'Confirmed', count: 2, color: 'border-purple-500' },
    { title: 'Packed', count: 1, color: 'border-yellow-500' },
    { title: 'Shipped', count: 4, color: 'border-orange-500' },
    { title: 'Delivered', count: 8, color: 'border-green-500' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <p className="text-gray-500">Track and manage your customer orders</p>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
        {columns.map((column) => (
          <div key={column.title} className="flex-shrink-0 w-80 space-y-4">
            <div className={`flex items-center justify-between p-4 bg-white rounded-xl border-l-4 ${column.color} shadow-sm`}>
              <h3 className="font-bold text-gray-900">{column.title}</h3>
              <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded-full">{column.count}</span>
            </div>

            <div className="space-y-3">
              {[1, 2].map((i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-3 group">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-gray-400">#WA-102{i}</span>
                    <button className="text-gray-300 hover:text-gray-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Customer Name</h4>
                    <p className="text-xs text-gray-500">2 Items • ₹1,499</p>
                  </div>
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-50">
                    <button className="flex-1 flex items-center justify-center gap-1 bg-green-50 text-green-600 py-2 rounded-lg text-[10px] font-bold uppercase hover:bg-green-100">
                      <MessageCircle className="w-3 h-3" />
                      Chat
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-1 bg-gray-50 text-gray-600 py-2 rounded-lg text-[10px] font-bold uppercase hover:bg-gray-100">
                      Next Step
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
