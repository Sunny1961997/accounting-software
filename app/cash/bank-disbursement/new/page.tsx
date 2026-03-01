'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NewBankDisbursementPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Pubali Bank PLC');
  const [showAddBankModal, setShowAddBankModal] = useState(false);

  const paymentMethods = [
    { id: 'cash', name: 'Cash', icon: '💵' },
    { id: 'cheque', name: 'Cheque', icon: '📝' },
    { id: 'mobile-bank', name: 'মোবাইল ব্যাংক', icon: '📱', submenu: true },
    { id: 'bkash', name: 'bKash', icon: '💳', indent: true },
    { id: 'nagad', name: 'Nagad', icon: '🔴', indent: true },
    { id: 'rocket', name: 'Rocket', icon: '🚀', indent: true },
    { id: 'bank', name: 'ব্যাংক সমূহ', icon: '🏦', submenu: true },
  ];

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-6">
        <Link href="/cash/bank-disbursement" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-black">ব্যাংক পরিশোধ / নতুন অর্থ প্রদান</span>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-xl font-bold mb-6 text-black">ব্যাংক পরিশোধ</h1>

        <form className="space-y-6">
          {/* Payment Method Selection */}
          <div>
            <label className="block text-sm font-semibold mb-3 text-black">পরিশোধের মাধ্যম: ℹ️</label>
            <div className="border border-gray-300 rounded-md">
              <select 
                value={selectedPaymentMethod}
                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                className="w-full px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none rounded-md text-black"
              >
                <option value="Cash">💵 Cash</option>
                <option value="Cheque">📝 Cheque</option>
                <option value="bKash">💳 bKash</option>
                <option value="Nagad">🔴 Nagad</option>
                <option value="Rocket">🚀 Rocket</option>
                <option value="Pubali Bank PLC">🏦 Pubali Bank PLC</option>
              </select>
            </div>
            
            <div className="flex items-center gap-3 mt-3">
              <input
                type="number"
                defaultValue={0}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none text-black"
              />
              <button 
                type="button" 
                className="p-2 text-red-500 hover:bg-red-50 rounded"
                title="Delete"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button 
                type="button" 
                className="p-2 text-purple-600 hover:bg-purple-50 rounded"
                title="Add"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>

            {selectedPaymentMethod === 'Cheque' && (
              <div className="mt-3 space-y-2">
                <input
                  type="text"
                  placeholder="চেক নম্বর লিখুন"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none text-black"
                />
                <input
                  type="text"
                  placeholder="চেক ব্যাংকের নাম লিখুন"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none text-black"
                />
              </div>
            )}
          </div>

          {/* Invoice Details */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2 text-black">সিরিয়াল নং</label>
              <input
                type="text"
                value="533379726277"
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-black">পেমেন্ট তারিখ</label>
              <input
                type="text"
                value="28-02-2026"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
                readOnly
              />
            </div>
          </div>

          {/* Party Selection */}
          <div>
            <label className="block text-sm mb-2 text-black">পার্টি</label>
            <input
              type="text"
              placeholder="পার্টি অনুসন্ধান"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none text-black"
            />
            <p className="text-red-500 text-xs mt-1">পার্টি প্রয়োজন</p>
          </div>

          {/* Amount Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2 text-black">পিমাস</label>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">৳</span>
                <input
                  type="number"
                  defaultValue={0}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none text-black"
                />
              </div>
              <p className="text-red-500 text-xs mt-1">পরিমান অবশ্যই দিতে হবে</p>
            </div>

            <div>
              <label className="block text-sm mb-2 text-black">ডিসকাউন্ট</label>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">৳</span>
                <input
                  type="number"
                  defaultValue={0}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none text-black"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-black">মোট পরিশোধ</label>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">৳</span>
                <input
                  type="number"
                  defaultValue={0}
                  readOnly
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-black"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-black">অবশিষ্ট দেনা</label>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">৳</span>
                <input
                  type="number"
                  defaultValue={0}
                  readOnly
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-black"
                />
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-black">কর্তন</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none resize-none text-black"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
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
