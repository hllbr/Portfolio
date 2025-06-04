import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, LayoutGroup } from 'framer-motion';
import { Translate } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

interface NavItem {
  path: string;
  label: string;
  icon?: (size: number) => React.ReactNode;
}

interface FluidTabsProps {
  items: NavItem[];
}

/**
 * Navigation tab component with fluid animations.
 */
const FluidTabs: React.FC<FluidTabsProps> = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const current = items.findIndex(item => item.path === location.pathname);
  const { t, i18n } = useTranslation();
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);
  const langMenuRef = React.useRef<HTMLButtonElement>(null);

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 480;
  const buttonPadding = isMobile ? '0.4rem 0.7rem' : '0.65rem 1.5rem';
  const buttonFontSize = isMobile ? 15 : 18;
  const iconSize = isMobile ? 20 : 18;
  const containerGap = isMobile ? 2 : 4;
  const containerMinHeight = isMobile ? 36 : 48;

  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    }
    if (langMenuOpen) document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [langMenuOpen]);

  React.useEffect(() => {
    const handleRouteChange = () => {
      const isSocialMediaClick = document.querySelector('.patents-container .social-media-bubble')?.contains(document.activeElement);
      if (!isSocialMediaClick) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleRouteChange();
  }, [location.pathname]);

  return (
    <LayoutGroup>
      <div style={{
        display: 'flex',
        background: 'rgba(30,41,59,0.92)',
        borderRadius: 999,
        padding: 4,
        boxShadow: '0 2px 12px 0 rgba(31,38,135,0.08)',
        gap: containerGap,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        minHeight: containerMinHeight,
        width: 'fit-content',
        position: 'relative',
      }}>
        {items.map((item, i) => {
          const selected = i === current;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              style={{
                position: 'relative',
                border: 'none',
                background: 'none',
                color: selected ? '#0ea5e9' : '#e2e8f0',
                fontWeight: selected ? 700 : 500,
                fontSize: buttonFontSize,
                borderRadius: 999,
                padding: buttonPadding,
                cursor: 'pointer',
                outline: 'none',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'color 0.18s',
              }}
              aria-current={selected ? 'page' : undefined}
            >
              {selected && (
                <motion.div
                  layoutId="fluid-tab-bg"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 999,
                    background: 'rgba(255,255,255,0.08)',
                    boxShadow: '0 2px 8px 0 rgba(56,189,248,0.08)',
                    zIndex: -1,
                  }}
                  transition={{ type: 'spring', bounce: 0.32, duration: 0.5 }}
                />
              )}
              {item.icon && <span style={{ marginRight: 8 }}>{item.icon(iconSize)}</span>}
              {item.label}
            </button>
          );
        })}
        <button
          ref={langMenuRef}
          onClick={() => setLangMenuOpen(v => !v)}
          style={{
            position: 'relative',
            zIndex: 20,
            pointerEvents: 'auto',
            border: 'none',
            background: 'none',
            color: '#e2e8f0',
            borderRadius: 999,
            padding: buttonPadding,
            cursor: 'pointer',
            outline: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            transition: 'color 0.18s',
            marginLeft: 8,
          }}
          aria-label="Change language"
        >
          <Translate size={isMobile ? 24 : 32} />
        </button>
        {langMenuOpen && (
          <div style={{
            position: 'absolute',
            right: 0,
            top: '110%',
            background: 'rgba(30,41,59,0.98)',
            borderRadius: 12,
            boxShadow: '0 4px 24px 0 rgba(31,38,135,0.18)',
            padding: '0.5rem 1.2rem',
            minWidth: 120,
            zIndex: 30,
            pointerEvents: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            border: '2px solid #0ea5e9',
          }}>
            <button
              onClick={e => { e.stopPropagation(); i18n.changeLanguage('en'); setLangMenuOpen(false); }}
              style={{
                background: i18n.language === 'en' ? '#0ea5e9' : 'none',
                color: i18n.language === 'en' ? '#fff' : '#e2e8f0',
                border: 'none',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 16,
                padding: '0.4rem 1.2rem',
                cursor: 'pointer',
                width: '100%',
                transition: 'background 0.18s, color 0.18s',
              }}
            >EN</button>
            <button
              onClick={e => { e.stopPropagation(); i18n.changeLanguage('tr'); setLangMenuOpen(false); }}
              style={{
                background: i18n.language === 'tr' ? '#0ea5e9' : 'none',
                color: i18n.language === 'tr' ? '#fff' : '#e2e8f0',
                border: 'none',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 16,
                padding: '0.4rem 1.2rem',
                cursor: 'pointer',
                width: '100%',
                transition: 'background 0.18s, color 0.18s',
              }}
            >TR</button>
          </div>
        )}
        <span style={{display:'none'}}>{t('language')}</span>
      </div>
    </LayoutGroup>
  );
};

export default FluidTabs; 