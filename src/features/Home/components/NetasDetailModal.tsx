import { Dialog, DialogTitle, DialogContent, Button, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface NetasDetailModalProps {
  open: boolean;
  onClose: () => void;
  color?: string;
}

/**
 * Detailed modal describing NETAŞ experience.
 */
const NetasDetailModal: React.FC<NetasDetailModalProps> = ({ open, onClose, color }) => {
  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
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
      <DialogTitle sx={{ fontWeight: 700, fontSize: 22 }}>
        {t('experience.netas.detailTitle')}
      </DialogTitle>
      <Divider sx={{ my: 0.5, borderColor: color || '#f59e42' }} />
      <DialogContent sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
        {`${t('experience.netas.detailPrefix')}\n\n${t('experience.netas.detailText')}`}
      </DialogContent>
      <Divider sx={{ my: 0.5, borderColor: color || '#f59e42' }} />
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1.1rem 2rem' }}>
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

export default NetasDetailModal;
