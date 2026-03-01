'use client';

import { useState } from 'react';

interface Category {
  id: number;
  name: string;
}

const initialCategories: Category[] = [
  { id: 1, name: 'Mishu Ucb' },
  { id: 2, name: 'Stationery' },
  { id: 3, name: 'Travel for company work' },
  { id: 4, name: 'Dhaka cash' },
  { id: 5, name: 'Banking' },
  { id: 6, name: 'Sky net' },
  { id: 7, name: 'Haidergonj Cash' },
  { id: 8, name: 'pump' },
  { id: 9, name: 'Electric bill' },
  { id: 10, name: 'Electric Item' },
  { id: 11, name: 'Bike' },
  { id: 12, name: 'Food' },
  { id: 13, name: 'Bag Ripu' },
  { id: 14, name: 'Others' },
  { id: 15, name: 'Factory Expense' },
  { id: 16, name: 'Chowmohony Cash' },
  { id: 17, name: 'Kazi commission' },
  { id: 18, name: 'Four man food' },
  { id: 19, name: 'Lawyer' },
  { id: 20, name: 'Labour Bill' },
];

export default function ExpenseCategoriesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const filteredCategories = categories.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCategory = () => {
    if (!newCategoryName.trim()) return;
    const newCat: Category = {
      id: Date.now(),
      name: newCategoryName.trim(),
    };
    setCategories((prev) => [...prev, newCat]);
    setNewCategoryName('');
    setShowAddModal(false);
  };

  const handleEditCategory = () => {
    if (!editingCategory || !editingCategory.name.trim()) return;
    setCategories((prev) =>
      prev.map((c) => (c.id === editingCategory.id ? editingCategory : c))
    );
    setEditingCategory(null);
  };

  const handleDeleteCategory = (id: number) => {
    if (confirm('আপনি কি এই ক্যাটাগরি মুছতে চান?')) {
      setCategories((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-black mb-6">খরচের ক্যাটাগরি</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition flex items-center gap-2"
        >
          <span>+</span> নতুন ক্যাটাগরি
        </button>
      </div>

      {/* Search & Count */}
      <div className="flex items-center justify-between mb-4">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="ক্যাটাগরি অনুসন্ধান"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          />
        </div>
        <span className="text-sm text-gray-600">মোট {categories.length}</span>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 w-16">ক্রম</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">নাম</th>
              <th className="text-right px-4 py-3 text-sm font-semibold text-gray-700">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map((category, index) => (
              <tr key={category.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-600">{index + 1}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{category.name}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => setEditingCategory({ ...category })}
                      className="w-8 h-8 rounded-full bg-green-100 text-green-600 hover:bg-green-200 flex items-center justify-center"
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(category.id)}
                      className="w-8 h-8 rounded-full bg-red-100 text-red-600 hover:bg-red-200 flex items-center justify-center"
                      title="Delete"
                    >
                      🗑
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">নতুন ক্যাটাগরি</h2>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <input
              type="text"
              placeholder="ক্যাটাগরির নাম"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                বাতিল
              </button>
              <button
                onClick={handleAddCategory}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700"
              >
                সেভ করুন
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingCategory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">ক্যাটাগরি সম্পাদনা</h2>
              <button onClick={() => setEditingCategory(null)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <input
              type="text"
              value={editingCategory.name}
              onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditingCategory(null)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                বাতিল
              </button>
              <button
                onClick={handleEditCategory}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700"
              >
                আপডেট করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
