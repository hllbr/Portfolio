import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/AIHero.css';

/**
 * Hero section for the AI approach page.
 */
export default function AIHero() {
  const { t } = useTranslation();
  return (
    <section className="ai-hero" style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '2rem' }}>
      <motion.h1
        className="ai-hero-title"
        initial={{ opacity: 0, scale: 0.96, y: -24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.77, 0, 0.18, 1] }}
      >
        {t('aiApproach.heroTitle')}
      </motion.h1>
      <p className="ai-hero-subtitle">
        {t('aiApproach.heroSubtitle')}
      </p>
    </section>
  );
} 