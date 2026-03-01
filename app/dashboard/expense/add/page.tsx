'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ExpenseItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface PaymentMethod {
  id: number;
  method: string;
  amount: number;
}

export default function AddExpensePage() {
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('28-02-2026');
  const [items, setItems] = useState<ExpenseItem[]>([
    { id: 1, name: '', quantity: 1, price: 0, total: 0 },
  ]);
  const [payments, setPayments] = useState<PaymentMethod[]>([
    { id: 1, method: 'Cash', amount: 0 },
  ]);
  const [description, setDescription] = useState('');

  const totalAmount = items.reduce((sum, item) => sum + item.total, 0);

  const updateItem = (id: number, field: keyof ExpenseItem, value: string | number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const updated = { ...item, [field]: value };
        if (field === 'quantity' || field === 'price') {
          updated.total = Number(updated.quantity) * Number(updated.price);
        }
        return updated;
      })
    );
  };

  const addPaymentMethod = () => {
    setPayments((prev) => [
      ...prev,
      { id: Date.now(), method: 'Cash', amount: 0 },
    ]);
  };

  const removePaymentMethod = (id: number) => {
    setPayments((prev) => prev.filter((p) => p.id !== id));
  };

  const handleSave = () => {
    // Save logic
    alert('খরচ সেভ হয়েছে');
  };

  const handleSaveAndNew = () => {
    // Save and reset
    alert('খরচ সেভ হয়েছে');
    setItems([{ id: 1, name: '', quantity: 1, price: 0, total: 0 }]);
    setPayments([{ id: 1, method: 'Cash', amount: 0 }]);
    setDescription('');
    setCategory('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">খরচ / খরচ যুক্ত করুন</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">খরচ যুক্ত করুন</h2>

        {/* Category and Date */}
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-600">ক্যাটাগরি</label>
            <input
              type="text"
              placeholder="খুঁজুন"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
            <Link href="/dashboard/expense/categories" className="text-gray-400 hover:text-gray-600">
              ℹ️
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-600">তারিখ</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
            <span className="text-gray-400">📅</span>
          </div>
        </div>

        {/* Items Table */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-gray-700">ক্রম</span>
            <span className="text-sm font-semibold text-gray-700 ml-2">আইটেম</span>
            <span className="text-gray-400 text-xs ml-1">ℹ️</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-2 py-2 text-sm font-semibold text-gray-700 w-10">#</th>
                  <th className="text-left px-2 py-2 text-sm font-semibold text-gray-700">আইটেম</th>
                  <th className="text-center px-2 py-2 text-sm font-semibold text-gray-700 w-32">পরিমাণ</th>
                  <th className="text-center px-2 py-2 text-sm font-semibold text-gray-700 w-32">মূল্য</th>
                  <th className="text-center px-2 py-2 text-sm font-semibold text-gray-700 w-32">মোট মূল্য</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={item.id} className="border-b border-gray-100">
                    <td className="px-2 py-2 text-sm text-gray-600">{index + 1}</td>
                    <td className="px-2 py-2">
                      <input
                        type="text"
                        placeholder="অনুসন্ধান"
                        value={item.name}
                        onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                      />
                    </td>
                    <td className="px-2 py-2">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateItem(item.id, 'quantity', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-center bg-purple-50"
                      />
                    </td>
                    <td className="px-2 py-2">
                      <input
                        type="number"
                        value={item.price}
                        onChange={(e) => updateItem(item.id, 'price', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-center bg-purple-50"
                      />
                    </td>
                    <td className="px-2 py-2">
                      <input
                        type="number"
                        value={item.total}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-center"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap gap-8 mb-6">
          <div className="flex-1 min-w-[300px]">
            <div className="flex items-center gap-2 mb-3">
              <label className="text-sm font-semibold text-gray-700">পরিশোধের মাধ্যম:</label>
              <span className="text-gray-400 text-xs">ℹ️</span>
            </div>
            <div className="border border-yellow-300 rounded-lg p-4 bg-yellow-50/30">
              {payments.map((payment) => (
                <div key={payment.id} className="flex items-center gap-3 mb-3">
                  <div className="flex-1">
                    <select
                      value={payment.method}
                      onChange={(e) =>
                        setPayments((prev) =>
                          prev.map((p) =>
                            p.id === payment.id ? { ...p, method: e.target.value } : p
                          )
                        )
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none mb-2"
                    >
                      <option value="Cash">Cash</option>
                      <option value="bKash">bKash</option>
                      <option value="Nagad">Nagad</option>
                      <option value="Rocket">Rocket</option>
                      <option value="Bank">Bank</option>
                    </select>
                    <input
                      type="number"
                      value={payment.amount}
                      onChange={(e) =>
                        setPayments((prev) =>
                          prev.map((p) =>
                            p.id === payment.id ? { ...p, amount: Number(e.target.value) } : p
                          )
                        )
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <button
                    onClick={() => removePaymentMethod(payment.id)}
                    className="text-red-400 hover:text-red-600 text-xl"
                  >
                    🗑
                  </button>
                </div>
              ))}
              <button
                onClick={addPaymentMethod}
                className="text-purple-600 hover:text-purple-700 text-2xl"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm font-semibold text-gray-700">সর্বমোট মূল্য:</label>
            <div className="flex items-center gap-1">
              <span className="text-purple-600 bg-purple-100 px-2 py-1 rounded text-sm">৳</span>
              <input
                type="number"
                value={totalAmount}
                readOnly
                className="px-4 py-2 border border-gray-300 rounded-lg bg-purple-50 w-32"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <textarea
            placeholder="বর্ণনা"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={handleSaveAndNew}
            className="px-6 py-2 border border-purple-500 text-purple-600 rounded-lg hover:bg-purple-50 transition"
          >
            সেভ ও নতুন
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition"
          >
            সেভ করুন
          </button>
        </div>
      </div>
    </div>
  );
}
