import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const PromptGallery = () => {
  const { t } = useTranslation();
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  const prompts = [
    {
      category: 'Software Development',
      title: 'React Component Generator',
      prompt: 'Create a reusable React component that...',
      description: 'Used for generating consistent UI components'
    },
    {
      category: 'Visual Design',
      title: 'UI/UX Concept Generator',
      prompt: 'Design a modern dashboard interface that...',
      description: 'Used for creating visual design concepts'
    },
    {
      category: 'Innovation',
      title: 'Problem-Solving Framework',
      prompt: 'Analyze the following problem and propose...',
      description: 'Used for systematic problem-solving'
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(text);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        {t('promptGallery.title', 'AI Prompt Gallery')}
      </h1>

      <section className="bg-card p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('promptGallery.about', 'About My Prompts')}
        </h2>
        <p className="text-lg">
          {t('promptGallery.aboutText', 'These prompts are carefully crafted to achieve specific outcomes in various domains. Feel free to use and adapt them for your needs.')}
        </p>
      </section>

      <div className="space-y-8">
        {prompts.map((prompt, index) => (
          <div key={index} className="bg-card p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-sm font-medium text-muted-foreground">
                  {prompt.category}
                </span>
                <h3 className="text-xl font-semibold mt-1">{prompt.title}</h3>
              </div>
              <button
                onClick={() => copyToClipboard(prompt.prompt)}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                {copiedPrompt === prompt.prompt
                  ? t('promptGallery.copied', 'Copied!')
                  : t('promptGallery.copy', 'Copy')}
              </button>
            </div>
            <p className="text-lg mb-4">{prompt.description}</p>
            <div className="bg-muted p-4 rounded-md">
              <pre className="whitespace-pre-wrap">{prompt.prompt}</pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromptGallery; 