'use client';

import Link from 'next/link';

const parties = [
  { id: 1, name: 'Cash Sale', type: 'CUSTOMER', balance: '৳0.00' },
  { id: 2, name: 'A.H Distributors', type: 'CUSTOMER', balance: '৳ 2,372,474.49' },
  { id: 3, name: 'ARg oil', type: 'CUSTOMER', balance: '৳0.00' },
  { id: 4, name: 'Abir oil', type: 'CUSTOMER', balance: '৳0.00' },
  { id: 5, name: 'Arsha Food', type: 'SUPPLIER', balance: '৳ 7,482,775.00' },
  { id: 6, name: 'Aman Food', type: 'CUSTOMER', balance: '৳0.00' },
  { id: 7, name: 'Basco Bag', type: 'CUSTOMER', balance: '৳ 1,120.00' },
  { id: 8, name: 'Basco Food', type: 'CUSTOMER', balance: '৳ 75,091.00' },
  { id: 9, name: 'Basnu Mix', type: 'SUPPLIER', balance: '৳0.00' },
  { id: 10, name: 'Basu Bisher', type: 'CUSTOMER', balance: '৳ 1,120.00' },
];

export default function PartiesPage() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl text-black font-bold">পার্টি সমূহ</h1>
            <div className="flex items-center gap-3">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="পার্টি নাম বা ফোন"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none w-64 text-black"
                />
              </div>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black">
                <option>সব</option>
                <option>CUSTOMER</option>
                <option>SUPPLIER</option>
              </select>
              <span className="text-sm text-gray-600">পেজ 16</span>
              <Link 
                href="/parties/new"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                নতুন পার্টি
              </Link>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">ক্রম</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">বিল এস নাম</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">কোড</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">থোক নাম</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">উৎসব মূল</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">ভাস</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">ডাউনলোড মূল</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {parties.map((party, index) => (
                <tr key={party.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{party.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-purple-600">{party.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-900"></td>
                  <td className="px-6 py-4 text-sm text-right text-gray-900">{party.balance}</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-900">৳0.00</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-900">৳0.00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-3 bg-gray-50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">মোট</p>
            <p className="text-sm font-bold">৳0.00</p>
          </div>
        </div>
      </div>
  );
}
