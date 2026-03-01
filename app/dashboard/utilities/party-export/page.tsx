'use client';

interface PartyExportItem {
  id: number;
  name: string;
  partyType: string;
  phoneNumber: string;
  email: string;
  balance: number;
}

const partyData: PartyExportItem[] = [
  { id: 1, name: 'A.H Distributor', partyType: 'CUSTOMER', phoneNumber: '', email: '', balance: 561 },
  { id: 2, name: 'Afia Gil', partyType: 'CUSTOMER', phoneNumber: '', email: '', balance: 0 },
  { id: 3, name: 'Aman Electric', partyType: 'CUSTOMER', phoneNumber: '', email: '', balance: 1 },
  { id: 4, name: 'Arafat Tred', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: 7675845 },
  { id: 5, name: 'Arman Feed', partyType: 'CUSTOMER', phoneNumber: '', email: '', balance: 0 },
  { id: 6, name: 'Babul Bag', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: 31000 },
  { id: 7, name: 'Basul Tred', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: 10291 },
  { id: 8, name: 'Babou Mia', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: 0 },
  { id: 9, name: 'Best Watch', partyType: 'CUSTOMER', phoneNumber: '', email: '', balance: 212242 },
  { id: 10, name: 'Biman Poultry', partyType: 'CUSTOMER', phoneNumber: '', email: '', balance: 652803.75 },
  { id: 11, name: 'Cash Sale', partyType: 'CUSTOMER', phoneNumber: '', email: '', balance: 0 },
  { id: 12, name: 'Crisan Agro', partyType: 'CUSTOMER', phoneNumber: '', email: '', balance: 0 },
  { id: 13, name: 'Darbar Tred', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: 1586 },
  { id: 14, name: 'Dhaka Multi Feed', partyType: 'CUSTOMER', phoneNumber: '', email: '', balance: 714868 },
  { id: 15, name: 'Garo Vendor(KG)', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: 1812719 },
  { id: 16, name: 'Habul Via', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: 0 },
  { id: 17, name: 'Fest Tred (Jibon Bag)', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: 80873 },
  { id: 18, name: 'Goyur Tred', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: 0 },
  { id: 19, name: 'Ismail Bag', partyType: 'SUPPLIER', phoneNumber: '', email: '', balance: 7054 },
  { id: 20, name: 'Kazi Feed', partyType: 'CUSTOMER', phoneNumber: '', email: '', balance: 65571497.8 },
];

export default function PartyExportPage() {
  const handleExportExcel = () => {
    alert('পার্টি এক্সেল এক্সপোর্ট হচ্ছে...');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">ইউটিলিটিস / পার্টি এক্সপোর্ট</h1>

      <div className="bg-white rounded-lg shadow">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <p className="text-sm text-black">Total Items: {partyData.length}</p>
          <button
            onClick={handleExportExcel}
            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition flex items-center gap-2"
          >
            📥 এক্সপোর্ট এক্সেল
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-purple-50">
                <th className="text-left px-4 py-3 text-sm font-semibold text-black w-12">ক্রম</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-black">নাম</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-black">পার্টি ধরন</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-black">ফোন নম্বর</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-black">ইমেইল</th>
                <th className="text-right px-4 py-3 text-sm font-semibold text-black">আগের দেনা</th>
              </tr>
            </thead>
            <tbody>
              {partyData.map((party, index) => (
                <tr key={party.id} className={`border-b border-gray-100 hover:bg-gray-50 ${index % 2 === 1 ? 'bg-pink-50/30' : ''}`}>
                  <td className="px-4 py-3 text-sm text-black">{index + 1}</td>
                  <td className="px-4 py-3 text-sm text-black">{party.name}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 rounded ${
                      party.partyType === 'CUSTOMER' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {party.partyType}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-black">{party.phoneNumber || ''}</td>
                  <td className="px-4 py-3 text-sm text-black">{party.email || ''}</td>
                  <td className="px-4 py-3 text-sm text-right text-black">{party.balance}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50">
                <td colSpan={6} className="px-4 py-3 text-sm text-black">
                  Total Items: {partyData.length}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
