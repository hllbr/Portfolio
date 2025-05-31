import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface AITool {
  name: string;
  icon: string;
  description: string;
  useCases: string[];
  color: string;
  detailedDescription: string;
  modal: {
    description: string;
    tips: { title: string; content: string }[];
    prompts: { label: string; content: string }[];
  };
}

const getAiTools = (
  t: (
    key: string,
    options?: Record<string, unknown>
  ) => string | string[] | { title: string; content: string }[] | { label: string; content: string }[]
): AITool[] => [
  {
    name: t('aiTools.tools.cursor.name') as string,
    icon: '💻',
    description: t('aiTools.tools.cursor.description') as string,
    useCases: t('aiTools.tools.cursor.useCases', { returnObjects: true }) as string[],
    color: 'bg-orange-500',
    detailedDescription: t('aiTools.tools.cursor.detailedDescription') as string,
    modal: {
      description: t('aiTools.tools.cursor.modal.description') as string,
      tips: t('aiTools.tools.cursor.modal.tips', { returnObjects: true }) as { title: string; content: string }[],
      prompts: t('aiTools.tools.cursor.modal.prompts', { returnObjects: true }) as { label: string; content: string }[]
    }
  },
  {
    name: t('aiTools.tools.chatgpt.name') as string,
    icon: '🤖',
    description: t('aiTools.tools.chatgpt.description') as string,
    useCases: t('aiTools.tools.chatgpt.useCases', { returnObjects: true }) as string[],
    color: 'bg-blue-500',
    detailedDescription: t('aiTools.tools.chatgpt.detailedDescription') as string,
    modal: {
      description: t('aiTools.tools.chatgpt.modal.description') as string,
      tips: t('aiTools.tools.chatgpt.modal.tips', { returnObjects: true }) as { title: string; content: string }[],
      prompts: t('aiTools.tools.chatgpt.modal.prompts', { returnObjects: true }) as { label: string; content: string }[]
    }
  },
  {
    name: t('aiTools.tools.claude.name') as string,
    icon: '🧠',
    description: t('aiTools.tools.claude.description') as string,
    useCases: t('aiTools.tools.claude.useCases', { returnObjects: true }) as string[],
    color: 'bg-purple-500',
    detailedDescription: t('aiTools.tools.claude.detailedDescription') as string,
    modal: {
      description: t('aiTools.tools.claude.modal.description') as string,
      tips: t('aiTools.tools.claude.modal.tips', { returnObjects: true }) as { title: string; content: string }[],
      prompts: t('aiTools.tools.claude.modal.prompts', { returnObjects: true }) as { label: string; content: string }[]
    }
  },
  {
    name: t('aiTools.tools.grok.name') as string,
    icon: '⚡',
    description: t('aiTools.tools.grok.description') as string,
    useCases: t('aiTools.tools.grok.useCases', { returnObjects: true }) as string[],
    color: 'bg-red-500',
    detailedDescription: t('aiTools.tools.grok.detailedDescription') as string,
    modal: {
      description: t('aiTools.tools.grok.modal.description') as string,
      tips: t('aiTools.tools.grok.modal.tips', { returnObjects: true }) as { title: string; content: string }[],
      prompts: t('aiTools.tools.grok.modal.prompts', { returnObjects: true }) as { label: string; content: string }[]
    }
  },
  {
    name: t('aiTools.tools.muse.name') as string,
    icon: '🎨',
    description: t('aiTools.tools.muse.description') as string,
    useCases: t('aiTools.tools.muse.useCases', { returnObjects: true }) as string[],
    color: 'bg-green-500',
    detailedDescription: t('aiTools.tools.muse.detailedDescription') as string,
    modal: {
      description: t('aiTools.tools.muse.modal.description') as string,
      tips: t('aiTools.tools.muse.modal.tips', { returnObjects: true }) as { title: string; content: string }[],
      prompts: t('aiTools.tools.muse.modal.prompts', { returnObjects: true }) as { label: string; content: string }[]
    }
  },
  {
    name: t('aiTools.tools.fooocus.name') as string,
    icon: '��️',
    description: t('aiTools.tools.fooocus.description') as string,
    useCases: t('aiTools.tools.fooocus.useCases', { returnObjects: true }) as string[],
    color: 'bg-yellow-500',
    detailedDescription: t('aiTools.tools.fooocus.detailedDescription') as string,
    modal: {
      description: t('aiTools.tools.fooocus.modal.description') as string,
      tips: t('aiTools.tools.fooocus.modal.tips', { returnObjects: true }) as { title: string; content: string }[],
      prompts: t('aiTools.tools.fooocus.modal.prompts', { returnObjects: true }) as { label: string; content: string }[]
    }
  },
  {
    name: t('aiTools.tools.copilot.name') as string,
    icon: '🧑‍💻',
    description: t('aiTools.tools.copilot.description') as string,
    useCases: t('aiTools.tools.copilot.useCases', { returnObjects: true }) as string[],
    color: 'bg-cyan-500',
    detailedDescription: t('aiTools.tools.copilot.detailedDescription') as string,
    modal: {
      description: t('aiTools.tools.copilot.modal.description') as string,
      tips: t('aiTools.tools.copilot.modal.tips', { returnObjects: true }) as { title: string; content: string }[],
      prompts: t('aiTools.tools.copilot.modal.prompts', { returnObjects: true }) as { label: string; content: string }[]
    }
  }
];

