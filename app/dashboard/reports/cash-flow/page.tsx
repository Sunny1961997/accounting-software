'use client';

import { useState } from 'react';

interface CashEntry {
  id: number;
  date: string;
  party: string;
  partyType?: string;
  category?: string;
  transactionType: string;
  amount: number;
}

const cashInData: CashEntry[] = [
  { id: 1, date: '01 Feb 2026', party: 'পার্টি নেই', transactionType: 'Bank Withdrawal', amount: 700000.00 },
  { id: 2, date: '01 Feb 2026', party: 'পার্টি নেই', transactionType: 'Cash Add', amount: 95000.00 },
  { id: 3, date: '01 Feb 2026', party: 'Rokomari Motsho Khamar', partyType: 'কাস্টমার', transactionType: 'Sales', amount: 400000.00 },
  { id: 4, date: '03 Feb 2026', party: 'পার্টি নেই', transactionType: 'Bank Withdrawal', amount: 1900000.00 },
  { id: 5, date: '05 Feb 2026', party: 'পার্টি নেই', transactionType: 'Bank Withdrawal', amount: 2700000.00 },
  { id: 6, date: '05 Feb 2026', party: 'পার্টি নেই', transactionType: 'Bank Withdrawal', amount: 300.00 },
  { id: 7, date: '06 Feb 2026', party: 'পার্টি নেই', transactionType: 'Cash Add', amount: 10000.00 },
  { id: 8, date: '15 Feb 2026', party: 'Biman Poultry', partyType: 'কাস্টমার', transactionType: 'Payment In', amount: 1230132.00 },
];

const cashOutData: CashEntry[] = [
  { id: 1, date: '01 Feb 2026', party: 'Arafat Tred', partyType: 'সাপ্লায়ার', transactionType: 'Payment Out', amount: 700000.00 },
  { id: 2, date: '01 Feb 2026', party: '', category: 'Haidergonj Cash', transactionType: 'Expense', amount: 95000.00 },
  { id: 3, date: '01 Feb 2026', party: '', category: 'Four man food', transactionType: 'Expense', amount: 1000.00 },
  { id: 4, date: '01 Feb 2026', party: '', category: 'Bike', transactionType: 'Expense', amount: 300.00 },
  { id: 5, date: '01 Feb 2026', party: '', transactionType: 'Expense', amount: 60.00 },
  { id: 6, date: '01 Feb 2026', party: '', transactionType: 'Expense', amount: 11646.00 },
  { id: 7, date: '01 Feb 2026', party: '', category: 'pump', transactionType: 'Expense', amount: 6120.00 },
  { id: 8, date: '01 Feb 2026', party: '', category: 'Factory Expense', transactionType: 'Expense', amount: 1690.00 },
  { id: 9, date: '03 Feb 2026', party: 'পার্টি নেই', transactionType: 'Bank Deposit', amount: 323000.00 },
  { id: 10, date: '03 Feb 2026', party: 'M.s Nazrul Tred', partyType: 'সাপ্লায়ার', transactionType: 'Payment Out', amount: 1300000.00 },
  { id: 11, date: '03 Feb 2026', party: 'Opi Bitan Tred', partyType: 'সাপ্লায়ার', transactionType: 'Payment Out', amount: 30000.00 },
  { id: 12, date: '03 Feb 2026', party: 'Marman Tred', partyType: 'সাপ্লায়ার', transactionType: 'Payment Out', amount: 37000.00 },
  { id: 13, date: '03 Feb 2026', party: '', category: 'Dhaka cash', transactionType: 'Expense', amount: 400000.00 },
  { id: 14, date: '03 Feb 2026', party: '', category: 'Factory Expense', transactionType: 'Expense', amount: 6200.00 },
  { id: 15, date: '04 Feb 2026', party: '', category: 'Factory Expense', transactionType: 'Expense', amount: 1000.00 },
  { id: 16, date: '05 Feb 2026', party: 'M.S Kashem Tred', partyType: 'সাপ্লায়ার', transactionType: 'Payment Out', amount: 1500000.00 },
  { id: 17, date: '05 Feb 2026', party: 'Marman Tred', partyType: 'সাপ্লায়ার', transactionType: 'Payment Out', amount: 700000.00 },
  { id: 18, date: '05 Feb 2026', party: 'M.s Nazrul Tred', partyType: 'সাপ্লায়ার', transactionType: 'Payment Out', amount: 300000.00 },
  { id: 19, date: '05 Feb 2026', party: 'Garo Vendor(KG)', partyType: 'সাপ্লায়ার', transactionType: 'Payment Out', amount: 100000.00 },
  { id: 20, date: '05 Feb 2026', party: 'Rabbi Vushi', partyType: 'সাপ্লায়ার', transactionType: 'Payment Out', amount: 16000.00 },
  { id: 21, date: '05 Feb 2026', party: '', category: 'Banking', transactionType: 'Expense', amount: 300.00 },
  { id: 22, date: '05 Feb 2026', party: '', category: 'Factory Expense', transactionType: 'Expense', amount: 28000.00 },
  { id: 23, date: '06 Feb 2026', party: '', category: 'Factory Expense', transactionType: 'Expense', amount: 1300.00 },
];

