'use client';

import Link from 'next/link';

interface ReportCard {
  label: string;
  icon: string;
  href: string;
  color: string;
}

const transactionReports: ReportCard[] = [
  { label: 'বিক্রয়', icon: '📊', href: '/dashboard/reports/sales', color: 'bg-blue-100 text-blue-600' },
  { label: 'ক্রয়', icon: '🛍️', href: '/dashboard/reports/purchases', color: 'bg-green-100 text-green-600' },
  { label: 'লাভ-ক্ষতি', icon: '📈', href: '/dashboard/reports/profit-loss', color: 'bg-purple-100 text-purple-600' },
  { label: 'বিক্রয় অনুযায়ী লাভ ক্ষতি', icon: '📉', href: '/dashboard/reports/sales-profit-loss', color: 'bg-orange-100 text-orange-600' },
  { label: 'ক্যাশ বিবরণী/ক্যাশ ফ্লো', icon: '💰', href: '/dashboard/reports/cash-flow', color: 'bg-teal-100 text-teal-600' },
  { label: 'দৈনিক বিক্রয়ীদের ড্রপ', icon: '📅', href: '/dashboard/reports/daily-sales', color: 'bg-indigo-100 text-indigo-600' },
  { label: 'মোবাইল ব্যাংকিং রিপোর্ট', icon: '📱', href: '/dashboard/reports/mobile-banking', color: 'bg-pink-100 text-pink-600' },
  { label: 'ব্যাংক লেনদেন রিপোর্ট', icon: '🏛️', href: '/dashboard/reports/bank-transactions', color: 'bg-cyan-100 text-cyan-600' },
  { label: 'ক্যাশ সমন্বয়ের রিপোর্ট', icon: '🔄', href: '/dashboard/reports/cash-adjustment', color: 'bg-amber-100 text-amber-600' },
  { label: 'ব্যালেন্স শীট', icon: '📋', href: '/dashboard/reports/balance-sheet', color: 'bg-lime-100 text-lime-600' },
];

const itemStockReports: ReportCard[] = [
  { label: 'স্টক সামারি', icon: '📦', href: '/dashboard/reports/stock-summary', color: 'bg-rose-100 text-rose-600' },
  { label: 'স্টক পরিবর্তনের রিপোর্ট', icon: '🔃', href: '/dashboard/reports/stock-changes', color: 'bg-emerald-100 text-emerald-600' },
  { label: 'আইটেমের বিস্তারিত', icon: '📝', href: '/dashboard/reports/item-details', color: 'bg-sky-100 text-sky-600' },
  { label: 'পার্টি অনুযায়ী আইটেম রিপোর্ট', icon: '👥', href: '/dashboard/reports/party-item', color: 'bg-violet-100 text-violet-600' },
  { label: 'পণ্য অনুযায়ী দাম চার্ট', icon: '💲', href: '/dashboard/reports/price-chart', color: 'bg-fuchsia-100 text-fuchsia-600' },
  { label: 'আইটেম অনুযায়ী বিক্রয় রিপোর্ট', icon: '📊', href: '/dashboard/reports/item-sales', color: 'bg-red-100 text-red-600' },
  { label: 'আইটেম অনুযায়ী ক্রয় রিপোর্ট', icon: '🛒', href: '/dashboard/reports/item-purchases', color: 'bg-blue-100 text-blue-600' },
];

const partyReports: ReportCard[] = [
  { label: 'পার্টি স্টেটমেন্ট', icon: '📄', href: '/dashboard/reports/party-statement', color: 'bg-purple-100 text-purple-600' },
  { label: 'সকল পার্টি', icon: '👥', href: '/dashboard/reports/all-parties', color: 'bg-green-100 text-green-600' },
  { label: 'আইটেম অনুযায়ী পার্টি রিপোর্ট', icon: '📋', href: '/dashboard/reports/item-party', color: 'bg-blue-100 text-blue-600' },
  { label: 'পার্টি অনুযায়ী ক্রয়-বিক্রয়', icon: '💼', href: '/dashboard/reports/party-transactions', color: 'bg-orange-100 text-orange-600' },
  { label: 'পার্টি অনুযায়ী দাম চার্ট', icon: '💲', href: '/dashboard/reports/party-price-chart', color: 'bg-pink-100 text-pink-600' },
];

const expenseReports: ReportCard[] = [
  { label: 'খরচ', icon: '💸', href: '/dashboard/reports/expenses', color: 'bg-red-100 text-red-600' },
  { label: 'খরচের ক্যাটাগরি', icon: '📂', href: '/dashboard/reports/expense-categories', color: 'bg-amber-100 text-amber-600' },
  { label: 'খরচের আইটেম', icon: '📝', href: '/dashboard/reports/expense-items', color: 'bg-teal-100 text-teal-600' },
];

function ReportSection({ title, reports }: { title: string; reports: ReportCard[] }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-purple-700 mb-4 border-b-2 border-purple-200 pb-2">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {reports.map((report) => (
          <Link
            key={report.label}
            href={report.href}
            className="bg-white rounded-lg shadow hover:shadow-md transition p-4 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${report.color}`}>
                <span className="text-xl">{report.icon}</span>
              </div>
              <span className="text-sm font-medium text-black">{report.label}</span>
            </div>
            <div className="flex items-center justify-between mt-auto pt-2">
              <span className="text-xs text-gray-400">দেখুন</span>
              <span className="text-gray-400">›</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ReportsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">রিপোর্টস</h1>

      <ReportSection title="লেনদেনের রিপোর্টস" reports={transactionReports} />
      <ReportSection title="আইটেম/স্টক রিপোর্টস" reports={itemStockReports} />
      <ReportSection title="পার্টি রিপোর্টস" reports={partyReports} />
      <ReportSection title="খরচের রিপোর্টস" reports={expenseReports} />
    </div>
  );
}
