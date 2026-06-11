(function () {
  const { contact } = window.CardioData;
  const encode = encodeURIComponent;

  const serviceMessage = (serviceTitle) =>
    `Hola, me gustaría obtener información sobre el servicio de ${serviceTitle}.`;

  const defaultMessage =
    "Hola Dra. Brenda, me gustaría agendar una cita de cardiología clínica.";

  const mailBody = (serviceTitle) =>
    serviceTitle
      ? `Hola Dra. Brenda, me gustaría obtener información sobre el servicio de ${serviceTitle}.`
      : "Hola Dra. Brenda, me gustaría agendar una cita.";

  window.CardioLinks = {
    maps:
      "https://www.google.com/maps/search/?api=1&query=" +
      encode("Montecito 38, Nápoles, Benito Juárez, 03810, Ciudad de México"),
    tel: `tel:${contact.phone}`,
    whatsapp: (message = defaultMessage) =>
      `https://wa.me/${contact.whatsappPhone}?text=${encode(message)}`,
    serviceMessage,
    mailto: (subject = "Cita de cardiología", body = mailBody()) =>
      `mailto:${contact.email}?subject=${encode(subject)}&body=${encode(body)}`,
    gmail: (subject = "Cita de cardiología", body = mailBody()) =>
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encode(contact.email)}&su=${encode(subject)}&body=${encode(body)}`,
    outlook: (subject = "Cita de cardiología", body = mailBody()) =>
      `https://outlook.live.com/mail/0/deeplink/compose?to=${encode(contact.email)}&subject=${encode(subject)}&body=${encode(body)}`,
    mailBody
  };
})();
