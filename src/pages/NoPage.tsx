import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { House } from 'phosphor-react';
import styles from './NoPage.module.css';

const NoPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.codeArea}>
        <div className={styles.fileName}>
          <span>// 404.js</span>
        </div>
        <p className={styles.title}>404 - {t('noPage.title', 'Page Not Found')}</p>
        <p className={styles.description}>{t('noPage.description', 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.')}</p>
        <Link
          to="/"
          className={styles.button}
        >
          <House size={20} />
          {t('noPage.backToHome', 'Back to Home')}
        </Link>
      </div>
    </div>
  );
};

export default NoPage; 