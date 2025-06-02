import { useTranslation, Trans } from 'react-i18next';
import './style/Patents.css';
import './style/PatentsHero.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Patents = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const navigate = useNavigate();

  // Handler to make the contact-link span clickable
  React.useEffect(() => {
    const handler = (e: Event) => {
      if ((e.target as HTMLElement).classList.contains('contact-link')) {
        e.preventDefault();
        navigate('/Contact');
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [navigate]);

  return (
    <div className="patents-container">
      <section className="patents-hero">
        <h1 className="patents-hero-title gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>{t('patents.heroTitle')}</h1>
        <p className="patents-hero-subtitle fade-in">{t('patents.heroSubtitle')}</p>
      </section>

      <section className="patents-section">
        {/* What is a Patent Section */}
        <div className="patent-card">
          <h2>{t('patents.whatIsPatent.title')}</h2>
          <p>{isEnglish ? t('patents.whatIsPatent.description') : t('patents.whatIsPatent.descriptionTR')}</p>
        </div>

        {/* Why Do Patents Matter Section */}
        <div className="patent-card">
          <h2>{t('patents.whyMatter.title')}</h2>
          <p>{isEnglish ? t('patents.whyMatter.description') : t('patents.whyMatter.descriptionTR')}</p>
          <p>{t('patents.whyMatter.international')}</p>
        </div>

        {/* Why I Work in This Field Section */}
        <div className="patent-card">
          <h2>{t('patents.whyWork.title')}</h2>
          <p>{isEnglish ? t('patents.whyWork.description') : t('patents.whyWork.descriptionTR')}</p>
          {isEnglish && <p>{t('patents.whyWork.description2')}</p>}
        </div>

        {/* Areas Where I Innovate Section */}
        <div className="patent-card">
          <h2>{t('patents.areas.title')}</h2>
          <p>{t('patents.areas.description')}</p>
          <ul>
            {(t('patents.areas.items', { returnObjects: true }) as string[]).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="disclaimer">{t('patents.areas.disclaimer')}</p>
        </div>

        {/* Turkey's Position Section */}
        <div className="patent-card">
          <h2>{t('patents.turkey.title')}</h2>
          <p>{isEnglish ? t('patents.turkey.description') : t('patents.turkey.descriptionTR')}</p>
        </div>

        {/* Workflow Section */}
        {/**
        <div className="patent-card">
          <h2>{t('patents.workflow.title')}</h2>
          <ul>
            <li>🎯 Problem Identification</li>
            <li>✍️ Sketching & Technical Structuring</li>
            <li>🤖 AI-assisted Simulation & Refinement (GPT, Claude)</li>
            <li>📄 Documentation & Visual Modeling</li>
            <li>🛡️ Legal Preparation & Submission</li>
          </ul>
          {!isEnglish && <p>{t('patents.workflow.descriptionTR')}</p>}
        </div>
        */}

        {/* Collaboration Section */}
        <div className="patent-card">
          <h2 >{t('patents.collaboration.title')}</h2>
          <p className="collaboration-text">
            <Trans
              i18nKey={isEnglish ? 'patents.collaboration.description' : 'patents.collaboration.descriptionTR'}
              components={{
                contact: <span className="contact-link" onClick={() => navigate('/contact')}>{isEnglish ? 'Contact' : 'İletişim'}</span>,
                social: <span className="social-link" onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const el = document.getElementById('social-media');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 300);
                }}>{isEnglish ? 'Social Media' : 'Sosyal Medya'}</span>
              }}
            />
          </p>
        </div>

        {/* Closing Section */}
        <div className="patent-card">
          <p className="closing">{t('patents.closing')}</p>
          <p className="closing-sub">{t('patents.closing2')}</p>
        </div>
      </section>
    </div>
  );
};

export default Patents; 