'use client';

import { useState } from 'react';

interface SaleRecord {
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

const salesData: SaleRecord[] = [
  { id: 1, date: '01 Feb 2026', partyName: 'Rokomari Motsho Khamar', partyType: 'কাস্টমার', transactionType: 'Sales', quantity: 5815.30, vat: 0, discount: 0, totalPrice: 400001.00, grandTotal: 400001.00, due: 1.00 },
  { id: 2, date: '02 Feb 2026', partyName: 'Biman Poultry', partyType: 'কাস্টমার', transactionType: 'Sales', quantity: 21133.00, vat: 0, discount: 0, totalPrice: 1294875.00, grandTotal: 1294875.00, due: 1294875.00 },
  { id: 3, date: '05 Feb 2026', partyName: 'Kazi Feed', partyType: 'কাস্টমার', transactionType: 'Sales', quantity: 22375.00, vat: 0, discount: 0, totalPrice: 1468201.70, grandTotal: 1468201.70, due: 1468201.70 },
  { id: 4, date: '05 Feb 2026', partyName: 'Kazi Feed', partyType: 'কাস্টমার', transactionType: 'Sales', quantity: 22397.00, vat: 0, discount: 0, totalPrice: 1468337.50, grandTotal: 1468337.50, due: 1468337.50 },
  { id: 5, date: '05 Feb 2026', partyName: 'Kazi Feed', partyType: 'কাস্টমার', transactionType: 'Sales', quantity: 22129.00, vat: 0, discount: 0, totalPrice: 1448782.30, grandTotal: 1448782.30, due: 1448782.30 },
  { id: 6, date: '06 Feb 2026', partyName: 'Kazi Feed', partyType: 'কাস্টমার', transactionType: 'Sales', quantity: 15287.00, vat: 0, discount: 0, totalPrice: 1024156.80, grandTotal: 1024156.80, due: 1024156.80 },
  { id: 7, date: '06 Feb 2026', partyName: 'Kazi Feed', partyType: 'কাস্টমার', transactionType: 'Sales', quantity: 14265.00, vat: 0, discount: 0, totalPrice: 951366.40, grandTotal: 951366.40, due: 951366.40 },
  { id: 8, date: '06 Feb 2026', partyName: 'Kazi Feed', partyType: 'কাস্টমার', transactionType: 'Sales', quantity: 21571.00, vat: 0, discount: 0, totalPrice: 1413610.10, grandTotal: 1413610.10, due: 1413610.10 },
  { id: 9, date: '06 Feb 2026', partyName: 'M.S Kashem Tred.', partyType: 'সাপ্লায়ার', transactionType: 'Sales', quantity: 26073.00, vat: 0, discount: 0, totalPrice: 1500037.00, grandTotal: 1500037.00, due: 1500037.00 },
];

export default function SalesReportPage() {
  const [partySearch, setPartySearch] = useState('');
  const [sellerSearch, setSellerSearch] = useState('');
  const [monthFilter, setMonthFilter] = useState('এই মাস');
  const [dateRange, setDateRange] = useState('01/02/2026 - 28/02/2026');
  const [sourceFilter, setSourceFilter] = useState('উভয়');

  const totalQuantity = salesData.reduce((sum, s) => sum + s.quantity, 0);
  const totalVat = salesData.reduce((sum, s) => sum + s.vat, 0);
  const totalDiscount = salesData.reduce((sum, s) => sum + s.discount, 0);
  const totalPrice = salesData.reduce((sum, s) => sum + s.totalPrice, 0);
  const grandTotal = salesData.reduce((sum, s) => sum + s.grandTotal, 0);
  const totalDue = salesData.reduce((sum, s) => sum + s.due, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">রিপোর্টস / বিক্রয় রিপোর্ট</h1>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="পার্টি অনুসন্ধান"
          value={partySearch}
          onChange={(e) => setPartySearch(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
        />
        <input
          type="text"
          placeholder="বিক্রেতা অনুসন্ধান"
          value={sellerSearch}
          onChange={(e) => setSellerSearch(e.target.value)}
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
            {salesData.map((sale, index) => (
              <tr key={sale.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-3 py-3 text-sm text-black">{index + 1}</td>
                <td className="px-3 py-3 text-sm text-black">{sale.date}</td>
                <td className="px-3 py-3 text-sm">
                  <div className="text-black">{sale.partyName}</div>
                  <div className="text-xs text-gray-400">{sale.partyType}</div>
                </td>
                <td className="px-3 py-3 text-sm text-black">{sale.transactionType}</td>
                <td className="px-3 py-3 text-sm text-right text-black">{sale.quantity.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td className="px-3 py-3 text-sm text-right text-black">৳ {sale.vat.toFixed(2)}</td>
                <td className="px-3 py-3 text-sm text-right text-black">৳ {sale.discount.toFixed(2)}</td>
                <td className="px-3 py-3 text-sm text-right text-black">৳ {sale.totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td className="px-3 py-3 text-sm text-right text-black">৳ {sale.grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td className="px-3 py-3 text-sm text-right text-black">৳ {sale.due.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
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
