'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PurchaseReturnsPage() {
  const [partySearch, setPartySearch] = useState('');
  const [monthFilter, setMonthFilter] = useState('এই মাস');
  const [dateRange, setDateRange] = useState('01/02/2026 - 28/02/2026');

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">ক্রয় রিটার্ন</h1>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="পার্টি অনুসন্ধান"
          value={partySearch}
          onChange={(e) => setPartySearch(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black flex-1 min-w-[200px]"
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

      {/* Empty State */}
      <div className="bg-white rounded-lg shadow">
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-gray-500 text-lg mb-8">কোন তথ্য পাওয়া যায়নি</p>
          <div className="mb-6 relative">
            <svg className="w-24 h-24 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <svg className="w-16 h-16 text-yellow-400 absolute -top-4 -left-4 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
          </div>
          <Link
            href="/dashboard/purchase/returns/new"
            className="bg-gray-100 text-black px-6 py-2.5 rounded-lg hover:bg-gray-200 transition flex items-center gap-2 text-sm border border-gray-300"
          >
            <span>+</span> নতুন ক্রয় রিটার্ন
          </Link>
        </div>
      </div>
    </div>
  );
}
