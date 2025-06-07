# Portfolio Web Application

## Overview
A modern, modular, and scalable personal portfolio web application built with React, TypeScript, and best software engineering practices. The project structure follows SOLID principles and is designed for maintainability and extensibility.

## Technologies
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
- Alias import support with @ (e.g. import x from '@/features/...') via Vite and TypeScript configuration

## Project Structure
```text
src/
  features/
    Home/              # Home page components
    Contact/           # Contact page
    AIApproach/        # AI Approach page
    Technologies/      # Technologies page
    PromptGallery/     # Prompt Gallery page
    Patents/           # Patents page
    NoPage/            # 404 page
  components/          # Shared components (layout, ui)
  hooks/               # Custom React hooks
  styles/              # Global styles
  locales/             # i18n translation files
  assets/              # Icons and media
  BrandImage/          # Logo and brand images
  types/               # TypeScript types
  app/                 # App configuration
```
- Each feature/page has its own components, styles, and Routes folders.
- All main components are exported via their respective `Routes/index.ts` files.
- Images and assets are centrally managed.
- Modularity and readability are prioritized.
- Alias import with @ is supported for cleaner and shorter import paths (see vite.config.ts and tsconfig.json)

## Key Features
- Responsive design
- Multi-language support (EN/TR)
- Interactive UI with Framer Motion
- Particle effects with TSParticles
- Contact form with email integration
- Modern UI components (Flowbite, MUI)
- SEO optimized
- Animated navigation with language switcher
- AI Tools section with animated cards and 50+ bilingual prompts
- Social media bubble with dynamic contact icons
- Experience page with themed modals
- Unified dark theme across all pages

## SOLID Principles & Code Quality
- All code and reviews ensure SOLID compliance
- Single Responsibility for each component
- Extensible and reusable code
- Modern best practices for maintainability

## Contribution
- Open source: PRs are welcome
- Use Issues for features, improvements, or bugs
- All commits should consider SOLID and testability

## License
MIT

---

# Kişisel Web Uygulaması (Portfolio)

## Genel Bakış
Modern yazılım mühendisliği standartlarına uygun, modüler ve sürdürülebilir bir kişisel portfolyo web uygulaması. Proje yapısı SOLID prensiplerine göre tasarlanmıştır.

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
- @ ile alias import desteği (örn. import x from '@/features/...'), Vite ve TypeScript ile yapılandırıldı

## Proje Yapısı
```text
src/
  features/
    Home/              # Ana sayfa bileşenleri
    Contact/           # İletişim sayfası
    AIApproach/        # AI Yaklaşımı sayfası
    Technologies/      # Teknolojiler sayfası
    PromptGallery/     # Prompt Galerisi sayfası
    Patents/           # Patentler sayfası
    NoPage/            # 404 sayfası
  components/          # Paylaşılan bileşenler (layout, ui)
  hooks/               # Özel React hooks
  styles/              # Global stiller
  locales/             # i18n çeviri dosyaları
  assets/              # İkonlar ve medya
  BrandImage/          # Logo ve marka görselleri
  types/               # TypeScript tip tanımlamaları
  app/                 # Uygulama yapılandırması
```
- Her sayfanın kendi altında components, styles ve Routes klasörleri bulunur.
- Tüm ana bileşenler ilgili `Routes/index.ts` dosyası üzerinden dışa açılır.
- Görseller ve assetler merkezi olarak yönetilir.
- Kodun okunabilirliği ve sürdürülebilirliği için modülerlik ön planda tutulmuştur.
- @ ile alias import desteği ile daha temiz ve kısa import yolları kullanılabilir (vite.config.ts ve tsconfig.json'a bakınız)

## Temel Özellikler
- Duyarlı tasarım
- Çoklu dil desteği (EN/TR)
- Framer Motion ile etkileşimli arayüz
- TSParticles ile parçacık efektleri
- E-posta entegrasyonlu iletişim formu
- Modern UI bileşenleri (Flowbite, MUI)
- SEO optimizasyonu
- Animasyonlu navigasyon ve dil değiştirme
- AI Tools bölümü (animasyonlu kartlar ve 50+ çift dilli prompt)
- Dinamik iletişim ikonlarıyla sosyal medya balonu
- Temalı modallar ile deneyim sayfası
- Tüm sayfalarda tutarlı koyu tema

## SOLID Prensipleri & Kod Kalitesi
- Tüm kod ve incelemelerde SOLID uyumluluğu
- Her bileşen tek sorumluluk ilkesine uygun
- Genişletilebilir ve yeniden kullanılabilir kod
- Modern best practice'ler ile sürdürülebilirlik

## Katkı
- Açık kaynak: PR'lar açıktır
- Yeni özellik, iyileştirme veya hata için Issues kullanılabilir
- Tüm commitlerde SOLID ve test edilebilirlik dikkate alınmalıdır

## Lisans
MIT

---

> Not: Yakında "Sertifikalar" (Certificates) sayfası eklenecektir.

For more information or contributions, feel free to contact. / Daha fazla bilgi veya katkı için iletişime geçebilirsiniz.
