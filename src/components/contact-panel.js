(function () {
  const { icon } = window.CardioComponents;

  window.CardioComponents.ContactPanel = function ContactPanel() {
    const { contact } = window.CardioData;
    const links = window.CardioLinks;
    return `
      <div class="contact-backdrop" data-contact-backdrop aria-hidden="true"></div>
      <aside class="contact-panel" id="contacto" data-contact-panel aria-hidden="true" aria-labelledby="contact-panel-title">
        <div class="contact-panel__header">
          <div>
            <h2 id="contact-panel-title">Contacto y ubicación</h2>
            <p>Agenda, llama o revisa cómo llegar a consulta.</p>
          </div>
          <button class="contact-panel__close" type="button" data-contact-close aria-label="Cerrar contacto">
            ${icon("x")}
          </button>
        </div>
        <div class="contact-panel__grid">
          <a class="contact-panel__card" href="${links.tel}">
            ${icon("phone", "icon card-icon")}
            <span>Teléfono</span>
            <strong>${contact.displayPhone}</strong>
          </a>
          <a class="contact-panel__card" href="${links.whatsapp()}" target="_blank" rel="noopener">
            ${icon("whatsapp", "icon icon--brand card-icon")}
            <span>WhatsApp</span>
            <strong>Enviar mensaje directo</strong>
          </a>
          <button class="contact-panel__card" type="button" data-email-trigger>
            ${icon("mail", "icon card-icon")}
            <span>Correo</span>
            <strong>${contact.email}</strong>
          </button>
          <a class="contact-panel__card" href="${links.maps}" target="_blank" rel="noopener">
            ${icon("map-pin", "icon card-icon")}
            <span>Dirección</span>
            <strong>${contact.address}</strong>
          </a>
          <div class="contact-panel__card">
            ${icon("clock", "icon card-icon")}
            <span>Horarios</span>
            <strong>${contact.weekdays}<br>${contact.weekend}</strong>
          </div>
          <div class="contact-panel__card">
            ${icon("shield", "icon card-icon")}
            <span>Credenciales</span>
            <strong>${contact.credentials}</strong>
          </div>
        </div>
        <div class="contact-panel__actions">
          <a class="button button--whatsapp" href="${links.whatsapp()}" target="_blank" rel="noopener">
            ${icon("whatsapp", "icon icon--brand icon--small")}
            Agendar por WhatsApp
          </a>
          <button class="button button--secondary" type="button" data-email-trigger>
            ${icon("mail", "icon icon--small")}
            Enviar correo
          </button>
        </div>
      </aside>
    `;
  };
})();
