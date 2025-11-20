'use client';

export function PreviewPanel() {
  return (
    <div className="w-1/2 flex flex-col h-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
            실시간 보고서 문단 프리뷰
          </h2>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
            흐름 6.2
          </span>
        </div>

        {/* 생성된 문단 예시 1 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <h3 className="text-lg font-bold text-gray-800">IFRS S2-5: Governance</h3>
          </div>
          <div className="prose prose-sm max-w-none text-gray-700 space-y-3">
            <p className="leading-relaxed">
              당사는 기후 관련 리스크 및 기회에 대한 효과적인 감독을 위해{' '}
              <span className="highlight-source">
                이사회 산하 &apos;지속가능경영위원회&apos;
                <span className="tooltip">근거: 사용자 입력 (Q:감독 주체)</span>
              </span>
              를 설치하여 운영하고 있습니다.{' '}
              <span className="highlight-source">
                위원회는 분기별
                <span className="tooltip">근거: TCFD 보고서 p.5 (수정됨)</span>
              </span>
              로 기후 관련 주요 안건을 보고받고, 관련 전략 및 성과를 감독합니다.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-4">
              <strong className="text-blue-900">AI 코멘트 (흐름 5.1 검증):</strong>{' '}
              <span className="text-blue-700">
                기준서 충족. &apos;위원회&apos;의 구체적인 역할(예: 성과 측정, 보상 연계)을 추가하면
                더 좋습니다.
              </span>
            </div>
          </div>
        </div>

        {/* 생성된 문단 예시 2 (부족 요소 표시) */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-100 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <h3 className="text-lg font-bold text-gray-800">IFRS S2-15: Scenario Analysis</h3>
          </div>
          <div className="prose prose-sm max-w-none text-gray-700 space-y-3">
            <p className="leading-relaxed">
              당사는 NZE 2050, 2도 시나리오 등을 활용하여 기후 관련 전환 리스크를 분석합니다.{' '}
              <span className="highlight-source highlight-source-error">
                [기준연도 데이터 입력 필요]
                <span className="tooltip">근거: 정량요소 부족 (AI가 수정 요청)</span>
              </span>
              를 기준으로 분석을 수행하였으며...
            </p>
            <div className="bg-gradient-to-r from-red-50 to-yellow-50 border-l-4 border-red-500 p-4 rounded-r-lg mt-4">
              <strong className="text-red-900">AI 코멘트 (흐름 5.1 검증):</strong>{' '}
              <span className="text-red-700">
                정량요소 부족. &apos;Scope 1·2 데이터의 기준연도&apos;를 왼쪽 채팅창에 입력해주세요.
                (흐름 4.1-6)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

