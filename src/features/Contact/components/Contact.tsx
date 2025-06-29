import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';

import styles from '@/features/Contact/styles/ContactBubble.module.css';
import formStyles from '@/features/Contact/styles/FormElements.module.css';
import '../styles/Animation/ContactIconAnimation.css';
import toastifyStyles from '@/features/Contact/styles/CustomToastify.module.css';

/**
 * Contact form page allowing visitors to send a message.
 */
const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = Object.values(formData).every(value => value.trim() !== '');
    setIsFormValid(isValid);
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
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
        </section>

        <section className="space-y-6 mt-8">
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                {t('contact.form.name', 'Name')}
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className={formStyles.input}
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                {t('contact.form.email', 'Email')}
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className={formStyles.input}
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative">
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                {t('contact.form.subject', 'Subject')}
              </label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                required 
                className={formStyles.input}
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                {t('contact.form.message', 'Message')}
              </label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={4} 
                className={formStyles.textarea}
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <button 
              type="submit" 
              className={formStyles.button} 
              disabled={loading || !isFormValid}
            >
              {loading ? t('contact.form.sending', 'Gönderiliyor...') : t('contact.form.send', 'Send Message')}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact; 