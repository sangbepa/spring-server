'use client';

import { MessageSquare } from 'lucide-react';

export function ChatHistory() {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* 1단계: PDF 업로드 (시뮬레이션) */}
      <div className="flex justify-center">
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-5 py-2.5 rounded-full text-sm font-semibold border border-blue-200/50 shadow-md flex items-center gap-2">
          <span>1단계: TCFD 보고서.pdf (7.8MB) 업로드됨</span>
        </div>
      </div>

      {/* 2단계: 분석 완료 */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
          <MessageSquare className="text-white" size={20} />
        </div>
        <div className="flex-1 max-w-2xl">
          <div className="bg-white border border-blue-100 p-5 rounded-2xl rounded-tl-md shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                AI ESG Consultant
              </span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              2단계: 문단 분석 및 부족정보 파악이 완료되었습니다. IFRS S2 기준에 맞춰 몇 가지 질문을
              시작하겠습니다. (흐름 4.1)
            </p>
          </div>
        </div>
      </div>

      {/* 3단계: AI가 먼저 질문 */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
          <MessageSquare className="text-white" size={20} />
        </div>
        <div className="flex-1 max-w-2xl">
          <div className="bg-white border border-blue-100 p-5 rounded-2xl rounded-tl-md shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                AI ESG Consultant
              </span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              질문 (S2-5 거버넌스): 경영진의 기후 리스크 감독 주체가 누구인가요? (예: 이사회, ESG
              위원회) (흐름 4.2)
            </p>
          </div>
        </div>
      </div>

      {/* 4단계: 사용자 답변 (시뮬레이션) */}
      <div className="flex justify-end">
        <div className="flex items-start gap-2 max-w-2xl">
          <div className="flex flex-col items-end">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-2xl rounded-br-md shadow-lg">
              <div className="text-sm leading-relaxed">
                이사회 산하의 &apos;지속가능경영위원회&apos;가 분기별로 감독합니다.
              </div>
            </div>
            <span className="text-xs text-gray-500 mt-1 mr-1">사용자</span>
          </div>
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
            <MessageSquare className="text-white" size={18} />
          </div>
        </div>
      </div>

      {/* 5단계: AI 임시 문단 생성 + 6단계: 부족 요소 재요청 */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
          <MessageSquare className="text-white" size={20} />
        </div>
        <div className="flex-1 max-w-2xl">
          <div className="bg-white border border-blue-100 p-5 rounded-2xl rounded-tl-md shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                AI ESG Consultant
              </span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              좋습니다. S2-5 문단이 우측에 생성되었습니다. 확인해주세요.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mt-2">
              다음 질문 (S2-15 관련): Scope 1·2 데이터의 기준연도는 어떻게 되나요? (흐름 4.2)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

