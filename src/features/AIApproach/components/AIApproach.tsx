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
  {
    name: 'Fooocus Colab',
    logo: '🖼️',
    title: 'Fooocus Colab',
    description: 'Stable Diffusion ile resim eklemek için kullandığım Colab tabanlı araç.',
    details: [
      'Stable Diffusion ile yüksek kaliteli görseller üret',
      'Prompt yazarak özgün resimler oluştur',
      'Colab üzerinde hızlı ve ücretsiz kullanım',
      'Projelerime özel görsel ekleme',
    ],
    color: '#fbbf24',
  },
  {
    logo: '🧑‍💻',
    title: 'Copilot',
    description: 'AI-powered code completion and suggestion assistant',
    details: [
      'Auto-complete code',
      'Suggest code snippets',
      'Accelerate development',
      'Reduce repetitive tasks'
    ],
    color: '#06b6d4',
  },
];

const AIApproach = () => {
  return (
    <div className={`${styles.container} font-sans`}>
      {/* Ana Başlık */}
      <div className="mb-8">
        <h1 className={styles.mainTitle}>My AI Approach</h1>
        <p className={styles.mainTitleSubtitle}>My methodology for AI projects</p>
      </div>

      {/* Genel Bilgilendirme Alanı */}
      <section className={styles.infoSection}>
        <h2 className="text-2xl font-bold mb-2">How I Use AI & Prompts</h2>
        <p className="text-lg text-gray-200">I leverage AI tools and carefully crafted prompts to enhance productivity, creativity, and code quality. Each tool serves a unique purpose in my workflow, from code review to visual generation. Explore the cards below to see tips and ready-to-use prompts for each technology.</p>
      </section>

      {/* Vizyon/Hero Alanı */}
      <section className={styles.infoSection}>
        <h2 className="text-2xl font-bold mb-2">Beyond Tools: How I Engineer With AI</h2>
        <p className="text-lg text-gray-200">I don't use AI just to generate outputs — I integrate it into my systems to enhance thinking, automate structure, and scale innovation.</p>
      </section>

      {/* <NeonCursor /> */}
      {/* Sparkles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className={styles.sparkle}></div>
      ))}

      {/* Info & AI Cards Only */}
      <section style={{marginTop: '2rem', marginBottom: '2rem'}}>
        <div className={styles.cardGrid}>
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
        </div>
      </section>

      {/* Areas of Expertise and Methodologies sections removed as requested */}
    </div>
  );
};

export default AIApproach; 