import netasLogo from '../../../BrandImage/netastr_logo.jpeg';
import halkbankLogo from '../../../BrandImage/halkbank_logo.jpeg';
import eleksLogo from '../../../BrandImage/eleks_yangn_ve_gvenlik_sistemleri_logo.jpeg';

export interface Position {
  title: string;
  date: string;
  dateTr?: string;
  dateEn?: string;
  desc: string;
  /** Optional detailed description shown in overlay */
  detail?: string;
  isCurrent?: boolean;
  shortDesc: string;
  shortDescTr?: string;
  shortDescEn?: string;
  detailTr?: string;
  detailEn?: string;
}

export interface ExperienceType {
  company: string;
  logo: string;
  positions: Position[];
  techs: string[];
  color: string;
}

export const experiences: ExperienceType[] = [
  {
    company: 'NETAŞ',
    logo: netasLogo,
    positions: [
      {
        title: 'Senior Full Stack Developer',
        date: 'Eki 2023 - Present',
        dateTr: 'Eki 2023 - Devam ediyor',
        dateEn: 'Oct 2023 - Present',
        desc: 'Ürüne yeni özelliklerin kazandırılması, hem Front-end hem de Back-end geliştirme ve hata düzeltmeleri.',
        shortDesc: 'Visium Farm projesinde modern test altyapısı ve gelişmiş test otomasyonu çözümleri geliştirilmesinde aktif olarak rol alıyorum.',
        shortDescTr: 'Visium Farm projesinde modern test altyapısı ve gelişmiş test otomasyonu çözümleri geliştirilmesinde aktif olarak rol alıyorum.',
        shortDescEn: 'I actively contribute to the development of modern test infrastructure and advanced test automation solutions in the Visium Farm project.',
        detailTr: `NETAŞ'ta Senior Full Stack Developer olarak Visium Farm projesinde çalışmaya başladım (<a href="https://www.visiumlabs.com/en/visium-farm" target="_blank" rel="noopener noreferrer">detaylı bilgi</a>). Bu projede hedef, mevcut test altyapısını modern teknolojilerle baştan inşa ederek daha ölçeklenebilir, performanslı ve kullanıcı odaklı bir yapıya dönüştürmekti.

🚀 Projedeki Katkılarım:
• Modern frontend mimarisine uygun yeniden kullanılabilir bileşenlerin tasarımı
• Eski yapılardan yeni sisteme veri akışının optimize edilmesi
• UI/UX iyileştirmeleriyle kullanıcı deneyiminin güçlendirilmesi
• Kod kalitesi, test edilebilirlik ve sürdürülebilirlik odaklı refactor süreçleri
• Gerçek cihazlarda paralel test altyapısının kurulması ve yönetimi
• REST API ve LDAP entegrasyonları ile kurumsal kullanıcı yönetiminin sağlanması

💡 Tüm bu süreçlerde yazılımcı kimliğimle aktif geliştirme yaparken; aynı zamanda gereksinim analizine katkı sunarak teknik çözüm önerileri geliştirme, kullanıcı ihtiyaçlarını yorumlama ve sistemsel yapı önerileri sunma gibi görevler üstlendim. Daha fazla bilgi için <a href="https://www.visiumlabs.com/en/visium-farm" target="_blank" rel="noopener noreferrer">Visium Farm</a>.`,
        detailEn: `As a Senior Full Stack Developer at NETAŞ, I started working on the Visium Farm project (<a href="https://www.visiumlabs.com/en/visium-farm" target="_blank" rel="noopener noreferrer">learn more</a>). The goal of this project was to rebuild the existing test infrastructure with modern technologies to create a more scalable, performant, and user-focused architecture.

🚀 My Contributions to the Project:
• Design of reusable components following modern frontend architecture
• Optimization of data flow from legacy systems to the new platform
• Enhancement of user experience through UI/UX improvements
• Code quality, testability, and maintainability focused refactoring processes
• Establishment and management of parallel testing infrastructure on real devices
• Implementation of enterprise user management through REST API and LDAP integrations

💡 Throughout these processes, while actively developing as a software engineer, I also contributed to requirement analysis, developed technical solution proposals, interpreted user needs, and provided system architecture recommendations. For more details, see <a href="https://www.visiumlabs.com/en/visium-farm" target="_blank" rel="noopener noreferrer">Visium Farm</a>.`,
        isCurrent: true,
      },
      {
        title: 'Full Stack Developer',
        date: 'Ara 2021 - Kas 2023',
        dateTr: 'Ara 2021 - Kas 2023',
        dateEn: 'Dec 2021 - Nov 2023',
        desc: 'Yeni özelliklerin araştırılması, raporlanması ve uygulamaya alınması. Stabil sürüm için hata düzeltmeleri.',
        shortDesc: 'Visium Manage projesinde test süreçlerinin dijitalleşmesi ve merkezi yönetimi için modüller geliştirdim.',
        shortDescTr: 'Visium Manage projesinde test süreçlerinin dijitalleşmesi ve merkezi yönetimi için modüller geliştirdim.',
        shortDescEn: 'Developed modules for digitalizing and centralizing test processes in the Visium Manage project.',
        detailTr: `NETAŞ'ta Full Stack Developer olarak Visium Manage projesinde çalıştım (<a href="https://www.visiumlabs.com/en/visium-manage" target="_blank" rel="noopener noreferrer">detaylı bilgi</a>). Kurumsal QA ekipleri için kapsamlı bir test senaryosu yönetim platformu geliştirdik.

🌟 Projedeki Katkılarım:
• Test senaryosu oluşturma, risk bazlı kategorilendirme ve senaryo tekrar kullanımı için modüller geliştirdim
• Jira ve CI/CD araçlarıyla entegrasyonlar sayesinde kusur takibi ve çevik iş akışları oluşturdum
• Gerçek zamanlı test takibi ve kalite metrikleri için raporlama ve analiz panelleri tasarladım
• Kullanıcı deneyimini artıran arayüz bileşenleri ve akıllı bildirimler geliştirdim
• Büyük ölçekli QA ekipleri için geçiş ve adaptasyon süreçlerini yönettim
• Yüksek hacimli veri işleme ve özel CRUD işlemleri için bulk operasyonların frontend ve backend geliştirmelerini gerçekleştirdim

🔗 Platform hakkında daha fazla bilgi için <a href="https://www.visiumlabs.com/en/visium-manage" target="_blank" rel="noopener noreferrer">Visium Manage</a>.`,
        detailEn: `As a Full Stack Developer at NETAŞ, I worked on the Visium Manage project (<a href="https://www.visiumlabs.com/en/visium-manage" target="_blank" rel="noopener noreferrer">learn more</a>), developing a robust test case management platform for enterprise QA teams.

🌟 My Contributions:
• Developed modules for test case creation, risk-based categorization, and scenario reuse
• Implemented integrations with Jira and CI/CD tools for seamless defect tracking and agile workflows
• Designed reporting and analytics dashboards for real-time test tracking and quality metrics
• Created intuitive UI components and smart notifications to enhance user experience
• Led migration and onboarding processes for large-scale QA teams
• Developed and optimized bulk operations for both frontend and backend, including high-volume data processing and custom CRUD implementations

🔗 For more about the platform, see <a href="https://www.visiumlabs.com/en/visium-manage" target="_blank" rel="noopener noreferrer">Visium Manage</a>.`,
      },
      {
        title: 'Software Test Engineer',
        date: 'Mar 2021 - Ara 2021',
        dateTr: 'Mar 2021 - Ara 2021',
        dateEn: 'Mar 2021 - Dec 2021',
        desc: 'MAPFRE Sigorta projelerinde H4ll, 3-D Secure, Translation (İspanyolca–Türkçe arayüz çeviri kontrolü), Newtron ve WTW uygulamaları için test senaryoları yazıldı. ALM ve OCTANE ile manuel ve otomasyon koşumları gerçekleştirildi.',
        shortDesc: 'Sigorta projelerinde test otomasyonu ve dilsel doğruluk odaklı senaryolar geliştirdim.',
        shortDescTr: 'Sigorta projelerinde test otomasyonu ve dilsel doğruluk odaklı senaryolar geliştirdim.',
        shortDescEn: 'Developed test automation and linguistic accuracy scenarios for insurance projects.',
        detailTr: `MAPFRE Sigorta projelerinde Software Test Engineer olarak çalıştım. H4ll, 3-D Secure, Translation (İspanyolca–Türkçe arayüz çeviri kontrolü), Newtron ve WTW uygulamaları için test senaryoları geliştirdim. ALM ve OCTANE araçlarını kullanarak manuel ve otomatik test süreçlerini yönettim.

Bu süreçte:
• Kullanıcı arayüzlerindeki dilsel doğruluk kontrollerini gerçekleştirdim
• Regresyon test senaryolarını tasarladım ve uyguladım
• Hata raporlama iş akışlarını optimize ettim
• Test doğruluğu ve kalite standartlarını sağladım
• Takım koordinasyonunu yönettim`,
        detailEn: `As a Software Test Engineer, I worked on MAPFRE Insurance projects. I developed test scenarios for H4ll, 3-D Secure, Translation (Spanish–Turkish UI translation control), and Newton & WTW applications. I managed manual and automated test processes using ALM and OCTANE tools.

During this period:
• Conducted linguistic accuracy checks in user interfaces
• Designed and implemented regression test scenarios
• Optimized bug reporting workflows
• Ensured test accuracy and quality standards
• Led team coordination efforts`,
      },
    ],
    techs: ['tech.java', 'tech.react', 'tech.spring',  'tech.git', 'tech.restful', 'tech.maven', 'tech.gradle', 'tech.npm', 'tech.yarn'],
    color: '#f59e42',
  },
  {
    company: 'Halkbank',
    logo: halkbankLogo,
    positions: [
      {
        title: 'Intern',
        date: 'Haz 2018 - Tem 2018',
        dateEn: 'Jun 2018 - Jul 2018',
        desc: 'Prod özelinde gelen değişiklik taleplerinin alınması ve değerlendirilmesi.',
        shortDesc: 'Prod değişiklik taleplerinin değerlendirilmesi.',
        shortDescEn: 'Evaluation of production change requests.',
      },
    ],
    techs: ['tech.sql', 'tech.java'],
    color: '#a78bfa',
  },
  {
    company: 'Eleks Yangın ve Güvenlik Sistemleri',
    logo: eleksLogo,
    positions: [
      {
        title: 'Intern',
        date: 'Haz 2017 - Tem 2017',
        dateEn: 'Jun 2017 - Jul 2017',
        desc: 'Akıllı Adresli Yangın Algılama ve Kontrol Panellerinin geliştirilmesi.',
        shortDesc: 'Yangın algılama paneli geliştirme.',
        shortDescEn: 'Fire detection panel development.',
      },
    ],
    techs: ['tech.electronics', 'tech.c', 'tech.hardware'],
    color: '#fde047',
  },
]; 