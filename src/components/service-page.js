(function () {
  const { icon } = window.CardioComponents;

  window.CardioComponents.ServicePage = function ServicePage(service) {
    const links = window.CardioLinks;
    const whatsAppMessage = links.serviceMessage(service.title);
    const emailSubject = `Información sobre ${service.title}`;
    const emailBody = links.mailBody(service.title);
    const cards = service.detailCards
      .map(
        (card) => `
          <article class="service-detail__card reveal">
            <h3>${card.title}</h3>
            <p>${card.body}</p>
          </article>
        `
      )
      .join("");
    const prices = (service.prices || [])
      .map(
        (price) => `
          <div class="service-price__item">
            <span>${price.label}</span>
            <strong>${price.value}</strong>
          </div>
        `
      )
      .join("");
    const otherServices = window.CardioData.services
      .filter((item) => item.id !== service.id)
      .map((item) => `<a href="${item.page}">${item.title}</a>`)
      .join("");
    const longestTitleWord = Math.max(...service.title.split(/\s+/).map((word) => word.length));
    const titleClass = longestTitleWord > 14 ? " service-hero__title--long-word" : "";

    document.title = `${service.title} | Dra. Brenda Muñoz`;

    return `
      <main class="service-page">
        <section class="service-hero">
          <div class="page-shell service-hero__grid">
            <div class="service-hero__copy reveal">
              <p class="section-kicker">Servicio de cardiología</p>
              <h1 class="service-hero__title${titleClass}">${service.title}</h1>
              <p>${service.description}</p>
              ${
                prices
                  ? `<div class="service-price" aria-label="Precio del servicio">
                      <span class="service-price__label">Precio</span>
                      <div class="service-price__items">${prices}</div>
                    </div>`
                  : ""
              }
              <div class="service-actions">
                <a class="button button--whatsapp" href="${links.whatsapp(whatsAppMessage)}" target="_blank" rel="noopener">
                  ${icon("whatsapp", "icon icon--brand icon--small")}
                  WhatsApp
                </a>
                <a class="button button--secondary" href="${links.mailto(emailSubject, emailBody)}">
                  ${icon("mail", "icon icon--small")}
                  Correo electrónico
                </a>
              </div>
            </div>
            <figure class="service-hero__media reveal">
              <img src="${service.image}" alt="${service.title}">
            </figure>
          </div>
        </section>
        <section class="service-detail" aria-label="Información del servicio">
          <div class="page-shell">
            <div class="service-detail__grid">
              ${cards}
            </div>
            <div class="other-services reveal">
              <h2>Otros servicios</h2>
              <p>Explora las demás opciones de valoración y monitoreo cardiovascular.</p>
              <div class="other-services__links">
                ${otherServices}
              </div>
            </div>
          </div>
        </section>
      </main>
    `;
  };
})();
