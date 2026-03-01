'use client';

import { useState } from 'react';
import Link from 'next/link';

interface PurchaseRecord {
  id: number;
  billNo: string;
  date: string;
  partyName: string;
  partyType: string;
  quantity: number;
  price: number;
  due: number;
}

const purchaseData: PurchaseRecord[] = [
  { id: 1, billNo: '796920876965', date: '06 Feb 2026', partyName: 'Arafat Tred.', partyType: 'সাপ্লায়ার', quantity: 19156.00, price: 1155831.00, due: 1155831.00 },
  { id: 2, billNo: '948120944401', date: '05 Feb 2026', partyName: 'Zihad Tred.', partyType: 'সাপ্লায়ার', quantity: 16185.00, price: 877646.25, due: 877646.25 },
  { id: 3, billNo: '551910126932', date: '04 Feb 2026', partyName: 'Zihad Tred.', partyType: 'সাপ্লায়ার', quantity: 20784.00, price: 1126823.75, due: 1126823.75 },
  { id: 4, billNo: '941647988214', date: '04 Feb 2026', partyName: 'Rabbi Vushi', partyType: 'সাপ্লায়ার', quantity: 1501.00, price: 5860.00, due: 5860.00 },
  { id: 5, billNo: '305981560907', date: '04 Feb 2026', partyName: 'M.s Nazrul Tred.', partyType: 'সাপ্লায়ার', quantity: 7647.00, price: 427865.50, due: 427865.50 },
  { id: 6, billNo: '423607109412', date: '03 Feb 2026', partyName: 'Zihad Tred.', partyType: 'সাপ্লায়ার', quantity: 13188.00, price: 696924.00, due: 696924.00 },
  { id: 7, billNo: '272131056893', date: '03 Feb 2026', partyName: 'Rabbi Vushi', partyType: 'সাপ্লায়ার', quantity: 1146.00, price: 4500.00, due: 4500.00 },
  { id: 8, billNo: '518221563249', date: '03 Feb 2026', partyName: 'M.s Nazrul Tred.', partyType: 'সাপ্লায়ার', quantity: 23178.00, price: 1228662.00, due: 1228662.00 },
  { id: 9, billNo: '852016871102', date: '02 Feb 2026', partyName: 'Rabbi Vushi', partyType: 'সাপ্লায়ার', quantity: 1990.00, price: 7820.00, due: 7820.00 },
  { id: 10, billNo: '296028445628', date: '02 Feb 2026', partyName: 'Arafat Tred.', partyType: 'সাপ্লায়ার', quantity: 14285.00, price: 861000.00, due: 861000.00 },
  { id: 11, billNo: '200764331306', date: '01 Feb 2026', partyName: 'Rabbi Vushi', partyType: 'সাপ্লায়ার', quantity: 1682.00, price: 6600.00, due: 6600.00 },
  { id: 12, billNo: '002467666237', date: '01 Feb 2026', partyName: 'M.s Nazrul Tred.', partyType: 'সাপ্লায়ার', quantity: 11787.00, price: 624996.00, due: 624996.00 },
];

export default function PurchasePage() {
  const [partySearch, setPartySearch] = useState('');
  const [monthFilter, setMonthFilter] = useState('এই মাস');
  const [dateRange, setDateRange] = useState('01/02/2026 - 28/02/2026');

  const totalQuantity = purchaseData.reduce((sum, p) => sum + p.quantity, 0);
  const totalPrice = purchaseData.reduce((sum, p) => sum + p.price, 0);
  const totalDue = purchaseData.reduce((sum, p) => sum + p.due, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">ক্রয়</h1>

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
        <div className="ml-auto">
          <Link
            href="/dashboard/purchase/new"
            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-5 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition flex items-center gap-2 text-sm"
          >
            <span>+</span> নতুন ক্রয়
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-purple-50">
              <th className="text-left px-4 py-3 text-xs font-semibold text-black w-10">ক্রম</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-black">বিল নং</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-black">তারিখ</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-black">পার্টি সমূহ</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-black">পরিমাণ</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-black">মূল্য</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-black">বাকি</th>
            </tr>
          </thead>
          <tbody>
            {purchaseData.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-black">{index + 1}</td>
                <td className="px-4 py-3 text-sm text-black">{item.billNo}</td>
                <td className="px-4 py-3 text-sm text-black">{item.date}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="text-black">{item.partyName}</div>
                  <div className="text-xs text-gray-400">{item.partyType}</div>
                </td>
                <td className="px-4 py-3 text-sm text-right text-black">{item.quantity.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td className="px-4 py-3 text-sm text-right text-black">৳ {item.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td className="px-4 py-3 text-sm text-right text-black">৳ {item.due.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 font-semibold border-t-2 border-gray-300">
              <td colSpan={4} className="px-4 py-3 text-sm text-black">মোট</td>
              <td className="px-4 py-3 text-sm text-right text-red-600">{totalQuantity.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
              <td className="px-4 py-3 text-sm text-right text-red-600">৳ {totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
              <td className="px-4 py-3 text-sm text-right text-red-600">৳ {totalDue.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
