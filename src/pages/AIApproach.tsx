import { useTranslation } from 'react-i18next';

const AIApproach = () => {
  const { t } = useTranslation();

  const methodologies = [
    {
      title: t('aiApproach.methodology1.title', 'Problem Analysis'),
      description: t('aiApproach.methodology1.description', 'Deep understanding of the problem space and requirements')
    },
    {
      title: t('aiApproach.methodology2.title', 'Data Strategy'),
      description: t('aiApproach.methodology2.description', 'Comprehensive data collection and preprocessing approach')
    },
    {
      title: t('aiApproach.methodology3.title', 'Model Selection'),
      description: t('aiApproach.methodology3.description', 'Careful selection of appropriate AI/ML models')
    },
    {
      title: t('aiApproach.methodology4.title', 'Implementation'),
      description: t('aiApproach.methodology4.description', 'Robust implementation with best practices')
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{t('aiApproach.title', 'AI Approach')}</h1>
        <p className="text-xl text-muted-foreground">
          {t('aiApproach.subtitle', 'My methodology for AI projects')}
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        {methodologies.map((method) => (
          <div key={method.title} className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{method.title}</h2>
            <p className="text-muted-foreground">{method.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-card p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          {t('aiApproach.expertiseTitle', 'Areas of Expertise')}
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <span className="text-primary">•</span>
            <span>{t('aiApproach.expertise1', 'Natural Language Processing')}</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-primary">•</span>
            <span>{t('aiApproach.expertise2', 'Computer Vision')}</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-primary">•</span>
            <span>{t('aiApproach.expertise3', 'Machine Learning')}</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-primary">•</span>
            <span>{t('aiApproach.expertise4', 'Deep Learning')}</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AIApproach; 