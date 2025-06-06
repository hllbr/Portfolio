import React from 'react';
import '../styles/TestDetailOverlay.css';
import { useTranslation } from 'react-i18next';

interface TestDetailOverlayProps {
  open: boolean;
  detail: string;
  color?: string;
  onClose: () => void;
}

const TestDetailOverlay: React.FC<TestDetailOverlayProps> = ({ open, detail, color, onClose }) => {
  const { t } = useTranslation();

  if (!open) return null;

  return (
    <div className="test-detail-overlay" onClick={onClose}>
      <div
        className="test-detail-box"
        style={{ borderColor: color || '#f59e42' }}
        onClick={(e) => e.stopPropagation()}
      >
        <p style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>{detail}</p>
        <button
          className="test-detail-close"
          onClick={onClose}
          style={{ borderColor: color || '#f59e42', color: color || '#f59e42' }}
        >
          {t('experience.seeLess')}
        </button>
      </div>
    </div>
  );
};

export default TestDetailOverlay;