export default function CashFlowPage() {
  const [monthFilter, setMonthFilter] = useState('এই মাস');
  const [dateRange, setDateRange] = useState('01/02/2026 - 28/02/2026');
  const [showLoader, setShowLoader] = useState(false);
  const [showAllData, setShowAllData] = useState(false);

  const totalCashIn = cashInData.reduce((sum, e) => sum + e.amount, 0);
  const totalCashOut = cashOutData.reduce((sum, e) => sum + e.amount, 0);
  const handCashBefore = 26649.00;
  const handCashNow = handCashBefore + totalCashIn - totalCashOut;

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">রিপোর্টস / ক্যাশ বিবরণী/ক্যাশ ফ্লো</h1>

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
        <label className="flex items-center gap-2 ml-4">
          <input type="checkbox" checked={showAllData} onChange={(e) => setShowAllData(e.target.checked)} className="rounded" />
          <span className="text-sm text-black">সব তথ্য দেখুন</span>
        </label>
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

      {/* Hand Cash Before */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-black">
          হাতে ক্যাশ ছিল: <span className="text-purple-600">৳ {handCashBefore.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
        </p>
      </div>

      {/* ক্যাশ জমা Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-black mb-3 border-b-2 border-purple-200 pb-2">ক্যাশ জমা</h2>
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-purple-50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-black w-10">ক্রম</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-black">লেনদেন তারিখ</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-black">পার্টি</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-black">লেনদেনের ধরণ</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-black">মূল্য</th>
              </tr>
            </thead>
            <tbody>
              {cashInData.map((entry, index) => (
                <tr key={entry.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-black">{index + 1}</td>
                  <td className="px-4 py-3 text-sm text-black">{entry.date}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="text-black">{entry.party || '-'}</div>
                    {entry.partyType && <div className="text-xs text-gray-400">{entry.partyType}</div>}
                  </td>
                  <td className="px-4 py-3 text-sm text-black">{entry.transactionType}</td>
                  <td className="px-4 py-3 text-sm text-right font-medium text-black">
                    ৳ {entry.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50 font-semibold">
                <td colSpan={4} className="px-4 py-3 text-sm text-right text-black">মোট ক্যাশ জমা</td>
                <td className="px-4 py-3 text-sm text-right text-purple-600">
                  ৳ {totalCashIn.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* ক্যাশ খরচ Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-black mb-3 border-b-2 border-purple-200 pb-2">ক্যাশ খরচ</h2>
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-purple-50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-black w-10">ক্রম</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-black">লেনদেন তারিখ</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-black">পার্টি</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-black">ক্যাটাগরি</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-black">লেনদেনের ধরণ</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-black">মূল্য</th>
              </tr>
            </thead>
            <tbody>
              {cashOutData.map((entry, index) => (
                <tr key={entry.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-black">{index + 1}</td>
                  <td className="px-4 py-3 text-sm text-black">{entry.date}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="text-black">{entry.party || '-'}</div>
                    {entry.partyType && <div className="text-xs text-gray-400">{entry.partyType}</div>}
                  </td>
                  <td className="px-4 py-3 text-sm text-black">{entry.category || '-'}</td>
                  <td className="px-4 py-3 text-sm text-black">{entry.transactionType}</td>
                  <td className="px-4 py-3 text-sm text-right font-medium text-black">
                    ৳ {entry.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50 font-semibold">
                <td colSpan={5} className="px-4 py-3 text-sm text-right text-black">মোট ক্যাশ খরচ</td>
                <td className="px-4 py-3 text-sm text-right text-red-600">
                  ৳ {totalCashOut.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Hand Cash Summary */}
      <div className="bg-white rounded-lg shadow p-4">
        <p className="text-sm font-semibold text-black">
          হাতে ক্যাশ আছে: <span className="text-purple-600">৳ {handCashNow.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
        </p>
      </div>
    </div>
  );
}
