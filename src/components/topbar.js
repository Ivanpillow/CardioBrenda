(function () {
  const { icon } = window.CardioComponents;

  window.CardioComponents.TopBar = function TopBar() {
    const { contact } = window.CardioData;
    const links = window.CardioLinks;
    return `
      <div class="topbar" aria-label="Información rápida de contacto">
        <div class="topbar__inner">
          <a href="#" class="topbar__item" data-email-trigger aria-label="Enviar correo a ${contact.email}">
            ${icon("mail")}
            ${contact.email}
          </a>
          <a class="topbar__item" href="${links.maps}" target="_blank" rel="noopener">
            ${icon("map-pin")}
            ${contact.shortAddress}
          </a>
          <span class="topbar__item">
            ${icon("clock")}
            Lun a vie 8:00 a.m. a 12:00 p.m. | Sáb y dom 9:00 a.m. a 6:00 p.m.
          </span>
          <a class="topbar__icon" href="${links.whatsapp()}" target="_blank" rel="noopener" aria-label="Contactar por WhatsApp">
            ${icon("whatsapp", "icon icon--brand")}
          </a>
        </div>
      </div>
    `;
  };
})();
