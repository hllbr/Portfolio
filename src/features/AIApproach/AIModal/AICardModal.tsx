import React from 'react';
import styles from './AICardModal.module.css';
import { useEffect, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface AICardModalProps {
  isOpen: boolean;
  onClose: () => void;
  borderColor: string;
  title: string;
  prompts: { title: string; prompt: string }[];
  lang: 'en' | 'tr';
}

const AICardModal: React.FC<AICardModalProps> = ({
  isOpen,
  onClose,
  borderColor,
  title,
  prompts,
  lang,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles['ai-modal-overlay']}
      style={{ justifyContent: 'center', alignItems: 'center' }}
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className={styles['ai-modal']}
        style={{
          borderColor,
          background: '#1e293b',
          color: '#e2e8f0',
          borderRadius: 16,
          boxShadow: '0 8px 32px 0 rgba(56,189,248,0.18)',
          padding: 0,
          minWidth: 340,
          maxWidth: 520,
          width: '90vw',
          maxHeight: '80vh',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            color: borderColor,
            fontWeight: 700,
            fontSize: 22,
            borderBottom: `3px solid ${borderColor}`,
            background: '#1e293b',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            padding: '1.2rem 2rem 1.2rem 2rem',
            position: 'sticky',
            top: 0,
            zIndex: 10,
          }}
        >
          {/* Icon (optional, if you want to show) */}
          {/* <span style={{ fontSize: 32, marginRight: 8 }}>{icon}</span> */}
          <span style={{ fontWeight: 700, fontSize: 22, color: borderColor, flex: 1 }}>{title}</span>
          <IconButton
            onClick={onClose}
            aria-label="Kapat"
            sx={{
              color: '#e2e8f0',
              ml: 1.2,
              '&:hover': { color: borderColor, background: borderColor + '22' },
              '&:focus': { color: borderColor, background: borderColor + '22' },
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
        {/* Divider */}
        <div style={{ height: 2, background: borderColor, opacity: 0.18 }} />
        {/* Prompts Content */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            maxHeight: '60vh',
            padding: '2rem',
            background: 'rgba(30,41,59,0.92)',
          }}
        >
          {prompts.map(({ title, prompt }, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(51,65,85,0.5)',
                borderRadius: 12,
                border: `1.5px solid ${borderColor}`,
                marginBottom: 18,
                padding: '1rem 1.2rem 0.7rem 1.2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                boxShadow: '0 2px 8px 0 rgba(56,189,248,0.08)',
              }}
            >
              <div style={{ fontWeight: 600, fontSize: 17, color: borderColor, marginBottom: 2 }}>{title}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span
                  style={{
                    flex: 1,
                    background: '#1e293b',
                    borderRadius: 6,
                    padding: '6px 10px',
                    fontFamily: 'monospace',
                    fontSize: 14,
                    color: '#e2e8f0',
                    wordBreak: 'break-all',
                  }}
                >
                  {prompt}
                </span>
                <button
                  onClick={() => navigator.clipboard.writeText(prompt)}
                  style={{
                    background: borderColor,
                    color: '#0f172a',
                    border: 'none',
                    borderRadius: 6,
                    padding: '0.3rem 1.1rem',
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.background = '#0ea5e9';
                    e.currentTarget.style.color = '#e2e8f0';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.background = borderColor;
                    e.currentTarget.style.color = '#0f172a';
                  }}
                >
                  {lang === 'tr' ? 'Kopyala' : 'Copy'}
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Bottom Divider */}
        <div style={{ height: 2, background: borderColor, opacity: 0.18 }} />
        {/* Close Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1.1rem 2rem 1.1rem 2rem' }}>
          <button
            onClick={onClose}
            style={{
              border: `2px solid ${borderColor}`,
              color: borderColor,
              background: 'none',
              borderRadius: 4,
              fontWeight: 600,
              fontSize: 16,
              padding: '0.5rem 2.2rem',
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s, border 0.2s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = borderColor + '22';
              e.currentTarget.style.color = borderColor;
              e.currentTarget.style.borderColor = borderColor;
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'none';
              e.currentTarget.style.color = borderColor;
              e.currentTarget.style.borderColor = borderColor;
            }}
          >
            {lang === 'tr' ? 'Kapat' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AICardModal; 