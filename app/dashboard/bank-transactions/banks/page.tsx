'use client';

import { useState } from 'react';

interface Bank {
  id: number;
  name: string;
  accountName: string;
  accountNumber: string;
  initialBalance: number;
  totalBalance: number;
}

const initialBanks: Bank[] = [
  { id: 1, name: 'Pubali Bank PLC', accountName: 'Akteruzzaman Treders', accountNumber: '3547901030241', initialBalance: 316658.00, totalBalance: 6658.00 },
  { id: 2, name: 'Uttara Bank PLC', accountName: 'Nahar Enterprise', accountNumber: '141263000031107', initialBalance: 10531651.59, totalBalance: 2320666.59 },
];

export default function BanksPage() {
  const [banks, setBanks] = useState<Bank[]>(initialBanks);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newBank, setNewBank] = useState({ name: '', accountName: '', accountNumber: '', initialBalance: 0 });

  const totalBalance = banks.reduce((sum, b) => sum + b.totalBalance, 0);

  const handleAddBank = () => {
    if (!newBank.name.trim()) return;
    const bank: Bank = {
      id: Date.now(),
      name: newBank.name,
      accountName: newBank.accountName,
      accountNumber: newBank.accountNumber,
      initialBalance: newBank.initialBalance,
      totalBalance: newBank.initialBalance,
    };
    setBanks((prev) => [...prev, bank]);
    setNewBank({ name: '', accountName: '', accountNumber: '', initialBalance: 0 });
    setShowAddModal(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">ব্যাংক সমূহ</h1>

      {/* Top bar */}
      <div className="flex items-center justify-end gap-4 mb-4">
        <span className="text-sm text-black">মোট {banks.length}</span>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition flex items-center gap-2"
        >
          <span>+</span> নতুন ব্যাংক
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-purple-50">
              <th className="text-left px-4 py-3 text-sm font-semibold text-black w-12">ক্রম</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-black">নাম</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-black">অ্যাকাউন্টের নাম</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-black">অ্যাকাউন্ট নম্বর</th>
              <th className="text-right px-4 py-3 text-sm font-semibold text-black">প্রারম্ভিক ব্যালেন্স</th>
              <th className="text-right px-4 py-3 text-sm font-semibold text-black">মোট ব্যালেন্স</th>
            </tr>
          </thead>
          <tbody>
            {banks.map((bank, index) => (
              <tr key={bank.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-black">{index + 1}</td>
                <td className="px-4 py-3 text-sm text-black">{bank.name}</td>
                <td className="px-4 py-3 text-sm text-black">{bank.accountName}</td>
                <td className="px-4 py-3 text-sm text-black">{bank.accountNumber}</td>
                <td className="px-4 py-3 text-sm text-right font-medium text-black">
                  ৳ {bank.initialBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
                <td className="px-4 py-3 text-sm text-right font-medium text-black">
                  ৳ {bank.totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 font-semibold">
              <td colSpan={5} className="px-4 py-3 text-sm text-black">মোট</td>
              <td className="px-4 py-3 text-sm text-right text-green-600">
                ৳ {totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Add Bank Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-4 rounded-t-lg flex items-center justify-between">
              <h2 className="text-lg font-semibold text-black">নতুন ব্যাংক</h2>
              <button onClick={() => setShowAddModal(false)} className="text-white hover:text-gray-200">✕</button>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label className="text-sm text-black mb-1 block">ব্যাংকের নাম</label>
                <input
                  type="text"
                  value={newBank.name}
                  onChange={(e) => setNewBank({ ...newBank, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
                />
              </div>
              <div className="mb-4">
                <label className="text-sm text-black mb-1 block">অ্যাকাউন্টের নাম</label>
                <input
                  type="text"
                  value={newBank.accountName}
                  onChange={(e) => setNewBank({ ...newBank, accountName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
                />
              </div>
              <div className="mb-4">
                <label className="text-sm text-black mb-1 block">অ্যাকাউন্ট নম্বর</label>
                <input
                  type="text"
                  value={newBank.accountNumber}
                  onChange={(e) => setNewBank({ ...newBank, accountNumber: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
                />
              </div>
              <div className="mb-6">
                <label className="text-sm text-black mb-1 block">প্রারম্ভিক ব্যালেন্স</label>
                <input
                  type="number"
                  value={newBank.initialBalance}
                  onChange={(e) => setNewBank({ ...newBank, initialBalance: Number(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
                />
              </div>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-black"
                >
                  বাতিল
                </button>
                <button
                  onClick={handleAddBank}
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
