'use client';

import { useState } from 'react';

interface CashAdjRecord {
  id: number;
  date: string;
  type: string;
  note: string;
  amount: number;
}

const cashGaveData: CashAdjRecord[] = [
  { id: 1, date: '01 Feb 2026', type: 'ক্যাশ দিলাম', note: 'From mishu ubl-1770 to khaier acci-12', amount: 95000.00 },
  { id: 2, date: '06 Feb 2026', type: 'ক্যাশ দিলাম', note: 'From DMT 200494', amount: 10000.00 },
];

const cashTookData: CashAdjRecord[] = [];

export default function CashAdjustmentReportPage() {
  const [monthFilter, setMonthFilter] = useState('এই মাস');
  const [dateRange, setDateRange] = useState('01/02/2026 - 28/02/2026');

  const totalGave = cashGaveData.reduce((sum, e) => sum + e.amount, 0);
  const totalTook = cashTookData.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">রিপোর্টস / ক্যাশ সমন্বয়ের রিপোর্ট</h1>

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
      <div className="flex justify-end gap-3 mb-6">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          এক্সপোর্ট এক্সেল
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
          এক্সপোর্ট পিডিএফ
        </button>
      </div>

      {/* ক্যাশ দিলাম Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-black mb-3 border-b-2 border-purple-200 pb-2">ক্যাশ দিলাম</h2>
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-purple-50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-black w-10">ক্রম</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-black">তারিখ</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-black">ধরন</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-black">মন্তব্য</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-black">পরিমাণ</th>
              </tr>
            </thead>
            <tbody>
              {cashGaveData.length > 0 ? (
                cashGaveData.map((entry, index) => (
                  <tr key={entry.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-black">{index + 1}</td>
                    <td className="px-4 py-3 text-sm text-black">{entry.date}</td>
                    <td className="px-4 py-3 text-sm text-black">{entry.type}</td>
                    <td className="px-4 py-3 text-sm text-black">{entry.note}</td>
                    <td className="px-4 py-3 text-sm text-right font-medium text-black">
                      ৳ {entry.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-sm text-gray-400">
                    কোনো তথ্য নেই
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50 font-semibold">
                <td colSpan={4} className="px-4 py-3 text-sm text-right text-black">মোট ক্যাশ দিলাম</td>
                <td className="px-4 py-3 text-sm text-right text-purple-600">
                  ৳ {totalGave.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* ক্যাশ নিলাম Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-black mb-3 border-b-2 border-purple-200 pb-2">ক্যাশ নিলাম</h2>
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-purple-50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-black w-10">ক্রম</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-black">তারিখ</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-black">ধরন</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-black">মন্তব্য</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-black">পরিমাণ</th>
              </tr>
            </thead>
            <tbody>
              {cashTookData.length > 0 ? (
                cashTookData.map((entry, index) => (
                  <tr key={entry.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-black">{index + 1}</td>
                    <td className="px-4 py-3 text-sm text-black">{entry.date}</td>
                    <td className="px-4 py-3 text-sm text-black">{entry.type}</td>
                    <td className="px-4 py-3 text-sm text-black">{entry.note}</td>
                    <td className="px-4 py-3 text-sm text-right font-medium text-black">
                      ৳ {entry.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-sm text-gray-400">
                    কোনো তথ্য নেই
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50 font-semibold">
                <td colSpan={4} className="px-4 py-3 text-sm text-right text-black">মোট ক্যাশ নিলাম</td>
                <td className="px-4 py-3 text-sm text-right text-purple-600">
                  ৳ {totalTook.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
