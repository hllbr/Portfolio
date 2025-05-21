import styles from './ExperienceBubble.module.css';
import tooltipStyles from './ExperienceTooltip.module.css';
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Button, Divider, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import netasLogo from '../BrandImage/netastr_logo.jpeg';
import halkbankLogo from '../BrandImage/halkbank_logo.jpeg';
import eleksLogo from '../BrandImage/eleks_yangn_ve_gvenlik_sistemleri_logo.jpeg';

interface Position {
  title: string;
  date: string;
  desc: string;
  isCurrent?: boolean;
}

interface ExperienceType {
  company: string;
  logo: string;
  positions: Position[];
  techs: string[];
}

const experiences: ExperienceType[] = [
  {
    company: 'NETAŞ',
    logo: netasLogo,
    positions: [
      {
        title: 'Senior Full Stack Developer',
        date: 'Eki 2023 - Present',
        desc: 'Ürüne yeni özelliklerin kazandırılması, hem Front-end hem de Back-end geliştirme ve hata düzeltmeleri.',
        isCurrent: true,
      },
      {
        title: 'Full Stack Developer',
        date: 'Ara 2021 - Kas 2023',
        desc: 'Yeni özelliklerin araştırılması, raporlanması ve uygulamaya alınması. Stabil sürüm için hata düzeltmeleri.',
      },
      {
        title: 'Software Test Engineer',
        date: 'Mar 2021 - Ara 2021',
        desc: 'Test senaryolarının yazılması ve manuel koşulması (ALM, OCTANE).',
      },
    ],
    techs: ['Java', 'React.js', 'Spring', 'Docker', 'GIT', 'RESTful', 'Maven', 'Gradle', 'npm', 'yarn'],
  },
  {
    company: 'Halkbank',
    logo: halkbankLogo,
    positions: [
      {
        title: 'Intern',
        date: 'Haz 2018 - Tem 2018',
        desc: 'Prod özelinde gelen değişiklik taleplerinin alınması ve değerlendirilmesi.',
      },
    ],
    techs: ['SQL', 'Java'],
  },
  {
    company: 'Eleks Yangın ve Güvenlik Sistemleri',
    logo: eleksLogo,
    positions: [
      {
        title: 'Intern',
        date: 'Haz 2017 - Tem 2017',
        desc: 'Akıllı Adresli Yangın Algılama ve Kontrol Panellerinin geliştirilmesi.',
      },
    ],
    techs: ['Elektronik', 'C', 'Donanım'],
  },
];

const getCurrentPosition = (positions: Position[]) => positions.find((p) => p.isCurrent);

const Experience = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ExperienceType | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.bubble}>
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Deneyimlerim</h1>
          <p className="text-xl text-muted-foreground">Profesyonel iş tecrübelerim ve kullandığım teknolojiler</p>
        </section>
        <div className={styles.expGrid}>
          {experiences.map((exp) => {
            const current = getCurrentPosition(exp.positions);
            const isNetas = exp.company === 'NETAŞ' && current;
            return (
              <Tooltip title={t('experience.seeDetails', 'Detayları Gör')} arrow placement="top" key={exp.company} classes={{ tooltip: tooltipStyles.customMuiTooltip }}>
                <div
                  className={styles.expCard}
                  style={{
                    cursor: 'pointer',
                    border: hovered === exp.company ? '2px solid #1976d2' : '2px solid transparent',
                    transition: 'border 0.2s, transform 0.2s, box-shadow 0.2s',
                    transform: hovered === exp.company ? 'translate(8px, -8px)' : 'none',
                    boxShadow: hovered === exp.company ? '0 8px 32px 0 rgba(31, 38, 135, 0.15)' : '0 4px 12px 0 rgba(31,38,135,0.07)',
                    position: 'relative',
                  }}
                  onClick={() => {
                    setSelected(exp);
                    setOpen(true);
                  }}
                  onMouseEnter={() => setHovered(exp.company)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className={styles.expHeader}>
                    <img src={exp.logo} alt={exp.company} className={styles.expLogo} />
                    <div>
                      <div className={styles.expTitle}>
                        {isNetas
                          ? <>
                              {exp.company}
                              <span style={{
                                marginLeft: 8,
                                fontSize: 13,
                                color: '#16a34a',
                                fontWeight: 500,
                                fontFamily: 'inherit',
                                letterSpacing: 0.1,
                              }}>
                                - Currently Employed
                              </span>
                            </>
                          : exp.company}
                      </div>
                    </div>
                  </div>
                </div>
              </Tooltip>
            );
          })}
        </div>
        <div className={styles.bubbleTail} />
        <div className={styles.bubbleTailInner} />
      </div>
      <Dialog open={open} onClose={() => { setOpen(false); setSelected(null); }} maxWidth="sm" fullWidth
        PaperProps={{
          sx: { borderRadius: 4 }
        }}
        BackdropProps={{
          sx: { backdropFilter: 'blur(6px)' }
        }}
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {selected && (
            <img src={selected.logo} alt={selected.company} style={{ width: 40, height: 40, objectFit: 'contain', borderRadius: 8, background: '#fff', border: '1px solid #e5e7eb', padding: 4 }} />
          )}
          {selected?.company}
          <IconButton onClick={() => { setOpen(false); setSelected(null); }} sx={{ marginLeft: 'auto' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider sx={{ my: 0.5 }} />
        <DialogContent>
          {selected && (
            <div style={{ padding: '0.5rem 0' }}>
              {selected.positions.map((pos: Position, i: number) => (
                <div key={i} style={{ marginBottom: 16 }}>
                  <div style={{ fontWeight: 600, fontSize: 18, color: '#1976d2' }}>{pos.title}</div>
                  <div style={{ color: '#6b7280', fontSize: 15 }}>{pos.date.replace('Present', 'Currently employed')}</div>
                  <div style={{ color: '#374151', fontSize: 16, margin: '6px 0 0 0' }}>{pos.desc}</div>
                </div>
              ))}
              <div className={styles.techBadges} style={{ marginTop: 12 }}>
                {selected.techs.map((tech: string) => (
                  <span className={styles.techBadge} key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
        <Divider sx={{ my: 0.5 }} />
        <DialogActions sx={{ pl: 3 }}>
          <Button onClick={() => { setOpen(false); setSelected(null); }} variant="outlined" sx={{ borderColor: '#ef4444', color: '#ef4444', borderRadius: 2, '&:hover': { borderColor: '#b91c1c', background: '#fee2e2' } }}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Experience; 