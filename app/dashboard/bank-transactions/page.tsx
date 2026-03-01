'use client';

import { useState } from 'react';
import Link from 'next/link';

interface BankTransaction {
  id: number;
  date: string;
  bank: string;
  type: string;
  invoiceNo: string;
  description: string;
  amount: number;
}

const initialTransactions: BankTransaction[] = [
  { id: 1, date: '05 Feb 2026', bank: 'Uttara Bank PLC', type: 'উত্তোলন', invoiceNo: '', description: 'Rtgs charge', amount: 300.00 },
  { id: 2, date: '05 Feb 2026', bank: 'Uttara Bank PLC', type: 'উত্তোলন', invoiceNo: '', description: '100000 for chow. cash', amount: 2700000.00 },
  { id: 3, date: '05 Feb 2026', bank: 'Uttara Bank PLC', type: 'অর্থ প্রদান', invoiceNo: '', description: 'MTB-8645', amount: 1000000.00 },
  { id: 4, date: '05 Feb 2026', bank: 'Uttara Bank PLC', type: 'অর্থ প্রদান', invoiceNo: '', description: 'one-497', amount: 1400000.00 },
  { id: 5, date: '03 Feb 2026', bank: 'Uttara Bank PLC', type: 'উত্তোলন', invoiceNo: '', description: 'Dhaka cash', amount: 1900000.00 },
  { id: 6, date: '03 Feb 2026', bank: 'Uttara Bank PLC', type: 'ব্যাংকে জমা', invoiceNo: '', description: 'From chow. Cash to CC-107', amount: 323000.00 },
  { id: 7, date: '03 Feb 2026', bank: 'Uttara Bank PLC', type: 'অর্থ সংগ্রহ', invoiceNo: '', description: '', amount: 1981525.00 },
  { id: 8, date: '02 Feb 2026', bank: 'Uttara Bank PLC', type: 'অর্থ প্রদান', invoiceNo: '', description: '', amount: 2500000.00 },
  { id: 9, date: '02 Feb 2026', bank: 'Uttara Bank PLC', type: 'অর্থ সংগ্রহ', invoiceNo: '', description: '', amount: 3000000.00 },
  { id: 10, date: '01 Feb 2026', bank: 'Uttara Bank PLC', type: 'উত্তোলন', invoiceNo: '', description: 'for bashar kaka', amount: 700000.00 },
];

