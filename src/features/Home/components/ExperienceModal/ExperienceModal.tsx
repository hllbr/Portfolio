import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Button, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './ExperienceModal.css';
import type { ExperienceType } from '../../helpers/experienceData';
import { useTranslation } from 'react-i18next';

interface Position {
  title: string;
  date: string;
  desc: string;
  detail?: string;
  isCurrent?: boolean;
  shortDesc?: string;
}

interface ExperienceModalProps {
  open: boolean;
  selected: ExperienceType | null;
  onClose: () => void;
  color?: string;
}

/**
 * Modal dialog presenting details of a selected experience item.
 */
const ExperienceModal: React.FC<ExperienceModalProps> = ({ open, selected, onClose, color }) => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth
      PaperProps={{ 
        sx: { 
          borderRadius: 4, 
          border: `3px solid ${color || '#f59e42'}`,
          background: '#1e293b',
          color: '#e2e8f0',
        } 
      }}
      BackdropProps={{ sx: { backdropFilter: 'blur(6px)' } }}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 2, color: '#e2e8f0', fontWeight: 700, fontSize: 22 }}>
        {selected && (
          <img 
            src={selected.logo} 
            alt={selected.company} 
            style={{ 
              width: 40, 
              height: 40, 
              objectFit: 'contain', 
              borderRadius: 8, 
              background: '#fff', 
              border: '1px solid #e5e7eb', 
              padding: 4 
            }} 
          />
        )}
        <span style={{ fontWeight: 700, fontSize: 22, color: color || '#f59e42', flex: 1 }}>{selected?.company}</span>
        <IconButton onClick={onClose} sx={{ marginLeft: 'auto', color: '#e2e8f0' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider sx={{ my: 0.5, borderColor: color || '#f59e42' }} />
      <DialogContent>
        <div style={{
          flex: 1,
          overflowY: 'auto',
          maxHeight: '60vh',
          padding: '1rem',
          background: 'rgba(30,41,59,0.92)',
        }}>
          {selected && (
            <div className="experience-modal-content">
              {selected.positions.map((pos: Position, i: number) => {
                const expanded = expandedIndex === i;
                return (
                  <div
                    key={i}
                    style={{
                      background: 'rgba(51,65,85,0.5)',
                      borderRadius: 12,
                      border: `1.5px solid ${color || '#f59e42'}`,
                      marginBottom: 18,
                      padding: '1rem 1.2rem 0.7rem 1.2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8,
                      boxShadow: '0 2px 8px 0 rgba(56,189,248,0.08)',
                      position: 'relative',
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: 17, color: color || '#f59e42', marginBottom: 2 }}>{pos.title}</div>
                    <div style={{ color: '#cbd5e1', fontSize: 15, marginBottom: 2 }}>
                      {pos.date.replace('Present', t('experience.currentlyEmployed'))}
                    </div>
                    {!expanded && (
                      <>
                        <div style={{ color: '#e2e8f0', fontSize: 16, margin: '6px 0 0 0' }}>{pos.shortDesc || pos.desc}</div>
                        {pos.detail && (
                          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.2rem', marginBottom: '0.5rem' }}>
                            <button
                              className="experience-see-more-btn-pink"
                              style={{
                                background: 'none',
                                color: '#ec4899',
                                border: '2px solid #ec4899',
                                borderRadius: 18,
                                padding: '0.35rem 1.1rem',
                                fontWeight: 700,
                                fontSize: 15,
                                fontFamily: 'inherit',
                                cursor: 'pointer',
                                outline: 'none',
                                transition: 'color 0.18s, border-color 0.18s',
                              }}
                              onClick={() => setExpandedIndex(i)}
                              aria-expanded={expanded}
                            >
                              {t('experience.seeMore')}
                            </button>
                          </div>
                        )}
                      </>
                    )}
                    {expanded && pos.detail && (
                      <>
                        <div style={{ fontSize: 16, margin: '6px 0 0 0', whiteSpace: 'pre-line', color: '#e2e8f0' }}>{pos.detail}</div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.2rem', marginBottom: '0.5rem' }}>
                          <button
                            className="experience-see-more-btn-pink"
                            style={{
                              background: 'none',
                              color: '#ec4899',
                              border: '2px solid #ec4899',
                              borderRadius: 18,
                              padding: '0.35rem 1.1rem',
                              fontWeight: 700,
                              fontSize: 15,
                              fontFamily: 'inherit',
                              cursor: 'pointer',
                              outline: 'none',
                              transition: 'color 0.18s, border-color 0.18s',
                            }}
                            onClick={() => setExpandedIndex(null)}
                            aria-expanded={expanded}
                          >
                            {t('experience.seeLess')}
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
              <div style={{
                marginTop: 12,
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                background: 'rgba(51,65,85,0.5)',
                borderRadius: 12,
                border: `1.5px solid ${color || '#f59e42'}`,
                padding: '1rem 1.2rem',
                boxShadow: '0 2px 8px 0 rgba(56,189,248,0.08)',
              }}>
                {selected.techs.map((tech: string) => (
                  <span
                    key={tech}
                    style={{
                      background: '#334155',
                      color: color || '#f59e42',
                      borderRadius: '0.5rem',
                      padding: '0.25rem 0.75rem',
                      fontSize: '0.95rem',
                      fontWeight: 500
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
      <Divider sx={{ my: 0.5, borderColor: color || '#f59e42' }} />
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1.1rem 2rem 1.1rem 2rem' }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            borderColor: color || '#f59e42',
            color: color || '#f59e42',
            fontWeight: 600,
            fontSize: 16,
            borderRadius: 2,
            padding: '0.5rem 2.2rem',
            '&:hover': {
              background: (color || '#f59e42') + '22',
              borderColor: color || '#f59e42',
              color: color || '#f59e42',
            },
          }}
        >
          {t('experience.close')}
        </Button>
      </div>
    </Dialog>
  );
};

export default ExperienceModal; 