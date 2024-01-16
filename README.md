[Assesment Açıklaması](./ASSESMENT.md)

# Proje Nasıl Başlatılır
- npm install
- npm run dev
- Tarayıcıdan bu URL'i açınız: http://localhost:5173
# Demo App

[Netlify Demo App](https://feyzullah-yildiz-2024-01-13-fe-case.netlify.app/)

# Notlarım

- CSS ve JS için verilen ödev bu uygulamadadır.
- Herhangi bir UI kütüphanesi kullanmadım, açıkcası kütüphane kullanamdan yapmanın daha zahmetli-önemli olduğunu düşündüm. Daha önceden `MaterialUI`, `ChakraUI`, `Ant Design`, `Mantine UI`, `Prime React` kütüphanelerini kullandım.

### CSS Ödevi

> Not: Bu notu kaçırmışım: `Tailwind veya Bootstrap kullanarak kodlanması gerekmektedir.`

- Bu path'e gidince görebilirsiniz `/css-assesment`
- css için `@emotion/styled` kütüphanesini kullandım. Bunun yerine şu stackleri de kullanabilirdim `styled-components`, `Sass/Scss`, `css-modules`, `tailwind`, `twin.macro`
- resim ve SVG için genel olarak bir tool kullanmadım. Sadece Harita kısmına [react-svgr](https://react-svgr.com/) kütüphanesini kullanarak hazır component oluşturdum. (CLI ile de yapabilirdim ama tek bir SVG için playground'ı kullanmayı tercih ettim)
  - Harita bölümü için SVG kullanarak geliştirdim. Harita üzerindeki konumların doğru bir şekilde çalışması için böyle bir yöntem kullanmayı uygun buldum.
  - [svgs/World.tsx](src/page/css-assessment/side/SideF/component/World/svgs/World.tsx) ve Component'in kullanımı için [bu Component'i (World)](src\page\css-assessment\side\SideF\component\World\index.tsx) inceleyebilirsiniz.
- Tasarımı 1920x1080 olan ekranlar için bir çözümü figmada olmadığı için ekran büyüdükçe taşmalar olmamasına rağmen çok da iyi gözükmüyor olabilir.

### JS Ödevi

- Bu path'e gidince görebilirsiniz `/js-assesment`
- Genel olarak Sınav'ı yöneten custom bir hook [(useExam.tsx)](src/page/js-assessment/page/Exam/hooks/useExam.tsx) yazdım ve Stateleri bu yönetiyor.
- sınav bittikten sonra, yani sınva sonuç sayfasında geri'ye basınca sınava tekrardan dönmüyor. Sınav başlangıç sayfasına yönleniyor.
-
