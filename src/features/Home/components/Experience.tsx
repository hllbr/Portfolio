import '../styles/AboutMeSpeechBubble.css';
import '../styles/ExperienceLiveIcon.css';
import React, { useState } from 'react';
import ExperienceModal from './ExperienceModal/ExperienceModal';
import { experiences } from '../helpers/experienceData';
import type { ExperienceType } from '../helpers/experienceData';
import { useTranslation } from 'react-i18next';

const getCurrentPosition = (positions: ExperienceType['positions']) => positions.find((p) => p.isCurrent);

const Experience = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ExperienceType | null>(null);
  const { t } = useTranslation();

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <>
      <div className="speech-bubble">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">{t('experience.title')}</h1>
          <p className="text-xl text-muted-foreground">{t('experience.subtitle')}</p>
        </section>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', width: '100%', marginTop: '2rem' }}>
          {experiences.map((exp) => {
            const current = getCurrentPosition(exp.positions);
            const isNetas = exp.company === 'NETAŞ' && current;
            const isHovered = hovered === exp.company;
            return (
              <div
                key={exp.company}
                style={{
                  background: 'rgba(30,41,59,0.92)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  boxShadow: isHovered
                    ? '0 12px 32px 0 rgba(31, 38, 135, 0.18)'
                    : '0 4px 6px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  width: '100%',
                  maxWidth: 520,
                  transition: 'border 0.2s, transform 0.2s, box-shadow 0.2s',
                  border: `2px solid ${exp.color}`,
                  transform: isHovered ? 'translate(8px, -8px)' : 'none',
                  cursor: 'pointer',
                  position: 'relative',
                  color: '#e2e8f0',
                }}
                onMouseEnter={() => setHovered(exp.company)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => {
                  setSelected(exp);
                  setOpen(true);
                }}
              >
                <img src={exp.logo} alt={exp.company} style={{ width: 48, height: 48, objectFit: 'contain', borderRadius: 8, background: '#fff', border: '1px solid #e5e7eb', padding: 4 }} />
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#e2e8f0' }}>
                    {isNetas ? <>{exp.company}<span style={{ marginLeft: 8, fontSize: 13, color: '#16a34a', fontWeight: 500, fontFamily: 'inherit', letterSpacing: 0.1 }}> - {t('experience.currentlyEmployed')}</span></> : exp.company}
                  </div>
                </div>
                <span className="experience-live-icon" aria-label={t('experience.clickableCard')}>
                  <span className="experience-live-pulse"></span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 2, position: 'relative' }}>
                    <circle cx="12" cy="12" r="4" fill="#ff2222" />
                    <circle cx="12" cy="12" r="8" stroke="#ff2222" strokeWidth="2" fill="none" opacity="0.5" />
                    <circle cx="12" cy="12" r="11" stroke="#ff2222" strokeWidth="1.2" fill="none" opacity="0.25" />
                  </svg>
                </span>
              </div>
            );
          })}
        </div>
        <ExperienceModal 
          open={open} 
          selected={selected} 
          onClose={handleClose} 
          color={selected?.color}
        />
        <div className="speech-bubble-tail" />
      </div>
    </>
  );
};

export default Experience; 