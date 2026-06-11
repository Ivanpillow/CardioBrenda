(function () {
  const { icon } = window.CardioComponents;

  window.CardioComponents.Header = function Header() {
    const data = window.CardioData;
    const home = `${data.pages.home}#inicio`;
    const serviceLinks = data.services
      .map(
        (service) => `
          <a href="${service.page}">
            <strong>${service.title}</strong>
            <span>${service.short}</span>
          </a>
        `
      )
      .join("");

    return `
      <header class="header" data-header>
        <div class="header__inner">
          <a class="brand" href="${home}" aria-label="Ir al inicio">
            <span class="logo-frame">
              <img src="${data.assets.logoSmall}" alt="Dra. Brenda Muñoz Cardiología">
            </span>
            <span class="brand-text">
              <strong>Dra. Brenda Muñoz</strong>
              <span>Cardiología Clínica</span>
            </span>
          </a>
          <nav class="nav" aria-label="Navegación principal" data-nav>
            <a href="${home}">Inicio</a>
            <div class="nav__service">
              <button class="nav__button" type="button" data-services-trigger aria-expanded="false" aria-controls="services-menu">
                Servicios
                ${icon("chevron-down", "icon icon--small")}
              </button>
              <div class="service-menu" id="services-menu" data-services-menu aria-hidden="true">
                <div class="service-menu__inner">
                  ${serviceLinks}
                </div>
              </div>
            </div>
            <button class="nav__link" type="button" data-contact-toggle aria-expanded="false">Contacto</button>
          </nav>
          <button class="menu-button" type="button" data-menu-button aria-label="Abrir menú" aria-expanded="false">
            ${icon("menu", "icon menu-button__open")}
            ${icon("x", "icon menu-button__close")}
          </button>
        </div>
      </header>
    `;
  };
})();
