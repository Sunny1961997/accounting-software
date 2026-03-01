'use client';

import { useState } from 'react';
import Link from 'next/link';

interface SaleRecord {
  id: number;
  invoiceNo: string;
  date: string;
  partyName: string;
  partyType: string;
  quantity: number;
  totalPrice: number;
  grandTotal: number;
  due: number;
}

const salesData: SaleRecord[] = [
  { id: 1, invoiceNo: '970520102981', date: '06 Feb 2026', partyName: 'M.S Kashem Tred.', partyType: 'সাপ্লায়ার', quantity: 26073.00, totalPrice: 1500037.00, grandTotal: 1500037.00, due: 1500037.00 },
  { id: 2, invoiceNo: '875482743454', date: '06 Feb 2026', partyName: 'Kazi Feed', partyType: 'কাস্টমার', quantity: 21571.00, totalPrice: 1413610.10, grandTotal: 1413610.10, due: 1413610.10 },
  { id: 3, invoiceNo: '197898358611', date: '06 Feb 2026', partyName: 'Kazi Feed', partyType: 'কাস্টমার', quantity: 14265.00, totalPrice: 951366.40, grandTotal: 951366.40, due: 951366.40 },
  { id: 4, invoiceNo: '257033051757', date: '06 Feb 2026', partyName: 'Kazi Feed', partyType: 'কাস্টমার', quantity: 15287.00, totalPrice: 1024156.80, grandTotal: 1024156.80, due: 1024156.80 },
  { id: 5, invoiceNo: '449985948544', date: '05 Feb 2026', partyName: 'Kazi Feed', partyType: 'কাস্টমার', quantity: 22129.00, totalPrice: 1448782.30, grandTotal: 1448782.30, due: 1448782.30 },
  { id: 6, invoiceNo: '327801930995', date: '05 Feb 2026', partyName: 'Kazi Feed', partyType: 'কাস্টমার', quantity: 22397.00, totalPrice: 1468337.50, grandTotal: 1468337.50, due: 1468337.50 },
  { id: 7, invoiceNo: '370369390990', date: '05 Feb 2026', partyName: 'Kazi Feed', partyType: 'কাস্টমার', quantity: 22375.00, totalPrice: 1468201.70, grandTotal: 1468201.70, due: 1468201.70 },
  { id: 8, invoiceNo: '333669850850', date: '02 Feb 2026', partyName: 'Biman Poultry', partyType: 'কাস্টমার', quantity: 21133.00, totalPrice: 1294875.00, grandTotal: 1294875.00, due: 1294875.00 },
  { id: 9, invoiceNo: '342259027333', date: '01 Feb 2026', partyName: 'Rokomari Motsho Khamar', partyType: 'কাস্টমার', quantity: 5815.30, totalPrice: 400001.00, grandTotal: 400001.00, due: 1.00 },
];

export default function SalesPage() {
  const [partySearch, setPartySearch] = useState('');
  const [invoiceSearch, setInvoiceSearch] = useState('');
  const [monthFilter, setMonthFilter] = useState('এই মাস');
  const [dateRange, setDateRange] = useState('01/02/2026 - 28/02/2026');

  const totalQuantity = salesData.reduce((sum, s) => sum + s.quantity, 0);
  const totalPrice = salesData.reduce((sum, s) => sum + s.totalPrice, 0);
  const totalGrand = salesData.reduce((sum, s) => sum + s.grandTotal, 0);
  const totalDue = salesData.reduce((sum, s) => sum + s.due, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">বিক্রয়</h1>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="পার্টি অনুসন্ধান"
          value={partySearch}
          onChange={(e) => setPartySearch(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black w-56"
        />
        <input
          type="text"
          placeholder="ইনভয়েস নং"
          value={invoiceSearch}
          onChange={(e) => setInvoiceSearch(e.target.value)}
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
        <div className="ml-auto">
          <Link
            href="/dashboard/sales/new"
            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-5 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition flex items-center gap-2 text-sm"
          >
            <span>+</span> নতুন বিক্রয়
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-purple-50">
              <th className="text-left px-4 py-3 text-xs font-semibold text-black w-10">ক্রম</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-black">ইনভয়েস নং</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-black">তারিখ</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-black">পার্টি সমূহ</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-black">পরিমাণ</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-black">মোট মূল্য</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-black">সর্বমোট মূল্য</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-black">বাকি</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale, index) => (
              <tr key={sale.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-black">{index + 1}</td>
                <td className="px-4 py-3 text-sm text-black">{sale.invoiceNo}</td>
                <td className="px-4 py-3 text-sm text-black">{sale.date}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="text-black">{sale.partyName}</div>
                  <div className="text-xs text-gray-400">{sale.partyType}</div>
                </td>
                <td className="px-4 py-3 text-sm text-right text-black">{sale.quantity.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td className="px-4 py-3 text-sm text-right text-black">৳ {sale.totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td className="px-4 py-3 text-sm text-right text-black">৳ {sale.grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td className="px-4 py-3 text-sm text-right text-black">৳ {sale.due.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 font-semibold border-t-2 border-gray-300">
              <td colSpan={4} className="px-4 py-3 text-sm text-black">মোট</td>
              <td className="px-4 py-3 text-sm text-right text-red-600">{totalQuantity.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
              <td className="px-4 py-3 text-sm text-right text-red-600">৳ {totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
              <td className="px-4 py-3 text-sm text-right text-red-600">৳ {totalGrand.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
              <td className="px-4 py-3 text-sm text-right text-red-600">৳ {totalDue.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
