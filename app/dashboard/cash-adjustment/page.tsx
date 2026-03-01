'use client';

import { useState } from 'react';

interface CashAdjustment {
  id: number;
  date: string;
  type: string;
  note: string;
  amount: number;
}

const initialAdjustments: CashAdjustment[] = [
  { id: 1, date: '06 Feb 2026', type: 'ক্যাশ দিলাম', note: 'From DMT 200494', amount: 10000.00 },
  { id: 2, date: '01 Feb 2026', type: 'ক্যাশ দিলাম', note: 'From mishu ubl-1770 to khaier acci-12', amount: 95000.00 },
];

export default function CashAdjustmentPage() {
  const [filterMonth, setFilterMonth] = useState('এই মাস');
  const [dateRange, setDateRange] = useState('01/02/2026 - 28/02/2026');
  const [adjustments] = useState<CashAdjustment[]>(initialAdjustments);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showInitialModal, setShowInitialModal] = useState(false);
  const [initialCapital, setInitialCapital] = useState(0);

  // Add cash adjustment modal state
  const [adjType, setAdjType] = useState<'ক্যাশ দিলাম' | 'ক্যাশ নিলাম'>('ক্যাশ দিলাম');
  const [adjDate, setAdjDate] = useState('28-02-2026');
  const [adjAmount, setAdjAmount] = useState(0);
  const [adjNote, setAdjNote] = useState('');

  const handleSaveAdjustment = () => {
    alert('ক্যাশ মিলাই সেভ হয়েছে');
    setShowAddModal(false);
    setAdjAmount(0);
    setAdjNote('');
  };

  const handleSaveInitial = () => {
    alert('প্রাথমিক মূলধন সেভ হয়েছে');
    setShowInitialModal(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">ক্যাশ মিলাই</h1>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between mb-6">
        <div className="flex items-center gap-4">
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
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowInitialModal(true)}
            className="border border-purple-500 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition flex items-center gap-2"
          >
            <span>+</span> প্রাথমিক মূলধন
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition flex items-center gap-2"
          >
            <span>+</span> ক্যাশ মিলাই
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-purple-50">
              <th className="text-left px-4 py-3 text-sm font-semibold text-black w-12">ক্রম</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-black">সমন্বয় তারিখ</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-black">সমন্বয়ের ধরন</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-black">মন্তব্য</th>
              <th className="text-right px-4 py-3 text-sm font-semibold text-black">পরিমাণ</th>
              <th className="text-right px-4 py-3 text-sm font-semibold text-black">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody>
            {adjustments.map((adj, index) => (
              <tr key={adj.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-black">{index + 1}</td>
                <td className="px-4 py-3 text-sm text-black">{adj.date}</td>
                <td className="px-4 py-3 text-sm text-black">{adj.type}</td>
                <td className="px-4 py-3 text-sm text-black">{adj.note}</td>
                <td className="px-4 py-3 text-sm text-right font-medium text-black">
                  ৳ {adj.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="text-blue-500 hover:text-blue-600">✏️</button>
                    <button className="text-red-500 hover:text-red-600">🗑</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Cash Adjustment Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-4 rounded-t-lg flex items-center justify-between">
              <h2 className="text-lg font-semibold text-black">ক্যাশ মিলাই</h2>
              <button onClick={() => setShowAddModal(false)} className="text-white hover:text-gray-200">✕</button>
            </div>
            <div className="p-6">
              {/* Type Selection */}
              <div className="flex items-center gap-6 mb-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="adjType"
                    checked={adjType === 'ক্যাশ দিলাম'}
                    onChange={() => setAdjType('ক্যাশ দিলাম')}
                    className="text-purple-600"
                  />
                  <span className="text-sm text-black">ক্যাশ দিলাম</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="adjType"
                    checked={adjType === 'ক্যাশ নিলাম'}
                    onChange={() => setAdjType('ক্যাশ নিলাম')}
                    className="text-purple-600"
                  />
                  <span className="text-sm text-black">ক্যাশ নিলাম</span>
                </label>
                <input
                  type="text"
                  value={adjDate}
                  onChange={(e) => setAdjDate(e.target.value)}
                  className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm ml-auto text-black"
                />
              </div>

              {/* Amount */}
              <div className="mb-4">
                <label className="text-sm text-black mb-1 block">পরিমাণ</label>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 bg-purple-100 px-2 py-1.5 rounded text-sm">৳</span>
                  <input
                    type="number"
                    value={adjAmount}
                    onChange={(e) => setAdjAmount(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
                  />
                </div>
              </div>

              {/* Note */}
              <div className="mb-6">
                <label className="text-sm text-black mb-1 block">মন্তব্য</label>
                <textarea
                  value={adjNote}
                  onChange={(e) => setAdjNote(e.target.value)}
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
                  onClick={handleSaveAdjustment}
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700"
                >
                  সেভ করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Initial Capital Modal */}
      {showInitialModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-4 rounded-t-lg flex items-center justify-between">
              <h2 className="text-lg font-semibold text-black">প্রাথমিক মূলধন (হাতে থাকা ক্যাশ)</h2>
              <button onClick={() => setShowInitialModal(false)} className="text-white hover:text-gray-200">✕</button>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <label className="text-sm text-black mb-1 block">প্রাথমিক মূলধন</label>
                <input
                  type="number"
                  value={initialCapital}
                  onChange={(e) => setInitialCapital(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
                />
              </div>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setShowInitialModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-black"
                >
                  বাতিল
                </button>
                <button
                  onClick={handleSaveInitial}
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
