'use client';

import Link from 'next/link';

const sales = [
  { id: 1, invoice: '970520102981', date: '06 Feb 2026', party: 'M.S Kashem Tred', type: 'কাস্টমার', amount: '26,073.00', total: '৳ 1,500,037.00', paid: '৳ 1,500,037.00', due: '৳ 1,500,037.00' },
  { id: 2, invoice: '875482743454', date: '06 Feb 2026', party: 'Kazi Feed', type: 'কাস্টমার', amount: '21,571.00', total: '৳ 1,413,610.10', paid: '৳ 1,413,610.10', due: '৳ 1,413,610.10' },
  { id: 3, invoice: '197898358611', date: '06 Feb 2026', party: 'Kazi Feed', type: 'কাস্টমার', amount: '14,265.00', total: '৳ 951,366.40', paid: '৳ 951,366.40', due: '৳ 951,366.40' },
  { id: 4, invoice: '257033051757', date: '06 Feb 2026', party: 'Kazi Feed', type: 'কাস্টমার', amount: '15,287.00', total: '৳ 1,024,156.80', paid: '৳ 1,024,156.80', due: '৳ 1,024,156.80' },
  { id: 5, invoice: '449985948544', date: '05 Feb 2026', party: 'Kazi Feed', type: 'কাস্টমার', amount: '22,129.00', total: '৳ 1,448,782.30', paid: '৳ 1,448,782.30', due: '৳ 1,448,782.30' },
  { id: 6, invoice: '327801930995', date: '05 Feb 2026', party: 'Kazi Feed', type: 'কাস্টমার', amount: '22,397.00', total: '৳ 1,468,337.50', paid: '৳ 1,468,337.50', due: '৳ 1,468,337.50' },
  { id: 7, invoice: '370369390990', date: '05 Feb 2026', party: 'Kazi Feed', type: 'কাস্টমার', amount: '22,375.00', total: '৳ 1,468,201.70', paid: '৳ 1,468,201.70', due: '৳ 1,468,201.70' },
  { id: 8, invoice: '333669850850', date: '02 Feb 2026', party: 'Biman Poultry', type: 'কাস্টমার', amount: '21,133.00', total: '৳ 1,294,875.00', paid: '৳ 1,294,875.00', due: '৳ 1,294,875.00' },
  { id: 9, invoice: '342259027333', date: '01 Feb 2026', party: 'Rokomari Motsho Khamar', type: 'কাস্টমার', amount: '5,815.30', total: '৳ 400,001.00', paid: '৳ 400,001.00', due: '৳ 1.00' },
];

export default function BillsPage() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-black">বিক্রয়</h1>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="পার্টি অনুসন্ধান"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none w-64 text-black"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black">
              <option>এই মাস</option>
              <option>গত মাস</option>
              <option>এই বছর</option>
            </select>
            <input
              type="text"
              value="01/02/2026 - 28/02/2026"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
              readOnly
            />
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
              ফিল্টার
            </button>
            <Link 
              href="/bills/new"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              নতুন বিক্রয়
            </Link>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-black">ক্রম</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black">ইনভয়েস নং</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black">তারিখ</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-black">পার্টি সমূহ</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-black">পরিমান</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-black">মোট মূল্য</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-black">সর্বমোট মূল্য</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-black">বাকি</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sales.map((sale, index) => (
              <tr key={sale.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm text-black">{index + 1}</td>
                <td className="px-6 py-4 text-sm text-black">{sale.invoice}</td>
                <td className="px-6 py-4 text-sm text-black">{sale.date}</td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-black">{sale.party}</p>
                    <p className="text-xs text-gray-500">{sale.type}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-right text-black">{sale.amount}</td>
                <td className="px-6 py-4 text-sm text-right text-black">{sale.total}</td>
                <td className="px-6 py-4 text-sm text-right text-black">{sale.paid}</td>
                <td className="px-6 py-4 text-sm text-right text-black">{sale.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 px-6 py-3 bg-gray-50">
        <div className="flex items-center justify-between">
          <p className="text-sm text-black">মোট</p>
          <div className="flex gap-8">
            <p className="text-sm font-bold text-black">171,045.30</p>
            <p className="text-sm font-bold text-black">৳ 10,969,367.80</p>
            <p className="text-sm font-bold text-black">৳ 10,969,367.80</p>
            <p className="text-sm font-bold text-black">৳ 10,569,367.80</p>
          </div>
        </div>
      </div>
    </div>
  );
}
