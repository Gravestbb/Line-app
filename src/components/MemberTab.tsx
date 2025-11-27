import { useState } from 'react';
import { ChevronLeft, MoreVertical, Phone, TrendingUp, RefreshCw, Calendar, User, QrCode, Clock, Award, ChevronRight, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type ActiveView = 'chat' | 'progress' | 'renewal' | 'events' | 'mypage';

export function MemberTab() {
  const [activeView, setActiveView] = useState<ActiveView>('chat');
  const [miniAppView, setMiniAppView] = useState<'progress' | 'renewal' | 'events' | 'mypage' | null>(null);

  // Open mini app in new view
  const openMiniApp = (view: 'progress' | 'renewal' | 'events' | 'mypage') => {
    setMiniAppView(view);
  };

  // Close mini app and return to chat
  const closeMiniApp = () => {
    setMiniAppView(null);
  };

  // Calculate scale to fit screen
  const containerHeight = 780;
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const scale = Math.min(1, (viewportHeight - 100) / containerHeight);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 overflow-hidden">
      {/* LINE Mini App - Separate WebView */}
      {miniAppView && (
        <div className="absolute inset-0 bg-white z-50">
          <div className="relative w-full max-w-[420px] h-full bg-white shadow-2xl overflow-hidden mx-auto flex flex-col">
            {/* Mini App Content - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              {miniAppView === 'progress' && <ProgressView onClose={closeMiniApp} />}
              {miniAppView === 'renewal' && <RenewalView onClose={closeMiniApp} />}
              {miniAppView === 'events' && <EventsView onClose={closeMiniApp} />}
              {miniAppView === 'mypage' && <MyPageView onClose={closeMiniApp} />}
            </div>
            
            {/* Rich Menu - Fixed at bottom even in mini app */}
            <div 
              className="flex-shrink-0 bg-white border-t border-gray-200 shadow-lg"
              style={{ height: '90px' }}
            >
              <div className="grid grid-cols-4 h-full gap-[1px] bg-gray-200">
                {/* 資格進捗表示 */}
                <button
                  onClick={() => setMiniAppView('progress')}
                  className={`flex flex-col items-center justify-center gap-1 bg-white hover:bg-gray-50 transition-colors active:bg-gray-100 ${
                    miniAppView === 'progress' ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    miniAppView === 'progress' ? 'bg-blue-500' : 'bg-gray-300'
                  }`}>
                    <TrendingUp className={`w-5 h-5 ${miniAppView === 'progress' ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <span className={`text-[10px] text-center leading-tight ${
                    miniAppView === 'progress' ? 'text-blue-600' : 'text-gray-700'
                  }`}>
                    資格進捗
                  </span>
                </button>

                {/* 資格更新管理 */}
                <button
                  onClick={() => setMiniAppView('renewal')}
                  className={`flex flex-col items-center justify-center gap-1 bg-white hover:bg-gray-50 transition-colors active:bg-gray-100 ${
                    miniAppView === 'renewal' ? 'bg-green-50' : ''
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    miniAppView === 'renewal' ? 'bg-green-500' : 'bg-gray-300'
                  }`}>
                    <RefreshCw className={`w-5 h-5 ${miniAppView === 'renewal' ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <span className={`text-[10px] text-center leading-tight ${
                    miniAppView === 'renewal' ? 'text-green-600' : 'text-gray-700'
                  }`}>
                    資格更新
                  </span>
                </button>

                {/* イベント */}
                <button
                  onClick={() => setMiniAppView('events')}
                  className={`flex flex-col items-center justify-center gap-1 bg-white hover:bg-gray-50 transition-colors active:bg-gray-100 ${
                    miniAppView === 'events' ? 'bg-orange-50' : ''
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    miniAppView === 'events' ? 'bg-orange-500' : 'bg-gray-300'
                  }`}>
                    <Calendar className={`w-5 h-5 ${miniAppView === 'events' ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <span className={`text-[10px] text-center leading-tight ${
                    miniAppView === 'events' ? 'text-orange-600' : 'text-gray-700'
                  }`}>
                    イベント
                  </span>
                </button>

                {/* マイページ */}
                <button
                  onClick={() => setMiniAppView('mypage')}
                  className={`flex flex-col items-center justify-center gap-1 bg-white hover:bg-gray-50 transition-colors active:bg-gray-100 ${
                    miniAppView === 'mypage' ? 'bg-purple-50' : ''
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    miniAppView === 'mypage' ? 'bg-purple-500' : 'bg-gray-300'
                  }`}>
                    <User className={`w-5 h-5 ${miniAppView === 'mypage' ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <span className={`text-[10px] text-center leading-tight ${
                    miniAppView === 'mypage' ? 'text-purple-600' : 'text-gray-700'
                  }`}>
                    マイページ
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LINE Chat Interface - Only shown when no mini app is open */}
      {!miniAppView && (
        <div 
          className="relative w-full max-w-[420px] bg-white shadow-2xl overflow-hidden"
          style={{ 
            height: `${containerHeight}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'center center'
          }}
        >
          {/* LINE Header */}
          <div className="absolute top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-50">
            <div className="flex items-center gap-3">
              <button className="text-gray-600">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                  <span className="text-sm">会</span>
                </div>
                <span className="text-gray-900">会員専用サービス</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-gray-600">
                <Phone className="w-5 h-5" />
              </button>
              <button className="text-gray-600">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content Area */}
          {activeView === 'chat' ? (
            /* LINE Chat Background */
            <div 
              className="absolute top-14 left-0 right-0 bottom-[234px] overflow-y-auto p-4"
              style={{ 
                backgroundColor: '#8caad8',
                backgroundImage: `
                  repeating-linear-gradient(
                    0deg,
                    rgba(255,255,255,0.05) 0px,
                    rgba(255,255,255,0.05) 1px,
                    transparent 1px,
                    transparent 2px
                  )
                `
              }}
            >
              <div className="space-y-3">
                {/* Message Bubble 1 - From Bot */}
                <div className="flex justify-start items-start gap-1.5">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <span className="text-xs">会</span>
                  </div>
                  <div className="max-w-[75%]">
                    <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm">
                      <p className="text-sm text-gray-800 leading-relaxed">
                        こんにちは！会員専用サービスへようこそ。
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 ml-2">09:15</p>
                  </div>
                </div>

                {/* Message Bubble 2 - From Bot */}
                <div className="flex justify-start items-start gap-1.5">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <span className="text-xs">会</span>
                  </div>
                  <div className="max-w-[75%]">
                    <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm">
                      <p className="text-sm text-gray-800 leading-relaxed">
                        下のメニューから各種機能をご利用いただけます。
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 ml-2">09:15</p>
                  </div>
                </div>

                {/* Message Bubble 3 - Progress Update */}
                <div className="flex justify-start items-start gap-1.5">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <span className="text-xs">会</span>
                  </div>
                  <div className="max-w-[80%]">
                    <div className="bg-white rounded-2xl rounded-tl-sm overflow-hidden shadow-sm">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1759560270562-468e8ba866e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGFjaGlldmVtZW50JTIwYXdhcmR8ZW58MXx8fHwxNzY0MTc1MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="資格進捗"
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-3">
                        <p className="text-sm text-gray-800 leading-relaxed">
                          資格の進捗状況が更新されました。最新の単位状況はミニアプリからご確認ください。
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 ml-2">09:20</p>
                  </div>
                </div>

                {/* Message Bubble 4 - Reminder */}
                <div className="flex justify-start items-start gap-1.5">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <span className="text-xs">会</span>
                  </div>
                  <div className="max-w-[80%]">
                    <div className="bg-white rounded-2xl rounded-tl-sm overflow-hidden shadow-sm">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1762330910399-95caa55acf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjQyMDgwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="オンライン学習"
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-3">
                        <p className="text-sm text-gray-800 leading-relaxed">
                          資格取得に必要な単位がまだ不足しています。詳しい進捗は下のボタンからご確認いただけます。
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 ml-2">09:22</p>
                  </div>
                </div>

                {/* Message Bubble 5 - Support */}
                <div className="flex justify-start items-start gap-1.5">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <span className="text-xs">会</span>
                  </div>
                  <div className="max-w-[80%]">
                    <div className="bg-white rounded-2xl rounded-tl-sm overflow-hidden shadow-sm">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1559559404-aa6a607570a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdXBwb3J0JTIwaGVscHxlbnwxfHx8fDE3NjQyMTM0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="サポート"
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-3">
                        <p className="text-sm text-gray-800 leading-relaxed">
                          資格や単位の管理でお困りですか？最新の進捗はミニアプリからいつでも確認できます。
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 ml-2">09:25</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Mini App Content */
            <div className="absolute top-14 left-0 right-0 bottom-[234px] overflow-y-auto bg-gray-50">
              {activeView === 'progress' && <ProgressView onClose={() => setActiveView('chat')} />}
              {activeView === 'renewal' && <RenewalView onClose={() => setActiveView('chat')} />}
              {activeView === 'events' && <EventsView onClose={() => setActiveView('chat')} />}
              {activeView === 'mypage' && <MyPageView onClose={() => setActiveView('chat')} />}
            </div>
          )}

          {/* Rich Menu - 30% of screen height, 2x2 Grid */}
          <div 
            className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg"
            style={{ height: '234px' }}
          >
            <div className="grid grid-cols-2 grid-rows-2 h-full gap-[1px] bg-gray-200">
              {/* Row 1, Col 1 - 資格進捗表示 */}
              <button
                onClick={() => openMiniApp('progress')}
                className="flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-colors active:bg-gray-100"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-700 text-center leading-tight px-2">
                  資格進捗表示
                </span>
              </button>

              {/* Row 1, Col 2 - 資格更新管理 */}
              <button
                onClick={() => openMiniApp('renewal')}
                className="flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-colors active:bg-gray-100"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-700 text-center leading-tight px-2">
                  資格更新管理
                </span>
              </button>

              {/* Row 2, Col 1 - イベント */}
              <button
                onClick={() => openMiniApp('events')}
                className="flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-colors active:bg-gray-100"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-700 text-center leading-tight px-2">
                  イベント
                </span>
              </button>

              {/* Row 2, Col 2 - マイページ */}
              <button
                onClick={() => openMiniApp('mypage')}
                className="flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-colors active:bg-gray-100"
              >
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-gray-700 text-center leading-tight px-2">
                  マイページ
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProgressView({ onClose }: { onClose: () => void }) {
  const requirements = [
    { name: '基礎単位', current: 15, required: 30, color: 'bg-blue-500' },
    { name: '専門単位', current: 22, required: 40, color: 'bg-green-500' },
    { name: '実習時間', current: 35, required: 60, color: 'bg-orange-500' },
    { name: 'その他単位', current: 8, required: 10, color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-full">
      {/* Mini App Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between z-10">
        <h2 className="text-gray-900">資格進捗表示</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-md">
          <div className="text-center">
            <p className="text-blue-100 text-sm mb-2">現在のレベル</p>
            <div className="text-4xl mb-3">レベル 2</div>
            <p className="text-blue-100 text-sm">次のレベルまで 45単位</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-gray-900 mb-4">取得要件進捗</h3>
          <div className="space-y-4">
            {requirements.map((req) => (
              <div key={req.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-700">{req.name}</span>
                  <span className="text-gray-600">
                    {req.current} / {req.required}
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div
                    className={`${req.color} h-2.5 rounded-full transition-all`}
                    style={{ width: `${(req.current / req.required) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5">
          <h3 className="text-blue-900 mb-3">自動計算結果</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">残り単位数</span>
              <span className="text-blue-600">60単位</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">残り時間数</span>
              <span className="text-blue-600">25時</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">完了予定日</span>
              <span className="text-blue-600">2026年3月15日</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-5 text-white shadow-md">
          <h3 className="mb-3">次のアクション</h3>
          <ul className="text-sm space-y-2 text-green-50">
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>専門単位セミナーへの参加推奨</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>実習時間が不足しています</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>今月中に基礎単位5単位の取得を目指しましょう</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function RenewalView({ onClose }: { onClose: () => void }) {
  return (
    <div className="min-h-full">
      {/* Mini App Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between z-10">
        <h2 className="text-gray-900">資格更新管理</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-md">
          <div className="text-center">
            <p className="text-green-100 text-sm mb-2">更新要件達成率</p>
            <div className="text-4xl mb-3">68%</div>
            <p className="text-green-100 text-sm">順調に進んでいます</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900">更新期限</h3>
            <div className="flex items-center gap-2 text-orange-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm">残り 382日</span>
            </div>
          </div>
          <div className="text-center bg-gray-50 rounded-xl py-3">
            <p className="text-gray-600 text-sm">更新期限日</p>
            <p className="text-gray-900 mt-1">2026年12月15日</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-gray-900 mb-4">カテゴリー別進捗</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700">カテゴリーA単位</span>
                <span className="text-gray-600">18 / 30</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '60%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700">カテゴリーB単位</span>
                <span className="text-gray-600">25 / 40</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '62.5%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700">カテゴリーC単位</span>
                <span className="text-gray-600">12 / 20</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '60%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-gray-900 mb-3">未完了項目リスト</h3>
          <div className="space-y-2">
            {[
              { title: '専門研修（カテゴリーA）', remaining: '残り12単位' },
              { title: '実技セミナー（カテゴリーB）', remaining: '残り15単位' },
              { title: 'オンライン講座（カテゴリーC）', remaining: '残り8単位' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-800 truncate">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.remaining}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5">
          <h3 className="text-blue-900 mb-3">自動リマインダー</h3>
          <div className="space-y-2 text-xs text-gray-600">
            <p className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>10ヶ月前リマインド送信済み</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>8ヶ前リマインド送信済み</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>6ヶ月前リマインド送信済み</span>
            </p>
            <p className="flex items-center gap-2 text-blue-600">
              <span>→</span>
              <span>次回: 4ヶ月前（2026年8月15日）</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventsView({ onClose }: { onClose: () => void }) {
  const events = [
    { id: 1, name: '基礎研修セミナー', date: '2025/12/05', units: 5, category: 'A', recommended: true },
    { id: 2, name: '専門技術講習会', date: '2025/12/12', units: 8, category: 'B', recommended: true },
    { id: 3, name: 'オンライン講座', date: '2025/12/18', units: 3, category: 'C', recommended: false },
    { id: 4, name: '実技トレーニング', date: '2026/01/10', units: 10, category: 'A', recommended: false },
  ];

  return (
    <div className="min-h-full">
      {/* Mini App Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between z-10">
        <h2 className="text-gray-900">イベント</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white text-center shadow-md">
          <Calendar className="w-12 h-12 mx-auto mb-2" />
          <h3 className="mb-1">イベント通知</h3>
          <p className="text-orange-100 text-sm">あなたに最適なイベントをご提案</p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">通知設定</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-gray-700 px-1 text-sm">おすすめイベント</h3>
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="mb-3">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-gray-900 flex-1">{event.name}</h4>
                  {event.recommended && (
                    <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full ml-2">推奨</span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {event.units}単位
                  </span>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                    カテゴリー{event.category}
                  </span>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm">
                申し込む
              </button>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-5">
          <h3 className="text-blue-900 mb-3">イベント参加コード入力</h3>
          <input
            type="text"
            placeholder="参加コードを入力"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 mb-3"
          />
          <button className="w-full bg-blue-600 text-white py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm">
            出席を記録
          </button>
          <p className="text-xs text-gray-600 text-center mt-3">
            イベント会場で受け取ったコードを入力してください
          </p>
        </div>
      </div>
    </div>
  );
}

function MyPageView({ onClose }: { onClose: () => void }) {
  const participationHistory = [
    { date: '2025/11/20', event: '基礎研修セミナー', units: 5, category: 'A' },
    { date: '2025/11/05', event: '専門講習会', units: 8, category: 'B' },
    { date: '2025/10/22', event: 'オンライン講座', units: 3, category: 'C' },
  ];

  return (
    <div className="min-h-full">
      {/* Mini App Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between z-10">
        <h2 className="text-gray-900">マイページ</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center shadow-md">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-3 flex items-center justify-center">
            <User className="w-8 h-8" />
          </div>
          <h3 className="mb-1">田中 太郎</h3>
          <p className="text-purple-100 text-sm">会員ID: 12345678</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-gray-900 mb-4">会員情報</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">氏名</span>
              <span className="text-gray-900">田中 太郎</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">会員ID</span>
              <span className="text-gray-900">12345678</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">資格</span>
              <span className="text-gray-900">認定資格レベル2</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">有効期限</span>
              <span className="text-green-600">2026/12/15</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-gray-900 mb-4">進サマリー</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-2xl text-blue-600 mb-1">68%</p>
              <p className="text-xs text-gray-600">資格進捗</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <p className="text-2xl text-green-600 mb-1">68%</p>
              <p className="text-xs text-gray-600">更新進捗</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 text-center">
              <p className="text-2xl text-orange-600 mb-1">12</p>
              <p className="text-xs text-gray-600">イベント参加</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <p className="text-2xl text-purple-600 mb-1">80</p>
              <p className="text-xs text-gray-600">取得単位</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-gray-900 mb-4">参加履歴</h3>
          <div className="space-y-3">
            {participationHistory.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 truncate">{item.event}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
                <div className="text-right ml-3">
                  <p className="text-sm text-blue-600">{item.units}単位</p>
                  <p className="text-xs text-gray-500">カテゴリー{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-md">
          <div className="text-center">
            <h3 className="mb-3">デジタル会員証</h3>
            <div className="bg-white p-4 rounded-xl inline-block mb-3">
              <QrCode className="w-24 h-24 text-gray-800" />
            </div>
            <p className="text-xs text-blue-100">
              イベント会場でこのQRコードを提示してください
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}