'use client';

import { useState, useRef } from 'react';

interface ItemRow {
  id: number;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface PaymentMethod {
  id: number;
  method: string;
  amount: number;
}

export default function NewPurchaseReturnPage() {
  const [partySearch, setPartySearch] = useState('');
  const [returnNo, setReturnNo] = useState('495347619533');
  const [returnDate, setReturnDate] = useState('28-02-2026');
  const [billNo, setBillNo] = useState('');
  const [billDate, setBillDate] = useState('');
  const [isCash, setIsCash] = useState(true);
  const [partyError, setPartyError] = useState(false);

  const [items, setItems] = useState<ItemRow[]>([
    { id: 1, name: '', quantity: 1, price: 0, total: 0 },
  ]);

  const [payments, setPayments] = useState<PaymentMethod[]>([
    { id: 1, method: 'Cash', amount: 0 },
  ]);

  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const totalPrice = items.reduce((sum, item) => sum + item.total, 0);
  const grandTotal = totalPrice;
  const totalPaid = payments.reduce((sum, p) => sum + p.amount, 0);
  const due = grandTotal - totalPaid;

  const handleItemChange = (id: number, field: keyof ItemRow, value: string | number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const updated = { ...item, [field]: value };
        if (field === 'quantity' || field === 'price') {
          updated.total = Number(updated.quantity) * Number(updated.price);
        }
        return updated;
      })
    );
  };

  const addPayment = () => {
    setPayments((prev) => [...prev, { id: Date.now(), method: 'Cash', amount: 0 }]);
  };

  const removePayment = (id: number) => {
    setPayments((prev) => prev.filter((p) => p.id !== id));
  };

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
    if (!isCash && !partySearch.trim()) {
      setPartyError(true);
      return;
    }
    setPartyError(false);
    alert('ক্রয় রিটার্ন সেভ হয়েছে');
  };

  const handleSaveAndNew = () => {
    if (!isCash && !partySearch.trim()) {
      setPartyError(true);
      return;
    }
    setPartyError(false);
    alert('ক্রয় রিটার্ন সেভ হয়েছে');
    setPartySearch('');
    setBillNo('');
    setBillDate('');
    setItems([{ id: 1, name: '', quantity: 1, price: 0, total: 0 }]);
    setPayments([{ id: 1, method: 'Cash', amount: 0 }]);
    setDescription('');
    setImage(null);
    setImagePreview(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">ক্রয় রিটার্ন / নতুন ক্রয় রিটার্ন</h1>

      <div className="bg-white rounded-lg shadow">
        {/* Header */}
        <div className="bg-purple-50 border-b border-purple-200 px-6 py-3 rounded-t-lg flex items-center justify-between">
          <h2 className="text-base font-bold text-purple-800">নতুন ক্রয় রিটার্ন</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-black">ক্যাশ</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={!isCash}
                onChange={() => setIsCash(!isCash)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
            </label>
            <span className="text-sm text-black">ক্রেডিট</span>
          </div>
        </div>

        <div className="p-6">
          {/* Party & Return Info - Row 1 */}
          <div className="flex flex-wrap items-start gap-6 mb-4">
            <div className="flex-1 min-w-[200px]">
              <div className="flex items-center gap-1 mb-1">
                <input
                  type="text"
                  placeholder="পার্টি অনুসন্ধান"
                  value={partySearch}
                  onChange={(e) => {
                    setPartySearch(e.target.value);
                    if (e.target.value.trim()) setPartyError(false);
                  }}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black placeholder:text-gray-400 ${
                    partyError ? 'border-red-400' : 'border-gray-300'
                  }`}
                />
                <span className="text-gray-400 text-xs cursor-help" title="পার্টি নির্বাচন করুন">ⓘ</span>
              </div>
              {partyError && (
                <p className="text-xs text-red-500 mt-1">পার্টি প্রয়োজন</p>
              )}
            </div>
            <div className="flex items-center gap-4">
              <div>
                <label className="text-sm text-black mb-1 block">রিটার্ন নং</label>
                <input
                  type="text"
                  value={returnNo}
                  onChange={(e) => setReturnNo(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black w-44"
                />
              </div>
              <div>
                <label className="text-sm text-black mb-1 block">রিটার্নের তারিখ</label>
                <div className="relative">
                  <input
                    type="text"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black w-44"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">📅</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bill Info - Row 2 */}
          <div className="flex items-center justify-end gap-4 mb-4">
            <div>
              <label className="text-sm text-black mb-1 block">বিল নং</label>
              <input
                type="text"
                value={billNo}
                onChange={(e) => setBillNo(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black w-44"
              />
            </div>
            <div>
              <label className="text-sm text-black mb-1 block">বিলের তারিখ</label>
              <div className="relative">
                <input
                  type="text"
                  value={billDate}
                  onChange={(e) => setBillDate(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black w-44"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">📅</span>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div className="bg-purple-50/50 rounded-lg border border-purple-100 p-4 mb-4">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-xs font-semibold text-black w-8">ক্রম</span>
              <div className="flex items-center gap-1 flex-1">
                <span className="text-xs font-semibold text-black">আইটেম</span>
                <span className="text-gray-400 text-xs cursor-help" title="পণ্য নির্বাচন">ⓘ</span>
              </div>
              <span className="text-xs font-semibold text-black w-28 text-right">পরিমাণ</span>
              <span className="text-xs font-semibold text-black w-28 text-right">মূল্য</span>
              <span className="text-xs font-semibold text-black w-28 text-right">মোট মূল্য</span>
            </div>
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 mb-2">
                <span className="text-sm text-black w-8">#</span>
                <input
                  type="text"
                  placeholder="পণ্য অনুসন্ধান"
                  value={item.name}
                  onChange={(e) => handleItemChange(item.id, 'name', e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black placeholder:text-gray-400"
                />
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(item.id, 'quantity', Number(e.target.value))}
                  className="w-28 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black text-right"
                />
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) => handleItemChange(item.id, 'price', Number(e.target.value))}
                  className="w-28 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black text-right"
                />
                <span className="w-28 text-sm text-black text-right">{item.total}</span>
              </div>
            ))}
          </div>

          {/* Payment & Totals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
            <div className="bg-purple-50/50 rounded-lg border border-purple-100 p-4">
              <div className="flex items-center gap-1 mb-3">
                <span className="text-sm text-black font-medium">পরিশোধের মাধ্যম:</span>
                <span className="text-gray-400 text-xs cursor-help" title="পেমেন্ট পদ্ধতি">ⓘ</span>
              </div>
              {payments.map((payment) => (
                <div key={payment.id} className="flex items-center gap-3 mb-3">
                  <div className="flex-1">
                    <select
                      value={payment.method}
                      onChange={(e) =>
                        setPayments((prev) =>
                          prev.map((p) => (p.id === payment.id ? { ...p, method: e.target.value } : p))
                        )
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
                    >
                      <option>Cash</option>
                      <option>Bank</option>
                      <option>bKash</option>
                      <option>Nagad</option>
                    </select>
                    <input
                      type="number"
                      value={payment.amount}
                      onChange={(e) =>
                        setPayments((prev) =>
                          prev.map((p) => (p.id === payment.id ? { ...p, amount: Number(e.target.value) } : p))
                        )
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black mt-2"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <button onClick={() => removePayment(payment.id)} className="text-gray-400 hover:text-red-500 text-lg">🗑</button>
                    <button onClick={addPayment} className="text-purple-500 hover:text-purple-700 text-lg">+</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-end gap-4">
                <span className="text-sm text-black">দিলাম:</span>
                <div className="flex items-center">
                  <span className="text-sm text-black mr-1">৳</span>
                  <input type="number" value={totalPaid} readOnly className="w-32 px-3 py-2 border border-gray-200 rounded-lg outline-none text-black text-right bg-gray-50" />
                </div>
              </div>
              <div className="flex items-center justify-end gap-4">
                <span className="text-sm text-black">মোট মূল্য:</span>
                <div className="flex items-center">
                  <span className="text-sm text-black mr-1">৳</span>
                  <input type="number" value={totalPrice} readOnly className="w-32 px-3 py-2 border border-gray-200 rounded-lg outline-none text-black text-right bg-gray-50" />
                </div>
              </div>
              <div className="flex items-center justify-end gap-4">
                <span className="text-sm text-black">সর্বমোট মূল্য:</span>
                <div className="flex items-center">
                  <span className="text-sm text-black mr-1">৳</span>
                  <input type="text" value={grandTotal.toFixed(2)} readOnly className="w-32 px-3 py-2 border border-gray-200 rounded-lg outline-none text-black text-right bg-gray-50" />
                </div>
              </div>
              <div className="flex items-center justify-end">
                <span className="text-base font-bold text-black">বাকি: ৳ {due.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Description & Image */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 mb-6">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="বর্ণনা"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none text-black placeholder:text-gray-400"
            />
            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-36 h-28 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-purple-400 transition bg-gray-50 relative"
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
              ) : (
                <div className="relative">
                  <svg className="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">+</span>
                  </div>
                </div>
              )}
            </div>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageSelect} className="hidden" />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-200">
            <button onClick={handleSaveAndNew} className="px-6 py-2.5 border border-purple-400 text-purple-600 rounded-lg hover:bg-purple-50 transition text-sm font-medium">
              সেভ ও নতুন
            </button>
            <button onClick={handleSave} className="px-6 py-2.5 bg-gradient-to-r from-purple-400 to-purple-500 text-white rounded-lg hover:from-purple-500 hover:to-purple-600 transition text-sm font-medium">
              সেভ করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
