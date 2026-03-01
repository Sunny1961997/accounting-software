'use client';

import Link from 'next/link';

const bankPayments = [
  { id: 1, serial: '132822711585', date: '05 Feb 2026', party: 'Rabbi Vushi', type: 'সাপ্লায়ার', payment: 'Cash', amount: '৳ 34,000.00', total: '৳ 90,000.00' },
  { id: 2, serial: '560166461599', date: '05 Feb 2026', party: 'Elahi Vander(P2)', type: 'সাপ্লায়ার', payment: 'Cash', amount: '৳ 100,000.00', total: '৳ 100,000.00' },
  { id: 3, serial: '309975291380', date: '05 Feb 2026', party: 'M.s Nazrul Tred.', type: 'সাপ্লায়ার', payment: 'Cash', amount: '৳ 300,000.00', total: '৳ 300,000.00' },
  { id: 4, serial: '314052575118', date: '05 Feb 2026', party: 'Maman Tred.', type: 'সাপ্লায়ার', payment: 'Cash', amount: '৳ 700,000.00', total: '৳ 700,000.00' },
  { id: 5, serial: '997585071062', date: '05 Feb 2026', party: 'M.S Kashem Tred.', type: 'সাপ্লায়ার', payment: 'Cash', amount: '৳ 1,500,000.00', total: '৳ 1,500,000.00' },
  { id: 6, serial: '264105187167', date: '05 Feb 2026', party: 'Zihad Tred.', type: 'সাপ্লায়ার', payment: 'Bank', amount: '৳ 1,000,000.00', total: '৳ 1,000,000.00' },
  { id: 7, serial: '835243964195', date: '05 Feb 2026', party: 'Arafat Tred.', type: 'সাপ্লায়ার', payment: 'Bank', amount: '৳ 1,400,000.00', total: '৳ 1,400,000.00' },
  { id: 8, serial: '882011237589', date: '03 Feb 2026', party: 'Master Tred.', type: 'সাপ্লায়ার', payment: 'Cash', amount: '৳ 37,000.00', total: '৳ 37,665.00' },
  { id: 9, serial: '659583840984', date: '03 Feb 2026', party: 'Oji Ullah Tred.', type: 'সাপ্লায়ার', payment: 'Cash', amount: '৳ 30,000.00', total: '৳ 30,145.00' },
  { id: 10, serial: '678505922947', date: '03 Feb 2026', party: 'M.s Nazrul Tred.', type: 'সাপ্লায়ার', payment: 'Cash', amount: '৳ 1,500,000.00', total: '৳ 1,500,000.00' },
  { id: 11, serial: '913345300120', date: '02 Feb 2026', party: 'M.s Nazrul Tred.', type: 'সাপ্লায়ার', payment: 'Bank', amount: '৳ 2,500,000.00', total: '৳ 2,500,000.00' },
  { id: 12, serial: '999105642866', date: '01 Feb 2026', party: 'Zihad Tred.', type: 'সাপ্লায়ার', payment: 'Cash', amount: '৳ 700,000.00', total: '৳ 700,000.00' },
];

export default function BankDisbursementPage() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-black">ব্যাংক পরিশোধ</h1>
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
              href="/cash/bank-disbursement/new"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              নতুন অর্থ প্রদান
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
              <th className="px-6 py-3 text-right text-sm font-medium text-black">পিমাস</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-black">সর্বমোট মূল্য</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {bankPayments.map((item, index) => (
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
            <span className="text-sm font-bold text-black">৳ 9,801,000.00</span>
            <span className="text-sm font-bold text-black">৳ 9,801,813.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
