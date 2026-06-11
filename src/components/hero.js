(function () {
  const { icon } = window.CardioComponents;

  window.CardioComponents.Hero = function Hero() {
    const data = window.CardioData;
    const links = window.CardioLinks;
    return `
      <section class="hero" id="inicio">
        <img class="hero__background" src="${data.assets.hero}" alt="" aria-hidden="true">
        <div class="hero__inner">
          <div class="hero__copy reveal">
            <p class="section-kicker">Cardiología Clínica en CDMX</p>
            <h1>Dra. Brenda Muñoz</h1>
            <p class="hero__lead">Atención cardiológica clara, profesional y cercana para cuidar tu salud cardiovascular.</p>
            <div class="hero__actions" aria-label="Acciones principales">
              <a class="button button--whatsapp" href="${links.whatsapp()}" target="_blank" rel="noopener">
                ${icon("whatsapp", "icon icon--brand icon--small")}
                Agendar por WhatsApp
              </a>
              <a class="button button--secondary" href="${links.tel}">
                ${icon("phone", "icon icon--small")}
                Llamar
              </a>
            </div>
            <div class="quick-actions" aria-label="Accesos rápidos">
              <a href="${links.whatsapp()}" target="_blank" rel="noopener" aria-label="Enviar WhatsApp">
                ${icon("whatsapp", "icon icon--brand")}
                WhatsApp
              </a>
              <a href="${links.tel}" aria-label="Llamar al ${data.contact.phone}">
                ${icon("phone")}
                Llamada
              </a>
              <a href="${links.maps}" target="_blank" rel="noopener" aria-label="Abrir ubicación en Google Maps">
                ${icon("map-pin")}
                Ubicación
              </a>
            </div>
          </div>

          <div class="hero__summary reveal" aria-label="Resumen de consulta">
            <span class="hero__logo-frame logo-frame">
              <img src="${data.assets.logoMark}" alt="Marca de la Dra. Brenda Muñoz">
            </span>
            <div class="appointment-panel">
              <div>
                <span>Consulta en Nápoles</span>
                <strong>Montecito 38, Piso 20</strong>
              </div>
              <div>
                <span>Horarios</span>
                <strong>Lun a vie 8:00 a.m. a 12:00 p.m.</strong>
              </div>
              <div>
                <span>Fin de semana</span>
                <strong>9:00 a.m. a 6:00 p.m.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  };
})();
