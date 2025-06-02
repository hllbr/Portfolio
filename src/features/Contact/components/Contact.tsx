import { useTranslation } from 'react-i18next';
import styles from '../styles/ContactBubble.module.css';
import formStyles from '../styles/FormElements.module.css';
import '../styles/Animation/ContactIconAnimation.css';
import { ToastContainer, toast } from 'react-toastify';
import toastifyStyles from '../Styles/CustomToastify.module.css';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';

const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mkgbnrjn', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        toast.success(
          t('contact.form.success', 'Mesajınız başarıyla gönderildi!'),
          { className: toastifyStyles.toastSuccess }
        );
        form.reset();
      } else {
        toast.error(
          t('contact.form.error', 'Bir hata oluştu, lütfen tekrar deneyin.'),
          { className: toastifyStyles.toastError }
        );
      }
    } catch {
      toast.error(
        t('contact.form.error', 'Bir hata oluştu, lütfen tekrar deneyin.'),
        { className: toastifyStyles.toastError }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar closeOnClick pauseOnHover={false} />
      <div className={styles['speech-bubble']}>
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            <Typewriter
              options={{
                strings: [t('contact.title', 'Contact Me')],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 50,
                cursor: '_',
              }}
            />
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('contact.subtitle', 'Get in touch for collaborations and opportunities')}
          </p>
        </section>

        <section className="space-y-6 mt-8">
          <form onSubmit={handleSubmit} className={styles.form}>
            <div style={{ position: 'relative' }}>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                {t('contact.form.name', 'Name')}
              </label>
              <input type="text" id="name" name="name" required className={formStyles.input} />
            </div>
            <div style={{ position: 'relative' }}>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                {t('contact.form.email', 'Email')}
              </label>
              <input type="email" id="email" name="email" required className={formStyles.input} />
            </div>
            <div style={{ position: 'relative' }}>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                {t('contact.form.subject', 'Subject')}
              </label>
              <input type="text" id="subject" name="subject" required className={formStyles.input} />
            </div>
            <div style={{ position: 'relative' }}>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                {t('contact.form.message', 'Message')}
              </label>
              <textarea id="message" name="message" required rows={4} className={formStyles.textarea} />
            </div>
            <button type="submit" className={formStyles.button} disabled={loading}>
              {loading ? t('contact.form.sending', 'Gönderiliyor...') : t('contact.form.send', 'Send Message')}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact; 