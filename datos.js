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
    { nombre: "[COMPLETAR] Nombre de la certificación", entidad: "[COMPLETAR] Entidad", anio: "2026", verificar: "" }
  ],
  // Certificaciones que estás preparando (se muestran como "En curso")
  enCurso: [
    { nombre: "[COMPLETAR] Certificación que estás estudiando", entidad: "[COMPLETAR] Entidad" }
  ],

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
