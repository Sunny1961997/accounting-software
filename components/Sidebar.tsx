'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<{[key: string]: boolean}>({});

  const toggleMenu = (href: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [href]: !prev[href]
    }));
  };

  const menuItems = [
    { href: '/dashboard', label: 'ড্যাশবোর্ড', icon: '🏠' },
    { href: '/parties', label: 'পার্টি সমূহ', icon: '👥' },
    { 
      href: '/products', 
      label: 'পণ্য সমূহ', 
      icon: '📦',
      hasSubmenu: true,
      submenu: [
        { href: '/products', label: 'পণ্য সমূহ' },
        { href: '/products/stock-transaction', label: 'স্টক পরিবর্তন' }
      ]
    },
    { 
      href: '/bills', 
      label: 'বিক্রয়', 
      icon: '📄',
      hasSubmenu: true,
      submenu: [
        { href: '/bills/new', label: 'নতুন বিক্রয়' },
        { href: '/bills/return', label: 'বিক্রি রিটার্ন' }
      ]
    },
    { 
      href: '/purchase', 
      label: 'ক্রয়', 
      icon: '🛒',
      hasSubmenu: true,
      submenu: [
        { href: '/purchase/new', label: 'নতুন ক্রয়' },
        { href: '/purchase/return', label: 'ক্রয় রিটার্ন' }
      ]
    },
    { 
      href: '/cash', 
      label: 'নগদ', 
      icon: '💰',
      hasSubmenu: true,
      submenu: [
        { href: '/cash/bank-collection', label: 'ব্যাংক আদায়' },
        { href: '/cash/bank-disbursement', label: 'ব্যাংক পরিশোধ' }
      ]
    },
    { href: '/expenses', label: 'খরচ', icon: '💳' },
    { href: '/reports', label: 'রিপোর্ট', icon: '📊' },
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-purple-600 to-purple-700 min-h-screen text-white flex flex-col">
      {/* Company Logo & Name */}
      <div className="p-4 border-b border-purple-500">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="6" cy="6" r="1.5" fill="currentColor" />
              <circle cx="18" cy="6" r="1.5" fill="currentColor" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              <circle cx="6" cy="18" r="1.5" fill="currentColor" />
              <circle cx="18" cy="18" r="1.5" fill="currentColor" />
              <path d="M6 6L6 18M18 6L18 18M6 6L18 6M6 18L18 18M12 6L12 18" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <h2 className="font-bold text-sm">M/S NAHAR ENTERPRISE</h2>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-4">
        {menuItems.map((item) => (
          <div key={item.href}>
            {item.hasSubmenu ? (
              <>
                <button
                  onClick={() => toggleMenu(item.href)}
                  className={`w-full flex items-center justify-between gap-3 px-4 py-3 hover:bg-purple-500/50 transition ${
                    pathname.startsWith(item.href) ? 'bg-purple-500/50 border-l-4 border-white' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </div>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {openMenus[item.href] ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    )}
                  </svg>
                </button>
                {openMenus[item.href] && (
                  <div className="bg-purple-700/30">
                    {item.submenu?.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`block pl-14 pr-4 py-2 text-sm hover:bg-purple-500/50 transition ${
                          pathname === subItem.href ? 'bg-purple-500/50' : ''
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 hover:bg-purple-500/50 transition ${
                  pathname === item.href ? 'bg-purple-500/50 border-l-4 border-white' : ''
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-purple-500 text-xs text-center">
        <p>কপিরাইট © ২০২৬ </p>
        <p className="mt-1">সময়: ২.৫.০৬</p>
      </div>
    </div>
  );
}
