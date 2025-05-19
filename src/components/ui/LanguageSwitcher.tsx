import { useTranslation } from 'react-i18next';
import { Switch } from '@headlessui/react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? 'tr' : 'en');
  };

  return (
    <div className="flex items-center gap-2 select-none">
      <span className={`text-xs font-semibold transition-colors ${isEnglish ? 'text-blue-600' : 'text-gray-400'}`}>EN</span>
      <Switch
        checked={isEnglish}
        onChange={toggleLanguage}
        className={`${isEnglish ? 'bg-blue-500' : 'bg-gray-300'} relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-200 ${isEnglish ? 'translate-x-6' : 'translate-x-1'}`}
        />
      </Switch>
      <span className={`text-xs font-semibold transition-colors ${!isEnglish ? 'text-blue-600' : 'text-gray-400'}`}>TR</span>
    </div>
  );
};

export default LanguageSwitcher; 