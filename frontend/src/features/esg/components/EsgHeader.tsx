'use client';

import { Sparkles, FileDown, Download } from 'lucide-react';

interface EsgHeaderProps {
  activeTab: 'consult' | 'report';
  onExportPDF: () => void;
  onExportWord: () => void;
}

export function EsgHeader({ activeTab, onExportPDF, onExportWord }: EsgHeaderProps) {
  return (
    <header className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 shadow-2xl w-full z-10 overflow-hidden">
      {/* 배경 애니메이션 효과 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-blue-300/20 to-blue-400/20 animate-pulse"></div>
      {/* 패턴 배경 */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* 로고 및 타이틀 */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <Sparkles className="text-blue-600" size={28} />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white drop-shadow-lg">AI ESG Consultant</h1>
              <p className="text-xs text-white/90 font-medium">IFRS S2 기반 보고서 생성</p>
            </div>
            <span className="ml-2 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30 shadow-lg">
              Prototype
            </span>
          </div>

          {/* 버전 및 내보내기 버튼 */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/30 shadow-lg">
              <span className="text-xs text-white/90 font-medium">버전</span>
              <span className="text-sm font-bold text-white">v1.0</span>
              <span className="text-xs text-white/70">(초안)</span>
            </div>
            {activeTab === 'report' && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={onExportPDF}
                  className="group relative bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  <Download className="relative z-10" size={18} />
                  <span className="relative z-10">PDF</span>
                </button>
                <button
                  onClick={onExportWord}
                  className="group relative bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  <FileDown className="relative z-10" size={18} />
                  <span className="relative z-10">Word</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 하단 그라데이션 라인 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
    </header>
  );
}

