import { useState, useEffect } from 'react';

type Language = 'tr' | 'en';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('tr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return { language, changeLanguage };
}; 