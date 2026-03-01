'use client';

import { useState } from 'react';

interface SalesProfitRecord {
  id: number;
  date: string;
  partyName: string;
  partyType: string;
  invoiceNo: string;
  transactionAmount: number;
  profitLoss: number;
}

const salesProfitData: SalesProfitRecord[] = [
  { id: 1, date: '01 Feb 2026', partyName: 'Rokomari Motsho Khamar', partyType: 'কাস্টমার', invoiceNo: '342259027333', transactionAmount: 400001.00, profitLoss: 391632.03 },
  { id: 2, date: '02 Feb 2026', partyName: 'Biman Poultry', partyType: 'কাস্টমার', invoiceNo: '333669850850', transactionAmount: 1294875.00, profitLoss: 1264368.09 },
  { id: 3, date: '05 Feb 2026', partyName: 'Kazi Feed', partyType: 'কাস্টমার', invoiceNo: '370369390990', transactionAmount: 1468201.70, profitLoss: 1465561.03 },
  { id: 4, date: '05 Feb 2026', partyName: 'Kazi Feed', partyType: 'কাস্টমার', invoiceNo: '327801930995', transactionAmount: 1468337.50, profitLoss: 1465695.63 },
  { id: 5, date: '05 Feb 2026', partyName: 'Kazi Feed', partyType: 'কাস্টমার', invoiceNo: '449985948544', transactionAmount: 1448782.30, profitLoss: 1446174.09 },
  { id: 6, date: '06 Feb 2026', partyName: 'Kazi Feed', partyType: 'কাস্টমার', invoiceNo: '257033051757', transactionAmount: 1024156.80, profitLoss: 1022352.27 },
  { id: 7, date: '06 Feb 2026', partyName: 'Kazi Feed', partyType: 'কাস্টমার', invoiceNo: '197898358611', transactionAmount: 951366.40, profitLoss: 949683.29 },
  { id: 8, date: '06 Feb 2026', partyName: 'Kazi Feed', partyType: 'কাস্টমার', invoiceNo: '875482743454', transactionAmount: 1413610.10, profitLoss: 1411066.81 },
  { id: 9, date: '06 Feb 2026', partyName: 'M.S Kashem Tred.', partyType: 'সাপ্লায়ার', invoiceNo: '970520102981', transactionAmount: 1500037.00, profitLoss: -373904.74 },
];

export default function SalesProfitLossPage() {
  const [partySearch, setPartySearch] = useState('');
  const [monthFilter, setMonthFilter] = useState('এই মাস');
  const [dateRange, setDateRange] = useState('01/02/2026 - 28/02/2026');

  const totalTransaction = salesProfitData.reduce((sum, s) => sum + s.transactionAmount, 0);
  const totalProfitLoss = salesProfitData.reduce((sum, s) => sum + s.profitLoss, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">রিপোর্টস / বিক্রয় অনুযায়ী লাভ ক্ষতি</h1>

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
              <th className="text-left px-4 py-3 text-xs font-semibold text-black w-10">ক্রম</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-black">তারিখ</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-black">পার্টি সমূহ</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-black">ইনভয়েস নং</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-black">লেনদেনের পরিমাণ</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-black">লাভ / ক্ষতি</th>
            </tr>
          </thead>
          <tbody>
            {salesProfitData.map((record, index) => (
              <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-black">{index + 1}</td>
                <td className="px-4 py-3 text-sm text-black">{record.date}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="text-black">{record.partyName}</div>
                  <div className="text-xs text-gray-400">{record.partyType}</div>
                </td>
                <td className="px-4 py-3 text-sm text-black">{record.invoiceNo}</td>
                <td className="px-4 py-3 text-sm text-right font-medium text-black">
                  ৳ {record.transactionAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
                <td className={`px-4 py-3 text-sm text-right font-medium ${record.profitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {record.profitLoss < 0 ? '- ' : ''}৳ {Math.abs(record.profitLoss).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 font-semibold">
              <td colSpan={4} className="px-4 py-3 text-sm"></td>
              <td className="px-4 py-3 text-sm text-right text-red-600">
                ৳ {totalTransaction.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </td>
              <td className={`px-4 py-3 text-sm text-right ${totalProfitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ৳ {totalProfitLoss.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
