'use client';

export default function TutorialPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">টিউটোরিয়াল</h1>

      <div className="bg-white rounded-lg shadow p-8 text-center">
        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🎓</span>
        </div>
        <h2 className="text-xl font-semibold text-black mb-2">হিসাবকারখানা টিউটোরিয়াল</h2>
        <p className="text-gray-500 mb-6">হিসাবকারখানা ব্যবহার করার জন্য নিচের ভিডিও টিউটোরিয়াল দেখুন</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            'কিভাবে পণ্য যোগ করবেন',
            'কিভাবে বিক্রি করবেন',
            'কিভাবে ক্রয় করবেন',
            'কিভাবে খরচ যোগ করবেন',
            'কিভাবে রিপোর্ট দেখবেন',
            'কিভাবে ব্যাংক লেনদেন করবেন',
          ].map((title, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-purple-300 transition cursor-pointer">
              <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-3">
                <span className="text-4xl text-gray-400">▶</span>
              </div>
              <p className="text-sm font-medium text-black">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
