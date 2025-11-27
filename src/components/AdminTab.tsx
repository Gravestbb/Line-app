import { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Send,
  Calendar,
  RefreshCw,
  BarChart3,
  Search,
  Download,
  Upload,
  Plus,
  TrendingUp,
  UserCheck,
  Bell,
  FileText,
  Filter,
  Edit,
  Mail,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type AdminView = 'dashboard' | 'members' | 'distribution' | 'events' | 'renewal' | 'reports';

export function AdminTab() {
  const [activeView, setActiveView] = useState<AdminView>('dashboard');

  return (
    <div className="flex h-full bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col flex-shrink-0">
        <div className="p-6 border-b">
          <h1 className="text-blue-600">管理画面</h1>
          <p className="text-sm text-gray-500 mt-1">Member Management System</p>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <button
              onClick={() => setActiveView('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeView === 'dashboard'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>ダッシュボード</span>
            </button>

            <button
              onClick={() => setActiveView('members')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeView === 'members'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>会員管理</span>
            </button>

            <button
              onClick={() => setActiveView('distribution')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeView === 'distribution'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Send className="w-5 h-5" />
              <span>配信管理</span>
            </button>

            <button
              onClick={() => setActiveView('events')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeView === 'events'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>イベント管理</span>
            </button>

            <button
              onClick={() => setActiveView('renewal')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeView === 'renewal'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <RefreshCw className="w-5 h-5" />
              <span>更新管理</span>
            </button>

            <button
              onClick={() => setActiveView('reports')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeView === 'reports'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              <span>レポート</span>
            </button>
          </div>
        </nav>

        <div className="p-4 border-t">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600">管</span>
            </div>
            <div>
              <p className="text-sm text-gray-800">管理者</p>
              <p className="text-xs text-gray-500">admin@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white shadow-sm px-8 py-4 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-800">
              {activeView === 'dashboard' && 'ダッシュボード'}
              {activeView === 'members' && '会員管理'}
              {activeView === 'distribution' && '配信管理'}
              {activeView === 'events' && 'イベント管理'}
              {activeView === 'renewal' && '更新管理'}
              {activeView === 'reports' && 'レポート'}
            </h2>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <div className="text-sm text-gray-600">2025/11/27 10:13</div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {activeView === 'dashboard' && <DashboardView />}
          {activeView === 'members' && <MembersView />}
          {activeView === 'distribution' && <DistributionView />}
          {activeView === 'events' && <EventsView />}
          {activeView === 'renewal' && <RenewalView />}
          {activeView === 'reports' && <ReportsView />}
        </div>
      </div>
    </div>
  );
}

function DashboardView() {
  const stats = [
    { label: 'LINE友だち総数', value: '2,458', subtext: '会員: 1,823 / 非会員: 635', color: 'blue' },
    { label: '今月の新規会員', value: '127', subtext: '前月比 +15%', color: 'green' },
    { label: '更新対象者', value: '342', subtext: '6ヶ月以内', color: 'orange' },
    { label: '要フォローアップ', value: '28', subtext: '期限間近', color: 'red' },
  ];

  const recentActivity = [
    { time: '10:05', action: '新規会員登録', detail: '田中太郎（ID: 12345）' },
    { time: '09:42', action: 'イベント申込', detail: '基礎研修セミナー - 15名' },
    { time: '09:15', action: '配信完了', detail: '週次ニュースレター - 開封率 68%' },
    { time: '08:50', action: '単位付与', detail: '専門講習会 - 25名' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
            <p className={`text-3xl text-${stat.color}-600 mb-1`}>{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.subtext}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-6">
        {/* Monthly Usage Chart */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-gray-800 mb-4">月間利用状況</h3>
          <div className="h-64 flex items-end justify-between gap-2">
            {[65, 72, 68, 80, 75, 85, 90, 78, 82, 88, 85, 92].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors"
                  style={{ height: `${height}%` }}
                />
                <span className="text-xs text-gray-500">{index + 1}月</span>
              </div>
            ))}
          </div>
        </div>

        {/* Renewal Progress Status */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-gray-800 mb-4">更新進捗ステータス</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700">達成済み（80%以上）</span>
                <span className="text-green-600">892名</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{ width: '65%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700">進行中（50-80%）</span>
                <span className="text-blue-600">543名</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{ width: '40%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700">要注意（50%未満）</span>
                <span className="text-orange-600">388名</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-orange-500 h-3 rounded-full" style={{ width: '28%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity & Follow-up Members */}
      <div className="grid grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-gray-800 mb-4">最近のアクティビティ</h3>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-xs text-gray-500 w-12">{activity.time}</span>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Follow-up Required */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-800">要フォローアップ会員</h3>
            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">緊急</span>
          </div>
          <div className="space-y-3">
            {[
              { name: '佐藤花子', id: '23456', issue: '更新期限まで30日・進捗20%', status: 'urgent' },
              { name: '鈴木一郎', id: '34567', issue: '必須単位未取得', status: 'urgent' },
              { name: '高橋美咲', id: '45678', issue: '更新期限まで45日・進捗35%', status: 'warning' },
              { name: '伊藤健太', id: '56789', issue: '未回答アンケート多数', status: 'info' },
            ].map((member, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{member.name}</p>
                  <p className="text-xs text-gray-500">ID: {member.id} - {member.issue}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MembersView() {
  const members = [
    { id: '12345', name: '田中太郎', qualification: 'レベル2', region: '東京', expiration: '2026/12/15', progress: 68 },
    { id: '23456', name: '佐藤花子', qualification: 'レベル3', region: '大阪', expiration: '2026/03/20', progress: 20 },
    { id: '34567', name: '鈴木一郎', qualification: 'レベル1', region: '名古屋', expiration: '2027/01/10', progress: 85 },
    { id: '45678', name: '高橋美咲', qualification: 'レベル2', region: '福岡', expiration: '2026/06/30', progress: 45 },
    { id: '56789', name: '伊藤健太', qualification: 'レベル2', region: '札幌', expiration: '2026/09/15', progress: 72 },
  ];

  return (
    <div className="space-y-6">
      {/* Search and Actions Bar */}
      <div className="bg-white rounded-lg p-4 shadow-md">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="会員ID、氏名、資格で検索..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
            <Filter className="w-4 h-4" />
            <span className="text-sm">フィルター</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
            <Upload className="w-4 h-4" />
            <span className="text-sm">インポート</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <Download className="w-4 h-4" />
            <span className="text-sm">エクスポート</span>
          </button>
        </div>
      </div>

      {/* Members Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs text-gray-600">会員ID</th>
              <th className="px-6 py-3 text-left text-xs text-gray-600">氏名</th>
              <th className="px-6 py-3 text-left text-xs text-gray-600">資格</th>
              <th className="px-6 py-3 text-left text-xs text-gray-600">地域</th>
              <th className="px-6 py-3 text-left text-xs text-gray-600">有効期限</th>
              <th className="px-6 py-3 text-left text-xs text-gray-600">更新進捗</th>
              <th className="px-6 py-3 text-left text-xs text-gray-600">アクション</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {members.map((member) => (
              <tr key={member.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-800">{member.id}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{member.name}</td>
                <td className="px-6 py-4 text-sm">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                    {member.qualification}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{member.region}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{member.expiration}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          member.progress >= 80
                            ? 'bg-green-500'
                            : member.progress >= 50
                            ? 'bg-blue-500'
                            : 'bg-orange-500'
                        }`}
                        style={{ width: `${member.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600 w-10">{member.progress}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:text-blue-700 mr-3">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-700">
                    <Mail className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md">
        <p className="text-sm text-gray-600">全 1,823 件中 1-5 件を表示</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">前へ</button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</button>
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">2</button>
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">3</button>
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">次へ</button>
        </div>
      </div>
    </div>
  );
}

function DistributionView() {
  return (
    <div className="space-y-6">
      {/* Create Message Card */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-gray-800">新規メッセージ作成</h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <Plus className="w-4 h-4" />
            <span className="text-sm">新規作成</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Message Creation Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">メッセージタイトル</label>
              <input
                type="text"
                placeholder="配信のタイトルを入力"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">メッセージ本文</label>
              <textarea
                rows={6}
                placeholder="配信するメッセージを入力..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">画像アップロード</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">クリックまたはドラッグ＆ドロップ</p>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">ボタン設定</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="ボタンテキスト"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="リンクURL"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Target Settings */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">配信対象</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm text-gray-700">全会員（1,823名）</span>
                </label>
                <label className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="checkbox" className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-700">非会員（635名）</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">セグメント設定</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                <option>すべて</option>
                <option>資格レベル別</option>
                <option>地域別</option>
                <option>更新期限別</option>
                <option>参加履歴別</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">配信日時</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="schedule" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="text-sm text-gray-700">即時配信</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="schedule" className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-700">日時指定</span>
                </label>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <input
                  type="date"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="time"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
                配信予約
              </button>
              <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 rounded-lg transition-colors">
                下書き保存
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Distribution History */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-gray-800 mb-4">配信履歴・分析</h3>
        <div className="space-y-3">
          {[
            { title: '週次ニュースレター', date: '2025/11/27 09:00', recipients: 2458, open: 68.5, click: 42.3 },
            { title: 'イベント案内', date: '2025/11/25 18:00', recipients: 1823, open: 72.1, click: 55.8 },
            { title: '更新リマインダー', date: '2025/11/24 10:00', recipients: 342, open: 85.2, click: 38.4 },
            { title: '新規会員向け案内', date: '2025/11/22 12:00', recipients: 127, open: 91.3, click: 68.5 },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex-1">
                <p className="text-sm text-gray-800 mb-1">{item.title}</p>
                <p className="text-xs text-gray-500">{item.date} • {item.recipients}名に配信</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">開封率</p>
                  <p className="text-blue-600">{item.open}%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">クリック率</p>
                  <p className="text-green-600">{item.click}%</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700">
                  <FileText className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EventsView() {
  return (
    <div className="space-y-6">
      {/* Create Event Card */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-gray-800">新規イベント作成</h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <Plus className="w-4 h-4" />
            <span className="text-sm">新規作成</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">イベント名</label>
              <input
                type="text"
                placeholder="イベント名を入力"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">開催日</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">時間</label>
                <input
                  type="time"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">場所</label>
              <input
                type="text"
                placeholder="会場名・住所"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">付与単位数</label>
                <input
                  type="number"
                  placeholder="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">カテゴリー</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                  <option>カテゴリーA</option>
                  <option>カテゴリーB</option>
                  <option>カテゴリーC</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">定員</label>
              <input
                type="number"
                placeholder="50"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">参加コード</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value="ABC123XYZ"
                  readOnly
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm">
                  再生成
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">参加者が出席確認に使用します</p>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
              イベントを作成
            </button>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-gray-800 mb-4">イベント一覧</h3>
        <div className="space-y-3">
          {[
            {
              name: '基礎研修セミナー',
              date: '2025/12/05',
              attendees: 15,
              capacity: 50,
              units: 5,
              category: 'A',
              code: 'ABC123',
            },
            {
              name: '専門技術講習会',
              date: '2025/12/12',
              attendees: 32,
              capacity: 40,
              units: 8,
              category: 'B',
              code: 'DEF456',
            },
            {
              name: 'オンライン講座',
              date: '2025/12/18',
              attendees: 48,
              capacity: 100,
              units: 3,
              category: 'C',
              code: 'GHI789',
            },
          ].map((event, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-gray-800">{event.name}</h4>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                      カテゴリー{event.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </span>
                    <span>参加: {event.attendees}/{event.capacity}名</span>
                    <span>{event.units}単位</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">コード: {event.code}</span>
                  <button className="text-blue-600 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 text-sm px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors">
                  参加者リスト
                </button>
                <button className="flex-1 text-sm px-4 py-2 bg-green-50 text-green-600 rounded hover:bg-green-100 transition-colors">
                  単位一括付与
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RenewalView() {
  return (
    <div className="space-y-6">
      {/* Renewal Overview */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <p className="text-sm text-gray-600 mb-2">更新対象者</p>
          <p className="text-3xl text-blue-600 mb-1">342名</p>
          <p className="text-xs text-gray-500">6ヶ月以内</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <p className="text-sm text-gray-600 mb-2">平均進捗率</p>
          <p className="text-3xl text-green-600 mb-1">65.8%</p>
          <p className="text-xs text-gray-500">前月比 +3.2%</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <p className="text-sm text-gray-600 mb-2">要注意会員</p>
          <p className="text-3xl text-orange-600 mb-1">28名</p>
          <p className="text-xs text-gray-500">進捗30%未満</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <p className="text-sm text-gray-600 mb-2">今月更新予定</p>
          <p className="text-3xl text-purple-600 mb-1">47名</p>
          <p className="text-xs text-gray-500">達成率 91%</p>
        </div>
      </div>

      {/* Members Requiring Follow-up */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-800">更新対象会員一覧</h3>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm">
              <Mail className="w-4 h-4" />
              個別リマインド
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
              <Mail className="w-4 h-4" />
              一括リマインド
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-600">
                  <input type="checkbox" className="w-4 h-4" />
                </th>
                <th className="px-6 py-3 text-left text-xs text-gray-600">会員ID</th>
                <th className="px-6 py-3 text-left text-xs text-gray-600">氏名</th>
                <th className="px-6 py-3 text-left text-xs text-gray-600">更新期限</th>
                <th className="px-6 py-3 text-left text-xs text-gray-600">進捗率</th>
                <th className="px-6 py-3 text-left text-xs text-gray-600">A単位</th>
                <th className="px-6 py-3 text-left text-xs text-gray-600">B単位</th>
                <th className="px-6 py-3 text-left text-xs text-gray-600">C単位</th>
                <th className="px-6 py-3 text-left text-xs text-gray-600">アクション</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                {
                  id: '23456',
                  name: '佐藤花子',
                  deadline: '2026/01/15',
                  progress: 20,
                  a: '8/30',
                  b: '12/40',
                  c: '5/20',
                  urgent: true,
                },
                {
                  id: '34567',
                  name: '鈴木一郎',
                  deadline: '2026/02/20',
                  progress: 45,
                  a: '15/30',
                  b: '22/40',
                  c: '8/20',
                  urgent: false,
                },
                {
                  id: '45678',
                  name: '高橋美咲',
                  deadline: '2026/03/10',
                  progress: 35,
                  a: '12/30',
                  b: '18/40',
                  c: '6/20',
                  urgent: false,
                },
                {
                  id: '56789',
                  name: '伊藤健太',
                  deadline: '2026/01/28',
                  progress: 28,
                  a: '10/30',
                  b: '14/40',
                  c: '4/20',
                  urgent: true,
                },
              ].map((member) => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="w-4 h-4" />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">{member.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{member.name}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={member.urgent ? 'text-red-600' : 'text-gray-600'}>
                      {member.deadline}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 w-20">
                        <div
                          className={`h-2 rounded-full ${
                            member.progress >= 50 ? 'bg-green-500' : 'bg-orange-500'
                          }`}
                          style={{ width: `${member.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-600">{member.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{member.a}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{member.b}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{member.c}</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-700">
                      <Mail className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reminder Timeline */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-gray-800 mb-4">リマインダー配信スケジュール</h3>
        <div className="space-y-4">
          {[
            { period: '10ヶ月前', status: '完了', count: 342, date: '2025/02/15' },
            { period: '8ヶ月前', status: '完了', count: 338, date: '2025/04/15' },
            { period: '6ヶ月前', status: '完了', count: 335, date: '2025/06/15' },
            { period: '4ヶ月前', status: '予定', count: 342, date: '2025/08/15' },
            { period: '2ヶ月前', status: '予定', count: 342, date: '2025/10/15' },
            { period: '1ヶ月前', status: '予定', count: 342, date: '2025/11/15' },
          ].map((reminder, index) => (
            <div key={index} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
              <div className="flex-shrink-0">
                {reminder.status === '完了' ? (
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-green-600" />
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Bell className="w-5 h-5 text-blue-600" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">{reminder.period}リマインド</p>
                <p className="text-xs text-gray-500">{reminder.date} • {reminder.count}名</p>
              </div>
              <span
                className={`text-xs px-3 py-1 rounded ${
                  reminder.status === '完了'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-blue-100 text-blue-600'
                }`}
              >
                {reminder.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReportsView() {
  return (
    <div className="space-y-6">
      {/* Member Statistics */}
      <div className="grid grid-cols-2 gap-6">
        {/* By Certification Level */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-gray-800 mb-4">資格別会員統計</h3>
          <div className="space-y-4">
            {[
              { level: 'レベル1', count: 523, color: 'bg-blue-500' },
              { level: 'レベル2', count: 892, color: 'bg-green-500' },
              { level: 'レベル3', count: 408, color: 'bg-purple-500' },
            ].map((item) => (
              <div key={item.level}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-700">{item.level}</span>
                  <span className="text-gray-600">{item.count}名</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`${item.color} h-3 rounded-full`}
                    style={{ width: `${(item.count / 1823) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* By Region */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-gray-800 mb-4">地域別会員統計</h3>
          <div className="space-y-3">
            {[
              { region: '東京', count: 542, percentage: 29.7 },
              { region: '大阪', count: 387, percentage: 21.2 },
              { region: '名古屋', count: 285, percentage: 15.6 },
              { region: '福岡', count: 223, percentage: 12.2 },
              { region: 'その他', count: 386, percentage: 21.3 },
            ].map((item) => (
              <div key={item.region} className="flex items-center justify-between py-2 border-b">
                <span className="text-sm text-gray-700">{item.region}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">{item.count}名</span>
                  <span className="text-sm text-blue-600 w-16 text-right">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Participation Rate */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-gray-800 mb-4">イベント参加率（月別）</h3>
        <div className="h-64 flex items-end justify-between gap-2">
          {[
            { month: '1月', rate: 65 },
            { month: '2月', rate: 72 },
            { month: '3月', rate: 68 },
            { month: '4月', rate: 80 },
            { month: '5月', rate: 75 },
            { month: '6月', rate: 85 },
            { month: '7月', rate: 78 },
            { month: '8月', rate: 70 },
            { month: '9月', rate: 82 },
            { month: '10月', rate: 88 },
            { month: '11月', rate: 85 },
            { month: '12月', rate: 90 },
          ].map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="text-xs text-gray-600">{item.rate}%</div>
              <div
                className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t hover:from-blue-700 hover:to-blue-500 transition-colors cursor-pointer"
                style={{ height: `${item.rate}%` }}
              />
              <span className="text-xs text-gray-500">{item.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Renewal Rate Trend */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-gray-800 mb-4">更新率推移（年度別）</h3>
        <div className="grid grid-cols-5 gap-4">
          {[
            { year: '2021', rate: 88.5, count: 1523 },
            { year: '2022', rate: 91.2, count: 1687 },
            { year: '2023', rate: 89.7, count: 1745 },
            { year: '2024', rate: 93.4, count: 1823 },
            { year: '2025', rate: 65.8, count: 342, ongoing: true },
          ].map((item) => (
            <div key={item.year} className="text-center p-4 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">{item.year}年度</p>
              <p className={`text-3xl mb-2 ${item.ongoing ? 'text-blue-600' : 'text-green-600'}`}>
                {item.rate}%
              </p>
              <p className="text-xs text-gray-500">{item.count}名</p>
              {item.ongoing && <p className="text-xs text-blue-600 mt-1">進行中</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-gray-800 mb-2">レポート出力</h3>
            <p className="text-sm text-gray-600">データを Excel または PDF 形式でダウンロード</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors shadow-md">
              <Download className="w-4 h-4" />
              <span className="text-sm">Excel</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors shadow-md">
              <Download className="w-4 h-4" />
              <span className="text-sm">PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}