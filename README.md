# 🇬🇧 Portfolio Web Application

## Project Overview
This project is a personal portfolio web application built with modern software engineering standards. All pages and components are separated according to SOLID principles. The folder structure is designed for easy maintenance and scalability in large-scale projects.

## Technologies Used
- React (Vite)
- TypeScript
- React Router
- Material UI (MUI)
- Tailwind CSS
- Framer Motion
- TSParticles
- Flowbite
- Phosphor Icons
- i18next (Internationalization)
- Custom CSS Modules
- SOLID Principles
- SendGrid (Email Integration)

## Folder Structure & Explanations
```
src/
  features/
    Home/              # Ana sayfa bileşenleri
      components/      # Home sayfası alt bileşenleri
      styles/          # Home sayfası özel stilleri
      Routes/          # Home ana export
    Contact/           # İletişim sayfası
      components/      # Contact sayfası bileşenleri
      styles/          # Contact sayfası stilleri
      Routes/          # Contact ana export
    AIApproach/        # AI Yaklaşımı sayfası
      components/      # AI yaklaşımı bileşenleri
      styles/          # AI yaklaşımı stilleri
      Routes/          # AI yaklaşımı ana export
    Technologies/      # Teknolojiler sayfası
      components/      # Teknoloji bileşenleri
      styles/          # Teknoloji stilleri
      Routes/          # Teknoloji ana export
    PromptGallery/     # Prompt Galerisi sayfası
      components/      # Galeri bileşenleri
      styles/          # Galeri stilleri
      Routes/          # Galeri ana export
    Patents/          # Patentler sayfası
      components/      # Patent bileşenleri
      styles/          # Patent stilleri
      Routes/          # Patent ana export
    NoPage/           # 404 sayfası
      components/      # 404 sayfası bileşenleri
      styles/          # 404 sayfası stilleri
      Routes/          # 404 sayfası ana export
  components/         # Paylaşılan bileşenler
    layout/           # Sayfa düzeni bileşenleri
    ui/               # UI bileşenleri
  hooks/              # Özel React hooks
  styles/             # Global stiller
  locales/            # i18n çeviri dosyaları
  assets/             # İkonlar ve medya
  BrandImage/         # Logo ve marka görselleri
  types/              # TypeScript tip tanımlamaları
  app/                # Uygulama yapılandırması
```
- Each page has its own components, styles, and Routes folders.
- All main components are exported via their respective Routes/index.ts files.
- Images and assets are centrally managed in BrandImage and assets folders.
- Modularity is prioritized for code readability and maintainability.

## SOLID Principles & Code Quality
- All commits and code reviews ensure compliance with SOLID principles.
- Each component has a single responsibility (Single Responsibility Principle).
- Code is designed for extensibility and reusability.
- Modern best practices are applied for code quality and maintainability.

## Contribution & Development
- The project is open source; PRs are welcome.
- Use Issues for new features, improvements, or bug reports.
- Every commit should consider SOLID principles and testability.

## License
MIT

---

# 🇹🇷 Kişisel Web Uygulaması (Portfolio)

## Proje Özeti
Bu proje, modern yazılım geliştirme standartlarına uygun, modüler ve sürdürülebilir bir kişisel portfolyo web uygulamasıdır. Tüm sayfa ve bileşenler, SOLID prensiplerine uygun olarak ayrılmıştır. Klasör yapısı, büyük ölçekli projelerde kolay bakım ve genişletilebilirlik için tasarlanmıştır.

## Kullanılan Teknolojiler
- React (Vite)
- TypeScript
- React Router
- Material UI (MUI)
- Tailwind CSS
- Framer Motion
- TSParticles
- Flowbite
- Phosphor Icons
- i18next (Çoklu dil desteği)
- Özel CSS Modülleri
- SOLID Prensipleri
- SendGrid (E-posta Entegrasyonu)

## Klasör Yapısı ve Açıklamaları
```
src/
  features/
    Home/              # Ana sayfa bileşenleri
      components/      # Home sayfası alt bileşenleri
      styles/          # Home sayfası özel stilleri
      Routes/          # Home ana export
    Contact/           # İletişim sayfası
      components/      # Contact sayfası bileşenleri
      styles/          # Contact sayfası stilleri
      Routes/          # Contact ana export
    AIApproach/        # AI Yaklaşımı sayfası
      components/      # AI yaklaşımı bileşenleri
      styles/          # AI yaklaşımı stilleri
      Routes/          # AI yaklaşımı ana export
    Technologies/      # Teknolojiler sayfası
      components/      # Teknoloji bileşenleri
      styles/          # Teknoloji stilleri
      Routes/          # Teknoloji ana export
    PromptGallery/     # Prompt Galerisi sayfası
      components/      # Galeri bileşenleri
      styles/          # Galeri stilleri
      Routes/          # Galeri ana export
    Patents/          # Patentler sayfası
      components/      # Patent bileşenleri
      styles/          # Patent stilleri
      Routes/          # Patent ana export
    NoPage/           # 404 sayfası
      components/      # 404 sayfası bileşenleri
      styles/          # 404 sayfası stilleri
      Routes/          # 404 sayfası ana export
  components/         # Paylaşılan bileşenler
    layout/           # Sayfa düzeni bileşenleri
    ui/               # UI bileşenleri
  hooks/              # Özel React hooks
  styles/             # Global stiller
  locales/            # i18n çeviri dosyaları
  assets/             # İkonlar ve medya
  BrandImage/         # Logo ve marka görselleri
  types/              # TypeScript tip tanımlamaları
  app/                # Uygulama yapılandırması
```
- Her sayfanın kendi altında components, styles ve Routes klasörleri bulunur.
- Tüm ana bileşenler, ilgili Routes/index.ts dosyası üzerinden dışa açılır.
- Görseller ve assetler merkezi olarak BrandImage ve assets klasörlerinde tutulur.
- Kodun okunabilirliği ve sürdürülebilirliği için modülerlik ön planda tutulmuştur.

## SOLID Prensipleri ve Kod Kalitesi
- Tüm commitlerde ve kod gözden geçirmelerinde SOLID prensiplerine uygunluk kontrol edilmiştir.
- Her bileşen tek bir sorumluluğa sahiptir (Single Responsibility Principle).
- Kodun genişletilebilirliği ve yeniden kullanılabilirliği ön planda tutulmuştur.
- Kod kalitesi ve sürdürülebilirlik için modern best practice'ler uygulanmıştır.

## Katkı ve Geliştirme
- Proje açık kaynaklıdır, katkı sağlamak isteyenler için PR'lar açıktır.
- Yeni özellikler, iyileştirmeler ve hata bildirimleri için Issues kısmını kullanabilirsiniz.
- Her committe kodun SOLID prensiplerine uygunluğu ve test edilebilirliği göz önünde bulundurulmalıdır.

## Lisans
MIT

---
For more information or contributions, feel free to contact. / Daha fazla bilgi veya katkı için iletişime geçebilirsiniz.

## Features
- Responsive Design
- Multi-language Support
- Interactive UI with Framer Motion
- Particle Effects with TSParticles
- Contact Form with Email Integration
- Modern UI Components with Flowbite
- Dark/Light Theme Support
- SEO Optimized

## Özellikler
- Duyarlı Tasarım
- Çoklu Dil Desteği
- Framer Motion ile Etkileşimli Arayüz
- TSParticles ile Parçacık Efektleri
- E-posta Entegrasyonlu İletişim Formu
- Flowbite ile Modern UI Bileşenleri
- Karanlık/Aydınlık Tema Desteği
- SEO Optimizasyonu 