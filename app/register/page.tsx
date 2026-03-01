'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [isCompany, setIsCompany] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    openingBalance: '0',
    balanceDate: '28-02-2026',
    email: '',
    address: ''
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        {/* Logo */}
        <div className="flex justify-end mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="6" cy="6" r="1.5" fill="currentColor" />
              <circle cx="18" cy="6" r="1.5" fill="currentColor" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              <circle cx="6" cy="18" r="1.5" fill="currentColor" />
              <circle cx="18" cy="18" r="1.5" fill="currentColor" />
              <path d="M6 6L6 18M18 6L18 18M6 6L18 6M6 18L18 18M12 6L12 18" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">রেজিস্ট্রেশন</h1>
        <p className="text-gray-600 mb-6">আপনার ব্যবসায়ীত তথ্য দিন করুন</p>

        {/* Form */}
        <form className="space-y-4">
          {/* নতুন পার্টি Section */}
          <div>
            <h3 className="font-semibold mb-3">নতুন পার্টি</h3>
            
            {/* Toggle: কাস্টমার / সাপ্লায়ার */}
            <div className="flex items-center gap-4 mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={!isCompany}
                  onChange={() => setIsCompany(false)}
                  className="w-4 h-4 text-purple-600"
                />
                <span>কাস্টমার</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative inline-block w-11 h-6">
                  <input
                    type="checkbox"
                    checked={isCompany}
                    onChange={(e) => setIsCompany(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-purple-600 transition-colors"></div>
                  <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-5"></div>
                </div>
                <span>সাপ্লায়ার</span>
              </label>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-sm mb-1">নাম</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">ফোন নম্বর</label>
                <input
                  type="text"
                  placeholder="017xxxxxxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
            <p className="text-red-500 text-xs mb-3">নাম অবশ্যই দিতে হবে</p>
          </div>

          {/* ব্যালেন্স Section */}
          <div>
            <h3 className="font-semibold mb-3">ব্যালেন্স</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm mb-1">আগের পাওনা ℹ️</label>
                <input
                  type="text"
                  value={formData.openingBalance}
                  onChange={(e) => setFormData({...formData, openingBalance: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">পাওনের তারিখ ℹ️</label>
                <input
                  type="text"
                  value={formData.balanceDate}
                  onChange={(e) => setFormData({...formData, balanceDate: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>

          {/* যোগাযোগের তথ্য Section */}
          <div>
            <h3 className="font-semibold mb-3">যোগাযোগের তথ্য</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm mb-1">ইমেইল</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">ঠিকানা</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
                />
              </div>
            </div>
          </div>

          {/* অন্যান্য Section */}
          <div>
            <h3 className="font-semibold mb-3">অন্যান্য</h3>
            <div>
              <label className="block text-sm mb-1">ডিস্কাউন্ট প্লান ℹ️</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* ছবি Section */}
          <div>
            <label className="block text-sm font-semibold mb-2">ছবি ℹ️</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition cursor-pointer">
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
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-md hover:from-purple-600 hover:to-purple-700 transition font-medium"
            >
              সেভ করুন
            </button>
            <button
              type="button"
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-50 transition font-medium"
            >
              সেভ ও নতুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
