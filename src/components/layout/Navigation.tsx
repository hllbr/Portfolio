import { House, EnvelopeSimple, Cpu, Brain, FileText, GameController } from 'phosphor-react';
import FluidTabs from '../ui/FluidTabs';
import useWindowWidth from '../../Hooks/useWindowWidth';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t } = useTranslation();
  const width = useWindowWidth();
  const showLabels = width > 768;

  const navItems = [
    { path: '/', label: t('nav.home'), icon: (size: number) => <House size={size} /> },
    { path: '/Technology', label: t('nav.technologies'), icon: (size: number) => <Cpu size={size} /> },
    { path: '/AI', label: t('nav.aiApproach'), icon: (size: number) => <Brain size={size} /> },
    { path: '/Patent', label: t('nav.patents'), icon: (size: number) => <FileText size={size} /> },
    { path: '/Game', label: t('nav.game'), icon: (size: number) => <GameController size={size} /> },
    { path: '/Contact', label: t('nav.contact'), icon: (size: number) => <EnvelopeSimple size={size} /> },
  ];

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