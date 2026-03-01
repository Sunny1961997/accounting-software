'use client';

export default function ItemExportPage() {
  const handleExportExcel = () => {
    alert('আইটেম এক্সেল এক্সপোর্ট হচ্ছে...');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">ইউটিলিটিস / আইটেম এক্সপোর্ট</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-end mb-4">
          <button
            onClick={handleExportExcel}
            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition flex items-center gap-2"
          >
            📥 এক্সপোর্ট এক্সেল
          </button>
        </div>

        <p className="text-sm text-black text-center py-8">
          আপনার সকল আইটেম এক্সেল ফাইলে এক্সপোর্ট করুন
        </p>
      </div>
    </div>
  );
}
