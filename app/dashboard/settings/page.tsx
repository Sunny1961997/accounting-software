'use client';

import { useState } from 'react';

interface ToggleSetting {
  id: string;
  label: string;
  tooltip?: string;
  enabled: boolean;
  type?: 'toggle' | 'radio' | 'select' | 'number';
  value?: string | number;
  options?: string[];
}

interface SettingsSection {
  title: string;
  settings: ToggleSetting[];
}

const initialSections: SettingsSection[] = [
  {
    title: 'পণ্য সমূহ',
    settings: [
      { id: 'sku', label: 'পরিচিত', enabled: true, type: 'toggle' },
      { id: 'unit', label: 'ইউনিট', enabled: false, type: 'radio' },
      { id: 'item_type', label: 'আইটেমের ধরন', tooltip: 'পণ্য', enabled: true, type: 'select', value: 'পণ্য', options: ['পণ্য', 'সেবা'] },
      { id: 'category', label: 'উপকরণ প্রকৃতি', enabled: false, type: 'radio' },
      { id: 'brand', label: 'মোবাইল মডেলিং প্রকৃতি', enabled: false, type: 'radio' },
      { id: 'size', label: 'সাইজ', enabled: false, type: 'radio' },
      { id: 'stock_alert', label: 'স্টক এলার্টমেন্ট', enabled: true, type: 'toggle' },
      { id: 'hsn_code', label: 'এইচএস কোড', enabled: false, type: 'toggle' },
      { id: 'item_barcode', label: 'আইটেম বারকোড', enabled: false, type: 'radio' },
      { id: 'auto_stock', label: 'বিক্রয় মূল্য দেখান', enabled: true, type: 'toggle' },
      { id: 'mrp', label: 'গড়ানোর / যাত্র', enabled: false, type: 'radio' },
      { id: 'purchase_price', label: 'ক্রয়মূল্য', enabled: false, type: 'radio' },
      { id: 'godown', label: 'গোডাউন', enabled: false, type: 'radio' },
      { id: 'discount', label: 'ডিসকাউন্ট', enabled: false, type: 'radio' },
      { id: 'price_variation', label: 'পণ্য মূল্য বিভিন্ন প্রকৃতি', tooltip: 'নও উৎপাদন শুদ্ধি', enabled: true, type: 'toggle' },
      { id: 'low_stock_alert', label: 'বিক্রয় মূল্য দেখান', enabled: true, type: 'toggle' },
      { id: 'warranty', label: 'ওয়ারেন্টি', enabled: false, type: 'radio' },
      { id: 'batch', label: 'দাম পরিবর্তন', enabled: false, type: 'radio' },
      { id: 'serial_no', label: 'এক্সপায়ারি / যাত্র', enabled: false, type: 'radio' },
      { id: 'opening_stock', label: 'ক্রয় মূল্য দেখান', enabled: false, type: 'radio' },
      { id: 'item_image', label: 'দ্বৈত মূল্য', enabled: false, type: 'radio' },
      { id: 'print_sku', label: 'প্রিন্ট এস কে ইউ / কোড অনুযায়ী', enabled: true, tooltip: 'এক পণ্যে সর্বোচ্চ কতগুলি বিক্রয় মূল্য রাখবেন', type: 'number', value: 1 },
      { id: 'max_price', label: 'এক পণ্যে সর্বোচ্চ কতগুলি মূল্য রাখবেন', enabled: false, type: 'number', value: 10 },
    ],
  },
  {
    title: 'পার্টি সমূহ',
    settings: [
      { id: 'party_group', label: 'পার্টি গ্রুপিং', enabled: false, type: 'radio' },
      { id: 'address', label: 'এডড্রেস টাইপিং', enabled: false, type: 'radio' },
    ],
  },
  {
    title: 'লেনদেন',
    settings: [
      { id: 'inv_prefix', label: 'ইনভয়েস নম্বর প্রিফিক্স যুক্ত করুন', enabled: false, type: 'toggle' },
      { id: 'challan', label: 'লেনদেন অনুযায়ী ডিসকাউন্ট', enabled: true, type: 'toggle' },
      { id: 'transport', label: 'আইটেমের কার্ট মূল্য দেখান', enabled: false, type: 'radio' },
      { id: 'eway_bill', label: 'লেনদেনে স্টক ব্যালেন্স দেখান', enabled: true, type: 'toggle' },
      { id: 'sales_return', label: 'বিক্রি বিজ্ঞপ্তি তৈরি বাটন দেখান', enabled: true, type: 'toggle' },
      { id: 'purchase_return', label: 'লেনদেনে আইটেম রিমার্ক দেখান', enabled: false, type: 'radio' },
      { id: 'inv_auto', label: 'লেনদেনে লেনদেনের নোট দেখান', enabled: false, type: 'radio' },
      { id: 'payment', label: 'ইনভয়েস সাথে পেমেন্ট চান', enabled: true, type: 'toggle' },
      { id: 'round_off', label: 'গড়ানোর সর্বনিম্ন মূল্য টাইপ', enabled: false, type: 'radio' },
      { id: 'delivery', label: 'মোবাইল কমা ক্যাশ মোবাইল দেখান', enabled: false, type: 'radio' },
      { id: 'signature', label: 'সর্বনিয়ামত চার্জ', enabled: false, type: 'radio' },
      { id: 'terms', label: 'সর্বনিদের কাজ দিবেন্ডিশন', enabled: false, type: 'radio' },
      { id: 'max_inv_price', label: 'প্রাথমিক ইনভয়েস নম্বর মোট মান', enabled: false, type: 'number', value: 1000 },
    ],
  },
  {
    title: 'এক্সপোর্ট ও প্রিন্টিং',
    settings: [
      { id: 'print_logo', label: 'পিডিএফের লোগো', enabled: true, type: 'toggle' },
      { id: 'print_party', label: 'এক্সপোর্টে নাম কোম্পানি মান', enabled: true, type: 'toggle' },
      { id: 'print_item', label: 'এক্সপোর্টে বিক্রয় কোম্পানি মান', enabled: true, type: 'toggle' },
      { id: 'print_footer', label: 'এক্সপোর্টে প্রতিষ্ঠান রসিদ মান', enabled: true, type: 'toggle' },
      { id: 'company_name', label: 'ইনভয়েসে পরিচালকের পরিচালতি মান', enabled: true, type: 'toggle' },
      { id: 'phone', label: 'ইনভয়েসে চালান পরিচালতি মান', enabled: false, type: 'toggle' },
      { id: 'address_print', label: 'লোগো চিত্রিত নাম্বার মান', enabled: false, type: 'toggle' },
      { id: 'qr_code', label: 'স্বাক্ষর চিত্রিত নাম্বার মান', enabled: false, type: 'toggle' },
      { id: 'signature_print', label: 'স্বাক্ষর প্রকাশিত দাম দেখান', enabled: true, type: 'toggle' },
      { id: 'dup_copy', label: 'ডুপলি দেখান', enabled: true, type: 'toggle' },
      { id: 'remarks', label: 'সাদামান দেখান', enabled: true, type: 'toggle' },
    ],
  },
];

