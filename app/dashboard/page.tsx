'use client';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">ড্যাশবোর্ড</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">আজকের বিক্রয়</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">৳ 0.00</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🛒</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">আজকের ক্রয়</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">৳ 0.00</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🛍️</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">আজকের খরচ</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">৳ 0.00</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">💸</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">মোট বাকি</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">৳ 0.00</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">📒</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-8 text-center text-gray-400">
        <p className="text-lg">আপনার ব্যবসায়িক ড্যাশবোর্ডে স্বাগতম!</p>
        <p className="text-sm mt-2">বাম পাশের মেনু থেকে বিভিন্ন বিভাগে যান</p>
      </div>
    </div>
  );
}
