'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [phoneEmail, setPhoneEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneEmail.trim()) {
      setError('ফোন নম্বর অবশ্যই দিতে হবে');
      return;
    }
    
    setError('');
    // Redirect to dashboard
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        {/* Logo */}
        <div className="flex justify-end mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="6" cy="6" r="1.5" fill="currentColor" />
              <circle cx="18" cy="6" r="1.5" fill="currentColor" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              <circle cx="6" cy="18" r="1.5" fill="currentColor" />
              <circle cx="18" cy="18" r="1.5" fill="currentColor" />
              <path d="M6 6L6 18M18 6L18 18M6 6L18 6M6 18L18 18M12 6L12 18" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">লগ ইন</h1>
        <p className="text-gray-600 mb-6">আপনার ব্যবসায়ীত লগ ইন করুন</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={phoneEmail}
              onChange={(e) => {
                setPhoneEmail(e.target.value);
                setError('');
              }}
              placeholder="ফোন নম্বর (e.g. 017xxxxxxxx) / ইমেইল"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-gray-900"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-md hover:from-purple-600 hover:to-purple-700 transition font-medium"
          >
            প্রবেশ করুন
          </button>

          <p className="text-center text-sm text-gray-600">
            কোন ব্যবসায়ীত নেই?{' '}
            <Link href="/register" className="text-purple-600 hover:text-purple-700 font-medium">
              আপনার ব্যবসায়ীত তৈরি করুন
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
