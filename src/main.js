(function () {
  const app = document.getElementById("app");
  const page = document.body.dataset.page || "home";
  const serviceId = document.body.dataset.serviceId;
  const components = window.CardioComponents;
  const data = window.CardioData;

  const sharedShell = (mainContent) => `
    ${components.IconSprite()}
    <div class="site-shell">
      ${components.TopBar()}
      ${components.Header()}
    </div>
    ${mainContent}
    ${components.ContactPanel()}
    ${components.EmailPopover()}
    ${components.FloatingActions()}
    ${components.Footer()}
  `;

  const homeContent = `
    <main>
      ${components.Hero()}
      ${components.CardiologyIntro()}
      ${components.ServicesSection()}
      ${components.TrustSection()}
    </main>
  `;

  const service = data.services.find((item) => item.id === serviceId);
  const serviceContent = service
    ? components.ServicePage(service)
    : `<main class="section"><div class="page-shell"><h1>Servicio no encontrado</h1></div></main>`;

  app.innerHTML = sharedShell(page === "service" ? serviceContent : homeContent);
  window.CardioInteractions.init();
})();
