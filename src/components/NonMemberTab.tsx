import { useState } from 'react';
import { ChevronLeft, MoreVertical, Phone, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function NonMemberTab() {
  const [showMiniApp, setShowMiniApp] = useState(false);
  const [memberId, setMemberId] = useState('');

  // Calculate scale to fit screen
  const containerHeight = 780;
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const scale = Math.min(1, (viewportHeight - 100) / containerHeight);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 overflow-hidden">
      {/* LINE Interface Container */}
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
              <span className="text-gray-900">会員情報サービス</span>
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

        {/* LINE Chat Background with Messages - Only shown when mini app is closed */}
        {!showMiniApp && (
          <>
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
                        こんにちは！会員情報サービスへようこそ。
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 ml-2">10:30</p>
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
                        下のメニューから「入会案内ページ」をタップして、<br />
                        会員登録を進めてください。
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 ml-2">10:30</p>
                  </div>
                </div>

                {/* Message Bubble 3 - New Event Announcement */}
                <div className="flex justify-start items-start gap-1.5">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <span className="text-xs">会</span>
                  </div>
                  <div className="max-w-[80%]">
                    <div className="bg-white rounded-2xl rounded-tl-sm overflow-hidden shadow-sm">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1763739527636-d3d8cac52d6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNlbWluYXIlMjBldmVudHxlbnwxfHx8fDE3NjQxNjgzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="イベント"
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-3">
                        <p className="text-sm text-gray-800 leading-relaxed">
                          新しいイベントが公開されました。詳しくは下のボタンからご確認ください。
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 ml-2">10:32</p>
                  </div>
                </div>

                {/* Message Bubble 4 - Contextual */}
                <div className="flex justify-start items-start gap-1.5">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <span className="text-xs">会</span>
                  </div>
                  <div className="max-w-[80%]">
                    <div className="bg-white rounded-2xl rounded-tl-sm overflow-hidden shadow-sm">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1760420940953-3958ad9f6287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRyYWluaW5nJTIwY29uZmVyZW5jZXxlbnwxfHx8fDE3NjQyMTM0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="ワークショップ"
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-3">
                        <p className="text-sm text-gray-800 leading-relaxed">
                          あなたに関連する新しいイベントが追加されました。詳細は下のボタンからご確認いただけます。
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 ml-2">10:33</p>
                  </div>
                </div>

                {/* Message Bubble 5 - Promotional */}
                <div className="flex justify-start items-start gap-1.5">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <span className="text-xs">会</span>
                  </div>
                  <div className="max-w-[80%]">
                    <div className="bg-white rounded-2xl rounded-tl-sm overflow-hidden shadow-sm">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1707301280425-475534ec3cc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzY0MTg3MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="プレゼンテーション"
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-3">
                        <p className="text-sm text-gray-800 leading-relaxed">
                          最新のイベントが公開されています！定員に限りがありますので、お早めにご確認ください。
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 ml-2">10:35</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rich Menu - 30% of screen height with ONE button */}
            <div 
              className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg"
              style={{ height: '234px' }} // 30% of 780px = 234px
            >
              <button
                onClick={() => setShowMiniApp(true)}
                className="w-full h-full flex flex-col items-center justify-center gap-3 hover:bg-gray-50 transition-colors active:bg-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-gray-900">入会案内ページ</span>
              </button>
            </div>
          </>
        )}

        {/* Mini App - Full screen overlay */}
        {showMiniApp && (
          <div className="absolute inset-0 bg-white z-50 flex flex-col">
            {/* Mini App Header */}
            <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 flex-shrink-0">
              <h2 className="text-gray-900">会員認証</h2>
              <button
                onClick={() => setShowMiniApp(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mini App Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
              <div className="max-w-md mx-auto space-y-6">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-gray-900 mb-2">会員認証</h3>
                  <p className="text-sm text-gray-600">
                    会員IDを入力してLINEアカウントと連携
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">会員ID</label>
                    <input
                      type="text"
                      value={memberId}
                      onChange={(e) => setMemberId(e.target.value)}
                      placeholder="例：12345678"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-md">
                    認証する
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  会員IDがわからない場合は、<br />
                  事務局までお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}