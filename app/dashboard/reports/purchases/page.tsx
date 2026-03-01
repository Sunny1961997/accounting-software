'use client';

import { useState } from 'react';

interface PurchaseRecord {
  id: number;
  date: string;
  partyName: string;
  partyType: string;
  transactionType: string;
  quantity: number;
  vat: number;
  discount: number;
  totalPrice: number;
  grandTotal: number;
  due: number;
}

const purchaseData: PurchaseRecord[] = [
  { id: 1, date: '01 Feb 2026', partyName: 'M.s Nazrul Tred.', partyType: 'সাপ্লায়ার', transactionType: 'Purchase', quantity: 11787.00, vat: 0, discount: 0, totalPrice: 624996.00, grandTotal: 624996.00, due: 624996.00 },
  { id: 2, date: '01 Feb 2026', partyName: 'Rabbi Vushi', partyType: 'সাপ্লায়ার', transactionType: 'Purchase', quantity: 1682.00, vat: 0, discount: 0, totalPrice: 6600.00, grandTotal: 6600.00, due: 6600.00 },
  { id: 3, date: '02 Feb 2026', partyName: 'Arafat Tred.', partyType: 'সাপ্লায়ার', transactionType: 'Purchase', quantity: 14285.00, vat: 0, discount: 0, totalPrice: 861000.00, grandTotal: 861000.00, due: 861000.00 },
  { id: 4, date: '02 Feb 2026', partyName: 'Rabbi Vushi', partyType: 'সাপ্লায়ার', transactionType: 'Purchase', quantity: 1990.00, vat: 0, discount: 0, totalPrice: 7820.00, grandTotal: 7820.00, due: 7820.00 },
  { id: 5, date: '03 Feb 2026', partyName: 'M.s Nazrul Tred.', partyType: 'সাপ্লায়ার', transactionType: 'Purchase', quantity: 23178.00, vat: 0, discount: 0, totalPrice: 1228662.00, grandTotal: 1228662.00, due: 1228662.00 },
  { id: 6, date: '03 Feb 2026', partyName: 'Rabbi Vushi', partyType: 'সাপ্লায়ার', transactionType: 'Purchase', quantity: 1146.00, vat: 0, discount: 0, totalPrice: 4500.00, grandTotal: 4500.00, due: 4500.00 },
  { id: 7, date: '03 Feb 2026', partyName: 'Zihad Tred.', partyType: 'সাপ্লায়ার', transactionType: 'Purchase', quantity: 13188.00, vat: 0, discount: 0, totalPrice: 696924.00, grandTotal: 696924.00, due: 696924.00 },
  { id: 8, date: '04 Feb 2026', partyName: 'M.s Nazrul Tred.', partyType: 'সাপ্লায়ার', transactionType: 'Purchase', quantity: 7647.00, vat: 0, discount: 0, totalPrice: 427865.50, grandTotal: 427865.50, due: 427865.50 },
  { id: 9, date: '04 Feb 2026', partyName: 'Rabbi Vushi', partyType: 'সাপ্লায়ার', transactionType: 'Purchase', quantity: 1501.00, vat: 0, discount: 0, totalPrice: 5860.00, grandTotal: 5860.00, due: 5860.00 },
  { id: 10, date: '04 Feb 2026', partyName: 'Zihad Tred.', partyType: 'সাপ্লায়ার', transactionType: 'Purchase', quantity: 20784.00, vat: 0, discount: 0, totalPrice: 1126823.75, grandTotal: 1126823.75, due: 1126823.75 },
  { id: 11, date: '05 Feb 2026', partyName: 'Zihad Tred.', partyType: 'সাপ্লায়ার', transactionType: 'Purchase', quantity: 16185.00, vat: 0, discount: 0, totalPrice: 877646.25, grandTotal: 877646.25, due: 877646.25 },
  { id: 12, date: '06 Feb 2026', partyName: 'Arafat Tred.', partyType: 'সাপ্লায়ার', transactionType: 'Purchase', quantity: 19156.00, vat: 0, discount: 0, totalPrice: 1155831.00, grandTotal: 1155831.00, due: 1155831.00 },
];

