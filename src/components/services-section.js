(function () {
  const { icon } = window.CardioComponents;

  window.CardioComponents.ServicesSection = function ServicesSection() {
    const serviceCards = window.CardioData.services
      .map(
        (service, index) => `
          <article class="service-card ${index === 0 ? "service-card--featured" : ""} reveal" role="listitem">
            <div class="service-card__icon">${icon(service.icon)}</div>
            <div class="service-card__body">
              <div>
                <h3>${service.title}</h3>
                <p>${service.summary}</p>
              </div>
              <a class="service-card__link" href="${service.page}">
                Ver servicio
                ${icon("arrow-right", "icon icon--small")}
              </a>
            </div>
          </article>
        `
      )
      .join("");

    return `
      <section class="services section" id="servicios" aria-labelledby="servicios-title">
        <div class="section__inner">
          <div class="section-heading reveal">
            <p class="section-kicker">Servicios</p>
            <h2 id="servicios-title">Estudios y valoración cardiológica</h2>
          </div>
          <div class="services-list" role="list">
            ${serviceCards}
          </div>
        </div>
      </section>
    `;
  };
})();
