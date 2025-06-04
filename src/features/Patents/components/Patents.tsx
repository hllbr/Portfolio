import { useTranslation } from 'react-i18next';
import '../styles/Patents.css';
import '../styles/PatentsPage.css';
import '../styles/PatentsHero.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

/**
 * Information page about patents and related quotes.
 */
const Patents = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const navigate = useNavigate();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const quotes = t('patents.closing.quotes', { returnObjects: true }) as Array<{
    quote: string;
    author: string;
    emoji: string;
  }>;

  useEffect(() => {
    const currentQuote = quotes[currentQuoteIndex];
    const fullText = `${currentQuote.emoji} ${currentQuote.quote} — ${currentQuote.author}`;
    
    let timeout: NodeJS.Timeout;
    
    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
      } else {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, 50);
      }
    } else {
      if (displayText === fullText) {
        setIsWaiting(true);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 50);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isWaiting, currentQuoteIndex, quotes]);

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
          <div className="turkey-position-content">
            <p>{t('patents.turkey.description')}</p>

            <h4>{t('patents.turkey.globalLandscape.title')}</h4>
            <ul>
              {(t('patents.turkey.globalLandscape.points', { returnObjects: true }) as string[]).map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            <h4>{t('patents.turkey.growthTrends.title')}</h4>
            <p>{t('patents.turkey.growthTrends.intro')}</p>
            <ul>
              {(t('patents.turkey.growthTrends.points', { returnObjects: true }) as string[]).map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            <h4>{t('patents.turkey.challenges.title')}</h4>
            <ul>
              {(t('patents.turkey.challenges.points', { returnObjects: true }) as string[]).map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            <h4>{t('patents.turkey.potential.title')}</h4>
            <p>{t('patents.turkey.potential.description')}</p>
            <ul>
              {(t('patents.turkey.potential.points', { returnObjects: true }) as string[]).map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            <h4>{t('patents.turkey.conclusion.title')}</h4>
            <p>{t('patents.turkey.conclusion.description')}</p>
          </div>
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
        {/*
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
        */}

        {/* Closing Section */}
        <div className="patent-card">
          <div className="typewriter-container">
            <pre className="typewriter-text">{displayText}</pre>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Patents; 