'use client';

import { useState, useRef } from 'react';

export default function ImportItemsPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.name.endsWith('.xlsx') || droppedFile.name.endsWith('.xls'))) {
      setFile(droppedFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">ইউটিলিটিস / ইমপোর্ট আইটেম</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Download Template */}
        <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center justify-center">
          <p className="text-sm text-black mb-8 text-center">
            .xlsx (এক্সেল শিট) নমুনা ফাইল ডাউনলোড করুন
          </p>
          <div className="mb-8">
            <svg className="w-24 h-24 text-purple-400" viewBox="0 0 80 80" fill="none">
              <rect x="15" y="5" width="50" height="70" rx="4" stroke="currentColor" strokeWidth="2" fill="white"/>
              <rect x="22" y="20" width="36" height="4" rx="1" fill="#E2E8F0"/>
              <rect x="22" y="28" width="36" height="4" rx="1" fill="#E2E8F0"/>
              <rect x="22" y="36" width="36" height="4" rx="1" fill="#E2E8F0"/>
              <rect x="22" y="44" width="24" height="4" rx="1" fill="#E2E8F0"/>
              <text x="30" y="65" fill="currentColor" fontSize="14" fontWeight="bold">X</text>
            </svg>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition">
            ডাউনলোড করুন
          </button>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow p-8">
          <p className="text-sm text-black mb-6 text-center">
            আপনার .xlsx (এক্সেল শিট) আপলোড করুন
          </p>
          <div
            onDrop={handleDrop}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-lg p-12 flex flex-col items-center justify-center cursor-pointer transition ${
              isDragging ? 'border-purple-500 bg-purple-50' : 'border-gray-300 hover:border-purple-400'
            }`}
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-sm text-gray-500">
              ফাইল ড্রপ করুন বা{' '}
              <span className="text-purple-600 font-medium">এখানে ক্লিক করুন</span>
            </p>
            {file && <p className="text-sm text-green-600 mt-2">{file.name}</p>}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".xlsx,.xls"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
}
