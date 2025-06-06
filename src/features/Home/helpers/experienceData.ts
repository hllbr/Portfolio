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
        dateTr: 'Eki 2023 - Halen',
        dateEn: 'Oct 2023 - Present',
        desc: 'Ürüne yeni özelliklerin kazandırılması, hem Front-end hem de Back-end geliştirme ve hata düzeltmeleri.',
        shortDesc: 'Visium Farm projesinde modern cihaz çiftliği mimarisi ve gelişmiş test otomasyonu çözümleri geliştirdim. Gerçek cihazlarda paralel test altyapısı kurulumunda liderlik yaptım.',
        shortDescTr: 'Visium Farm projesinde modern cihaz çiftliği mimarisi ve gelişmiş test otomasyonu çözümleri geliştirdim. Gerçek cihazlarda paralel test altyapısı kurulumunda liderlik yaptım.',
        shortDescEn: 'Developed scalable device farm architecture and advanced test automation solutions in the Visium Farm project. Led the setup of parallel testing infrastructure on real devices.',
        detailTr: `📍 Uzaktan • Tam zamanlı • Mart 2021 – Halen

NETAŞ'ta Senior Full Stack Developer olarak Visium Farm projesinde liderlik yaptım (<a href="https://www.visiumlabs.com/en/visium-farm" target="_blank" rel="noopener noreferrer">detaylı bilgi</a>). Gerçek cihazlar üzerinde paralel ve otomatik testler için ölçeklenebilir bir cihaz çiftliği platformu geliştirdim.

🚀 Sorumluluklarım:
• 500+ gerçek cihazda paralel ve otomatik testler için modern cihaz çiftliği mimarisi
• Emülatör tabanlı testten gerçek cihaz testine geçişte öncülük
• Cihaz yönetimi, kaynak optimizasyonu ve raporlama için gelişmiş backend modülleri
• Canlı cihaz kontrolü ve test sonuçlarının görselleştirilmesi için yeniden kullanılabilir frontend bileşenleri
• Kurumsal kullanıcı ve cihaz yönetimi için REST API ve LDAP entegrasyonu
• QA ve DevOps ekipleriyle büyük ölçekli test otomasyonu için CI/CD süreçlerinin optimizasyonu

💡 Bu çalışmalar, büyük müşterilerin mobil/web testlerini merkezileştirmesini, hızlandırmasını ve kaliteyi artırmasını sağladı. Daha fazla bilgi için <a href="https://www.visiumlabs.com/en/visium-farm" target="_blank" rel="noopener noreferrer">Visium Farm</a>.`,
        detailEn: `📍 Remote • Full time • March 2021 – Present

As a Senior Full Stack Developer at NETAŞ, I took a leading role in the Visium Farm project (<a href="https://www.visiumlabs.com/en/visium-farm" target="_blank" rel="noopener noreferrer">learn more</a>), building a scalable on-prem/cloud device farm for real device testing and automation.

🚀 Key Responsibilities:
• Architected and implemented a modern device farm platform for parallel and automated testing on 500+ real devices
• Led the migration from emulator-based to real device testing, boosting test accuracy and reliability
• Developed advanced backend modules for device management, resource optimization, and reporting
• Designed reusable frontend components for live device control and test result visualization
• Integrated REST API and LDAP support for enterprise-level user and device management
• Collaborated with QA and DevOps teams to optimize CI/CD pipelines for large-scale test automation

💡 My work enabled major clients to centralize and accelerate their mobile/web testing, reduce costs, and achieve higher product quality. For more details, see <a href="https://www.visiumlabs.com/en/visium-farm" target="_blank" rel="noopener noreferrer">Visium Farm</a>.`,
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
        detailTr: `NETAŞ'ta Full Stack Developer olarak Visium Manage projesine katkı sağladım (<a href="https://www.visiumlabs.com/en/visium-manage" target="_blank" rel="noopener noreferrer">detaylı bilgi</a>). Kurumsal QA ekipleri için kapsamlı bir test senaryosu yönetim platformu geliştirdik.

🌟 Katkılarım:
• Test senaryosu oluşturma, risk bazlı kategorilendirme ve senaryo tekrar kullanımı için modüller
• Jira ve CI/CD araçlarıyla entegrasyonlar sayesinde kusur takibi ve çevik iş akışları
• Gerçek zamanlı test takibi ve kalite metrikleri için raporlama ve analiz panelleri
• Kullanıcı deneyimini artıran arayüz bileşenleri ve akıllı bildirimler
• Büyük ölçekli QA ekipleri için geçiş ve adaptasyon desteği
• <b>Bulk operasyonların frontend ve backend geliştirmeleri, yüksek hacimli veri işleme ve özel CRUD işlemlerinin tasarımı ve uygulanması</b>

🔗 Platform hakkında daha fazla bilgi için <a href="https://www.visiumlabs.com/en/visium-manage" target="_blank" rel="noopener noreferrer">Visium Manage</a>.`,
        detailEn: `As a Full Stack Developer at NETAŞ, I contributed to the Visium Manage project (<a href="https://www.visiumlabs.com/en/visium-manage" target="_blank" rel="noopener noreferrer">learn more</a>), a robust test case management platform for enterprise QA teams.

🌟 Main Contributions:
• Developed and maintained modules for test case creation, risk-based categorization, and scenario reuse
• Implemented integrations with Jira and CI/CD tools for seamless defect tracking and agile workflows
• Enhanced reporting and analytics dashboards for real-time test tracking and quality metrics
• Improved user experience with intuitive UI components and smart notifications
• Supported migration and onboarding for large-scale QA teams
• <b>Developed and optimized bulk operations for both frontend and backend, including high-volume data processing and custom CRUD implementations</b>

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
        detailTr: `MAPFRE Sigorta projelerinde H4ll, 3-D Secure, Translation (İspanyolca–Türkçe arayüz çeviri kontrolü), Newtron ve WTW uygulamaları için test senaryoları yazıldı. ALM ve OCTANE ile manuel ve otomasyon koşumları gerçekleştirildi.

