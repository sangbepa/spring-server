'use client';

import Link from 'next/link';

interface TabNavigationProps {
  activeTab: 'consult' | 'report';
}

export function TabNavigation({ activeTab }: TabNavigationProps) {
  return (
    <div className="bg-white border-b border-gray-200">
      <nav className="-mb-px flex max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Tabs">
        <Link
          href="/esg/consult"
          className={`whitespace-nowrap py-3 px-4 border-b-2 font-medium text-sm transition-colors ${
            activeTab === 'consult'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-500'
          }`}
        >
          전문가 상담 및 문단 생성
        </Link>
        <Link
          href="/esg/report"
          className={`whitespace-nowrap py-3 px-4 border-b-2 font-medium text-sm transition-colors ${
            activeTab === 'report'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-500'
          }`}
        >
          최종 보고서 조합
        </Link>
      </nav>
    </div>
  );
}

