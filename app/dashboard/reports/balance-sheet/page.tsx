'use client';

interface BalanceItem {
  label: string;
  amount: number;
  tooltip?: string;
}

const assets: BalanceItem[] = [
  { label: 'হাতে ক্যাশ আছে', amount: -7235520.00, tooltip: 'নগদ অর্থ' },
  { label: 'পাওনা হিসাব', amount: 42062407.47, tooltip: 'কাস্টমারদের কাছ থেকে পাওনা' },
  { label: 'সার্বিক ইনভেন্টরি', amount: 19300229.70, tooltip: 'মজুদ পণ্যের মূল্য' },
];

const liabilities: BalanceItem[] = [
  { label: 'পরিশোধযোগ্য/প্রদেয় হিসাব', amount: 47066823.35, tooltip: 'সাপ্লায়ারদের দেনা' },
  { label: 'নেট আয় (লাভ)', amount: 21816457.05, tooltip: 'মোট লাভ' },
  { label: 'ওপেনিং ব্যালেন্স ইক্যুইটি', amount: -14756163.22, tooltip: 'প্রারম্ভিক ব্যালেন্স' },
];

const totalAssets = assets.reduce((sum, a) => sum + a.amount, 0);
const totalLiabilities = liabilities.reduce((sum, l) => sum + l.amount, 0);

export default function BalanceSheetPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">রিপোর্টস / ব্যালেন্স শীট</h1>

      {/* Export Buttons */}
      <div className="flex justify-end gap-3 mb-6">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          এক্সপোর্ট এক্সেল
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
          এক্সপোর্ট পিডিএফ
        </button>
      </div>

      {/* Balance Sheet */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* সম্পদ (Assets) */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-black">সম্পদ</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {assets.map((item) => (
              <div key={item.label} className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-black">{item.label}</span>
                  {item.tooltip && (
                    <span className="text-gray-400 text-xs cursor-help" title={item.tooltip}>ⓘ</span>
                  )}
                </div>
                <span className={`text-sm font-medium ${item.amount < 0 ? 'text-red-600' : 'text-black'}`}>
                  {item.amount < 0 ? '-' : ''}{Math.abs(item.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-200">
            <span className="text-sm font-bold text-black">মোট</span>
            <span className="text-sm font-bold text-black">
              {totalAssets.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        {/* দেনা/আর্থিক দায় (Liabilities) */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-black">দেনা/আর্থিক দায়</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {liabilities.map((item) => (
              <div key={item.label} className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-black">{item.label}</span>
                  {item.tooltip && (
                    <span className="text-gray-400 text-xs cursor-help" title={item.tooltip}>ⓘ</span>
                  )}
                </div>
                <span className={`text-sm font-medium ${item.amount < 0 ? 'text-red-600' : 'text-black'}`}>
                  {item.amount < 0 ? '-' : ''}{Math.abs(item.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-200">
            <span className="text-sm font-bold text-black">মোট</span>
            <span className="text-sm font-bold text-black">
              {totalLiabilities.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
