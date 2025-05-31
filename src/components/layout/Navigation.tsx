import React from 'react';
import { useTranslation } from 'react-i18next';
import { House, EnvelopeSimple, Cpu, Robot, IdentificationBadge, ImageSquare } from 'phosphor-react';
import FluidTabs from '../ui/FluidTabs';

const navItems = [
  { path: '/', label: 'Home', icon: <House size={18} /> },
  { path: '/contact', label: 'Contact', icon: <EnvelopeSimple size={18} /> },
  { path: '/technologies', label: 'Technologies', icon: <Cpu size={18} /> },
  { path: '/ai-approach', label: 'AI Approach', icon: <Robot size={18} /> },
  { path: '/patents', label: 'Patents', icon: <IdentificationBadge size={18} /> },
  { path: '/prompt-gallery', label: 'Prompt Gallery', icon: <ImageSquare size={18} /> },
];

const Navigation = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <nav style={{
      width: '100%',
      background: 'rgba(15,23,42,0.96)',
      padding: '1.2rem 0 0.7rem 0',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 12px 0 rgba(31,38,135,0.08)',
      minHeight: 64,
    }}>
      <FluidTabs items={navItems} />
    </nav>
  );
};

export default Navigation; 