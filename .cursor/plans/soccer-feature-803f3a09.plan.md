<!-- 803f3a09-c411-48b8-9c15-fafcb4ae065c c5d55bf4-91d6-409a-b281-fa74685ff675 -->
# Zustand 상태관리 통합 (기존 rootStore 활용)

## 현재 구조 분석

✅ **이미 구축된 것**:

- `store/rootStore.ts`: 모든 slice를 combine
- `features/esg/store/esgSlice.ts`: 현재 비어있음
- `store/globalSlice.ts`: 전역 UI 상태

## 수정 전략

### 1. esgSlice 확장

**파일**: `features/esg/store/esgSlice.ts`

현재 빈 상태를 사용자 제공 코드의 3개 하위 상태로 채움:

```typescript
export interface EsgSlice {
  // Chat 상태
  messages: Message[];
  isTyping: boolean;
  addMessage: (role: 'ai' | 'user', content: string, step?: string) => void;
  simulateAIResponse: () => void;
  
  // Report 상태
  reportVersion: string;
  reportSections: ReportSectionData[];
  updateSectionStatus: (id: string, status: 'complete' | 'warning' | 'error') => void;
  updateSectionContent: (id: string, content: string) => void;
  
  // UI 상태 (ESG 전용)
  esgActiveTab: 'consult' | 'report';
  setEsgActiveTab: (tab: 'consult' | 'report') => void;
}
```

**장점**:

- rootStore 패턴 유지
- 다른 feature(soccer)와 격리
- 기존 구조 재사용

### 2. Types 정의

**파일**: `features/esg/types/index.ts` (새로 생성)

```typescript
export interface Message {
  id: number;
  role: 'ai' | 'user';
  content: string;
  step?: string;
}

export interface ReportSectionData {
  id: string;
  title: string;
  content: string;
  status: 'complete' | 'warning' | 'error';
  aiComment?: string;
}
```

### 3. 컴포넌트를 rootStore와 연결

**기존 import 변경**:

```typescript
// Before
import { useState } from 'react';

// After
import { useStore } from '@/store/rootStore';
```

**수정 파일**:

1. `EsgHeader.tsx`: `useStore(state => state.esgActiveTab)`
2. `TabNavigation.tsx`: `useStore(state => state.setEsgActiveTab)`, Link → button
3. `ChecklistSection.tsx`: `useStore(state => state.reportSections)`
4. `ChatHistory.tsx`: `useStore(state => ({ messages: state.messages, isTyping: state.isTyping }))`
5. `ChatInput.tsx`: `useStore(state => ({ addMessage: state.addMessage, simulateAIResponse: state.simulateAIResponse }))`
6. `PreviewPanel.tsx`: `useStore(state => state.reportSections)`

### 4. Layout 수정

**파일**: `app/esg/layout.tsx`

```typescript
'use client';

import { useStore } from '@/store/rootStore';
import { EsgHeader } from '@/features/esg/components/EsgHeader';
import { TabNavigation } from '@/features/esg/components/TabNavigation';

export default function EsgLayout({ children }) {
  // rootStore에서 구독
  const activeTab = useStore((state) => state.esgActiveTab);
  
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <EsgHeader />
      <main className="flex-1 flex flex-col overflow-hidden">
        <TabNavigation />
        <div className="flex-1 overflow-hidden">
          {children}
        </div>
      </main>
    </div>
  );
}
```

### 5. ConsultView와 ReportView 통합

**파일**: `features/esg/components/ConsultView.tsx`

```typescript
// onSendMessage prop 제거, rootStore 직접 사용
export function ConsultView() {
  // rootStore에서 직접 액션 가져오기
  const addMessage = useStore((state) => state.addMessage);
  
  return (
    <div className="flex h-full bg-gray-100">
      <div className="w-1/2 flex flex-col h-full bg-white border-r">
        <ChecklistSection />
        <div className="flex-1 flex flex-col overflow-hidden">
          <ChatHistory />
          <ChatInput />
        </div>
      </div>
      <PreviewPanel />
    </div>
  );
}
```

**파일**: `features/esg/components/FullReportView.tsx` (새로 생성)

사용자 제공 코드의 `FullReportView` 구현

### 6. Page 파일 단순화

**파일**: `app/esg/consult/page.tsx`

```typescript
import { ConsultView } from '@/features/esg/components/ConsultView';

export default function Page() {
  return <ConsultView />;
}
```

**파일**: `app/esg/report/page.tsx`

```typescript
import { FullReportView } from '@/features/esg/components/FullReportView';

export default function Page() {
  return <FullReportView />;
}
```

## 디렉토리 구조 (최종)

```
frontend/src/
├── store/
│   ├── rootStore.ts           (수정: EsgSlice import)
│   └── globalSlice.ts         (유지)
│
├── features/
│   └── esg/
│       ├── store/
│       │   └── esgSlice.ts    ⭐ 확장 (3개 상태 추가)
│       ├── types/
│       │   └── index.ts       ➕ 새로 생성
│       └── components/
│           ├── EsgHeader.tsx        (수정)
│           ├── TabNavigation.tsx    (수정)
│           ├── ChecklistSection.tsx (수정)
│           ├── ChatHistory.tsx      (수정)
│           ├── ChatInput.tsx        (수정)
│           ├── PreviewPanel.tsx     (수정)
│           ├── ConsultView.tsx      (수정)
│           ├── ReportView.tsx       (유지)
│           └── FullReportView.tsx   ➕ 새로 생성
```

## 실행 순서

1. Types 정의 생성
2. esgSlice 확장 (3개 상태 + 액션)
3. rootStore에서 EsgSlice import 확인
4. 각 컴포넌트를 rootStore와 연결
5. FullReportView 생성
6. Layout 수정
7. 빌드 테스트

## 핵심 장점

✅ **기존 패턴 유지**: rootStore + feature slice

✅ **격리된 상태**: ESG는 Soccer와 독립적

✅ **타입 안전성**: TypeScript 완벽 지원

✅ **확장 가능**: 새 기능 추가 용이

### To-dos

- [ ] ReportView 컴포넌트 생성