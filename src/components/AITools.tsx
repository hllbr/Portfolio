import React, { useState } from 'react';

interface AITool {
  name: string;
  icon: string;
  description: string;
  useCases: string[];
  color: string;
  detailedDescription: string;
}

const aiTools: AITool[] = [
  {
    name: 'Cursor AI',
    icon: '💻',
    description: 'TypeScript-based UI libraries design and code review assistant',
    useCases: [
      'Design TypeScript-based UI libraries',
      'Fix logic bugs',
      'Enforce architectural conventions',
      'Validate SOLID principles'
    ],
    color: 'bg-orange-500',
    detailedDescription: 'I use Cursor AI to design TypeScript-based UI libraries, fix logic bugs, enforce architectural conventions, and validate SOLID principles — not just automatically, but reflectively. It helps me review components and build them from scratch with AI-assisted guidance.'
  },
  {
    name: 'ChatGPT',
    icon: '🤖',
    description: 'Custom GPT for patent validation and technical writing',
    useCases: [
      'Validate patent ideas',
      'Format claims',
      'Guide technical writing',
      'Code review assistance'
    ],
    color: 'bg-blue-500',
    detailedDescription: 'I developed a private Custom GPT called "Import Editor" for my team, which helps us validate patent ideas, format claims, and guide technical writing. We now apply GPT during retrospective code reviews, improving decision-making and highlighting areas that conflict with SOLID or project-specific rules.'
  },
  {
    name: 'Claude',
    icon: '🧠',
    description: 'Project planning and task breakdown assistant',
    useCases: [
      'Project planning',
      'Task breakdown',
      'Edge case documentation',
      'Component library development'
    ],
    color: 'bg-purple-500',
    detailedDescription: 'I use Claude as a project planner. It helps me break complex goals into trackable sub-tasks and document edge cases, particularly useful in individual work like component libraries and prompt design.'
  },
  {
    name: 'Grok',
    icon: '⚡',
    description: 'Rapid logic validation and implementation comparison',
    useCases: [
      'Logic validation',
      'Alternative implementations',
      'Performance optimization',
      'Code readability analysis'
    ],
    color: 'bg-red-500',
    detailedDescription: 'I use Grok for rapid logic validation and to generate alternative implementations when I\'m considering trade-offs between readability, performance, and abstraction depth.'
  },
  {
    name: 'Muse',
    icon: '🎨',
    description: 'Unity game development and pixel art generation',
    useCases: [
      'Generate visual assets',
      'Pixel art creation',
      'Game prototyping',
      'Visual consistency'
    ],
    color: 'bg-green-500',
    detailedDescription: 'When developing small games or narrative experiences in Unity, I use Muse to generate visual assets in pixel-art style. This streamlines ideation and supports faster prototyping with unique visual consistency.'
  }
];

const AITools: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Beyond Tools: How I Engineer With AI
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          I don't use AI just to generate outputs — I integrate it into my systems to enhance thinking, automate structure, and scale innovation.
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
              <p className="text-gray-700 text-lg mb-6">{selectedTool.detailedDescription}</p>
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedTool(null)}
                  className="px-6 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Close
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