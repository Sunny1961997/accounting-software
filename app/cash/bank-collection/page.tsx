'use client';

import Link from 'next/link';

const bankCollections = [
  { id: 1, serial: '101319948877', date: '15 Feb 2026', party: 'Biman Poultry', type: 'কাস্টমার', payment: 'Cash', amount: '৳ 1,230,132.00', total: '৳ 1,294,875.75' },
  { id: 2, serial: '778555922160', date: '03 Feb 2026', party: 'Kazi Feed', type: 'কাস্টমার', payment: 'Bank', amount: '৳ 1,081,525.00', total: '৳ 1,981,525.00' },
  { id: 3, serial: '196619584882', date: '02 Feb 2026', party: 'A.H Distributor', type: 'কাস্টমার', payment: 'Bank', amount: '৳ 3,000,000.00', total: '৳ 3,000,000.00' },
];

export default function BankCollectionPage() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-black">ব্যাংক আদায়</h1>
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
              href="/cash/bank-collection/new"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              নতুন অর্থ সংগ্রহ
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
              <th className="px-6 py-3 text-left text-sm font-medium text-black">সিরিয়াল নং</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black">তারিখ</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black">পার্টি সমূহ</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black">পরিশোধের মাধ্যম</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-black">পেমেন্ট</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-black">সর্বমোট মূল্য</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {bankCollections.map((item, index) => (
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
                <td className="px-6 py-4 text-sm text-black">{item.payment}</td>
                <td className="px-6 py-4 text-sm text-right text-black">{item.amount}</td>
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
            <span className="text-sm font-bold text-black">৳ 6,211,657.00</span>
            <span className="text-sm font-bold text-black">৳ 6,276,400.75</span>
          </div>
        </div>
      </div>
    </div>
  );
}