export default function PurchaseReportPage() {
  const [partySearch, setPartySearch] = useState('');
  const [monthFilter, setMonthFilter] = useState('এই মাস');
  const [dateRange, setDateRange] = useState('01/02/2026 - 28/02/2026');
  const [sourceFilter, setSourceFilter] = useState('উভয়');

  const totalQuantity = purchaseData.reduce((sum, p) => sum + p.quantity, 0);
  const totalVat = purchaseData.reduce((sum, p) => sum + p.vat, 0);
  const totalDiscount = purchaseData.reduce((sum, p) => sum + p.discount, 0);
  const totalPrice = purchaseData.reduce((sum, p) => sum + p.totalPrice, 0);
  const grandTotal = purchaseData.reduce((sum, p) => sum + p.grandTotal, 0);
  const totalDue = purchaseData.reduce((sum, p) => sum + p.due, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">রিপোর্টস / ক্রয় রিপোর্ট</h1>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="পার্টি অনুসন্ধান"
          value={partySearch}
          onChange={(e) => setPartySearch(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
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
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
          />
          <span className="text-gray-400">📅</span>
        </div>
        <select
          value={sourceFilter}
          onChange={(e) => setSourceFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
        >
          <option>উভয়</option>
          <option>অনলাইন</option>
          <option>অফলাইন</option>
        </select>
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

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-purple-50">
              <th className="text-left px-3 py-3 text-xs font-semibold text-black w-10">ক্রম</th>
              <th className="text-left px-3 py-3 text-xs font-semibold text-black">তারিখ</th>
              <th className="text-left px-3 py-3 text-xs font-semibold text-black">পার্টি সমূহ</th>
              <th className="text-left px-3 py-3 text-xs font-semibold text-black">লেনদেনের ধরণ</th>
              <th className="text-right px-3 py-3 text-xs font-semibold text-black">পরিমাণ</th>
              <th className="text-right px-3 py-3 text-xs font-semibold text-black">ভ্যাট</th>
              <th className="text-right px-3 py-3 text-xs font-semibold text-black">ডিসকাউন্ট</th>
              <th className="text-right px-3 py-3 text-xs font-semibold text-black">সর্বমোট মূল্য</th>
              <th className="text-right px-3 py-3 text-xs font-semibold text-black">মোট মূল্য</th>
              <th className="text-right px-3 py-3 text-xs font-semibold text-black">বাকি</th>
            </tr>
          </thead>
          <tbody>
            {purchaseData.map((purchase, index) => (
              <tr key={purchase.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-3 py-3 text-sm text-black">{index + 1}</td>
                <td className="px-3 py-3 text-sm text-black">{purchase.date}</td>
                <td className="px-3 py-3 text-sm">
                  <div className="text-black">{purchase.partyName}</div>
                  <div className="text-xs text-gray-400">{purchase.partyType}</div>
                </td>
                <td className="px-3 py-3 text-sm text-black">{purchase.transactionType}</td>
                <td className="px-3 py-3 text-sm text-right text-black">{purchase.quantity.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td className="px-3 py-3 text-sm text-right text-black">৳ {purchase.vat.toFixed(2)}</td>
                <td className="px-3 py-3 text-sm text-right text-black">৳ {purchase.discount.toFixed(2)}</td>
                <td className="px-3 py-3 text-sm text-right text-black">৳ {purchase.totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td className="px-3 py-3 text-sm text-right text-black">৳ {purchase.grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td className="px-3 py-3 text-sm text-right text-black">৳ {purchase.due.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 font-semibold">
              <td colSpan={4} className="px-3 py-3 text-sm text-black">মোট</td>
              <td className="px-3 py-3 text-sm text-right text-black">{totalQuantity.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
              <td className="px-3 py-3 text-sm text-right text-black">৳ {totalVat.toFixed(2)}</td>
              <td className="px-3 py-3 text-sm text-right text-black">৳ {totalDiscount.toFixed(2)}</td>
              <td className="px-3 py-3 text-sm text-right text-black">৳ {totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
              <td className="px-3 py-3 text-sm text-right text-black">৳ {grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
              <td className="px-3 py-3 text-sm text-right text-black">৳ {totalDue.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
