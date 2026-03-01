'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NewPartyPage() {
  const [isSupplier, setIsSupplier] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    code: '',
    purchasePrice: '0',
    salePrice: '0',
    stockQuantity: '0',
    image: ''
  });

  return (
    <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-6">
          <Link href="/parties" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>পার্টি সমূহ / নতুন পার্টি</span>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-xl font-bold mb-6">নতুন পণ্য</h1>

          <form className="space-y-6">
            {/* পণ্য / সেবা Toggle */}
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={!isSupplier}
                  onChange={() => setIsSupplier(false)}
                  className="w-4 h-4 text-purple-600"
                />
                <span>পণ্য</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={isSupplier}
                  onChange={() => setIsSupplier(true)}
                  className="w-4 h-4 text-purple-600"
                />
                <span>সেবা</span>
              </label>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-sm">সক্রিয়:</span>
                <div className="relative inline-block w-11 h-6">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-purple-600 transition-colors"></div>
                  <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-5"></div>
                </div>
              </div>
            </div>

            {/* Name & Code */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">নাম</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />
                <p className="text-red-500 text-xs mt-1">নাম অবশ্যই দিতে হবে</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  কোড ℹ️
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="ex: PS-101"
                    value={formData.code}
                    onChange={(e) => setFormData({...formData, code: e.target.value})}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                  <button
                    type="button"
                    className="p-2 border border-purple-500 text-purple-600 rounded-md hover:bg-purple-50"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* মূল্য নির্ধারণ */}
            <div>
              <h3 className="font-semibold mb-3">মূল্য নির্ধারণ</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">ক্রয় মূল্য ℹ️</label>
                  <input
                    type="text"
                    value={formData.purchasePrice}
                    onChange={(e) => setFormData({...formData, purchasePrice: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">বিক্রয় মূল্য ℹ️</label>
                  <input
                    type="text"
                    value={formData.salePrice}
                    onChange={(e) => setFormData({...formData, salePrice: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            {/* স্টক */}
            <div>
              <h3 className="font-semibold mb-3">স্টক</h3>
              <div>
                <label className="block text-sm mb-2">আগের মজুদ ℹ️</label>
                <input
                  type="text"
                  value={formData.stockQuantity}
                  onChange={(e) => setFormData({...formData, stockQuantity: e.target.value})}
                  className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* ছবি */}
            <div>
              <label className="block text-sm font-semibold mb-2">ছবি ℹ️</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-purple-400 transition cursor-pointer max-w-sm">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition"
              >
                সেভ ও নতুন
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-md hover:from-purple-600 hover:to-purple-700 transition"
              >
                সেভ করুন
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}
