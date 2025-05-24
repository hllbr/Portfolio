# 🇬🇧 Portfolio Web Application

## Project Overview
This project is a personal portfolio web application built with modern software engineering standards. All pages and components are separated according to SOLID principles. The folder structure is designed for easy maintenance and scalability in large-scale projects.

## Technologies Used
- React (Vite)
- TypeScript
- React Router
- Material UI (MUI)
- Phosphor Icons
- i18next (Internationalization)
- Custom CSS Modules
- SOLID Principles

## Folder Structure & Explanations
```
src/
  features/
    Home/
      components/      # Home page subcomponents (AboutMe, Experience, etc.)
      styles/          # Home page specific styles
      Routes/          # Home main export (index.ts)
    Contact/
      components/      # Contact page components
      styles/          # Contact page styles
      Routes/          # Contact main export
    ... (other pages follow the same structure)
  BrandImage/         # All logo and brand images
  components/         # Shared components used across pages
  styles/             # Global styles
  locales/            # i18n translation files
  assets/             # Icons and other media
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
- Phosphor Icons
- i18next (Çoklu dil desteği)
- Özel CSS Modülleri
- SOLID Prensipleri

## Klasör Yapısı ve Açıklamaları
```
src/
  features/
    Home/
      components/      # Home sayfası alt bileşenleri (AboutMe, Experience, vb.)
      styles/          # Home sayfası özel stilleri
      Routes/          # Home ana bileşenini dışa açan index.ts
    Contact/
      components/      # Contact sayfası bileşenleri
      styles/          # Contact sayfası stilleri
      Routes/          # Contact ana export
    ... (diğer sayfalar aynı yapı)
  BrandImage/         # Tüm logo ve marka görselleri
  components/         # Ortak, sayfalar arası kullanılabilen bileşenler
  styles/             # Global stiller
  locales/            # Çoklu dil dosyaları (i18n)
  assets/             # İkonlar ve diğer medya
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