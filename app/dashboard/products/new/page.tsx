'use client';

import { useState, useRef } from 'react';

export default function NewProductPage() {
  const [productType, setProductType] = useState<'পণ্য' | 'সেবা'>('পণ্য');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [openingStock, setOpeningStock] = useState(0);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [activeToggle, setActiveToggle] = useState(true);
  const [nameError, setNameError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!name.trim()) {
      setNameError(true);
      return;
    }
    setNameError(false);
    alert('পণ্য সেভ হয়েছে');
  };

  const handleSaveAndNew = () => {
    if (!name.trim()) {
      setNameError(true);
      return;
    }
    setNameError(false);
    alert('পণ্য সেভ হয়েছে');
    setName('');
    setCode('');
    setPurchasePrice(0);
    setSalePrice(0);
    setOpeningStock(0);
    setImage(null);
    setImagePreview(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">পণ্য সমূহ / নতুন পণ্য</h1>

      <div className="bg-white rounded-lg shadow">
        {/* Section Header */}
        <div className="bg-purple-50 border-b border-purple-200 px-6 py-3 rounded-t-lg">
          <h2 className="text-base font-bold text-purple-800">নতুন পণ্য</h2>
        </div>

        <div className="p-6">
          {/* Product Type & Active Toggle */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="productType"
                  checked={productType === 'পণ্য'}
                  onChange={() => setProductType('পণ্য')}
                  className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm text-black">পণ্য</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="productType"
                  checked={productType === 'সেবা'}
                  onChange={() => setProductType('সেবা')}
                  className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm text-black">সেবা</span>
              </label>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-black">সক্রিয়:</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={activeToggle}
                  onChange={() => setActiveToggle(!activeToggle)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                <span className="ml-2 text-xs font-semibold text-green-600">
                  {activeToggle ? 'YES' : 'NO'}
                </span>
              </label>
            </div>
          </div>

          {/* Name & Code */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
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
              <div className="flex items-center gap-1 mb-1">
                <label className="text-sm text-black">কোড</label>
                <span className="text-gray-400 text-xs cursor-help" title="পণ্যের কোড">ⓘ</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="ex: PS-101"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black placeholder:text-gray-400"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M2 6h2v12H2zM5 6h1v12H5zM7 6h3v12H7zM11 6h1v12h-1zM13 6h2v12h-2zM16 6h1v12h-1zM18 6h2v12h-2zM21 6h1v12h-1z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-gray-300 my-6"></div>

          {/* মূল্য নির্ধারণ */}
          <h3 className="text-base font-bold text-black mb-4">মূল্য নির্ধারণ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
            <div>
              <div className="flex items-center gap-1 mb-1">
                <label className="text-sm text-black">ক্রয় মূল্য</label>
                <span className="text-gray-400 text-xs cursor-help" title="পণ্যের ক্রয় মূল্য">ⓘ</span>
              </div>
              <input
                type="number"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
              />
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                <label className="text-sm text-black">বিক্রির মূল্য</label>
                <span className="text-gray-400 text-xs cursor-help" title="পণ্যের বিক্রি মূল্য">ⓘ</span>
              </div>
              <input
                type="number"
                value={salePrice}
                onChange={(e) => setSalePrice(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-gray-300 my-6"></div>

          {/* স্টক */}
          <h3 className="text-base font-bold text-black mb-4">স্টক</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
            <div>
              <div className="flex items-center gap-1 mb-1">
                <label className="text-sm text-black">আগের মজুদ</label>
                <span className="text-gray-400 text-xs cursor-help" title="পণ্যের আগের মজুদ পরিমাণ">ⓘ</span>
              </div>
              <input
                type="number"
                value={openingStock}
                onChange={(e) => setOpeningStock(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-gray-300 my-6"></div>

          {/* ছবি */}
          <div className="mb-6">
            <div className="flex items-center gap-1 mb-3">
              <h3 className="text-base font-bold text-black">ছবি</h3>
              <span className="text-gray-400 text-xs cursor-help" title="পণ্যের ছবি">ⓘ</span>
            </div>
            <div className="border-b border-dashed border-gray-300 mb-4 w-96"></div>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-40 h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-purple-400 transition bg-gray-50 relative"
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
              ) : (
                <div className="relative">
                  <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">+</span>
                  </div>
                </div>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
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
