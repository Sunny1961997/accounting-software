'use client';

import { useState } from 'react';

export default function StockPage() {
  const [activeTab, setActiveTab] = useState('stock-in');
  const [formData, setFormData] = useState({
    type: 'purchase',
    name: '',
    code: '',
    purchasePrice: '0',
    salePrice: '0',
    quantity: '0',
    image: null
  });

  const products = [
    { name: 'Black Soybean', price: '৳0.00', quantity: '0.00' },
    { name: 'Charred Soybean', price: '৳0.00', quantity: '0.00' },
    { name: 'DOB', price: '৳0.00', quantity: '527.00' },
    { name: 'Large Jute Bag Empty', price: '৳0.00', quantity: '4,900.00' },
    { name: 'Large Jute Bag Fill', price: '৳0.00', quantity: '770.00' },
    { name: 'LC Soybean', price: '৳0.00', quantity: '15,323.00' },
  ];

  return (
    <div className="max-w-6xl">
      <h1 className="text-2xl font-bold mb-6">স্টক পরিবর্তন / স্টক হ্রাস / স্টক বৃদ্ধি</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('stock-in')}
          className={`px-6 py-2 rounded-lg font-medium ${
            activeTab === 'stock-in'
              ? 'bg-purple-600 text-white'
              : 'bg-white text-gray-700 border'
          }`}
        >
          স্টক হ্রাস
        </button>
        <button
          onClick={() => setActiveTab('stock-out')}
          className={`px-6 py-2 rounded-lg font-medium ${
            activeTab === 'stock-out'
              ? 'bg-purple-600 text-white'
              : 'bg-white text-gray-700 border'
          }`}
        >
          স্টক বৃদ্ধি
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Left - Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">নতুন পণ্য</h2>
            <label className="flex items-center gap-2">
              <span className="text-sm">সক্রিয়:</span>
              <input type="checkbox" className="toggle" defaultChecked />
            </label>
          </div>

          <form className="space-y-4">
            {/* Type Selection */}
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value="purchase"
                  checked={formData.type === 'purchase'}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-4 h-4 text-purple-600"
                />
                <span>পণ্য</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value="service"
                  checked={formData.type === 'service'}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-4 h-4 text-purple-600"
                />
                <span>সেবা</span>
              </label>
            </div>

            {/* Name and Code */}
            <div>
              <label className="block text-sm font-medium mb-1">নাম</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">কোড ℹ</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                  placeholder="ex: PS-101"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
                />
                <button type="button" className="px-4 py-2 bg-purple-100 text-purple-600 rounded-md">
                  📋
                </button>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h3 className="font-bold mb-3">মূল্য নির্ধারণ</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">ক্রয় মূল্য ℹ</label>
                  <input
                    type="number"
                    value={formData.purchasePrice}
                    onChange={(e) => setFormData({ ...formData, purchasePrice: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">বিক্রয় মূল্য ℹ</label>
                  <input
                    type="number"
                    value={formData.salePrice}
                    onChange={(e) => setFormData({ ...formData, salePrice: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Stock */}
            <div>
              <h3 className="font-bold mb-3">স্টক</h3>
              <div>
                <label className="block text-sm font-medium mb-1">আসল পরিমাণ ℹ</label>
                <input
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>
            </div>

            {/* Image */}
            <div>
              <label className="block text-sm font-medium mb-1">ছবি ℹ</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xl">🖼️</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                type="button"
                className="flex-1 px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                সেভ ও নতুন
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                সেভ করুন
              </button>
            </div>
          </form>
        </div>

        {/* Right - Product List */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold">স্টক পরিবর্তনের তারিখ</h3>
              <p className="text-sm text-gray-600">28-02-2026</p>
            </div>
          </div>

          {/* Selected Products Table */}
          <div className="mb-6">
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <div className="grid grid-cols-4 gap-4 text-sm font-medium mb-2">
                <div>#</div>
                <div>আইটেম আইডেন্টিফায়ার</div>
                <div>পরিমাণ</div>
                <div>মূল্য</div>
                <div>মোট মূল্য</div>
                <div>মূল্য</div>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <input type="text" placeholder="পণ্য আবস্যাইম" className="flex-1 px-3 py-2 border rounded" />
                <button className="text-purple-600">বিবেচ্য মূল্য</button>
                <button className="text-purple-600">স্টক</button>
              </div>
            </div>

            {/* Product Items */}
            <div className="space-y-2">
              {products.slice(0, 6).map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="text-sm">{product.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm">{product.price}</span>
                    <span className="text-sm">{product.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">সর্বমোট মূল্য:</span>
              <span className="text-xl font-bold">৳ 0.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
