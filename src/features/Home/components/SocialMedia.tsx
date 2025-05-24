import { useTranslation } from 'react-i18next';
import '../styles/SocialMedia.css';
import '../styles/Animation/SocialMediaIconAnimation.css';
import { GithubLogo, LinkedinLogo, YoutubeLogo, EnvelopeSimple, WhatsappLogo, Timer, PhoneCall } from 'phosphor-react';


const SocialMedia = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: <PhoneCall  size={36} />,
      url: 'tel:905522972185',
      ariaLabel: 'Call'
    },
    {
      icon: <WhatsappLogo size={36} />,
      url: 'https://wa.me/905522972185',
      ariaLabel: 'WhatsApp'
    },
    {
      icon: <LinkedinLogo size={36} />,
      url: 'https://www.linkedin.com/in/hllbr/',
      ariaLabel: 'LinkedIn'
    },
    {
      icon: <EnvelopeSimple size={36} />,
      url: 'mailto:halibrahim.kocak@gmail.com',
      ariaLabel: 'Email'
    },
    {
      icon: <GithubLogo size={36} />,
      url: 'https://github.com/hllbr',
      ariaLabel: 'GitHub'
    },
    {
      icon: <YoutubeLogo size={36} />,
      url: 'https://www.youtube.com/@platonfarkndapaylasmlar637',
      ariaLabel: 'YouTube'
    },
    {
      icon: <Timer size={36} />,
      url: 'https://wakatime.com/@HLLBR',
      ariaLabel: 'WakaTime'
    }
  ];

  return (
    <div className="min-h-[200px] bg-[#222] flex flex-col">
      <div className="social-media-bubble">
        <section>
          <h2 className="font-bold text-2xl">{t('social.connect', 'Let\'s Connect')}</h2>
          <div className="social-media-icons-row">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link hover:scale-110 transition-transform"
                aria-label={link.ariaLabel}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SocialMedia; 