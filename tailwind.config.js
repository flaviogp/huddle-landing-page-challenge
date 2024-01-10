/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'tPink': 'hsl(322, 100%, 66%)',
        'tLightPink': 'hsl(321, 100%, 78%)',
        'tLightRed': 'hsl(0, 100%, 63%)',
        'tVeryDarkCyan': 'hsl(192, 100%, 9%)',
        'tVeryPaleBlue': 'hsl(207, 100%, 98%)',
      },
      backgroundImage: {
        'desktopBgFooterTop': 'url(./assets/images/bg-footer-top-desktop.svg)',
        'mobileBgFooterTop': 'url(./assets/images/bg-footer-top-mobile.svg)',
        'desktopBgSectionBotton1': 'url(./assets/images/bg-section-bottom-desktop-1.svg)',
        'desktopBgSectionBotton2': 'url(./assets/images/bg-section-bottom-desktop-2.svg)',
        'mobileBgSectionBotton1': 'url(./assets/images/bg-section-bottom-mobile-1.svg)',
        'mobileBgSectionBotton2': 'url(./assets/images/bg-section-bottom-mobile-1.svg)',
        'desktopBgSectionTop1': 'url(./assets/images/bg-section-top-desktop-1.svg)',
        'desktopBgSectionTop2': 'url(./assets/images/bg-section-top-desktop-2.svg)',
        'mobileBgSectionTop1': 'url(./assets/images/bg-section-top-mobile-1.svg)',
        'mobileBgSectionTop2': 'url(./assets/images/bg-section-top-mobile-1.svg)',

      },
    },
  },
  plugins: [],
}

