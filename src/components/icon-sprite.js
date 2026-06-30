(function () {
  window.CardioComponents = window.CardioComponents || {};

  window.CardioComponents.icon = (name, className = "icon") =>
    `<svg class="${className}" aria-hidden="true" focusable="false"><use href="#icon-${name}"></use></svg>`;

  window.CardioComponents.IconSprite = function IconSprite() {
    return `
      <svg class="icon-sprite" aria-hidden="true" focusable="false">
        <symbol id="icon-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"></path></symbol>
        <symbol id="icon-x" viewBox="0 0 24 24"><path d="m18 6-12 12M6 6l12 12"></path></symbol>
        <symbol id="icon-phone" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8.09 9.64a16 16 0 0 0 6.27 6.27l1.19-1.19a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92Z"></path></symbol>
        <symbol id="icon-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></symbol>
        <symbol id="icon-map-pin" viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></symbol>
        <symbol id="icon-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></symbol>
        <symbol id="icon-heart-pulse" viewBox="0 0 24 24"><path d="M19.5 12.6 12 20l-7.5-7.4a5 5 0 0 1 7.5-6.5 5 5 0 0 1 7.5 6.5Z"></path><path d="M3.5 12H7l1.5-3 3 6 1.5-3h7.5"></path></symbol>
        <symbol id="icon-chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></symbol>
        <symbol id="icon-arrow-right" viewBox="0 0 24 24"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></symbol>
        <symbol id="icon-volume-2" viewBox="0 0 24 24"><path d="M11 5 6 9H3v6h3l5 4V5Z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path></symbol>
        <symbol id="icon-volume-x" viewBox="0 0 24 24"><path d="M11 5 6 9H3v6h3l5 4V5Z"></path><path d="m19 9-4 4"></path><path d="m15 9 4 4"></path></symbol>
        <symbol id="icon-stethoscope" viewBox="0 0 24 24"><path d="M6 3v5a4 4 0 0 0 8 0V3"></path><path d="M10 12v3a5 5 0 0 0 10 0v-1"></path><circle cx="20" cy="10" r="2"></circle><path d="M4 3h4M12 3h4"></path></symbol>
        <symbol id="icon-shield" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path><path d="m9 12 2 2 4-5"></path></symbol>
        <symbol id="icon-activity" viewBox="0 0 24 24"><path d="M22 12h-4l-3 8L9 4l-3 8H2"></path></symbol>
        <symbol id="icon-whatsapp" viewBox="0 0 32 32">
          <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.04 3C8.91 3 3.11 8.75 3.11 15.82c0 2.26.6 4.47 1.73 6.41L3 29l6.94-1.8a13.05 13.05 0 0 0 6.1 1.53c7.13 0 12.93-5.75 12.93-12.82S23.17 3 16.04 3Zm0 23.55c-1.94 0-3.84-.52-5.5-1.5l-.4-.24-4.12 1.07 1.1-4-.26-.42a10.47 10.47 0 0 1-1.6-5.64c0-5.87 4.84-10.65 10.78-10.65 5.95 0 10.79 4.78 10.79 10.65 0 5.94-4.84 10.73-10.79 10.73Z"></path>
          <path fill="currentColor" d="M21.95 18.58c-.32-.16-1.9-.93-2.2-1.04-.3-.1-.52-.16-.74.16-.22.32-.85 1.04-1.04 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.58-1.59-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.5.14-.65.15-.14.32-.38.48-.57.16-.19.22-.32.32-.54.11-.21.06-.4-.03-.56-.08-.16-.74-1.77-1.01-2.43-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.4-.3.32-1.14 1.1-1.14 2.69s1.17 3.13 1.33 3.34c.16.21 2.31 3.5 5.6 4.9.78.34 1.39.54 1.87.69.79.25 1.5.21 2.06.13.63-.09 1.9-.77 2.17-1.51.27-.75.27-1.38.19-1.51-.08-.14-.3-.22-.62-.38Z"></path>
        </symbol>
      </svg>
    `;
  };
})();
