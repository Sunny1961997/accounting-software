'use client';

import { useState } from 'react';

export default function DueCollectionPage() {
  const [partySearch, setPartySearch] = useState('');
  const [monthFilter, setMonthFilter] = useState('এই মাস');
  const [dateRange, setDateRange] = useState('01/02/2026 - 28/02/2026');

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">বিক্রয় / বাকি আদায়</h1>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="পার্টি অনুসন্ধান"
          value={partySearch}
          onChange={(e) => setPartySearch(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black w-56"
        />
        <select
          value={monthFilter}
          onChange={(e) => setMonthFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
        >
          <option>এই মাস</option>
          <option>গত মাস</option>
          <option>গত ৩ মাস</option>
        </select>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black w-64"
          />
          <span className="text-gray-400">📅</span>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition">
          খুঁজুন
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-purple-50">
              <th className="text-left px-4 py-3 text-xs font-semibold text-black w-10">ক্রম</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-black">তারিখ</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-black">পার্টি সমূহ</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-black">ইনভয়েস নং</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-black">পরিমাণ</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-black">মোট মূল্য</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6} className="px-4 py-8 text-center text-sm text-gray-400">
                কোনো বাকি আদায় তথ্য নেই
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 font-semibold border-t-2 border-gray-300">
              <td colSpan={4} className="px-4 py-3 text-sm text-black">মোট</td>
              <td className="px-4 py-3 text-sm text-right text-black">0.00</td>
              <td className="px-4 py-3 text-sm text-right text-black">৳ 0.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
