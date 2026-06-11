(function () {
  window.CardioComponents.EmailPopover = function EmailPopover() {
    const links = window.CardioLinks;
    return `
      <div class="email-popover" data-email-popover role="dialog" aria-modal="false" aria-labelledby="email-popover-title" hidden>
        <div class="email-popover__header">
          <h2 id="email-popover-title">Enviar correo</h2>
          <button type="button" data-email-close aria-label="Cerrar selector de correo">
            ${window.CardioComponents.icon("x")}
          </button>
        </div>
        <div class="email-popover__options">
          <a href="${links.gmail()}" target="_blank" rel="noopener">Gmail</a>
          <a href="${links.outlook()}" target="_blank" rel="noopener">Outlook</a>
          <a href="${links.mailto()}">Mailto</a>
        </div>
      </div>
    `;
  };
})();
