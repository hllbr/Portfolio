import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Button, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './ExperienceModal.css';
import type { ExperienceType } from '../../helpers/experienceData';
import { useTranslation } from 'react-i18next';

interface Position {
  title: string;
  date: string;
  desc: string;
  isCurrent?: boolean;
}

interface ExperienceModalProps {
  open: boolean;
  selected: ExperienceType | null;
  onClose: () => void;
  color?: string;
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({ open, selected, onClose, color }) => {
  const { t } = useTranslation();

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
        {selected?.company}
        <IconButton onClick={onClose} sx={{ marginLeft: 'auto', color: '#e2e8f0' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider sx={{ my: 0.5, borderColor: color || '#f59e42' }} />
      <DialogContent>
        {selected && (
          <div className="experience-modal-content">
            {selected.positions.map((pos: Position, i: number) => (
              <div key={i} className="experience-modal-position" style={{ marginBottom: 18 }}>
                <div style={{ fontWeight: 600, fontSize: 18, color: color || '#f59e42' }}>{pos.title}</div>
                <div style={{ color: '#cbd5e1', fontSize: 15, marginBottom: 2 }}>
                  {pos.date.replace('Present', t('experience.currentlyEmployed'))}
                </div>
                <div style={{ color: '#e2e8f0', fontSize: 16, margin: '6px 0 0 0' }}>{pos.desc}</div>
              </div>
            ))}
            <div className="experience-modal-tech-stack" style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {selected.techs.map((tech: string) => (
                <span key={tech} style={{ background: '#334155', color: color || '#f59e42', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '0.95rem', fontWeight: 500, marginTop: '0.25rem' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
      <Divider sx={{ my: 0.5, borderColor: color || '#f59e42' }} />
      <DialogActions sx={{ pl: 3 }}>
        <Button 
          onClick={onClose} 
          variant="outlined" 
          className="experience-modal-close-button"
          sx={{ borderColor: color || '#f59e42', color: color || '#f59e42', fontWeight: 600, '&:hover': { background: (color || '#f59e42') + '22', borderColor: color || '#f59e42', color: color || '#f59e42' } }}
        >
          {t('experience.close')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExperienceModal; 