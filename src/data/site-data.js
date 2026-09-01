(function () {
  const basePath = document.body.dataset.basePath || ".";
  const asset = (path) => `${basePath}/${path}`;
  const page = (path) => `${basePath}/${path}`;

  const services = [
    {
      id: "valoracion-cardiologica",
      title: "Valoración cardiológica",
      short: "Servicio principal",
      icon: "heart-pulse",
      image: asset("Assets/hero-cardiology.png"),
      page: page("servicios/valoracion-cardiologica"),
      summary: "Consulta integral para entender síntomas, antecedentes, factores de riesgo y próximos pasos.",
      description:
        "La valoración cardiológica permite revisar el estado general del corazón, identificar factores de riesgo y definir si se requieren estudios adicionales. Es útil ante dolor torácico, falta de aire, palpitaciones, presión alta o como prevención.",
      detailCards: [
        {
          title: "Qué se revisa",
          body: "Antecedentes, síntomas, presión arterial, exploración física y datos que orientan el diagnóstico cardiovascular."
        },
        {
          title: "Cuándo acudir",
          body: "Si tienes dolor en el pecho, palpitaciones, mareo, cansancio inusual, presión alta o antecedentes familiares."
        },
        {
          title: "Prevención",
          body: "Ayuda a detectar riesgos antes de que existan complicaciones y permite establecer un plan de seguimiento."
        }
      ]
    },
    {
      id: "electrocardiograma",
      title: "Electrocardiograma",
      short: "Registro eléctrico del corazón",
      icon: "activity",
      image: asset("Assets/services/electrocardiograma.png"),
      page: page("servicios/electrocardiograma"),
      summary: "Estudio rápido que registra la actividad eléctrica del corazón como apoyo diagnóstico.",
      description:
        "El electrocardiograma registra señales eléctricas del corazón mediante electrodos colocados en el cuerpo. Puede ayudar a detectar alteraciones del ritmo, datos de crecimiento de cavidades o señales que requieren mayor evaluación.",
      detailCards: [
        {
          title: "Para qué sirve",
          body: "Apoya la evaluación de ritmo cardiaco, palpitaciones, dolor torácico y controles preventivos."
        },
        {
          title: "Cómo se realiza",
          body: "Se colocan electrodos en pecho, brazos y piernas. Es un estudio breve y no invasivo."
        },
        {
          title: "Resultado",
          body: "La interpretación médica se integra con síntomas, antecedentes y exploración clínica."
        }
      ]
    },
    {
      id: "prueba-de-esfuerzo",
      title: "Prueba de esfuerzo",
      short: "Respuesta cardiovascular al ejercicio",
      icon: "activity",
      image: asset("Assets/services/prueba-esfuerzo.png"),
      page: page("servicios/prueba-de-esfuerzo"),
      summary: "Evaluación supervisada de la respuesta del corazón durante actividad física controlada.",
      description:
        "La prueba de esfuerzo observa cómo responde el corazón durante ejercicio progresivo. Se utiliza para valorar síntomas con el esfuerzo, capacidad funcional y datos que puedan orientar sobre enfermedad coronaria u otras condiciones.",
      detailCards: [
        {
          title: "Supervisión",
          body: "Se realiza con monitoreo clínico y registro del comportamiento cardiovascular durante el esfuerzo."
        },
        {
          title: "Indicaciones",
          body: "Puede solicitarse ante dolor con ejercicio, falta de aire, evaluación deportiva o seguimiento cardiológico."
        },
        {
          title: "Preparación",
          body: "La indicación específica depende de tu caso, medicamentos y antecedentes médicos."
        }
      ]
    },
    {
      id: "monitoreo-holter",
      title: "Monitoreo Holter",
      short: "Ritmo cardiaco durante el día",
      icon: "clock",
      image: asset("Assets/services/monitoreo-holter.png"),
      page: page("servicios/monitoreo-holter"),
      summary: "Registro prolongado del ritmo cardiaco durante actividades cotidianas.",
      description:
        "El Holter es un monitor portátil que registra el ritmo cardiaco durante un periodo prolongado. Es útil cuando los síntomas aparecen de forma intermitente, como palpitaciones, mareos o sensación de latidos irregulares.",
      detailCards: [
        {
          title: "Uso cotidiano",
          body: "Permite observar el ritmo del corazón mientras realizas tus actividades habituales."
        },
        {
          title: "Síntomas",
          body: "Ayuda a relacionar palpitaciones, mareo o pausas percibidas con el registro cardiaco."
        },
        {
          title: "Seguimiento",
          body: "Sus resultados orientan decisiones sobre tratamiento, control o estudios complementarios."
        }
      ]
    },
    {
      id: "monitoreo-ambulatorio-presion-arterial",
      title: "Monitoreo ambulatorio de presión arterial",
      short: "Presión arterial en distintas horas",
      icon: "shield",
      image: asset("Assets/services/mapa.png"),
      page: page("servicios/monitoreo-ambulatorio-presion-arterial"),
      summary: "Mediciones programadas para conocer el comportamiento real de la presión arterial.",
      description:
        "El monitoreo ambulatorio de presión arterial registra mediciones durante el día y la noche. Ayuda a evaluar hipertensión, variaciones de presión y respuesta a tratamiento en un contexto más cercano a la vida diaria.",
      detailCards: [
        {
          title: "Medición continua",
          body: "El equipo toma mediciones programadas para observar patrones durante tus actividades."
        },
        {
          title: "Control de hipertensión",
          body: "Puede ayudar a confirmar presión alta, valorar tratamiento y detectar cambios nocturnos."
        },
        {
          title: "Contexto real",
          body: "Aporta información que una sola toma en consultorio no siempre muestra."
        }
      ]
    }
  ];

  window.CardioData = {
    basePath,
    assets: {
      logoSmall: asset("Assets/LogoHeaderMark.png"),
      logoMark: asset("Assets/LogoMarkHero.png"),
      hero: asset("Assets/hero-cardiology.png"),
      heroMobile: asset("Assets/hero-brenda-mobile.jpeg"),
      heroVideo: asset("Assets/videoDoctoraHero.mp4")
    },
    pages: {
      home: page("")
    },
    contact: {
      email: "brendahm7@gmail.com",
      phone: "3332008763",
      displayPhone: "333 200 8763",
      whatsappPhone: "523332008763",
      address: "Montecito 38. Nápoles, Benito Juárez, 03810, Ciudad de México.",
      shortAddress: "Montecito 38, Nápoles",
      weekdays: "Lunes a viernes: 8:00 a.m. a 12:00 p.m.",
      weekend: "Sábados y domingos: 9:00 a.m. a 6:00 p.m.",
      credentials: "Cédula profesional 12205940. Cédula de especialidad 15556942. UNAM. Avalada por el Consejo Mexicano de Cardiología."
    },
    services
  };
})();
