import { useTranslation } from 'react-i18next';

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
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{t('technologies.title', 'Technologies')}</h1>
        <p className="text-xl text-muted-foreground">
          {t('technologies.subtitle', 'Technologies I work with')}
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        {technologies.map((tech) => (
          <div key={tech.category} className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{tech.category}</h2>
            <ul className="space-y-2">
              {tech.items.map((item) => (
                <li key={item} className="flex items-center space-x-2">
                  <span className="text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Technologies; 