export default function SettingsPage() {
  const [sections, setSections] = useState<SettingsSection[]>(initialSections);

  const handleToggle = (sectionIndex: number, settingId: string) => {
    setSections((prev) =>
      prev.map((section, si) => {
        if (si !== sectionIndex) return section;
        return {
          ...section,
          settings: section.settings.map((s) =>
            s.id === settingId ? { ...s, enabled: !s.enabled } : s
          ),
        };
      })
    );
  };

  const handleNumberChange = (sectionIndex: number, settingId: string, value: number) => {
    setSections((prev) =>
      prev.map((section, si) => {
        if (si !== sectionIndex) return section;
        return {
          ...section,
          settings: section.settings.map((s) =>
            s.id === settingId ? { ...s, value } : s
          ),
        };
      })
    );
  };

  const handleSave = (sectionTitle: string) => {
    alert(`${sectionTitle} সেটিংস সেভ হয়েছে`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">সেটিংস</h1>

      {sections.map((section, sectionIndex) => (
        <div key={section.title} className="mb-8">
          <div className="bg-purple-50 border border-purple-200 rounded-t-lg px-6 py-3">
            <h2 className="text-base font-bold text-purple-800">{section.title}</h2>
          </div>
          <div className="bg-white rounded-b-lg shadow border border-t-0 border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              {section.settings.map((setting) => (
                <div key={setting.id} className="flex items-center justify-between gap-2 min-h-[36px]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm text-black">{setting.label}</span>
                    {setting.tooltip && (
                      <span className="text-gray-400 text-xs cursor-help" title={setting.tooltip}>ⓘ</span>
                    )}
                  </div>
                  {setting.type === 'number' ? (
                    <input
                      type="number"
                      value={setting.value as number}
                      onChange={(e) => handleNumberChange(sectionIndex, setting.id, Number(e.target.value))}
                      className="w-20 px-2 py-1 border border-gray-300 rounded text-sm text-right focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
                    />
                  ) : setting.type === 'radio' ? (
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={setting.enabled}
                        onChange={() => handleToggle(sectionIndex, setting.id)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-500"></div>
                    </label>
                  ) : (
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={setting.enabled}
                        onChange={() => handleToggle(sectionIndex, setting.id)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-500"></div>
                    </label>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button
                onClick={() => handleSave(section.title)}
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition text-sm"
              >
                সেভ করুন
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
