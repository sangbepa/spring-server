'use client';

import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export function ChecklistSection() {
  return (
    <div className="p-6 border-b border-gray-200/50 bg-gradient-to-r from-blue-50/50 via-indigo-50/30 to-blue-50/30">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
        <h2 className="text-lg font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
          IFRS S2 필수 정보 체크리스트
        </h2>
      </div>
      <ul className="space-y-3">
        <li className="flex items-center gap-3 p-3 rounded-xl bg-green-50/50 border border-green-200/50 shadow-sm hover:shadow-md transition-all">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2 className="text-green-600" size={18} />
          </div>
          <span className="text-sm font-medium text-green-900">S2-5: 거버넌스 (감독 주체)</span>
        </li>
        <li className="flex items-center gap-3 p-3 rounded-xl bg-green-50/50 border border-green-200/50 shadow-sm hover:shadow-md transition-all">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2 className="text-green-600" size={18} />
          </div>
          <span className="text-sm font-medium text-green-900">S2-7: 리스크 및 기회 (전략 우선순위)</span>
        </li>
        <li className="flex items-center gap-3 p-3 rounded-xl bg-yellow-50/50 border border-yellow-200/50 shadow-sm hover:shadow-md transition-all">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
            <AlertCircle className="text-yellow-600" size={18} />
          </div>
          <span className="text-sm text-yellow-900">S2-15: 시나리오 분석 (기준 연도)</span>
        </li>
        <li className="flex items-center gap-3 p-3 rounded-xl bg-red-50/50 border border-red-200/50 shadow-sm hover:shadow-md transition-all">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
            <X className="text-red-600" size={18} />
          </div>
          <span className="text-sm text-red-900">Scope 1, 2, 3 배출량</span>
        </li>
      </ul>
    </div>
  );
}

