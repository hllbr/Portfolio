import { Phone, WhatsappLogo } from 'phosphor-react';

const encodedPhone = 'OTA1NTIyOTcyMTg1';

/**
 * Quick access buttons for calling or messaging.
 */
const ContactSocialButtons = () => {
  const handleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    const decoded = atob(encodedPhone);
    window.location.href = `tel:${decoded}`;
  };

  return (
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
  );
};

export default ContactSocialButtons; 