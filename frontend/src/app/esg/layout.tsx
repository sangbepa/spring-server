'use client';

import { usePathname } from 'next/navigation';
import { EsgHeader } from '@/features/esg/components/EsgHeader';
import { TabNavigation } from '@/features/esg/components/TabNavigation';

export default function EsgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const activeTab = pathname === '/esg/report' ? 'report' : 'consult';

  const handleExportPDF = () => {
    console.log('Exporting to PDF...');
    alert('PDF 내보내기 기능이 호출되었습니다.');
  };

  const handleExportWord = () => {
    console.log('Exporting to Word...');
    alert('Word 내보내기 기능이 호출되었습니다.');
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      {/* 헤더 */}
      <EsgHeader
        activeTab={activeTab}
        onExportPDF={handleExportPDF}
        onExportWord={handleExportWord}
      />

      {/* 메인 컨텐츠 영역 */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* 탭 네비게이션 */}
        <TabNavigation activeTab={activeTab} />

        {/* 페이지 컨텐츠 */}
        <div className="flex-1 overflow-hidden">
          {children}
        </div>
      </main>
    </div>
  );
}

