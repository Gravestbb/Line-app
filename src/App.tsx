import { useState } from 'react';
import { NonMemberTab } from './components/NonMemberTab';
import { MemberTab } from './components/MemberTab';
import { AdminTab } from './components/AdminTab';

export default function App() {
  const [activeTab, setActiveTab] = useState<'non-member' | 'member' | 'admin'>('non-member');

  return (
    <div className="h-screen overflow-hidden bg-gray-100 flex flex-col">
      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 flex-shrink-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('non-member')}
              className={`px-6 py-4 transition-colors ${
                activeTab === 'non-member'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Tab 1: 非会員向け
            </button>
            <button
              onClick={() => setActiveTab('member')}
              className={`px-6 py-4 transition-colors ${
                activeTab === 'member'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Tab 2: 会員向け
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`px-6 py-4 transition-colors ${
                activeTab === 'admin'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Tab 3: 運営管理
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-hidden">
        {activeTab === 'non-member' && <NonMemberTab />}
        {activeTab === 'member' && <MemberTab />}
        {activeTab === 'admin' && <AdminTab />}
      </div>
    </div>
  );
}