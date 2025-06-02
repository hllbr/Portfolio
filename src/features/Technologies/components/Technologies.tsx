import { useTranslation } from 'react-i18next';
import styles from '../styles/TechnologiesBubble.module.css';
import Typewriter from 'typewriter-effect';

const Technologies = () => {
  const { t } = useTranslation();

  const technologies = [
    {
      category: t('technologies.programming'),
      items: ['JavaScript', 'TypeScript', 'Java', 'C#', 'C++', 'Python'],
      color: '#fb923c',
      icon: '💻'
    },
    {
      category: t('technologies.frontend'),
      items: ['React', 'Material UI', 'Tailwind CSS', 'MageUI', 'Framer Motion', 'Phosphor Icons', 'HTML', 'CSS', 'Tippy.js/react'],
      color: '#60a5fa',
      icon: '🎨'
    },
    {
      category: t('technologies.backend'),
      items: ['Spring Boot'],
      color: '#a78bfa',
      icon: '⚙️'
    },
    {
      category: t('technologies.devTools'),
      items: ['Visual Studio Code', 'Visual Studio 2022 Community', 'Android Studio', 'Arduino IDE', 'Dev-C++'],
      color: '#f87171',
      icon: '🛠️'
    },
    {
      category: t('technologies.utilities'),
      items: ['Git', 'Husky', 'ESLint', 'Vite', 'PostCSS', 'Storybook', 'i18next', 'Swagger UI'],
      color: '#4ade80',
      icon: '🔧'
    },
    {
      category: t('technologies.architecture'),
      items: ['RESTful Services', 'GraphQL'],
      color: '#fbbf24',
      icon: '🏗️'
    },
    {
      category: t('technologies.state'),
      items: ['Apollo Client'],
      color: '#06b6d4',
      icon: '🔄'
    },
    {
      category: t('technologies.search'),
      items: ['Elasticsearch'],
      color: '#ec4899',
      icon: '🔍'
    },
    {
      category: t('technologies.vision'),
      items: ['OpenCV', 'Arduino'],
      color: '#8b5cf6',
      icon: '👁️'
    },
    {
      category: t('technologies.vscode.productivity'),
      items: [
        'Prettier',
        'ESLint',
        'TODO Highlight',
        'Todo Tree',
        'WakaTime',
        'indent-rainbow',
        'Better Comments',
        'Error Lens',
        'Color Picker',
        'Commander V',
        'Live Server',
        'HTML Preview',
        'Red Hat Dependency Analytics',
        'Quokka.js'
      ],
      color: '#14b8a6',
      icon: '⚡'
    },
    {
      category: t('technologies.vscode.intellisense'),
      items: [
        'IntelliCode',
        'IntelliCode API Usage Examples',
        'GitHub Copilot',
        'GitHub Copilot Chat'
      ],
      color: '#f43f5e',
      icon: '🤖'
    },
    {
      category: t('technologies.vscode.java'),
      items: [
        'Spring Boot Dashboard',
        'Spring Boot Tools',
        'Spring Boot Extension Pack',
        'Spring Initializr Java Support',
        'Maven for Java',
        'Gradle for Java',
        'Project Manager for Java',
        'Test Runner for Java',
        'Debugger for Java',
        'Language Support for Java (Red Hat)',
        'Extension Pack for Java'
      ],
      color: '#eab308',
      icon: '☕'
    },
    {
      category: t('technologies.vscode.frontend'),
      items: [
        'Tailwind CSS IntelliSense',
        'Reactjs code snippets',
        'ES7+ React/Redux/React-Native snippets'
      ],
      color: '#3b82f6',
      icon: '⚛️'
    },
    {
      category: t('technologies.vscode.ui'),
      items: [
        'Material Icon Theme',
        'Copilot Theme',
        'Rainbow Brackets'
      ],
      color: '#d946ef',
      icon: '🎭'
    },
    {
      category: t('technologies.vscode.dotnet'),
      items: [
        '.NET Install Tool',
        'C#',
        'C# Dev Kit'
      ],
      color: '#6366f1',
      icon: '📘'
    },
    {
      category: t('technologies.vscode.api'),
      items: [
        'Thunder Client'
      ],
      color: '#22c55e',
      icon: '🔌'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.bubble}>
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            <Typewriter
              options={{
                strings: [t('technologies.title', 'Technologies')],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 50,
                cursor: '_',
              }}
            />
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('technologies.subtitle')}
          </p>
        </section>

        <div className={styles.techGrid}>
          {technologies.map((tech) => (
            <div 
              key={tech.category} 
              className={styles.techCard}
              style={{ 
                borderColor: tech.color,
                '--card-color': tech.color 
              } as React.CSSProperties}
            >
              <div className={styles.techHeader}>
                <span className={styles.techIcon}>{tech.icon}</span>
                <h2 className={styles.techCategory} style={{ color: tech.color }}>
                  {tech.category}
                </h2>
              </div>
              <ul className={styles.techList}>
                {tech.items.map((item) => (
                  <li 
                    key={item} 
                    className={styles.techItem}
                    style={{ 
                      borderColor: tech.color,
                      '--item-color': tech.color 
                    } as React.CSSProperties}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies; 