const AITools: React.FC = () => {
  const { t } = useTranslation();
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);

  const aiTools = getAiTools(t);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t('aiTools.title')}
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          {t('aiTools.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiTools.map((tool) => (
            <div
              key={tool.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => setSelectedTool(tool)}
            >
              <div className={`${tool.color} p-6`}>
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{tool.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{tool.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <ul className="space-y-2">
                  {tool.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="mr-2">→</span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedTool && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full p-8 transform transition-all duration-300 animate-fadeIn">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{selectedTool.icon}</span>
                  <h3 className="text-3xl font-bold">{selectedTool.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedTool(null)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  ✕
                </button>
              </div>
              {/* Çoklu başlık+prompt listesi */}
              {selectedTool.name === t('aiTools.tools.cursor.name') && (
                <div className="space-y-4 mb-4">
                  {(t('aiTools.cursorPrompts', { returnObjects: true }) as { title: string; prompt: string }[]).map((item, idx) => (
                    <div key={idx} className="mb-2">
                      <div className="font-semibold text-base mb-1">{item.title}</div>
                      <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
                        <span className="bg-gray-100 rounded px-2 py-1 text-sm font-mono break-all select-all flex-1">{item.prompt}</span>
                        <button
                          className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors text-xs"
                          onClick={() => navigator.clipboard.writeText(item.prompt)}
                        >
                          {t('aiTools.copy', 'Kopyala')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {selectedTool.name === t('aiTools.tools.copilot.name') && (
                <div className="space-y-4 mb-4">
                  {(t('aiTools.copilotPrompts', { returnObjects: true }) as { title: string; prompt: string }[]).map((item, idx) => (
                    <div key={idx} className="mb-2">
                      <div className="font-semibold text-base mb-1">{item.title}</div>
                      <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
                        <span className="bg-gray-100 rounded px-2 py-1 text-sm font-mono break-all select-all flex-1">{item.prompt}</span>
                        <button
                          className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors text-xs"
                          onClick={() => navigator.clipboard.writeText(item.prompt)}
                        >
                          {t('aiTools.copy', 'Kopyala')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {selectedTool.name === t('aiTools.tools.fooocus.name') && (
                <div className="space-y-4 mb-4">
                  {(t('aiTools.fooocusPrompts', { returnObjects: true }) as { title: string; prompt: string }[]).map((item, idx) => (
                    <div key={idx} className="mb-2">
                      <div className="font-semibold text-base mb-1">{item.title}</div>
                      <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
                        <span className="bg-gray-100 rounded px-2 py-1 text-sm font-mono break-all select-all flex-1">{item.prompt}</span>
                        <button
                          className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors text-xs"
                          onClick={() => navigator.clipboard.writeText(item.prompt)}
                        >
                          {t('aiTools.copy', 'Kopyala')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {selectedTool.name === t('aiTools.tools.claude.name') && (
                <div className="space-y-4 mb-4">
                  {(t('aiTools.claudePrompts', { returnObjects: true }) as { title: string; prompt: string }[]).map((item, idx) => (
                    <div key={idx} className="mb-2">
                      <div className="font-semibold text-base mb-1">{item.title}</div>
                      <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
                        <span className="bg-gray-100 rounded px-2 py-1 text-sm font-mono break-all select-all flex-1">{item.prompt}</span>
                        <button
                          className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors text-xs"
                          onClick={() => navigator.clipboard.writeText(item.prompt)}
                        >
                          {t('aiTools.copy', 'Kopyala')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {selectedTool.name === t('aiTools.tools.grok.name') && (
                <div className="space-y-4 mb-4">
                  {(t('aiTools.grokPrompts', { returnObjects: true }) as { title: string; prompt: string }[]).map((item, idx) => (
                    <div key={idx} className="mb-2">
                      <div className="font-semibold text-base mb-1">{item.title}</div>
                      <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
                        <span className="bg-gray-100 rounded px-2 py-1 text-sm font-mono break-all select-all flex-1">{item.prompt}</span>
                        <button
                          className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors text-xs"
                          onClick={() => navigator.clipboard.writeText(item.prompt)}
                        >
                          {t('aiTools.copy', 'Kopyala')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {selectedTool.name === t('aiTools.tools.muse.name') && (
                <div className="space-y-4 mb-4">
                  {(t('aiTools.musePrompts', { returnObjects: true }) as { title: string; prompt: string }[]).map((item, idx) => (
                    <div key={idx} className="mb-2">
                      <div className="font-semibold text-base mb-1">{item.title}</div>
                      <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
                        <span className="bg-gray-100 rounded px-2 py-1 text-sm font-mono break-all select-all flex-1">{item.prompt}</span>
                        <button
                          className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors text-xs"
                          onClick={() => navigator.clipboard.writeText(item.prompt)}
                        >
                          {t('aiTools.copy', 'Kopyala')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedTool(null)}
                  className="px-6 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  {t('aiTools.close')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AITools; 