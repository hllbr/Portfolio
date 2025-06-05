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
    <div className="flex justify-center gap-8 mb-6">
      <button
        onClick={handleCall}
        className="social-link bg-transparent border-none p-0 cursor-pointer"
        title="Call"
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