Bu süreçte kullanıcı arayüzlerindeki dilsel doğruluk, regresyon senaryoları ve hata raporlama iş akışları da yürütüldü. Test doğruluğu, kalite standartları ve takım koordinasyonu sağlandı.`,
        detailEn: `Wrote test scenarios for MAPFRE Insurance projects including H4ll, 3-D Secure, Translation (Spanish–Turkish UI translation control), and Newton & WTW applications. Manual and automated test executions were performed using ALM and OCTANE.

During this process, I focused on linguistic accuracy in user interfaces, regression scenarios, and bug reporting workflows. Ensured test accuracy, quality standards, and team coordination.`,
      },
    ],
    techs: ['Java', 'React.js', 'Spring', 'Docker', 'GIT', 'RESTful', 'Maven', 'Gradle', 'npm', 'yarn'],
    color: '#f59e42',
  },
  {
    company: 'Halkbank',
    logo: halkbankLogo,
    positions: [
      {
        title: 'Intern',
        date: 'Haz 2018 - Tem 2018',
        desc: 'Prod özelinde gelen değişiklik taleplerinin alınması ve değerlendirilmesi.',
        shortDesc: 'Prod değişiklik taleplerinin değerlendirilmesi.',
      },
    ],
    techs: ['SQL', 'Java'],
    color: '#a78bfa',
  },
  {
    company: 'Eleks Yangın ve Güvenlik Sistemleri',
    logo: eleksLogo,
    positions: [
      {
        title: 'Intern',
        date: 'Haz 2017 - Tem 2017',
        desc: 'Akıllı Adresli Yangın Algılama ve Kontrol Panellerinin geliştirilmesi.',
        shortDesc: 'Yangın algılama paneli geliştirme.',
      },
    ],
    techs: ['Elektronik', 'C', 'Donanım'],
    color: '#fde047',
  },
]; 