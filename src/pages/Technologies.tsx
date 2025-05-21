import { useTranslation } from 'react-i18next';
import styles from './TechnologiesBubble.module.css';

const Technologies = () => {
  const { t } = useTranslation();

  const technologies = [
    {
      category: t('technologies.frontend', 'Frontend'),
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      category: t('technologies.backend', 'Backend'),
      items: ['Node.js', 'Python', 'Django', 'FastAPI']
    },
    {
      category: t('technologies.ai', 'AI & ML'),
      items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI']
    },
    {
      category: t('technologies.database', 'Database'),
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.bubble}>
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">{t('technologies.title', 'Technologies')}</h1>
          <p className="text-xl text-muted-foreground">
            {t('technologies.subtitle', 'Technologies I work with')}
          </p>
        </section>

        <div className={styles.techGrid}>
          {technologies.map((tech) => (
            <div key={tech.category} className={styles.techCard}>
              <h2 className={styles.techCategory}>{tech.category}</h2>
              <ul className={styles.techList}>
                {tech.items.map((item) => (
                  <li key={item} className={styles.techItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.bubbleTail} />
        <div className={styles.bubbleTailInner} />
      </div>
    </div>
  );
};

export default Technologies; 