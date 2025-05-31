import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/AIApproach.module.css';
import { AICardModal } from '../AIModal';
import { CARD_TITLES, PROMPTS, type CardTitle } from '../constants/aiPrompts';

const AIApproach = () => {
  const { t, i18n } = useTranslation();
  const [selectedCard, setSelectedCard] = useState<null | number>(null);

  const aiCards = t('aiApproach.cards', { returnObjects: true }) as Array<{
    logo: string;
    title: string;
    description: string;
    details: string[];
    color: string;
  }>;

  const handleCardClick = (idx: number) => setSelectedCard(idx);
  const handleCloseModal = () => setSelectedCard(null);

  const selected = selectedCard !== null ? aiCards[selectedCard] : null;
  // Typesafe erişim
  const promptsRaw = selected && CARD_TITLES.includes(selected.title as CardTitle)
    ? PROMPTS[selected.title as CardTitle]
    : null;

  // prompts dizisini {title, prompt}[] formatına dönüştür
  const lang = i18n.language.startsWith('tr') ? 'tr' : 'en';
  const prompts = promptsRaw ? promptsRaw[lang] : [];

  return (
    <div className={`${styles.container} font-sans`}>
      {/* Ana Başlık */}
      <div className="mb-8">
        <h1 className={styles.mainTitle}>{t('aiApproach.mainTitle')}</h1>
        <p className={styles.mainTitleSubtitle}>{t('aiApproach.mainTitleSubtitle')}</p>
      </div>

      {/* Genel Bilgilendirme Alanı */}
      <section className={styles.infoSection}>
        <h2 className="text-2xl font-bold mb-2">{t('aiApproach.infoSectionTitle1')}</h2>
        {(t('aiApproach.infoSectionDesc1', { returnObjects: true }) as string[]).map((p, i) => (
          <p key={i} className="text-lg text-gray-200 mb-2">{p}</p>
        ))}
      </section>

      {/* Düşünce Sistemi Açıklaması */}
      <section className={styles.infoSection}>
        <h2 className="text-2xl font-bold mb-2">{t('aiApproach.infoSectionTitle2')}</h2>
        {(t('aiApproach.infoSectionDesc2', { returnObjects: true }) as string[]).map((p, i) => (
          <p key={i} className="text-lg text-gray-200 mb-2">{p}</p>
        ))}
      </section>

      {/* Sparkle Efekti */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className={styles.sparkle}></div>
      ))}

      {/* AI Araç Kartları */}
      <section style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <div className={styles.cardGrid}>
          {aiCards.map((card, idx) => (
            <div
              key={card.title}
              className={styles.aiCard}
              style={{
                borderColor: card.color,
                ['--ai-card-color' as string]: card.color,
              }}
              onClick={() => handleCardClick(idx)}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{card.logo}</div>
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: '1.4rem',
                  color: card.color,
                  marginBottom: '0.5rem',
                }}
              >
                {card.title}
              </h2>
              <div style={{ marginBottom: '0.5rem' }}>{card.description}</div>
              {Array.isArray(card.details) && (
                <ul
                  style={{
                    marginTop: '0.5rem',
                    paddingLeft: '1rem',
                    color: '#cbd5e1',
                    fontSize: '1rem',
                  }}
                >
                  {card.details.map((d, i) => (
                    <li key={i}>→ {d}</li>
                  ))}
                </ul>
              )}
              <div className={styles.promptAccess} style={{ color: card.color }}>
                {t('aiApproach.clickForPrompts')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selected && prompts && (
        <AICardModal
          isOpen={!!selected}
          onClose={handleCloseModal}
          borderColor={selected.color}
          title={selected.title}
          prompts={prompts}
          lang={lang}
        />
      )}
    </div>
  );
};

export default AIApproach;
