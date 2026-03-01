'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function StockTransactionPage() {
  const [activeTab, setActiveTab] = useState<'purchase' | 'sale'>('purchase');
  const [date, setDate] = useState('28-02-2026');
  const [items, setItems] = useState([
    { id: 1, name: 'Black Soybean', quantity: 1, price: '0.00', total: '0.00' },
    { id: 2, name: 'Charred Soybean', quantity: 0, price: '0.00', total: '0.00' },
    { id: 3, name: 'DOB', quantity: 0, price: '0.00', total: '527.00' },
    { id: 4, name: 'Large Jute Bag Empty', quantity: 0, price: '0.00', total: '4,900.00' },
    { id: 5, name: 'Large Jute Bag Fill', quantity: 0, price: '0.00', total: '770.00' },
    { id: 6, name: 'LC Soybean', quantity: 0, price: '0.00', total: '15,323.00' },
  ]);

  const updateItem = (id: number, field: string, value: string | number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  return (
    <div className="max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <Link href="/products" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>স্টক পরিবর্তন / স্টক ক্রয় / ক্রয়</span>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          {/* Tabs */}
          <div className="border-b border-gray-200 px-6">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('purchase')}
                className={`py-4 border-b-2 transition ${
                  activeTab === 'purchase'
                    ? 'border-purple-600 text-purple-600 font-medium'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                স্টক ক্রয়
              </button>
              <button
                onClick={() => setActiveTab('sale')}
                className={`py-4 border-b-2 transition ${
                  activeTab === 'sale'
                    ? 'border-purple-600 text-purple-600 font-medium'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                স্টক বিক্রি
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Date & Reference */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">স্টক পরিবর্তনের তারিখ</label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Items Table */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-semibold">ক্রয় আইটেম</h3>
                <button className="text-sm text-purple-600 hover:underline">+ নতুন পণ্য</button>
                <button className="text-sm text-purple-600 hover:underline">বিক্রয় মূল্য</button>
                <button className="text-sm text-purple-600 hover:underline">স্টক</button>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">#</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ক্রয় আইটেম</th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">পরিমাণ</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">মূল্য</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">মোট মূল্য</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">স্টক</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {items.map((item, index) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">{index + 1}</td>
                        <td className="px-4 py-3">
                          <input
                            type="text"
                            value={item.name}
                            onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                            className="w-full px-2 py-1 border border-gray-200 rounded focus:ring-1 focus:ring-purple-500 outline-none text-sm"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                            className="w-20 px-2 py-1 border border-gray-200 rounded text-center focus:ring-1 focus:ring-purple-500 outline-none text-sm"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="text"
                            value={item.price}
                            onChange={(e) => updateItem(item.id, 'price', e.target.value)}
                            className="w-24 px-2 py-1 border border-gray-200 rounded text-right focus:ring-1 focus:ring-purple-500 outline-none text-sm"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="text"
                            value={item.total}
                            className="w-24 px-2 py-1 border border-gray-200 rounded text-right focus:ring-1 focus:ring-purple-500 outline-none text-sm bg-gray-50"
                            readOnly
                          />
                        </td>
                        <td className="px-4 py-3 text-right text-sm"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-end mb-6">
              <div className="w-64 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">সর্বমোট মূল্য:</span>
                  <span className="font-bold">৳ 0.00</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex justify-between text-base font-bold">
                    <span>সর্বমোট মূল্য: ৳ 0.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
              <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition">
                সেভ ও নতুন
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-md hover:from-purple-600 hover:to-purple-700 transition">
                সেভ করুন
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
