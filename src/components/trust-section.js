(function () {
  const { icon } = window.CardioComponents;

  window.CardioComponents.TrustSection = function TrustSection() {
    const { contact } = window.CardioData;
    return `
      <section class="trust section" aria-labelledby="confianza-title">
        <div class="section__inner">
          <div class="section-heading reveal">
            <p class="section-kicker">Confianza profesional</p>
            <h2 id="confianza-title">Información esencial antes de tu consulta</h2>
          </div>
          <div class="trust-grid">
            <article class="info-card reveal">
              ${icon("stethoscope", "icon card-icon")}
              <h3>Atención profesional</h3>
              <p>Consulta médica enfocada en diagnóstico, prevención y seguimiento cardiovascular.</p>
            </article>
            <article class="info-card reveal">
              ${icon("heart-pulse", "icon card-icon")}
              <h3>Cardiología Clínica</h3>
              <p>Es una valoración cardiovascular integral, con una explicación clara y empática sobre el problema estudiado y el proceso a seguir en caso de requerir más estudios.</p>
            </article>
            <article class="info-card reveal">
              ${icon("map-pin", "icon card-icon")}
              <h3>Ubicación</h3>
              <p>${contact.address}</p>
            </article>
            <article class="info-card reveal">
              ${icon("shield", "icon card-icon")}
              <h3>Credenciales</h3>
              <p>${contact.credentials}</p>
            </article>
          </div>
        </div>
      </section>
    `;
  };
})();
