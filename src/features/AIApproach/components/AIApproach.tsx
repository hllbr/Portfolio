import React from 'react';
// import { NeonCursor } from '../components/NeonCursor';
import styles from '../styles/AIApproach.module.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const aiCards = [
  {
    logo: '💻',
    title: 'Cursor AI',
    description: 'TypeScript-based UI libraries design and code review assistant',
    details: [
      'Design TypeScript-based UI libraries',
      'Fix logic bugs',
      'Enforce architectural conventions',
      'Validate SOLID principles',
    ],
    color: '#fb923c',
  },
  {
    logo: '🤖',
    title: 'ChatGPT',
    description: 'Custom GPT for patent validation and technical writing',
    details: [
      'Validate patent ideas',
      'Format claims',
      'Guide technical writing',
      'Code review assistance',
    ],
    color: '#60a5fa',
  },
  {
    logo: '🧠',
    title: 'Claude',
    description: 'Project planning and task breakdown assistant',
    details: [
      'Project planning',
      'Task breakdown',
      'Edge case documentation',
      'Component library development',
    ],
    color: '#a78bfa',
  },
  {
    logo: '⚡',
    title: 'Grok',
    description: 'Rapid logic validation and implementation comparison',
    details: [
      'Logic validation',
      'Alternative implementations',
      'Performance optimization',
      'Code readability analysis',
    ],
    color: '#f87171',
  },
  {
    logo: '🎨',
    title: 'Muse',
    description: 'Unity game development and pixel art generation',
    details: [
      'Generate visual assets',
      'Pixel art creation',
      'Game prototyping',
      'Visual consistency',
    ],
    color: '#4ade80',
  },
];

const infoCards = [
  {
    logo: null,
    title: 'Beyond Tools: How I Engineer With AI',
    description: `I don't use AI just to generate outputs — I integrate it into my systems to enhance thinking, automate structure, and scale innovation.`,
    details: null,
    color: '#60a5fa',
  },
];

const methodologies = [
  {
    title: 'Problem Analysis',
    description: 'Deep understanding of the problem space and requirements',
  },
  {
    title: 'Data Strategy',
    description: 'Comprehensive data collection and preprocessing approach',
  },
  {
    title: 'Model Selection',
    description: 'Careful selection of appropriate AI/ML models',
  },
  {
    title: 'Implementation',
    description: 'Robust implementation with best practices',
  },
];

const expertiseAreas = [
  { icon: '🧠', name: 'Natural Language Processing' },
  { icon: '👁️', name: 'Computer Vision' },
  { icon: '⚡', name: 'Machine Learning' },
  { icon: '🔬', name: 'Deep Learning' },
];

const AIApproach = () => {
  return (
    <div className={`${styles.container} font-sans`}>
      {/* <NeonCursor /> */}
      {/* Sparkles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className={styles.sparkle}></div>
      ))}

      <section className={styles.header}>
        <h1 className={styles.title}>My AI Approach</h1>
        <p className={styles.subtitle}>My methodology for AI projects</p>
      </section>

      {/* Info, AI Cards & Methodologies */}
      <section style={{marginTop: '2rem', marginBottom: '2rem'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem'}}>
          {infoCards.map(card => (
            <div
              key={card.title}
              className={styles.aiCard}
              style={{
                borderColor: card.color,
                ['--ai-card-color' as string]: card.color,
              }}
            >
              {card.logo && <div style={{marginBottom:'0.5rem'}}>{card.logo}</div>}
              <h2 style={{fontWeight:700, fontSize:'1.4rem', color:card.color, marginBottom:'0.5rem'}}>{card.title}</h2>
              <div style={{marginBottom:'0.5rem'}}>{card.description}</div>
              {Array.isArray(card.details) && (
                <ul style={{marginTop:'0.5rem', paddingLeft:'1rem', color:'#cbd5e1', fontSize:'1rem'}}>
                  {(card.details as string[]).map((d, i) => <li key={i}>→ {d}</li>)}
                </ul>
              )}
            </div>
          ))}
          {aiCards.map(card => (
            <div
              key={card.title}
              className={styles.aiCard}
              style={{
                borderColor: card.color,
                ['--ai-card-color' as string]: card.color,
              }}
            >
              <div style={{fontSize:'2rem', marginBottom:'0.5rem'}}>{card.logo}</div>
              <h2 style={{fontWeight:700, fontSize:'1.4rem', color:card.color, marginBottom:'0.5rem'}}>{card.title}</h2>
              <div style={{marginBottom:'0.5rem'}}>{card.description}</div>
              {Array.isArray(card.details) && (
                <ul style={{marginTop:'0.5rem', paddingLeft:'1rem', color:'#cbd5e1', fontSize:'1rem'}}>
                  {(card.details as string[]).map((d, i) => <li key={i}>→ {d}</li>)}
                </ul>
              )}
            </div>
          ))}
          {methodologies.map(method => (
            <div key={method.title} className={styles.aiCard} style={{fontFamily:'inherit', borderColor:'#60a5fa', ['--ai-card-color' as string]:'#60a5fa'}}>
              <h2 style={{fontWeight:700, fontSize:'1.2rem', color:'#60a5fa', marginBottom:'0.5rem'}}>{method.title}</h2>
              <p style={{color:'#f3f4f6'}}>{method.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.expertiseSection}>
        <h2 className="text-2xl font-semibold mb-4">Areas of Expertise</h2>
        <div className={styles.expertiseList}>
          {expertiseAreas.map((area) => (
            <div key={area.name} className={styles.expertiseItem}>
              <div className={styles.expertiseIcon}>{area.icon}</div>
              <span>{area.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AIApproach; 