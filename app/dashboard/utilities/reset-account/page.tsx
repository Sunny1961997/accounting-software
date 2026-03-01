'use client';

import { useState } from 'react';

export default function ResetAccountPage() {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleReset = () => {
    alert('একাউন্ট রিসেট হয়েছে');
    setShowConfirm(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">ইউটিলিটিস / রিসেট একাউন্ট</h1>

      <div className="bg-white rounded-lg shadow p-8 max-w-lg mx-auto text-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-black mb-2">একাউন্ট রিসেট</h2>
        <p className="text-sm text-gray-500 mb-6">
          সতর্কতা: এই অপারেশন আপনার সকল ডেটা মুছে ফেলবে। এটি পূর্বাবস্থায় ফেরানো যাবে না।
        </p>
        <button
          onClick={() => setShowConfirm(true)}
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
        >
          রিসেট করুন
        </button>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
            <h3 className="text-lg font-semibold text-black mb-4">আপনি কি নিশ্চিত?</h3>
            <p className="text-sm text-gray-500 mb-6">এই অপারেশন পূর্বাবস্থায় ফেরানো যাবে না।</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-black"
              >
                বাতিল
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                হ্যাঁ, রিসেট করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
