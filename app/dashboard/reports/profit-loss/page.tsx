'use client';

import { useState } from 'react';

interface ProfitLossItem {
  label: string;
  sign: string;
  amount: number;
  highlight?: boolean;
}

const profitLossData: ProfitLossItem[] = [
  { label: 'বিক্রয় (+)', sign: '+', amount: 10969367.80 },
  { label: 'বিক্রি রিটার্ন (-)', sign: '-', amount: 0 },
  { label: 'ক্রয় (-)', sign: '-', amount: 0 },
  { label: 'ক্রয় রিটার্ন (+)', sign: '+', amount: 0 },
  { label: 'ভ্যাট (+)', sign: '+', amount: 0 },
  { label: 'স্টক মূল্য (-)', sign: '-', amount: 0 },
  { label: 'বাকী আদায়ের ডিসকাউন্ট (-)', sign: '-', amount: 64743.75 },
  { label: 'বাকী পরিশোধের ডিসকাউন্ট (+)', sign: '+', amount: 813.00 },
  { label: 'খরচ (-)', sign: '-', amount: 552616.00 },
];

export default function ProfitLossPage() {
  const [monthFilter, setMonthFilter] = useState('এই মাস');
  const [dateRange, setDateRange] = useState('01/02/2026 - 28/02/2026');

  const totalProfit = profitLossData.reduce((sum, item) => {
    if (item.sign === '+') return sum + item.amount;
    return sum - item.amount;
  }, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">রিপোর্টস / লাভ / ক্ষতি</h1>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
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
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
          />
          <span className="text-gray-400">📅</span>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition">
          খুঁজুন
        </button>
      </div>

      {/* Export Buttons */}
      <div className="flex justify-end gap-3 mb-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          এক্সপোর্ট এক্সেল
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
          এক্সপোর্ট পিডিএফ
        </button>
      </div>

      {/* Profit/Loss Statement */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-black">Particulars</span>
            <span className="text-sm font-semibold text-black">Amount</span>
          </div>
        </div>
        <div>
          {profitLossData.map((item, index) => (
            <div
              key={item.label}
              className={`flex items-center justify-between px-6 py-4 border-b border-gray-100 ${
                index % 2 === 1 ? 'bg-gray-50' : ''
              }`}
            >
              <span className="text-sm text-black">{item.label}</span>
              <span className="text-sm text-black font-medium">
                ৳ {item.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </span>
            </div>
          ))}
          {/* Total */}
          <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t-2 border-gray-300">
            <span className="text-sm font-bold text-black">মোট লাভ</span>
            <span className={`text-sm font-bold ${totalProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ৳ {totalProfit.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
