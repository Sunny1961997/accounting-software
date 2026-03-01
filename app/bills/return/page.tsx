'use client';

import Link from 'next/link';

export default function SalesReturnPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <Link href="/bills" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-black">বিক্রয় / বিক্রি রিটার্ন</span>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-black">বিক্রি রিটার্ন</h1>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="পার্টি অনুসন্ধান"
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
              />
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black">
                <option>এই মাস</option>
              </select>
              <input
                type="text"
                value="01/02/2026 - 28/02/2026"
                readOnly
                className="px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-black"
              />
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
                ফিল্টার
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-20">
          <div className="mb-6">
            <svg className="w-32 h-32 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <p className="text-gray-500 mb-6">কোন তথ্য পাওয়া যায়নি</p>
          <Link
            href="/bills/return/new"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            নতুন বিক্রি রিটার্ন
          </Link>
        </div>
      </div>
    </div>
  );
}
