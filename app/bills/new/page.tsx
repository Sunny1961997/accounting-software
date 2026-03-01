'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NewBillPage() {
  const [formData, setFormData] = useState({
    partyName: '',
    invoiceNo: '942485606215',
    invoiceDate: '28-02-2026',
    items: [{ id: 1, name: '', quantity: 1, price: 0, total: 0.00 }],
    paymentMethod: 'Cash',
    paymentAmount: 0,
    discount: 0,
    totalAmount: 0,
    paidAmount: 0,
    notes: ''
  });

  return (
    <div className="max-w-7xl">
      {/* Header */}
      <div className="mb-6">
        <Link href="/bills" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-black">বিক্রয় / নতুন বিক্রয়</span>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-black">নতুন বিক্রয়</h1>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition text-sm">
              ক্রয়
            </button>
            <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition text-sm">
              বিক্রয়
            </button>
          </div>
        </div>

        <form className="space-y-6">
          {/* Party & Invoice Details */}
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="block text-sm mb-2 text-black">পার্টি অনুসন্ধান</label>
              <input
                type="text"
                placeholder="পার্টি অনুসন্ধান"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
              />
              <p className="text-red-500 text-xs mt-1">পার্টি প্রয়োজন</p>
            </div>
            <div>
              <label className="block text-sm mb-2 text-black">ইনভয়েস নং</label>
              <input
                type="text"
                value={formData.invoiceNo}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-black">ইনভয়েসের তারিখ</label>
              <input
                type="text"
                value={formData.invoiceDate}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
                readOnly
              />
            </div>
          </div>

          {/* Items Table */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-semibold text-black">ক্রয় আইটেম ℹ️</h3>
            </div>
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-black">#</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-black">পরিমান</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-black">মূল্য</th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-black">মোট মূল্য</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3 text-sm text-black">1</td>
                  <td className="px-4 py-3">
                    <input
                      type="number"
                      defaultValue={1}
                      className="w-20 px-2 py-1 border border-gray-200 rounded text-center outline-none"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="number"
                      defaultValue={0}
                      className="w-24 px-2 py-1 border border-gray-200 rounded text-right outline-none"
                    />
                  </td>
                  <td className="px-4 py-3 text-right">0.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="font-semibold mb-3 text-black">পরিশোধের মাধ্যম: ℹ️</h3>
            <div className="flex items-center gap-3">
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none text-black">
                <option>Cash</option>
                <option>Bank</option>
                <option>Mobile Banking</option>
              </select>
              <input
                type="number"
                defaultValue={0}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none w-32 text-black"
              />
              <button type="button" className="p-2 text-purple-600 hover:bg-purple-50 rounded">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button type="button" className="p-2 text-purple-600 hover:bg-purple-50 rounded">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="flex justify-end">
            <div className="w-80 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">ডিসকাউন্ট ছাড়:</span>
                <span className="font-bold text-black">৳ 0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">মোট মূল্য:</span>
                <span className="font-bold text-black">৳ 0</span>
              </div>
              <div className="flex justify-between text-sm border-t pt-3">
                <span className="text-gray-600">সর্বমোট মূল্য:</span>
                <span className="font-bold text-black">৳ 0</span>
              </div>
              <div className="flex justify-between text-base font-bold pt-2">
                <span className="text-black">পেমেন্ট: ৳ 0.00</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-black">কর্তন</label>
            <textarea
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none text-black"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="sms" className="w-4 h-4" />
            <label htmlFor="sms" className="text-sm text-black">বিল এসএমএস পাঠান</label>
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
