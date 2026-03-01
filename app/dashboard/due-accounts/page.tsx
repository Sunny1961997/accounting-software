'use client';

import { useState } from 'react';

interface DueAccount {
  id: number;
  name: string;
  partyType: string;
  phoneNumber: string;
  email: string;
  balance: number;
  location?: string;
}

const initialAccounts: DueAccount[] = [
  { id: 1, name: 'A.H Distributor', partyType: 'CUSTOMER', phoneNumber: '', email: '', balance: -2975074.00 },
  { id: 2, name: 'Aman Electric', partyType: 'CUSTOMER', phoneNumber: '', email: '', balance: -1.00 },
  { id: 3, name: 'Arafat Tred.', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: -7601776.00 },
  { id: 4, name: 'Babul Bag', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: -21000.00 },
  { id: 5, name: 'Basul Tred', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: -10261.00 },
  { id: 6, name: 'Best Watch', partyType: 'CUSTOMER', phoneNumber: '', email: '', balance: -210240.00 },
  { id: 7, name: 'Bomer Poultry', partyType: 'CUSTOMER', phoneNumber: '', email: '', balance: -500000.00 },
  { id: 8, name: 'Darbar Tred', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: -1386.00 },
  { id: 9, name: 'Dhaka Multi Feed', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: -714968.00 },
  { id: 10, name: 'Garo Vendor(KG)', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: -1612710.00 },
  { id: 11, name: 'Fest Tred(Jibon Bag)', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: -60670.00 },
  { id: 12, name: 'Ismail Bag', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: -1054.00 },
  { id: 13, name: 'Kazi Feed', partyType: 'CUSTOMER', phoneNumber: '', email: '', balance: -42006213.00 },
  { id: 14, name: 'Litton Chose Bag', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: -5.00 },
  { id: 15, name: 'M S Kashmir Tred', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: -11409530.00 },
  { id: 16, name: 'M/s Nazrul Tred', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: -10196574.25, location: 'Haidergonj Bazar' },
  { id: 17, name: 'Mahmud & co.', partyType: 'CUSTOMER', phoneNumber: '', email: '', balance: -1030.00 },
  { id: 18, name: 'Mamnat Enterprise', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: -426115.50 },
  { id: 19, name: 'Marman Tred', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: -5792826.67, location: 'Haidergonj Bazar' },
  { id: 20, name: 'MIM Enterprise', partyType: 'CUSTOMER', phoneNumber: '', email: '', balance: -152.50 },
];

export default function DueAccountsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [partyFilter, setPartyFilter] = useState('সকল পার্টি সমূহ');
  const [sortFilter, setSortFilter] = useState('উচ্চ বাকিওয়ালা প্রথম');
  const [accounts] = useState<DueAccount[]>(initialAccounts);

  const filteredAccounts = accounts.filter((a) =>
    a.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalCustomer = filteredAccounts
    .filter((a) => a.partyType === 'CUSTOMER')
    .reduce((sum, a) => sum + Math.abs(a.balance), 0);
  const totalSupplier = filteredAccounts
    .filter((a) => a.partyType === 'SUPPLIER')
    .reduce((sum, a) => sum + Math.abs(a.balance), 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-black">বাকির হিসাব</h1>
        <div className="flex gap-3">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
            এক্সপোর্ট তালিকা
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition">
            এসএমএস পাঠিয়ে দিন
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="relative flex-1 min-w-[200px]">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="পার্টি নাম, ফোন নম্বর বা ইমেইল"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
          />
        </div>
        <select
          value={partyFilter}
          onChange={(e) => setPartyFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
        >
          <option>সকল পার্টি সমূহ</option>
          <option>CUSTOMER</option>
          <option>SUPPLIER</option>
        </select>
        <select
          value={sortFilter}
          onChange={(e) => setSortFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
        >
          <option>উচ্চ বাকিওয়ালা প্রথম</option>
          <option>নিম্ন বাকিওয়ালা প্রথম</option>
          <option>নাম অনুসারে</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-purple-50">
              <th className="text-left px-4 py-3 text-sm font-semibold text-black w-12">ক্রম</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-black">নাম</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-black">পার্টি ধরন</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-black">ফোন নম্বর</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-black">ইমেইল</th>
              <th className="text-right px-4 py-3 text-sm font-semibold text-black">ব্যালেন্স</th>
              <th className="text-right px-4 py-3 text-sm font-semibold text-black">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody>
            {filteredAccounts.map((account, index) => (
              <tr key={account.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-black">{index + 1}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="text-purple-600 font-medium">{account.name}</div>
                  {account.location && (
                    <div className="text-xs text-gray-400">{account.location}</div>
                  )}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      account.partyType === 'CUSTOMER'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {account.partyType}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-black">{account.phoneNumber || '-'}</td>
                <td className="px-4 py-3 text-sm text-black">{account.email || '-'}</td>
                <td className="px-4 py-3 text-sm text-right font-medium text-red-600">
                  ৳ {Math.abs(account.balance).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
                <td className="px-4 py-3 text-right">
                  <span className="text-green-500">✓</span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 font-semibold">
              <td colSpan={5} className="px-4 py-3 text-sm text-black">মোট পাওনা</td>
              <td className="px-4 py-3 text-sm text-right text-red-600">
                ৳ {totalCustomer.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </td>
              <td></td>
            </tr>
            <tr className="bg-gray-50 font-semibold">
              <td colSpan={5} className="px-4 py-3 text-sm text-black">মোট দেনা</td>
              <td className="px-4 py-3 text-sm text-right text-red-600">
                ৳ {totalSupplier.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
