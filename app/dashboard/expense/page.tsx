'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Expense {
  id: number;
  category: string;
  date: string;
  quantity: number;
  amount: number;
  approved: boolean;
}

const initialExpenses: Expense[] = [
  { id: 1, category: 'Factory Expense', date: '06 Feb 2026', quantity: 3.00, amount: 1300.00, approved: true },
  { id: 2, category: 'Factory Expense', date: '05 Feb 2026', quantity: 3.00, amount: 28000.00, approved: true },
  { id: 3, category: 'Banking', date: '05 Feb 2026', quantity: 3.00, amount: 0, approved: false },
  { id: 4, category: 'Factory Expense', date: '04 Feb 2026', quantity: 1.00, amount: 1000.00, approved: true },
  { id: 5, category: 'Factory Expense', date: '03 Feb 2026', quantity: 6200.00, amount: 6200.00, approved: true },
  { id: 6, category: 'Dhaka cash', date: '03 Feb 2026', quantity: 5.00, amount: 400000.00, approved: true },
  { id: 7, category: 'Factory Expense', date: '01 Feb 2026', quantity: 1690.00, amount: 1690.00, approved: true },
  { id: 8, category: 'pump', date: '01 Feb 2026', quantity: 1.00, amount: 6120.00, approved: true },
  { id: 9, category: 'ক্যাটাগরি নেই', date: '01 Feb 2026', quantity: 1.00, amount: 11646.00, approved: true },
  { id: 10, category: 'ক্যাটাগরি নেই', date: '01 Feb 2026', quantity: 60.00, amount: 60.00, approved: true },
  { id: 11, category: 'Bike', date: '01 Feb 2026', quantity: 1.00, amount: 300.00, approved: true },
  { id: 12, category: 'Four man food', date: '01 Feb 2026', quantity: 1.00, amount: 1000.00, approved: true },
  { id: 13, category: 'Haidergonj Cash', date: '01 Feb 2026', quantity: 1.00, amount: 95000.00, approved: true },
];

export default function ExpensePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMonth, setFilterMonth] = useState('এই মাস');
  const [dateRange, setDateRange] = useState('01/02/2026 - 28/02/2026');
  const [expenses] = useState<Expense[]>(initialExpenses);

  const totalQuantity = expenses.reduce((sum, e) => sum + e.quantity, 0);
  const totalAmount = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-black">খরচ</h1>
        <Link
          href="/dashboard/expense/add"
          className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition flex items-center gap-2"
        >
          <span>+</span> খরচ যুক্ত করুন
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="খুঁজুন"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
        />
        <select
          value={filterMonth}
          onChange={(e) => setFilterMonth(e.target.value)}
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
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">ক্রম</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">ক্যাটাগরি</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">তারিখ</th>
              <th className="text-right px-4 py-3 text-sm font-semibold text-gray-700">পরিমাণ</th>
              <th className="text-right px-4 py-3 text-sm font-semibold text-gray-700">মূল্য</th>
              <th className="text-right px-4 py-3 text-sm font-semibold text-gray-700"></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={expense.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-600">{index + 1}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{expense.category}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{expense.date}</td>
                <td className="px-4 py-3 text-sm text-gray-600 text-right">{expense.quantity.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td className="px-4 py-3 text-sm text-gray-900 text-right">৳ {expense.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td className="px-4 py-3 text-right">
                  {expense.approved ? (
                    <span className="text-green-500">✓</span>
                  ) : (
                    <div className="flex items-center justify-end gap-1">
                      <button className="text-green-500 hover:text-green-600" title="View">👁</button>
                      <button className="text-blue-500 hover:text-blue-600" title="Edit">✏️</button>
                      <button className="text-red-500 hover:text-red-600" title="Delete">🗑</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 font-semibold">
              <td className="px-4 py-3 text-sm" colSpan={3}>মোট</td>
              <td className="px-4 py-3 text-sm text-right">{totalQuantity.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
              <td className="px-4 py-3 text-sm text-right">৳ {totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
