'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItem {
  label: string;
  href?: string;
  icon: string;
  children?: MenuItem[];
  badge?: boolean;
}

const menuItems: MenuItem[] = [
  { label: 'ড্যাশবোর্ড', href: '/dashboard', icon: '🏠' },
  {
    label: 'পণ্য সমূহ',
    icon: '📦',
    children: [
      { label: 'নতুন পণ্য', href: '/dashboard/products/new', icon: '➕' },
      { label: 'স্টক পরিবর্তন', href: '/dashboard/products/stock-change', icon: '🔄', badge: true },
    ],
    href: '/dashboard/products',
  },
  { label: 'পার্টি সমূহ', href: '/dashboard/parties', icon: '👥', badge: true },
  {
    label: 'বিক্রয়',
    icon: '🛒',
    children: [
      { label: 'নতুন বিক্রয়', href: '/dashboard/sales/new', icon: '➕' },
      { label: 'বিক্রি রিটার্ন', href: '/dashboard/sales/returns', icon: '↩️', badge: true },
      { label: 'বাকি আদায়', href: '/dashboard/sales/due-collection', icon: '💰', badge: true },
    ],
    href: '/dashboard/sales',
  },
  {
    label: 'ক্রয়',
    icon: '🛍️',
    children: [
      { label: 'নতুন ক্রয়', href: '/dashboard/purchase/new', icon: '➕' },
      { label: 'ক্রয় রিটার্ন', href: '/dashboard/purchase/returns', icon: '↩️', badge: true },
      { label: 'বাকি পরিশোধ', href: '/dashboard/purchase/due-payment', icon: '💰', badge: true },
    ],
    href: '/dashboard/purchase',
  },
  {
    label: 'খরচ',
    icon: '💸',
    children: [
      { label: 'খরচ যুক্ত করুন', href: '/dashboard/expense/add', icon: '➕' },
      { label: 'খরচের ক্যাটাগরি', href: '/dashboard/expense/categories', icon: '📂' },
    ],
    href: '/dashboard/expense',
  },
  { label: 'বাকির হিসাব', href: '/dashboard/due-accounts', icon: '📒' },
  { label: 'ক্যাশ মিলাই', href: '/dashboard/cash-adjustment', icon: '💵' },
  {
    label: 'ব্যাংক লেনদেন',
    icon: '🏛️',
    children: [
      { label: 'ব্যাংক সমূহ', href: '/dashboard/bank-transactions/banks', icon: '🏦', badge: true },
    ],
    href: '/dashboard/bank-transactions',
  },
  {
    label: 'ইউটিলিটিস',
    icon: '🔧',
    children: [
      { label: 'ইমপোর্ট আইটেম', href: '/dashboard/utilities/import-items', icon: '📥' },
      { label: 'আইটেম এক্সপোর্ট', href: '/dashboard/utilities/item-export', icon: '📤' },
      { label: 'পার্টি ইমপোর্ট', href: '/dashboard/utilities/party-import', icon: '📥' },
      { label: 'পার্টি এক্সপোর্ট', href: '/dashboard/utilities/party-export', icon: '📤' },
      { label: 'রিসেট একাউন্ট', href: '/dashboard/utilities/reset-account', icon: '🔄' },
    ],
  },
  { label: 'রিপোর্টস', href: '/dashboard/reports', icon: '📊' },
  { label: 'মেসেজ কিনি', href: '/dashboard/messages', icon: '✉️' },
  { label: 'সেটিংস', href: '/dashboard/settings', icon: '⚙️' },
  { label: 'টিউটোরিয়াল', href: '/dashboard/tutorial', icon: '🎓' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['খরচ', 'ক্রয়', 'ব্যাংক লেনদেন']);

  const toggleMenu = (label: string) => {
    setExpandedMenus((prev) =>
      prev.includes(label) ? prev.filter((m) => m !== label) : [...prev, label]
    );
  };

  const isActive = (href?: string) => {
    if (!href) return false;
    return pathname === href;
  };

  const isParentActive = (item: MenuItem) => {
    if (item.href && pathname === item.href) return true;
    if (item.children) {
      return item.children.some((child) => child.href && pathname === child.href);
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-16'
        } bg-gradient-to-b from-purple-600 via-purple-700 to-purple-800 text-white transition-all duration-300 flex flex-col fixed h-full z-40`}
      >
        {/* Logo Area */}
        <div className="p-4 flex items-center justify-between border-b border-purple-500/30">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-lg">📊</span>
              </div>
              <span className="font-bold text-sm">হিসাবকারখানা</span>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white/70 hover:text-white text-lg"
          >
            {sidebarOpen ? '«' : '»'}
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto py-2">
          {menuItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.label)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-white/10 transition ${
                      isParentActive(item) ? 'bg-white/15 text-white' : 'text-white/80'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    {sidebarOpen && (
                      <>
                        <span className="flex-1 text-left">{item.label}</span>
                        <span className="text-xs">
                          {expandedMenus.includes(item.label) ? '▼' : '‹'}
                        </span>
                      </>
                    )}
                  </button>
                  {sidebarOpen && expandedMenus.includes(item.label) && (
                    <div className="bg-white/5">
                      {item.href && (
                        <Link
                          href={item.href}
                          className={`flex items-center gap-3 pl-12 pr-4 py-2 text-sm transition ${
                            isActive(item.href)
                              ? 'bg-white/20 text-white font-medium'
                              : 'text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <span>{item.label}</span>
                        </Link>
                      )}
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href || '#'}
                          className={`flex items-center gap-3 pl-12 pr-4 py-2 text-sm transition ${
                            isActive(child.href)
                              ? 'bg-white/20 text-white font-medium'
                              : 'text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <span>{child.label}</span>
                          {child.badge && (
                            <span className="ml-auto w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs">
                              ⊕
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href || '#'}
                  className={`flex items-center gap-3 px-4 py-2.5 text-sm transition ${
                    isActive(item.href)
                      ? 'bg-white/20 text-white font-medium'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {sidebarOpen && (
                    <>
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="ml-auto w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs">
                          ⊕
                        </span>
                      )}
                    </>
                  )}
                </Link>
              )}

              {/* Separator after certain items */}
              {(item.label === 'ব্যাংক লেনদেন') && (
                <div className="mx-4 my-2 border-t border-white/20 border-dashed" />
              )}
            </div>
          ))}
        </nav>

        {/* Package Info */}
        {sidebarOpen && (
          <div className="px-4 py-3 border-t border-purple-500/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-white/60">বর্তমান প্যাকেজ</span>
              <button className="bg-green-500 text-white text-xs px-3 py-1 rounded-full hover:bg-green-600 transition">
                সাবস্ক্রাইব
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        {sidebarOpen && (
          <div className="p-4 border-t border-purple-500/30">
            <div className="flex items-center justify-between text-xs text-white/60">
              <span className="font-bold text-white/80">হিসাবকারখানা</span>
              <span>ভার্সন: 2.5.06</span>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-16'} transition-all duration-300`}>
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-30">
          <div></div>
          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition text-sm flex items-center gap-2">
              🛒 কিনুন
            </button>
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition text-sm flex items-center gap-2">
              🛍️ বিক্রি করুন
            </button>
            <button className="text-gray-400 hover:text-gray-600 text-xl">⚙️</button>
            <button className="text-gray-400 hover:text-gray-600 text-xl">🔔</button>
            <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">EN</button>
            <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500">👤</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>

        {/* Footer */}
        <footer className="px-6 py-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
          <span>
            কপিরাইট © ২০২৬
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            ইন্টারনেটে সংযুক্ত
          </span>
        </footer>
      </div>
    </div>
  );
}
