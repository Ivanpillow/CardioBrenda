(function () {
  const { icon } = window.CardioComponents;

  window.CardioComponents.FloatingActions = function FloatingActions() {
    const links = window.CardioLinks;
    const { contact } = window.CardioData;
    return `
      <div class="floating-actions" aria-label="Accesos flotantes">
        <a href="${links.whatsapp()}" target="_blank" rel="noopener" aria-label="Abrir WhatsApp">
          ${icon("whatsapp", "icon icon--brand")}
        </a>
        <a href="${links.tel}" aria-label="Llamar al ${contact.phone}">
          ${icon("phone")}
        </a>
      </div>
    `;
  };
})();
