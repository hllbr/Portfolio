import React from 'react';
import { useTranslation } from 'react-i18next';
// import { NeonCursor } from '../components/NeonCursor';
import styles from '../styles/AIApproach.module.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const AIApproach = () => {
  const { t } = useTranslation();
  // Kartlar çeviri dosyasından alınır
  const aiCards = t('aiApproach.cards', { returnObjects: true }) as Array<{
    logo: string;
    title: string;
    description: string;
    details: string[];
    color: string;
  }>;

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

      {/* Vizyon/Hero Alanı */}
      <section className={styles.infoSection}>
        <h2 className="text-2xl font-bold mb-2">{t('aiApproach.infoSectionTitle2')}</h2>
        <p className="text-lg text-gray-200">{t('aiApproach.infoSectionDesc2')}</p>
      </section>

      {/* <NeonCursor /> */}
      {/* Sparkles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className={styles.sparkle}></div>
      ))}

      {/* Info & AI Cards Only */}
      <section style={{marginTop: '2rem', marginBottom: '2rem'}}>
        <div className={styles.cardGrid}>
          {aiCards.map(card => (
            <div
              key={card.title}
              className={styles.aiCard}
              style={{
                borderColor: card.color,
                ['--ai-card-color' as string]: card.color,
              }}
            >
              <div style={{fontSize:'2rem', marginBottom:'0.5rem'}}>{card.logo}</div>
              <h2 style={{fontWeight:700, fontSize:'1.4rem', color:card.color, marginBottom:'0.5rem'}}>{card.title}</h2>
              <div style={{marginBottom:'0.5rem'}}>{card.description}</div>
              {Array.isArray(card.details) && (
                <ul style={{marginTop:'0.5rem', paddingLeft:'1rem', color:'#cbd5e1', fontSize:'1rem'}}>
                  {card.details.map((d, i) => <li key={i}>→ {d}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Areas of Expertise and Methodologies sections removed as requested */}
    </div>
  );
};

export default AIApproach; 