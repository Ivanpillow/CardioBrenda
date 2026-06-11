(function () {
  window.CardioComponents.CardiologyIntro = function CardiologyIntro() {
    return `
      <section class="intro section" aria-labelledby="cardiologia-title">
        <div class="section__inner intro__grid">
          <div class="section-heading reveal">
            <p class="section-kicker">Especialidad</p>
            <h2 id="cardiologia-title">Qué atiende la cardiología</h2>
            <p class="intro-copy">La cardiología se enfoca en prevenir, diagnosticar y tratar enfermedades del corazón y los vasos sanguíneos. Una consulta puede ayudar a detectar riesgos a tiempo y cuidar tu salud cardiovascular antes de que existan complicaciones.</p>
          </div>
          <div class="intro-list">
            <article class="reveal">
              <h3>Enfermedades frecuentes</h3>
              <p>Hipertensión, arritmias, dolor torácico, enfermedad coronaria, insuficiencia cardiaca y factores de riesgo cardiovascular.</p>
            </article>
            <article class="reveal">
              <h3>Prevención</h3>
              <p>Una revisión oportuna permite conocer tu riesgo, ajustar hábitos y decidir si necesitas estudios complementarios.</p>
            </article>
            <article class="reveal">
              <h3>Seguimiento</h3>
              <p>El control médico ayuda a medir evolución, revisar tratamiento y mantener decisiones claras con base clínica.</p>
            </article>
            <article class="reveal">
              <h3>Consulta clara</h3>
              <p>El objetivo es explicar hallazgos y pasos siguientes de forma sencilla, profesional y entendible.</p>
            </article>
          </div>
        </div>
      </section>
    `;
  };
})();
