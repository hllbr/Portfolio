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
      <div
        className={`flex bg-slate-800/90 rounded-full p-1 shadow-[0_2px_12px_0_rgba(31,38,135,0.08)] justify-center items-center mx-auto w-fit relative ${isMobile ? 'gap-2 min-h-[36px]' : 'gap-4 min-h-[48px]'}`}
      >
        {items.map((item, i) => {
          const selected = i === current;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`relative border-none bg-none ${selected ? 'text-sky-500 font-bold' : 'text-slate-200 font-medium'} ${isMobile ? 'py-[0.4rem] px-[0.7rem] text-[15px]' : 'py-[0.65rem] px-[1.5rem] text-[18px]'} cursor-pointer outline-none z-[1] flex items-center gap-2 transition-colors duration-150`}
              aria-current={selected ? 'page' : undefined}
            >
              {selected && (
                <motion.div
                  layoutId="fluid-tab-bg"
                  className="absolute inset-0 rounded-full bg-white/10 shadow-[0_2px_8px_0_rgba(56,189,248,0.08)] z-[-1]"
                  transition={{ type: 'spring', bounce: 0.32, duration: 0.5 }}
                />
              )}
              {item.icon && <span className="mr-2">{item.icon(iconSize)}</span>}
              {item.label}
            </button>
          );
        })}
        <button
          ref={langMenuRef}
          onClick={() => setLangMenuOpen(v => !v)}
          className={`relative z-20 pointer-events-auto border-none bg-none text-slate-200 rounded-full cursor-pointer outline-none flex items-center gap-2 transition-colors duration-150 ml-2 ${isMobile ? 'py-[0.4rem] px-[0.7rem]' : 'py-[0.65rem] px-[1.5rem]'}`}
          aria-label="Change language"
        >
          <Translate size={isMobile ? 24 : 32} />
        </button>
        {langMenuOpen && (
          <div
            className="absolute right-0 bg-slate-800/95 rounded-xl shadow-[0_4px_24px_0_rgba(31,38,135,0.18)] py-2 px-[1.2rem] min-w-[120px] z-30 pointer-events-auto flex flex-col items-center gap-2 border-2 border-sky-500"
            style={{ top: '110%' }}
          >
            <button
              onClick={e => { e.stopPropagation(); i18n.changeLanguage('en'); setLangMenuOpen(false); }}
              className={`w-full rounded-lg font-semibold text-base cursor-pointer transition-colors duration-150 py-[0.4rem] px-[1.2rem] ${i18n.language === 'en' ? 'bg-sky-500 text-white' : 'bg-transparent text-slate-200'}`}
            >
              EN
            </button>
            <button
              onClick={e => { e.stopPropagation(); i18n.changeLanguage('tr'); setLangMenuOpen(false); }}
              className={`w-full rounded-lg font-semibold text-base cursor-pointer transition-colors duration-150 py-[0.4rem] px-[1.2rem] ${i18n.language === 'tr' ? 'bg-sky-500 text-white' : 'bg-transparent text-slate-200'}`}
            >
              TR
            </button>
          </div>
        )}
        <span className="hidden">{t('language')}</span>
      </div>
    </LayoutGroup>
  );
};

export default FluidTabs; 