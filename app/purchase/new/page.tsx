'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NewPurchasePage() {
  return (
    <div className="max-w-7xl">
      {/* Header */}
      <div className="mb-6">
        <Link href="/purchase" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-black">ক্রয় / নতুন ক্রয়</span>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-xl font-bold mb-6 text-black">নতুন ক্রয়</h1>

        <form className="space-y-6">
          {/* Party & Invoice Details */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm mb-2 text-black">পার্টি অনুসন্ধান</label>
              <input
                type="text"
                placeholder="পার্টি অনুসন্ধান"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none text-black"
              />
              <p className="text-red-500 text-xs mt-1">পার্টি প্রয়োজন</p>
            </div>
            <div>
              <label className="block text-sm mb-2 text-black">বিল নং</label>
              <input
                type="text"
                value="378614917888"
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-black">বিলের তারিখ</label>
              <input
                type="text"
                value="28-02-2026"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
                readOnly
              />
            </div>
          </div>

          {/* Items Table */}
          <div>
            <h3 className="font-semibold mb-3 text-black">ক্রয় আইটেম</h3>
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
                    <input type="number" defaultValue={1} className="w-20 px-2 py-1 border rounded text-center text-black" />
                  </td>
                  <td className="px-4 py-3">
                    <input type="number" defaultValue={0} className="w-24 px-2 py-1 border rounded text-right text-black" />
                  </td>
                  <td className="px-4 py-3 text-right text-black">0</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="font-semibold mb-3 text-black">পরিশোধের মাধ্যম: ℹ️</h3>
            <div className="flex items-center gap-3">
              <select className="px-4 py-2 border rounded text-black">
                <option>Cash</option>
              </select>
              <input type="number" defaultValue={0} className="px-4 py-2 border rounded w-32 text-black" />
              <button type="button" className="p-2 text-purple-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button type="button" className="p-2 text-purple-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="flex justify-end">
            <div className="w-80 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-black">মোট মূল্য:</span>
                <span className="font-bold text-black">৳ 0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-black">সর্বমোট মূল্য:</span>
                <span className="font-bold text-black">৳ 0.00</span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t">
                <span className="text-black">পিমাস: ৳ 0.00</span>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-black">কর্তন</label>
            <textarea rows={3} className="w-full px-4 py-2 border rounded outline-none text-black" />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button type="button" className="px-6 py-2 border rounded hover:bg-gray-50 text-black">
              সেভ ও নতুন
            </button>
            <button type="submit" className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              সেভ করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
