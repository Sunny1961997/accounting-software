'use client';

import Link from 'next/link';

const products = [
  { id: 1, name: 'Black Soybean', stock: '৳0.00', price: '0.00' },
  { id: 2, name: 'Charred Soybean', stock: '৳0.00', price: '0.00' },
  { id: 3, name: 'DOB', stock: '৳0.00', price: '527.00' },
  { id: 4, name: 'Large Jute Bag Empty', stock: '৳0.00', price: '4,900.00' },
  { id: 5, name: 'Large Jute Bag Fill', stock: '৳0.00', price: '770.00' },
  { id: 6, name: 'LC Soybean', stock: '৳0.00', price: '15,323.00' },
  { id: 7, name: 'Process Soybean', stock: '৳0.00', price: '10,107.70' },
  { id: 8, name: 'Raw & Dry Soybean', stock: '৳0.00', price: '0.00' },
  { id: 9, name: 'Raw Soybean', stock: '৳0.00', price: '58,819.00' },
  { id: 10, name: 'Raw Soybean Now', stock: '৳0.00', price: '138,028.00' },
  { id: 11, name: 'Reksin Bag Empty', stock: '৳0.00', price: '14,527.00' },
  { id: 12, name: 'Reksin Bag Fill', stock: '৳0.00', price: '871.00' },
  { id: 13, name: 'Small Jute Bag Empty', stock: '৳0.00', price: '2,229.00' },
  { id: 14, name: 'Small Jute Bag Fill', stock: '৳0.00', price: '1,402.00' },
  { id: 15, name: 'Tush', stock: '৳0.00', price: '0.00' },
  { id: 16, name: 'Vusht', stock: '৳0.00', price: '14,685.00' },
];

export default function ProductsPage() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-black">পণ্য সমূহ</h1>
            <div className="flex items-center gap-3">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="পণ্যের নাম বা কোড"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none w-64 text-black"
                />
              </div>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black">
                <option>সব</option>
              </select>
              <span className="text-sm text-gray-600">পেজ 16</span>
              <Link 
                href="/products/new"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                নতুন পণ্য
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
                <th className="px-6 py-3 text-left text-sm font-medium text-black">পণ্য</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-black">কোড</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-black">থোক মূল্য</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-black">স্টক</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product, index) => (
                <tr key={product.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm text-black">{index + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-black">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-purple-600">
                    {index % 3 === 0 ? 'CUSTOMER' : index % 3 === 1 ? 'SUPPLIER' : 'SUPPLIER'}
                  </td>
                  <td className="px-6 py-4 text-sm text-right text-black">{product.price}</td>
                  <td className="px-6 py-4 text-sm text-right text-black">{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}
