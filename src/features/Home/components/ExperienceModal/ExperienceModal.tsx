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
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({ open, selected, onClose }) => {
  const { t } = useTranslation();

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth
      PaperProps={{ sx: { borderRadius: 4 } }}
      BackdropProps={{ sx: { backdropFilter: 'blur(6px)' } }}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
        <IconButton onClick={onClose} sx={{ marginLeft: 'auto' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider sx={{ my: 0.5 }} />
      <DialogContent>
        {selected && (
          <div className="experience-modal-content">
            {selected.positions.map((pos: Position, i: number) => (
              <div key={i} className="experience-modal-position">
                <div className="experience-modal-title">{pos.title}</div>
                <div className="experience-modal-date">
                  {pos.date.replace('Present', t('experience.currentlyEmployed'))}
                </div>
                <div className="experience-modal-description">{pos.desc}</div>
              </div>
            ))}
            <div className="experience-modal-tech-stack">
              {selected.techs.map((tech: string) => (
                <span key={tech} className="experience-modal-tech-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
      <Divider sx={{ my: 0.5 }} />
      <DialogActions sx={{ pl: 3 }}>
        <Button 
          onClick={onClose} 
          variant="outlined" 
          className="experience-modal-close-button"
        >
          {t('experience.close')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExperienceModal; 