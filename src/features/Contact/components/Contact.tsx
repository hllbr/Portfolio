import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';
import styles from '../styles/ContactBubble.module.css';
import formStyles from '../styles/FormElements.module.css';
import { Phone, WhatsappLogo, WarningCircle } from 'phosphor-react';
import { useState, useEffect } from 'react';
import '../styles/Animation/ContactIconAnimation.css';

// Telefon numarasını base64 ile encode ettik (905522972185)
const encodedPhone = 'OTA1NTIyOTcyMTg1';

// Tooltip component
const Tooltip = ({ label, t }: { label: string, t: TFunction }) => (
  <div style={{
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '8px',
    background: '#fffbe6',
    color: '#b26a00',
    border: '1px solid #ffe58f',
    borderRadius: '6px',
    padding: '10px 18px',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    zIndex: 10,
    minWidth: '220px',
    maxWidth: '99vw',
    gap: '8px',
    fontWeight: 500,
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    lineHeight: 1.5,
    boxSizing: 'border-box',
  }}>
    <div style={{
      position: 'absolute',
      top: '-8px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 0,
      height: 0,
      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      borderBottom: '8px solid #fffbe6',
      zIndex: 11,
    }} />
    <WarningCircle size={20} color="#faad14" weight="fill" style={{ flexShrink: 0, zIndex: 12 }} />
    <span style={{ zIndex: 12 }}>
      <b>{label}</b> {label && ' '}{t('contact.form.mustBeFilled')}
    </span>
  </div>
);

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setErrors(prev => {
      const updated = { ...prev };
      if (prev.name) updated.name = t('contact.form.mustBeFilled', 'must be filled out.');
      if (prev.email) updated.email = t('contact.form.mustBeFilled', 'must be filled out.');
      if (prev.subject) updated.subject = t('contact.form.mustBeFilled', 'must be filled out.');
      if (prev.message) updated.message = t('contact.form.mustBeFilled', 'must be filled out.');
      return updated;
    });
  }, [i18n.language, t]);

  // Telefon arama fonksiyonu
  const handleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    const decoded = atob(encodedPhone);
    window.location.href = `tel:${decoded}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInvalid = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.currentTarget;
    let label = '';
    switch (name) {
      case 'name':
        label = t('contact.form.name', 'Name');
        break;
      case 'email':
        label = t('contact.form.email', 'Email');
        break;
      case 'subject':
        label = t('contact.form.subject', 'Subject');
        break;
      case 'message':
        label = t('contact.form.message', 'Message');
        break;
      default:
        label = '';
    }
    setErrors(prev => ({
      ...prev,
      [name]: t('contact.form.requiredField', { field: label, defaultValue: '{{field}} must be filled out.' })
    }));
    e.preventDefault();
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.currentTarget;
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <div className={styles.container}>
      <div className={styles['speech-bubble']}>
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">{t('contact.title', 'Contact Me')}</h1>
          <p className="text-xl text-muted-foreground">
            {t('contact.subtitle', 'Get in touch for collaborations and opportunities')}
          </p>
        </section>

        <section className="space-y-6 mt-8">
          {/*
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '1.5rem' }}>
            <button
              onClick={handleCall}
              className="social-link"
              title="Call"
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <Phone size={32} />
            </button>
            <a
              href="https://wa.me/905522972185"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              <WhatsappLogo size={32} />
            </a>
          </div>
          */}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div style={{ position: 'relative' }}>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                {t('contact.form.name', 'Name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onInvalid={handleInvalid}
                onInput={handleInput}
                required
                className={formStyles.input}
              />
              {errors.name && <Tooltip label={t('contact.form.name', 'Name')} t={t} />}
            </div>

            <div style={{ position: 'relative' }}>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                {t('contact.form.email', 'Email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onInvalid={handleInvalid}
                onInput={handleInput}
                required
                className={formStyles.input}
              />
              {errors.email && <Tooltip label={t('contact.form.email', 'Email')} t={t} />}
            </div>

            <div style={{ position: 'relative' }}>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                {t('contact.form.subject', 'Subject')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onInvalid={handleInvalid}
                onInput={handleInput}
                required
                className={formStyles.input}
              />
              {errors.subject && <Tooltip label={t('contact.form.subject', 'Subject')} t={t} />}
            </div>

            <div style={{ position: 'relative' }}>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                {t('contact.form.message', 'Message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onInvalid={handleInvalid}
                onInput={handleInput}
                required
                rows={4}
                className={formStyles.textarea}
              />
              {errors.message && <Tooltip label={t('contact.form.message', 'Message')} t={t} />}
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className={formStyles.button}
            >
              {status === 'loading' ? t('contact.form.sending', 'Sending...') : t('contact.form.send', 'Send Message')}
            </button>

            {status === 'success' && (
              <p className={formStyles.success}>{t('contact.form.success', 'Message sent successfully!')}</p>
            )}
            {status === 'error' && (
              <p className={formStyles.error}>{t('contact.form.error', 'Failed to send message. Please try again.')}</p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact; 