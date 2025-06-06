import netasLogo from '../../../BrandImage/netastr_logo.jpeg';
import halkbankLogo from '../../../BrandImage/halkbank_logo.jpeg';
import eleksLogo from '../../../BrandImage/eleks_yangn_ve_gvenlik_sistemleri_logo.jpeg';

export interface Position {
  title: string;
  date: string;
  desc: string;
  /** Optional detailed description shown in overlay */
  detail?: string;
  isCurrent?: boolean;
  shortDesc: string;
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
        desc: 'Ürüne yeni özelliklerin kazandırılması, hem Front-end hem de Back-end geliştirme ve hata düzeltmeleri.',
        shortDesc: 'Full stack geliştirme ve yeni özellik ekleme.',
        detail: `📍 Remote • Full time • March 2021 – Present\n\nI started at NETAŞ as a Full Stack Developer in December 2021.\nI initially worked on the Visium Manage (test case management tool) project where I contributed to developing many modules to enhance the product's functionality.\n\n🚀 Key Responsibilities:\n• Custom backend solutions for bulk operations\n• Design and implementation of an advanced privilege management system\n• Development of custom business rules based on client needs\n• Re-structuring standard CRUD operations\n• Improvements at the UI/logic level for test accuracy and system stability\n• Technical analysis and reporting of new features\n• Frontend and backend bug fixing and stabilization\n\n📈 As of November 2023, I have continued my role as a Senior Full Stack Developer thanks to my performance and contributions.\n\n🎯 Visium Farm (January 2024 – Present)\nThe goal of this project is to rebuild the existing user interface with modern technologies, making it more scalable, performant and user focused.\n\n🧪 My Contributions:\n• Designing reusable components with a modern frontend architecture\n• Optimizing data flow from the old system into the new one\n• Strengthening the user experience through UI/UX enhancements\n• Refactoring processes focused on code quality, testability and sustainability\n\n💡 Throughout these processes I took active responsibility not only in software development, but also in technical analysis, interpreting user needs, and proposing system-wide improvements.`,
        isCurrent: true,
      },
      {
        title: 'Full Stack Developer',
        date: 'Ara 2021 - Kas 2023',
        desc: 'Yeni özelliklerin araştırılması, raporlanması ve uygulamaya alınması. Stabil sürüm için hata düzeltmeleri.',
        shortDesc: 'Yeni özellik araştırma ve hata düzeltme.',
        detail: `📍 Remote • Full time • March 2021 – Present\n\nI started at NETAŞ as a Full Stack Developer in December 2021.\nI initially worked on the Visium Manage (test case management tool) project where I contributed to developing many modules to enhance the product's functionality.\n\n🚀 Key Responsibilities:\n• Custom backend solutions for bulk operations\n• Design and implementation of an advanced privilege management system\n• Development of custom business rules based on client needs\n• Re-structuring standard CRUD operations\n• Improvements at the UI/logic level for test accuracy and system stability\n• Technical analysis and reporting of new features\n• Frontend and backend bug fixing and stabilization\n\n📈 As of November 2023, I have continued my role as a Senior Full Stack Developer thanks to my performance and contributions.\n\n🎯 Visium Farm (January 2024 – Present)\nThe goal of this project is to rebuild the existing user interface with modern technologies, making it more scalable, performant and user focused.\n\n🧪 My Contributions:\n• Designing reusable components with a modern frontend architecture\n• Optimizing data flow from the old system into the new one\n• Strengthening the user experience through UI/UX enhancements\n• Refactoring processes focused on code quality, testability and sustainability\n\n💡 Throughout these processes I took active responsibility not only in software development, but also in technical analysis, interpreting user needs, and proposing system-wide improvements.`,
      },
      {
        title: 'Software Test Engineer',
        date: 'Mar 2021 - Ara 2021',
        desc: 'MAPFRE Sigorta projelerinde H4ll, 3-D Secure, Translation (İspanyolca–Türkçe arayüz çeviri kontrolü), Newtron ve WTW uygulamaları için test senaryoları yazıldı. ALM ve OCTANE ile manuel ve otomasyon koşumları gerçekleştirildi.',
        shortDesc: 'Sigorta projelerinde test otomasyonu ve dilsel doğruluk odaklı senaryolar geliştirdim.',
        detail:
          'MAPFRE Sigorta projelerinde H4ll, 3-D Secure, Translation (İspanyolca–Türkçe arayüz çeviri kontrolü), Newtron ve WTW uygulamaları için test senaryoları yazıldı. ALM ve OCTANE ile manuel ve otomasyon koşumları gerçekleştirildi.\n\nBu süreçte kullanıcı arayüzlerindeki dilsel doğruluk, regresyon senaryoları ve hata raporlama iş akışları da yürütüldü. Test doğruluğu, kalite standartları ve takım koordinasyonu sağlandı.',
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