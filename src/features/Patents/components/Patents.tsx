import { useTranslation } from 'react-i18next';

const Patents = () => {
  const { t } = useTranslation();

  const patents = [
    {
      title: t('patents.patent1.title', 'AI-Powered Code Review System'),
      description: t('patents.patent1.description', 'A system that uses machine learning to analyze code quality and suggest improvements'),
      status: t('patents.patent1.status', 'Pending')
    },
    {
      title: t('patents.patent2.title', 'Natural Language to Code Converter'),
      description: t('patents.patent2.description', 'A tool that converts natural language descriptions into executable code'),
      status: t('patents.patent2.status', 'Granted')
    },
    {
      title: t('patents.patent3.title', 'Automated Documentation Generator'),
      description: t('patents.patent3.description', 'A system that automatically generates comprehensive documentation from code'),
      status: t('patents.patent3.status', 'Pending')
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{t('patents.title', 'Patents')}</h1>
        <p className="text-xl text-muted-foreground">
          {t('patents.subtitle', 'My innovative solutions and patents')}
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        {patents.map((patent) => (
          <div key={patent.title} className="bg-card p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold">{patent.title}</h2>
              <span className={`px-3 py-1 rounded-full text-sm ${
                patent.status === 'Granted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {patent.status}
              </span>
            </div>
            <p className="text-muted-foreground">{patent.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Patents; 