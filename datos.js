// =====================================================================
//  TU INFORMACIÓN. Edita SOLO este archivo; la página se arma sola.
//  Todo lo que dice "[COMPLETAR]" debe reemplazarse antes de publicar.
//  Si una lista queda vacía ([]), esa sección no se muestra.
// =====================================================================
window.PERFIL = {
  nombre: "Giancarlo Gadiel Garcia Chiara",
  alias: "H4nnlv",
  titulo: "Ciberseguridad · Pentesting · Desarrollo seguro",
  frase: "Ayudo a empresas a encontrar sus vulnerabilidades antes que los atacantes y construyo herramientas para protegerlas.",
  ubicacion: "Perú",
  disponibilidad: "Disponible para proyectos y oportunidades laborales",
  foto: "",                 // ej. "recursos/foto.jpg" (deja "" para mostrar tus iniciales)
  cvPdf: "",                // ej. "recursos/cv.pdf"  (deja "" para ocultar el botón)

  sobreMi: [
    "[COMPLETAR] Cuéntate en 2 o 3 frases: qué te apasiona de la ciberseguridad, en qué te estás especializando y qué tipo de problemas te gusta resolver.",
    "Combino el enfoque ofensivo (pentesting) con el desarrollo de herramientas defensivas, como MailSentry, un detector de phishing para empresas."
  ],

  habilidades: [
    { grupo: "Ofensiva", items: ["Pentesting web", "Reconocimiento y OSINT", "Burp Suite", "Nmap", "Metasploit"] },
    { grupo: "Defensiva", items: ["Análisis de phishing", "SPF / DKIM / DMARC", "Análisis de cabeceras", "Detección de amenazas"] },
    { grupo: "Desarrollo", items: ["Python", "Flask", "SQL", "JavaScript", "Git"] }
  ],

  // Certificaciones obtenidas. "verificar" = enlace de Credly u otro sitio de verificación.
  certificaciones: [
    { nombre: "Linux Essentials", entidad: "Cisco Networking Academy", anio: "sept. 2026", imagen: "recursos/logo-cisco.png",
      verificar: "https://www.credly.com/badges/46fdd43d-6b9b-4d08-8fda-361c00b2b9c9" },
    { nombre: "PIT644 Ciberseguridad: Ethical Hacking (C|EH)", entidad: "Universidad Nacional de Ingeniería", anio: "jul. 2025", imagen: "recursos/logo-uni.png",
      id: "017 - 0075279",
      verificar: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_7028b0a5b2f718b51f29bcc9f61c824c" },
    { nombre: "PIT620 Programación en Python Básico", entidad: "Universidad Nacional de Ingeniería", anio: "jul. 2025", imagen: "recursos/logo-uni.png",
      id: "017 - 0078482",
      verificar: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_9494a95cfaf313fc9d5232d74cd28bdc" }
  ],
  // Certificaciones que estás preparando (se muestran como "En curso"), ej.:
  // { nombre: "eJPT", entidad: "INE Security" }
  enCurso: [],

  proyectos: [
    {
      nombre: "MailSentry",
      destacado: true,
      descripcion: "Detector de phishing para empresas: motor de detección por capas (autenticación, remitente, enlaces, contenido y adjuntos), IA que aprende de las correcciones del analista, rastreo del origen de los ataques en un globo interactivo y panel de monitoreo con roles y auditoría.",
      tecnologias: ["Python", "Flask", "SQLAlchemy", "scikit-learn", "JavaScript", "Canvas"],
      codigo: "https://github.com/H4nn-sz/mailsentry",
      demo: "https://h4nn-sz.github.io/mailsentry/",
      imagen: "recursos/mailsentry.svg"
    }
    // Agrega más proyectos copiando el bloque de arriba:
    // { nombre: "...", descripcion: "...", tecnologias: ["..."], codigo: "https://github.com/...", demo: "" }
  ],

  // Experiencia laboral, prácticas o voluntariados (del más reciente al más antiguo)
  experiencia: [
    { puesto: "[COMPLETAR] Puesto", lugar: "[COMPLETAR] Empresa", periodo: "2026 – actualidad",
      logros: ["[COMPLETAR] Qué hiciste y qué lograste (idealmente con un resultado concreto)."] }
  ],

  formacion: [
    { titulo: "[COMPLETAR] Carrera o curso", lugar: "[COMPLETAR] Universidad / instituto", periodo: "[COMPLETAR]" }
  ],

  // Servicios que ofreces a empresas
  servicios: [
    { nombre: "Pentesting", descripcion: "Pruebas de intrusión a aplicaciones web y redes para encontrar vulnerabilidades antes que los atacantes, con reporte y recomendaciones." },
    { nombre: "Auditoría de correo", descripcion: "Revisión de SPF, DKIM y DMARC, y de la exposición de tu empresa a suplantación y phishing." },
    { nombre: "MailSentry", descripcion: "Monitoreo continuo del correo de tu empresa contra phishing y fraude del CEO.", enlace: "https://h4nn-sz.github.io/mailsentry/" },
    { nombre: "Capacitación", descripcion: "Talleres prácticos para que tu equipo reconozca correos de phishing y fraudes." }
  ],

  contacto: {
    correo: "[COMPLETAR]@ejemplo.com",
    whatsapp: "",            // formato internacional sin "+", ej. "51999999999"
    linkedin: "",            // ej. "https://www.linkedin.com/in/tu-usuario"
    github: "https://github.com/H4nn-sz",
    tryhackme: "",           // perfiles de CTF (opcionales)
    hackthebox: ""
  }
};
