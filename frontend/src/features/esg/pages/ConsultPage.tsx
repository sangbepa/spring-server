'use client';

import { ConsultView } from '../components/ConsultView';

export function ConsultPage() {
  const handleSendMessage = (message: string) => {
    console.log('Sending:', message);
    // TODO: 실제 메시지 전송 로직 구현
  };

  return <ConsultView onSendMessage={handleSendMessage} />;
}
