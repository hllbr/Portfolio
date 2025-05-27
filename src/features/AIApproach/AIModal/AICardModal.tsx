import React from 'react';
import styles from './AICardModal.module.css';

interface AICardModalProps {
  isOpen: boolean;
  onClose: () => void;
  borderColor: string;
  title: string;
  promptsEN: string[];
  promptsTR: string[];
}

const AICardModal: React.FC<AICardModalProps> = ({
  isOpen,
  onClose,
  borderColor,
  title,
  promptsEN,
  promptsTR,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles['ai-modal-overlay']}>
      <div className={styles['ai-modal']} style={{ borderColor }}>
        <button className={styles['ai-modal-close']} onClick={onClose}>
          ×
        </button>
        <h2 style={{ color: borderColor }}>{title}</h2>
        <div className={styles['ai-modal-prompts']}>
          <div className={styles['ai-modal-prompts-col']}>
            <h3>English</h3>
            {promptsEN.map((prompt, idx) => (
              <div key={idx} className={styles['ai-modal-prompt-box']}>
                <textarea readOnly value={prompt} />
                <button onClick={() => navigator.clipboard.writeText(prompt)}>Copy</button>
              </div>
            ))}
          </div>
          <div className={styles['ai-modal-prompts-col']}>
            <h3>Türkçe</h3>
            {promptsTR.map((prompt, idx) => (
              <div key={idx} className={styles['ai-modal-prompt-box']}>
                <textarea readOnly value={prompt} />
                <button onClick={() => navigator.clipboard.writeText(prompt)}>Kopyala</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICardModal; 