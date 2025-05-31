import React from 'react';
import { House, EnvelopeSimple, Cpu, Brain, FileText } from 'phosphor-react';
import FluidTabs from '../ui/FluidTabs';
import useWindowWidth from '../../hooks/useWindowWidth';

const navItems = [
  { path: '/', label: 'Home', icon: (size: number) => <House size={size} /> },
  { path: '/contact', label: 'Contact', icon: (size: number) => <EnvelopeSimple size={size} /> },
  { path: '/technologies', label: 'Technologies', icon: (size: number) => <Cpu size={size} /> },
  { path: '/ai-approach', label: 'AI Approach', icon: (size: number) => <Brain size={size} /> },
  { path: '/patents', label: 'Patents', icon: (size: number) => <FileText size={size} /> },
];

const Navigation = () => {
  const width = useWindowWidth();
  const showLabels = width > 768;
  const navItemsWithConditionalLabels = navItems.map(item => ({
    ...item,
    label: showLabels ? item.label : '',
  }));
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
      <FluidTabs items={navItemsWithConditionalLabels} />
    </nav>
  );
};

export default Navigation; 