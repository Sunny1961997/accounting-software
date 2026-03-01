'use client';

export default function SalesPage() {
  const transactions = [
    { date: '09 Feb 2025', party: 'Process Soybean', type: 'সেল কর', amount: '82,520.32', paid: '৳0.00', due: '৳0.00' },
    { date: '09 Feb 2025', party: 'DOB', type: 'সেল কর', amount: '78.32', paid: '৳0.00', due: '৳0.00' },
    { date: '09 Feb 2025', party: 'Rekisn Bag Fill', type: 'সেল কর', amount: '753.35', paid: '৳0.00', due: '৳0.00' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">স্টক পরিবর্তন</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">ফিল্টার</button>
          <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600">বিক্রি করুন</button>
          <button className="px-4 py-2 bg-white border rounded-lg">গো</button>
        </div>
      </div>

      {/* Date Filter */}
      <div className="flex gap-4 items-center">
        <select className="px-4 py-2 border border-gray-300 rounded-lg">
          <option>সব পার্টি</option>
        </select>
        <input
          type="text"
          value="01/01/2025 - 28/02/2026"
          className="px-4 py-2 border border-gray-300 rounded-lg"
          readOnly
        />
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">গো</button>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">নং</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">তারিখ</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">পণ্য</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">স্টক পরিবর্তন ধরন</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">পরিমাণ</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">ভুক</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">বাকীর মূল্য মূল্য</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((transaction, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{index + 1}</td>
                <td className="px-6 py-4 text-sm">{transaction.date}</td>
                <td className="px-6 py-4 text-sm text-purple-600">{transaction.party}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                    {transaction.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">{transaction.amount}</td>
                <td className="px-6 py-4 text-sm">{transaction.paid}</td>
                <td className="px-6 py-4 text-sm">{transaction.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-end">
          <span className="font-bold text-lg">মোট: ৳ 83.00</span>
        </div>
      </div>
    </div>
  );
}
