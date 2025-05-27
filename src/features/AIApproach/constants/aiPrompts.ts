// Kart başlıklarını union type olarak tanımla
export const CARD_TITLES = [
  'Cursor AI',
  'ChatGPT',
  'Claude',
  'Grok',
  'Muse',
  'Fooocus Colab',
  'Copilot',
] as const;

export type CardTitle = typeof CARD_TITLES[number];

// Örnek prompt verisi (EN/TR)
export const PROMPTS: Record<CardTitle, { en: string[]; tr: string[] }> = {
  'Cursor AI': {
    en: [
      'Generate a reusable React component that follows SOLID principles.',
      'Scan the codebase for UI logic bugs and suggest fixes.'
    ],
    tr: [
      'SOLID prensiplerine uygun, tekrar kullanılabilir bir React bileşeni oluştur.',
      'Kod tabanında UI mantık hatalarını tara ve düzeltme önerileri sun.'
    ]
  },
  'ChatGPT': {
    en: [
      'Validate this patent idea against international databases.',
      'Format the following claims for a technical document.'
    ],
    tr: [
      'Bu patent fikrini uluslararası veri tabanlarında doğrula.',
      'Aşağıdaki iddiaları teknik doküman formatında düzenle.'
    ]
  },
  'Claude': {
    en: [
      'Break down this project into actionable tasks and edge cases.',
      'Plan a scalable component library structure.'
    ],
    tr: [
      'Bu projeyi yapılabilir görevlere ve sınır durumlarına ayır.',
      'Ölçeklenebilir bir bileşen kütüphanesi yapısı planla.'
    ]
  },
  'Grok': {
    en: [
      'Compare the performance and readability of these two implementations.',
      'Suggest optimizations for this logic chain.'
    ],
    tr: [
      'Bu iki implementasyonun performans ve okunabilirliğini karşılaştır.',
      'Bu mantık zinciri için optimizasyon önerileri sun.'
    ]
  },
  'Muse': {
    en: [
      'Generate a low-poly isometric scene for a Unity game.',
      'Suggest visual elements to guide player attention.'
    ],
    tr: [
      'Unity oyunu için low-poly izometrik bir sahne oluştur.',
      'Oyuncu dikkatini yönlendirecek görsel öğeler öner.'
    ]
  },
  'Fooocus Colab': {
    en: [
      'Generate a high-quality image using Stable Diffusion with this prompt.',
      'Create a unique visual for my project using Fooocus Colab.'
    ],
    tr: [
      'Bu prompt ile Stable Diffusion kullanarak yüksek kaliteli bir görsel üret.',
      'Fooocus Colab ile projem için özgün bir görsel oluştur.'
    ]
  },
  'Copilot': {
    en: [
      'Auto-complete this code block and suggest improvements.',
      'Suggest a code snippet for this repetitive task.'
    ],
    tr: [
      'Bu kod bloğunu otomatik tamamla ve iyileştirme öner.',
      'Bu tekrarlayan görev için bir kod parçası öner.'
    ]
  }
}; 