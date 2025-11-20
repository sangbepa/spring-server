'use client';

import { ChecklistSection } from './ChecklistSection';
import { ChatHistory } from './ChatHistory';
import { ChatInput } from './ChatInput';
import { PreviewPanel } from './PreviewPanel';

interface ConsultViewProps {
  onSendMessage: (message: string) => void;
}

export function ConsultView({ onSendMessage }: ConsultViewProps) {
  return (
    <div className="flex h-full gap-4 p-4 bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50">
      {/* 6.1 왼쪽: 전문가 상담 UI */}
      <div className="w-1/2 flex flex-col h-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
        {/* 6.1.1 필수정보 체크리스트 */}
        <ChecklistSection />
        {/* 6.1.2 대화 탭 */}
        <div className="flex-1 flex flex-col overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
          {/* 대화 히스토리 */}
          <ChatHistory />
          {/* 대화 입력창 */}
          <ChatInput onSend={onSendMessage} />
        </div>
      </div>

      {/* 6.2 오른쪽: 문단 생성 프리뷰 */}
      <PreviewPanel />
    </div>
  );
}

