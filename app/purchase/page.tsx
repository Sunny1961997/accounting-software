'use client';

import Link from 'next/link';

const purchases = [
  { id: 1, serial: '796920876965', date: '06 Feb 2026', party: 'Arafat Tred', type: 'সাপ্লায়ার', amount: '19,156.00', price: '৳ 1,155,831.00', total: '৳ 1,155,831.00' },
  { id: 2, serial: '948120944401', date: '05 Feb 2026', party: 'Zihad Tred.', type: 'সাপ্লায়ার', amount: '16,185.00', price: '৳ 877,646.25', total: '৳ 877,646.25' },
  { id: 3, serial: '551910126932', date: '04 Feb 2026', party: 'Zihad Tred.', type: 'সাপ্লায়ার', amount: '20,784.00', price: '৳ 1,126,823.75', total: '৳ 1,126,823.75' },
  { id: 4, serial: '941647988214', date: '04 Feb 2026', party: 'Rabbi Vushi', type: 'সাপ্লায়ার', amount: '1,501.00', price: '৳ 5,860.00', total: '৳ 5,860.00' },
  { id: 5, serial: '305981560907', date: '04 Feb 2026', party: 'M.s Nazrul Tred.', type: 'সাপ্লায়ার', amount: '7,647.00', price: '৳ 427,865.50', total: '৳ 427,865.50' },
];

export default function PurchasePage() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-black">ক্রয়</h1>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="পার্টি অনুসন্ধান"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none text-black"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-md text-black">
              <option>এই মাস</option>
            </select>
            <input
              type="text"
              value="01/02/2026 - 28/02/2026"
              readOnly
              className="px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-black"
            />
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
              ফিল্টার
            </button>
            <Link
              href="/purchase/new"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              নতুন ক্রয়
            </Link>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-black">ক্রম</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black">বিল নং</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black">তারিখ</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black">পরিমান</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-black">মূল্য</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-black">বাকি</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {purchases.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-black">{index + 1}</td>
                <td className="px-6 py-4 text-sm text-black">{item.serial}</td>
                <td className="px-6 py-4 text-sm text-black">{item.date}</td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-black">{item.party}</p>
                    <p className="text-xs text-gray-500">{item.type}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-right text-black">{item.price}</td>
                <td className="px-6 py-4 text-sm text-right text-black">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="border-t px-6 py-3 bg-gray-50">
        <div className="flex justify-between">
          <span className="text-sm text-black">মোট</span>
          <div className="flex gap-8">
            <span className="text-sm font-bold text-black">132,529.00</span>
            <span className="text-sm font-bold text-black">৳ 7,024,528.50</span>
            <span className="text-sm font-bold text-black">৳ 7,024,528.50</span>
          </div>
        </div>
      </div>
    </div>
  );
}
