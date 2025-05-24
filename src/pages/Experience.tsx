import './AboutMeSpeechBubble.css';
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Button, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
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
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ExperienceType | null>(null);

  return (
    <div className="speech-bubble">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Deneyimlerim</h1>
        <p className="text-xl text-muted-foreground">Profesyonel iş tecrübelerim ve kullandığım teknolojiler</p>
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
                background: 'white',
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
                border: isHovered ? '2px solid #1976d2' : '2px solid #e5e7eb',
                transform: isHovered ? 'translate(8px, -8px)' : 'none',
                cursor: 'pointer',
                position: 'relative',
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
                <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#1976d2' }}>
                  {isNetas ? <>{exp.company}<span style={{ marginLeft: 8, fontSize: 13, color: '#16a34a', fontWeight: 500, fontFamily: 'inherit', letterSpacing: 0.1 }}> - Currently Employed</span></> : exp.company}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Dialog open={open} onClose={() => { setOpen(false); setSelected(null); }} maxWidth="sm" fullWidth
        PaperProps={{ sx: { borderRadius: 4 } }}
        BackdropProps={{ sx: { backdropFilter: 'blur(6px)' } }}
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
              <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {selected.techs.map((tech: string) => (
                  <span key={tech} style={{ background: '#e3eafe', color: '#1976d2', borderRadius: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '0.95rem', fontWeight: 500, marginTop: '0.25rem' }}>{tech}</span>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
        <Divider sx={{ my: 0.5 }} />
        <DialogActions sx={{ pl: 3 }}>
          <Button onClick={() => { setOpen(false); setSelected(null); }} variant="outlined" sx={{ borderColor: '#ef4444', color: '#ef4444', borderRadius: 2, '&:hover': { borderColor: '#b91c1c', background: '#fee2e2' } }}>Kapat</Button>
        </DialogActions>
      </Dialog>
      <div className="speech-bubble-tail" />
    </div>
  );
};

export default Experience; 