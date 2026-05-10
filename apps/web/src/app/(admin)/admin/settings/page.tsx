import React from 'react';
import { Plus, Edit, Trash2, Globe, Palette, Bell, ShieldCheck } from 'lucide-react';

export default function AdminSettingsPage() {
  const sections = [
    { title: 'General Store Info', icon: Globe, description: 'Store name, logo, contact details, and social links.' },
    { title: 'Appearance & Theme', icon: Palette, description: 'Colors, fonts, and layout settings.' },
    { title: 'WhatsApp Integration', icon: Bell, description: 'WhatsApp number and automated message templates.' },
    { title: 'Payments & Security', icon: ShieldCheck, description: 'UPI IDs, bank details, and COD settings.' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500">Configure your store settings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <div key={section.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-primary transition-colors cursor-pointer group">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 text-gray-600 p-3 rounded-xl group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <section.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">{section.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{section.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
        <h2 className="text-lg font-bold text-gray-900">Quick Update</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Store Name</label>
            <input type="text" defaultValue="Riya Footwear" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">WhatsApp Number</label>
            <input type="text" defaultValue="+919876543210" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
          </div>
        </div>
        <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}
