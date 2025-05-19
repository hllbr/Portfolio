import { useTranslation } from 'react-i18next';
import styles from './ContactBubble.module.css';
import { EnvelopeSimple, Phone, WhatsappLogo, GithubLogo, LinkedinLogo, YoutubeLogo } from 'phosphor-react';

// Telefon numarasını base64 ile encode ettik (905522972185)
const encodedPhone = 'OTA1NTIyOTcyMTg1';

const Contact = () => {
  const { t } = useTranslation();

  // Telefon arama fonksiyonu
  const handleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    const decoded = atob(encodedPhone);
    window.location.href = `tel:${decoded}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.bubble}>
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">{t('contact.title', 'Contact Me')}</h1>
          <p className="text-xl text-muted-foreground">
            {t('contact.subtitle', 'Get in touch for collaborations and opportunities')}
          </p>
        </section>

        <section className="space-y-6 mt-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className={`${styles.row} text-lg font-semibold`}>
                <Phone size={22} weight="duotone" />
                {t('contact.phone', 'Phone')}
              </h3>
              <div className={styles.row}>
                <button
                  onClick={handleCall}
                  className={styles.link}
                  title="Call"
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                  <Phone size={20} /> {t('contact.call', 'Call')}
                </button>
                <a
                  href="https://wa.me/905522972185"
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                >
                  <WhatsappLogo size={20} /> WhatsApp
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className={`${styles.row} text-lg font-semibold`}>
                <EnvelopeSimple size={22} weight="duotone" />
                {t('contact.email', 'Email')}
              </h3>
              <a
                href="mailto:halibrahim.kocak@gmail.com"
                className={styles.link}
              >
                halibrahim.kocak@gmail.com
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className={`${styles.row} text-lg font-semibold`}>
                <GithubLogo size={22} weight="duotone" />
                {t('contact.github', 'GitHub')}
              </h3>
              <a
                href="https://github.com/hllbr"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                github.com/hllbr
              </a>
            </div>
            <div className="space-y-2">
              <h3 className={`${styles.row} text-lg font-semibold`}>
                <LinkedinLogo size={22} weight="duotone" />
                {t('contact.linkedin', 'LinkedIn')}
              </h3>
              <a
                href="https://www.linkedin.com/in/hllbr/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                linkedin.com/in/hllbr
              </a>
            </div>
            <div className="space-y-2">
              <h3 className={`${styles.row} text-lg font-semibold`}>
                <YoutubeLogo size={22} weight="duotone" />
                {t('contact.youtube', 'YouTube')}
              </h3>
              <a
                href="https://www.youtube.com/@platonfarkndapaylasmlar637"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                youtube.com/@platonfarkndapaylasmlar637
              </a>
            </div>
          </div>
        </section>
        <div className={styles.bubbleTail} />
        <div className={styles.bubbleTailInner} />
      </div>
    </div>
  );
};

export default Contact; 