export default function BankTransactionsPage() {
  const [bankFilter, setBankFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [monthFilter, setMonthFilter] = useState('এই মাস');
  const [dateRange, setDateRange] = useState('01/02/2026 - 28/02/2026');
  const [transactions] = useState<BankTransaction[]>(initialTransactions);
  const [showAddModal, setShowAddModal] = useState(false);

  // Add transaction modal state
  const [txnType, setTxnType] = useState('ব্যাংকে জমা');
  const [txnDate, setTxnDate] = useState('28-02-2026');
  const [txnBank, setTxnBank] = useState('');
  const [txnAmount, setTxnAmount] = useState(0);
  const [txnDesc, setTxnDesc] = useState('');

  const totalAmount = transactions.reduce((sum, t) => {
    if (t.type === 'উত্তোলন' || t.type === 'অর্থ প্রদান') {
      return sum - t.amount;
    }
    return sum + t.amount;
  }, 0);

  const handleSaveTransaction = () => {
    alert('লেনদেন সেভ হয়েছে');
    setShowAddModal(false);
    setTxnAmount(0);
    setTxnDesc('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">ব্যাংক লেনদেন</h1>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <select
          value={bankFilter}
          onChange={(e) => setBankFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none min-w-[150px] text-black"
        >
          <option value="">ব্যাংক</option>
          <option value="Uttara Bank PLC">Uttara Bank PLC</option>
          <option value="Pubali Bank PLC">Pubali Bank PLC</option>
        </select>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none min-w-[150px] text-black"
        >
          <option value="">লেনদেনের ধরণ</option>
          <option value="ব্যাংকে জমা">ব্যাংকে জমা</option>
          <option value="উত্তোলন">উত্তোলন</option>
          <option value="অর্থ প্রদান">অর্থ প্রদান</option>
          <option value="অর্থ সংগ্রহ">অর্থ সংগ্রহ</option>
          <option value="ব্যাংক টু ব্যাংক">ব্যাংক টু ব্যাংক</option>
        </select>
        <select
          value={monthFilter}
          onChange={(e) => setMonthFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
        >
          <option>এই মাস</option>
          <option>গত মাস</option>
          <option>গত ৩ মাস</option>
          <option>কাস্টম</option>
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
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition flex items-center gap-2 ml-auto"
        >
          <span>+</span> লেনদেন যোগ করুন
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-purple-50">
              <th className="text-left px-4 py-3 text-sm font-semibold text-black w-12">ক্রম</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-black">তারিখ</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-black">ব্যাংক</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-black">ধরন</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-black">ইনভয়েস নং</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-black">বর্ণনা</th>
              <th className="text-right px-4 py-3 text-sm font-semibold text-black">মূল্য</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={txn.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-black">{index + 1}</td>
                <td className="px-4 py-3 text-sm text-black">{txn.date}</td>
                <td className="px-4 py-3 text-sm text-black">{txn.bank}</td>
                <td className="px-4 py-3 text-sm text-black">{txn.type}</td>
                <td className="px-4 py-3 text-sm text-black">{txn.invoiceNo || '-'}</td>
                <td className="px-4 py-3 text-sm text-black">{txn.description || '-'}</td>
                <td className="px-4 py-3 text-sm text-right font-medium text-black">
                  ৳ {txn.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 font-semibold">
              <td colSpan={6} className="px-4 py-3 text-sm text-black">মোট</td>
              <td className="px-4 py-3 text-sm text-right text-red-600">
                {totalAmount < 0 ? '- ' : ''}৳ {Math.abs(totalAmount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Add Transaction Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-4 rounded-t-lg flex items-center justify-between">
              <h2 className="text-lg font-semibold text-black">লেনদেন যোগ করুন</h2>
              <button onClick={() => setShowAddModal(false)} className="text-white hover:text-gray-200">✕</button>
            </div>
            <div className="p-6">
              {/* Type Selection */}
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="txnType"
                    checked={txnType === 'ব্যাংকে জমা'}
                    onChange={() => setTxnType('ব্যাংকে জমা')}
                    className="text-purple-600"
                  />
                  <span className="text-sm text-black">ব্যাংকে জমা</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="txnType"
                    checked={txnType === 'উত্তোলন'}
                    onChange={() => setTxnType('উত্তোলন')}
                    className="text-purple-600"
                  />
                  <span className="text-sm text-black">উত্তোলন</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="txnType"
                    checked={txnType === 'ব্যাংক টু ব্যাংক'}
                    onChange={() => setTxnType('ব্যাংক টু ব্যাংক')}
                    className="text-purple-600"
                  />
                  <span className="text-sm text-black">ব্যাংক টু ব্যাংক</span>
                </label>
                <input
                  type="text"
                  value={txnDate}
                  onChange={(e) => setTxnDate(e.target.value)}
                  className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm ml-auto text-black"
                />
              </div>

              {/* Bank */}
              <div className="mb-4">
                <label className="text-sm text-black mb-1 block">ব্যাংক</label>
                <select
                  value={txnBank}
                  onChange={(e) => setTxnBank(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
                >
                  <option value="">ব্যাংক বাছাই করুন</option>
                  <option value="Uttara Bank PLC">Uttara Bank PLC</option>
                  <option value="Pubali Bank PLC">Pubali Bank PLC</option>
                </select>
              </div>

              {/* Amount */}
              <div className="mb-4">
                <label className="text-sm text-black mb-1 block">মূল্য</label>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 bg-purple-100 px-2 py-1.5 rounded text-sm">৳</span>
                  <input
                    type="number"
                    value={txnAmount}
                    onChange={(e) => setTxnAmount(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <label className="text-sm text-black mb-1 block">বর্ণনা</label>
                <textarea
                  value={txnDesc}
                  onChange={(e) => setTxnDesc(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none text-black"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-black"
                >
                  বাতিল
                </button>
                <button
                  onClick={handleSaveTransaction}
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700"
                >
                  সেভ করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
