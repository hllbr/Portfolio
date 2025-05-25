import netasLogo from '../../../BrandImage/netastr_logo.jpeg';
import halkbankLogo from '../../../BrandImage/halkbank_logo.jpeg';
import eleksLogo from '../../../BrandImage/eleks_yangn_ve_gvenlik_sistemleri_logo.jpeg';

export interface Position {
  title: string;
  date: string;
  desc: string;
  isCurrent?: boolean;
}

export interface ExperienceType {
  company: string;
  logo: string;
  positions: Position[];
  techs: string[];
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
        isCurrent: true,
      },
      {
        title: 'Full Stack Developer',
        date: 'Ara 2021 - Kas 2023',
        desc: 'Yeni özelliklerin araştırılması, raporlanması ve uygulamaya alınması. Stabil sürüm için hata düzeltmeleri.',
      },
      {
        title: 'Software Test Engineer',
        date: 'Mar 2021 - Ara 2021',
        desc: 'Test senaryolarının yazılması ve manuel koşulması (ALM, OCTANE).',
      },
    ],
    techs: ['Java', 'React.js', 'Spring', 'Docker', 'GIT', 'RESTful', 'Maven', 'Gradle', 'npm', 'yarn'],
  },
  {
    company: 'Halkbank',
    logo: halkbankLogo,
    positions: [
      {
        title: 'Intern',
        date: 'Haz 2018 - Tem 2018',
        desc: 'Prod özelinde gelen değişiklik taleplerinin alınması ve değerlendirilmesi.',
      },
    ],
    techs: ['SQL', 'Java'],
  },
  {
    company: 'Eleks Yangın ve Güvenlik Sistemleri',
    logo: eleksLogo,
    positions: [
      {
        title: 'Intern',
        date: 'Haz 2017 - Tem 2017',
        desc: 'Akıllı Adresli Yangın Algılama ve Kontrol Panellerinin geliştirilmesi.',
      },
    ],
    techs: ['Elektronik', 'C', 'Donanım'],
  },
]; 