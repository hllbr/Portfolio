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
export const PROMPTS: Record<CardTitle, { en: { title: string; prompt: string }[]; tr: { title: string; prompt: string }[] }> = {
  'Cursor AI': {
    en: [
      { title: 'Reusable React Component', prompt: 'Generate a reusable React component that follows SOLID principles.' },
      { title: 'UI Logic Bugs', prompt: 'Scan the codebase for UI logic bugs and suggest fixes.' }
    ],
    tr: [
      { title: 'SOLID Prensiplerine Uygun React Bileşeni', prompt: 'SOLID prensiplerine uygun, tekrar kullanılabilir bir React bileşeni oluştur.' },
      { title: 'Kod Tabanında UI Mantık Hataları', prompt: 'Kod tabanında UI mantık hatalarını tara ve düzeltme önerileri sun.' }
    ]
  },
  'ChatGPT': {
    en: [
      { title: 'Patent Novelty Check', prompt: 'Check if this patent idea is novel in international databases.' },
      { title: 'Summarize Research Paper', prompt: 'Summarize the following research paper in 200 words.' },
      { title: 'Technical Email Draft', prompt: 'Draft a professional email to request a patent search report.' },
      { title: 'Prior Art Analysis', prompt: 'Analyze the following text for prior art references.' },
      { title: 'Patent Claim Rewriting', prompt: 'Rewrite these patent claims for clarity and legal strength.' },
      { title: 'Competitor Patent Review', prompt: 'Review this competitor\'s patent and highlight unique features.' },
      { title: 'Patent Abstract Generation', prompt: 'Generate a concise abstract for this patent application.' },
      { title: 'Legal Risk Assessment', prompt: 'Assess the legal risks in this patent application.' },
      { title: 'Patent Family Mapping', prompt: 'Map the patent family for this invention.' },
      { title: 'Patentability Opinion', prompt: 'Give a patentability opinion for the following invention.' },
      { title: 'Invention Description', prompt: 'Describe the invention in simple terms for a layperson.' },
      { title: 'Patent Drawing Suggestions', prompt: 'Suggest drawing ideas for this patent application.' },
      { title: 'Patent Application Checklist', prompt: 'Create a checklist for a new patent application.' },
      { title: 'Patent Examiner Response', prompt: 'Draft a response to a patent examiner\'s rejection.' },
      { title: 'Patent Licensing Strategy', prompt: 'Suggest a licensing strategy for this patent.' },
      { title: 'Patent Monetization Ideas', prompt: 'List ways to monetize this patent.' },
      { title: 'Patent Portfolio Analysis', prompt: 'Analyze this patent portfolio for strengths and weaknesses.' },
      { title: 'Patent Search Strategy', prompt: 'Outline a strategy for an effective patent search.' },
      { title: 'Patent Market Analysis', prompt: 'Analyze the market potential for this patent.' },
      { title: 'Patent Litigation Risk', prompt: 'Assess the litigation risk for this patent.' },
      { title: 'Patent Translation', prompt: 'Translate this patent abstract into French.' },
      { title: 'Patent Cost Estimation', prompt: 'Estimate the cost of filing and maintaining this patent.' },
      { title: 'Patent Expiry Calculation', prompt: 'Calculate the expiry date for this patent.' },
      { title: 'Patent Maintenance Reminder', prompt: 'Set reminders for patent maintenance deadlines.' },
      { title: 'Patent Commercialization Plan', prompt: 'Draft a commercialization plan for this patent.' },
      { title: 'Patent Infringement Check', prompt: 'Check if this product infringes any existing patents.' },
      { title: 'Patent Search Report Summary', prompt: 'Summarize the findings of this patent search report.' },
      { title: 'Patent Application Flowchart', prompt: 'Create a flowchart of the patent application process.' },
      { title: 'Patent Office Comparison', prompt: 'Compare the requirements of USPTO and EPO.' },
      { title: 'Patent Drafting Tips', prompt: 'List best practices for drafting strong patent claims.' },
      { title: 'Patent Examiner Interview Prep', prompt: 'Prepare questions for a patent examiner interview.' },
      { title: 'Patent Prioritization', prompt: 'Prioritize these inventions for patent filing.' },
      { title: 'Patent Search Keywords', prompt: 'Suggest keywords for a patent search on this topic.' },
      { title: 'Patent Application Timeline', prompt: 'Create a timeline for the patent application process.' },
      { title: 'Patent Family Tree', prompt: 'Draw a family tree for related patents.' },
      { title: 'Patent Claim Chart', prompt: 'Create a claim chart for this patent.' },
      { title: 'Patent Filing Jurisdictions', prompt: 'Recommend jurisdictions for international patent filing.' },
      { title: 'Patent Examiner Statistics', prompt: 'Provide statistics for this patent examiner.' },
      { title: 'Patent Application Cover Letter', prompt: 'Draft a cover letter for a new patent application.' },
      { title: 'Patent Application Abstract', prompt: 'Write an abstract for this patent application.' },
      { title: 'Patent Application Drawings', prompt: 'Describe the required drawings for this application.' },
      { title: 'Patent Application Claims', prompt: 'Draft claims for this patent application.' },
      { title: 'Patent Application Background', prompt: 'Write the background section for this patent.' },
      { title: 'Patent Application Field', prompt: 'Define the technical field of this invention.' },
      { title: 'Patent Application Summary', prompt: 'Summarize the invention for the application.' },
      { title: 'Patent Application Description', prompt: 'Describe the invention in detail for the application.' },
      { title: 'Patent Application Drawings List', prompt: 'List all drawings required for this application.' },
      { title: 'Patent Application Abstract Translation', prompt: 'Translate the abstract into Spanish.' },
      { title: 'Patent Application Filing Checklist', prompt: 'Create a checklist for filing a patent application.' }
    ],
    tr: [
      { title: 'Patent Yenilik Kontrolü', prompt: 'Bu patent fikrinin uluslararası veri tabanlarında yeni olup olmadığını kontrol et.' },
      { title: 'Araştırma Makalesi Özeti', prompt: 'Aşağıdaki araştırma makalesini 200 kelimeyle özetle.' },
      { title: 'Teknik E-posta Taslağı', prompt: 'Patent araştırma raporu talep etmek için profesyonel bir e-posta taslağı oluştur.' },
      { title: 'Önceki Sanat Analizi', prompt: 'Aşağıdaki metni önceki sanat referansları açısından analiz et.' },
      { title: 'Patent İddialarını Yeniden Yaz', prompt: 'Bu patent iddialarını daha açık ve güçlü olacak şekilde yeniden yaz.' },
      { title: 'Rakip Patent İncelemesi', prompt: 'Bu rakip patente bak ve benzersiz özellikleri vurgula.' },
      { title: 'Patent Özeti Oluştur', prompt: 'Bu patent başvurusu için kısa bir özet oluştur.' },
      { title: 'Hukuki Risk Değerlendirmesi', prompt: 'Bu patent başvurusundaki hukuki riskleri değerlendir.' },
      { title: 'Patent Ailesi Haritalama', prompt: 'Bu buluş için patent ailesini haritalandır.' },
      { title: 'Patentlenebilirlik Görüşü', prompt: 'Aşağıdaki buluş için patentlenebilirlik görüşü ver.' },
      { title: 'Buluşu Basitçe Açıkla', prompt: 'Buluşu sıradan birine anlatır gibi basitçe açıkla.' },
      { title: 'Patent Çizimi Önerileri', prompt: 'Bu patent başvurusu için çizim fikirleri öner.' },
      { title: 'Patent Başvuru Kontrol Listesi', prompt: 'Yeni bir patent başvurusu için kontrol listesi oluştur.' },
      { title: 'Patent Uzmanı Yanıtı', prompt: 'Patent uzmanının ret gerekçesine yanıt taslağı hazırla.' },
      { title: 'Patent Lisanslama Stratejisi', prompt: 'Bu patent için lisanslama stratejisi öner.' },
      { title: 'Patentten Para Kazanma Yolları', prompt: 'Bu patentten para kazanmanın yollarını listele.' },
      { title: 'Patent Portföyü Analizi', prompt: 'Bu patent portföyünün güçlü ve zayıf yönlerini analiz et.' },
      { title: 'Patent Araştırma Stratejisi', prompt: 'Etkili bir patent araştırması için strateji öner.' },
      { title: 'Patent Pazar Analizi', prompt: 'Bu patentin pazar potansiyelini analiz et.' },
      { title: 'Patent Davası Riski', prompt: 'Bu patent için dava riskini değerlendir.' },
      { title: 'Patent Özeti Çevirisi', prompt: 'Bu patent özetini Fransızcaya çevir.' },
      { title: 'Patent Maliyet Tahmini', prompt: 'Bu patentin başvuru ve sürdürme maliyetini tahmin et.' },
      { title: 'Patent Süre Sonu Hesaplama', prompt: 'Bu patentin sona erme tarihini hesapla.' },
      { title: 'Patent Bakım Hatırlatıcı', prompt: 'Patent bakım tarihleri için hatırlatıcı oluştur.' },
      { title: 'Patent Ticarileştirme Planı', prompt: 'Bu patent için ticarileştirme planı hazırla.' },
      { title: 'Patent İhlali Kontrolü', prompt: 'Bu ürünün mevcut patentleri ihlal edip etmediğini kontrol et.' },
      { title: 'Patent Araştırma Raporu Özeti', prompt: 'Bu patent araştırma raporunun bulgularını özetle.' },
      { title: 'Patent Başvuru Akış Şeması', prompt: 'Patent başvuru sürecinin akış şemasını oluştur.' },
      { title: 'Patent Ofisi Karşılaştırması', prompt: 'USPTO ve EPO gereksinimlerini karşılaştır.' },
      { title: 'Patent Yazım İpuçları', prompt: 'Güçlü patent iddiaları yazmak için en iyi uygulamaları listele.' },
      { title: 'Patent Uzmanı Görüşmesi Hazırlığı', prompt: 'Patent uzmanı ile görüşme için sorular hazırla.' },
      { title: 'Patent Önceliklendirme', prompt: 'Bu buluşları patent başvurusu için önceliklendir.' },
      { title: 'Patent Araştırma Anahtar Kelimeleri', prompt: 'Bu konu için patent araştırmasında kullanılacak anahtar kelimeleri öner.' },
      { title: 'Patent Başvuru Zaman Çizelgesi', prompt: 'Patent başvuru süreci için zaman çizelgesi oluştur.' },
      { title: 'Patent Aile Ağacı', prompt: 'İlgili patentler için aile ağacı çiz.' },
      { title: 'Patent İddia Tablosu', prompt: 'Bu patent için iddia tablosu oluştur.' },
      { title: 'Patent Başvuru Ülkeleri', prompt: 'Uluslararası başvuru için ülkeler öner.' },
      { title: 'Patent Uzmanı İstatistikleri', prompt: 'Bu patent uzmanı için istatistik ver.' },
      { title: 'Patent Başvuru Ön Yazısı', prompt: 'Yeni bir patent başvurusu için ön yazı hazırla.' },
      { title: 'Patent Başvuru Özeti', prompt: 'Bu patent başvurusu için özet yaz.' },
      { title: 'Patent Başvuru Çizimleri', prompt: 'Bu başvuru için gerekli çizimleri açıkla.' },
      { title: 'Patent Başvuru İddiaları', prompt: 'Bu patent başvurusu için iddialar yaz.' },
      { title: 'Patent Başvuru Arka Planı', prompt: 'Bu patent için arka plan bölümünü yaz.' },
      { title: 'Patent Başvuru Alanı', prompt: 'Buluşun teknik alanını tanımla.' },
      { title: 'Patent Başvuru Özeti', prompt: 'Başvuru için buluşu özetle.' },
      { title: 'Patent Başvuru Açıklaması', prompt: 'Başvuru için buluşu detaylı açıkla.' },
      { title: 'Patent Başvuru Çizim Listesi', prompt: 'Bu başvuru için gerekli tüm çizimleri listele.' },
      { title: 'Patent Özeti İspanyolca Çeviri', prompt: 'Özeti İspanyolcaya çevir.' },
      { title: 'Patent Başvuru Kontrol Listesi', prompt: 'Patent başvurusu için kontrol listesi oluştur.' }
    ]
  },
  'Claude': {
    en: [
      { title: 'Project Breakdown', prompt: 'Break down this project into actionable tasks and edge cases.' },
      { title: 'Scalable Component Library Structure', prompt: 'Plan a scalable component library structure.' }
    ],
    tr: [
      { title: 'Proje Yapılabilir Görevlere Ayırma', prompt: 'Bu projeyi yapılabilir görevlere ve sınır durumlarına ayır.' },
      { title: 'Ölçeklenebilir Bileşen Kütüphanesi Yapısı Planlama', prompt: 'Ölçeklenebilir bir bileşen kütüphanesi yapısı planla.' }
    ]
  },
  'Grok': {
    en: [
      { title: 'Performance and Readability Comparison', prompt: 'Compare the performance and readability of these two implementations.' },
      { title: 'Logic Chain Optimizations', prompt: 'Suggest optimizations for this logic chain.' }
    ],
    tr: [
      { title: 'İki Implementasyonun Performans ve Okunabilirliğini Karşılaştır', prompt: 'Bu iki implementasyonun performans ve okunabilirliğini karşılaştır.' },
      { title: 'Mantık Zinciri İçin Optimizasyon Önerileri', prompt: 'Bu mantık zinciri için optimizasyon önerileri sun.' }
    ]
  },
  'Muse': {
    en: [
      { title: 'Low-Poly İzometrik Sahne', prompt: 'Generate a low-poly isometric scene for a Unity game.' },
      { title: 'Oyuncu Dikkatini Yönlendirme', prompt: 'Suggest visual elements to guide player attention.' }
    ],
    tr: [
      { title: 'Low-Poly İzometrik Sahne', prompt: 'Unity oyunu için low-poly izometrik bir sahne oluştur.' },
      { title: 'Oyuncu Dikkatini Yönlendirme', prompt: 'Oyuncu dikkatini yönlendirecek görsel öğeler öner.' }
    ]
  },
  'Fooocus Colab': {
    en: [
      { title: 'High-Quality Image Generation', prompt: 'Generate a high-quality image using Stable Diffusion with this prompt.' },
      { title: 'Unique Visual for Project', prompt: 'Create a unique visual for my project using Fooocus Colab.' }
    ],
    tr: [
      { title: 'Yüksek Kaliteli Görsel Üretimi', prompt: 'Bu prompt ile Stable Diffusion kullanarak yüksek kaliteli bir görsel üret.' },
      { title: 'Projem İçin Özgün Görsel Oluşturma', prompt: 'Fooocus Colab ile projem için özgün bir görsel oluştur.' }
    ]
  },
  'Copilot': {
    en: [
      { title: 'Auto-Complete Code Block', prompt: 'Auto-complete this code block and suggest improvements.' },
      { title: 'Code Snippet Suggestion', prompt: 'Suggest a code snippet for this repetitive task.' }
    ],
    tr: [
      { title: 'Kod Bloğunu Otomatik Tamamla', prompt: 'Bu kod bloğunu otomatik tamamla ve iyileştirme öner.' },
      { title: 'Tekrarlayan Görev İçin Kod Parçası Öner', prompt: 'Bu tekrarlayan görev için bir kod parçası öner.' }
    ]
  }
}; 