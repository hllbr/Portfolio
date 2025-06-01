import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';
import '../styles/AboutMeSpeechBubble.css';

const AboutMe = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-[#222] flex flex-col">
      <div className="speech-bubble">
        <section className="space-y-6">
          <div className="space-y-4">
            <h1 className="font-bold text-3xl">
              <Typewriter
                key={currentLanguage}
                options={{
                  strings: [
                    currentLanguage === 'tr'
                      ? 'Merhaba, ben Halil İbrahim Koçak.'
                      : t('home.name', "Hi, I'm Halil İbrahim Koçak.")
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                }}
              />
            </h1>
            <p className="text-lg leading-relaxed">{t('home.intro', 'To me, software development is more than just writing code — it\'s about building systems, solving real problems, and shaping what\'s next.')}</p>
            <p className="text-lg leading-relaxed">{t('home.techApproach', 'I combine modern technologies, original ideas, and user-centered design across every project I work on.')}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <span className="text-2xl">🧠</span>
              <p className="text-lg leading-relaxed">{t('home.aiApproach', 'I don\'t just use AI tools — I design structured, creative workflows around them to unlock real productivity.')}</p>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-2xl">📄</span>
              <p className="text-lg leading-relaxed">{t('home.patents', 'I hold several patents (and pending ones), because innovation means thinking beyond code.')}</p>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-2xl">🧩</span>
              <p className="text-lg leading-relaxed">{t('home.techStack', 'As a full-stack developer, I build robust, scalable applications using TypeScript, React, Tailwind, and Spring Boot.')}</p>
            </div>

            <div className="flex items-start space-x-2">
              <span className="text-2xl">🎮</span>
              <p className="text-lg leading-relaxed">{t('home.hobbies', 'In my free time, I enjoy building games with Unity, designing interactive experiences, and exploring narrative mechanics.')}</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-lg leading-relaxed">{t('home.philosophy', 'Every line of code should serve a greater system.')}</p>
            <p className="text-lg leading-relaxed">{t('home.passion', 'I love building those systems — and making them meaningful.')}</p>
          </div>
        </section>
        <div className="speech-bubble-tail" />
      </div>
    </div>
  );
};

export default AboutMe; 