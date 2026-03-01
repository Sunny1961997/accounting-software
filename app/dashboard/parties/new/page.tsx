'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewPartyPage() {
  const router = useRouter();
  const [partyType, setPartyType] = useState<'CUSTOMER' | 'SUPPLIER'>('CUSTOMER');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [openingBalance, setOpeningBalance] = useState(0);
  const [nameError, setNameError] = useState(false);

  const handleSave = () => {
    if (!name.trim()) {
      setNameError(true);
      return;
    }
    setNameError(false);
    alert('পার্টি সেভ হয়েছে');
    router.push('/dashboard/parties');
  };

  const handleSaveAndNew = () => {
    if (!name.trim()) {
      setNameError(true);
      return;
    }
    setNameError(false);
    alert('পার্টি সেভ হয়েছে');
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setOpeningBalance(0);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">পার্টি সমূহ / নতুন পার্টি</h1>

      <div className="bg-white rounded-lg shadow">
        {/* Section Header */}
        <div className="bg-purple-50 border-b border-purple-200 px-6 py-3 rounded-t-lg">
          <h2 className="text-base font-bold text-purple-800">নতুন পার্টি</h2>
        </div>

        <div className="p-6">
          {/* Party Type */}
          <div className="flex items-center gap-6 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="partyType"
                checked={partyType === 'CUSTOMER'}
                onChange={() => setPartyType('CUSTOMER')}
                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-black">কাস্টমার</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="partyType"
                checked={partyType === 'SUPPLIER'}
                onChange={() => setPartyType('SUPPLIER')}
                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-black">সাপ্লায়ার</span>
            </label>
          </div>

          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="text-sm text-black mb-1 block">নাম</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (e.target.value.trim()) setNameError(false);
                }}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black ${
                  nameError ? 'border-red-400' : 'border-gray-300'
                }`}
              />
              {nameError && (
                <p className="text-xs text-red-500 mt-1">নাম অবশ্যই দিতে হবে</p>
              )}
            </div>
            <div>
              <label className="text-sm text-black mb-1 block">ফোন নম্বর</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="text-sm text-black mb-1 block">ইমেইল</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
              />
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                <label className="text-sm text-black">আগের দেনা</label>
                <span className="text-gray-400 text-xs cursor-help" title="পার্টির আগের দেনা/বাকি পরিমাণ">ⓘ</span>
              </div>
              <input
                type="number"
                value={openingBalance}
                onChange={(e) => setOpeningBalance(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-gray-300 my-6"></div>

          {/* Address */}
          <div className="mb-6">
            <label className="text-sm text-black mb-1 block">ঠিকানা</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none text-black"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-200">
            <button
              onClick={handleSaveAndNew}
              className="px-6 py-2.5 border border-purple-400 text-purple-600 rounded-lg hover:bg-purple-50 transition text-sm font-medium"
            >
              সেভ ও নতুন
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2.5 bg-gradient-to-r from-purple-400 to-purple-500 text-white rounded-lg hover:from-purple-500 hover:to-purple-600 transition text-sm font-medium"
            >
              সেভ করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
