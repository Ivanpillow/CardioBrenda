(function () {
  window.CardioComponents.Footer = function Footer() {
    const data = window.CardioData;
    return `
      <footer class="footer">
        <div class="footer__inner">
          <span class="logo-frame">
            <img src="${data.assets.logoSmall}" alt="Dra. Brenda Muñoz Cardiología">
          </span>
          <div>
            <strong>Dra. Brenda Muñoz</strong>
            <span>Cardiología Clínica</span>
          </div>
          <p>© 2026 Dra. Brenda Muñoz. Todos los derechos reservados.</p>
        </div>
      </footer>
    `;
  };
})();
