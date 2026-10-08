// Construye el portafolio a partir de datos.js (todo el texto se inserta como texto, nunca como HTML).
(function () {
  "use strict";
  var P = window.PERFIL || {};
  var $ = function (id) { return document.getElementById(id); };
  // En tu PC se muestran los campos "[COMPLETAR]" resaltados; publicado en internet se ocultan.
  var LOCAL = ["localhost", "127.0.0.1", ""].indexOf(location.hostname) !== -1;
  function sinPendientes(valor) {
    if (LOCAL) return valor;
    if (Array.isArray(valor)) {
      return valor.map(sinPendientes).filter(function (x) { return x !== null; });
    }
    if (valor && typeof valor === "object") {
      for (var k in valor) {
        if (typeof valor[k] === "string" && valor[k].indexOf("[COMPLETAR]") !== -1) return null;
      }
      return valor;
    }
    return typeof valor === "string" && valor.indexOf("[COMPLETAR]") !== -1 ? null : valor;
  }
  ["sobreMi", "certificaciones", "enCurso", "proyectos", "experiencia", "formacion", "servicios"].forEach(function (k) {
    P[k] = sinPendientes(P[k] || []);
  });
  if (P.contacto) {
    for (var canal in P.contacto) {
      if (!LOCAL && String(P.contacto[canal]).indexOf("[COMPLETAR]") !== -1) P.contacto[canal] = "";
    }
  }

  function el(tag, clase, texto) {
    var e = document.createElement(tag);
    if (clase) e.className = clase;
    if (texto !== undefined && texto !== null) e.textContent = texto;
    return e;
  }
  function enlace(texto, url, clase) {
    var a = el("a", clase || "", texto);
    a.href = url;
    if (/^https?:/.test(url)) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }
  function pendiente(texto) { return typeof texto === "string" && texto.indexOf("[COMPLETAR]") !== -1; }
  function marcar(nodo, texto) { if (pendiente(texto)) nodo.classList.add("pendiente"); return nodo; }
  function ocultarSiVacio(lista, seccion) { if (!lista || !lista.length) $(seccion).hidden = true; return lista && lista.length; }

  var nombre = P.nombre || "";
  var limpio = nombre.replace("[COMPLETAR]", "").trim() || "Tu Nombre";
  var iniciales = limpio.split(/\s+/).map(function (p) { return p[0]; }).join("").slice(0, 2).toUpperCase();
  document.title = limpio + " · " + (P.titulo || "Ciberseguridad");

  // Inicio
  marcar($("nombre"), nombre).textContent = limpio;
  $("nav-nombre").textContent = limpio;
  $("pie-nombre").textContent = "© " + new Date().getFullYear() + " " + limpio;
  $("nav-monograma").textContent = iniciales;
  $("titulo").textContent = (P.alias ? "@" + P.alias + " · " : "") + (P.titulo || "");
  $("frase").textContent = P.frase || "";
  $("disponibilidad").textContent = P.disponibilidad || "";
  $("ubicacion").textContent = P.ubicacion || "";
  if (P.foto) {
    var img = el("img"); img.src = P.foto; img.alt = "Foto de " + limpio; $("avatar").appendChild(img);
  } else {
    $("avatar").textContent = iniciales;
  }
  if (P.cvPdf) { $("boton-cv").href = P.cvPdf; $("boton-cv").hidden = false; }

  // Efecto de terminal
  var comando = P.alias ? "whoami  # " + P.alias : "whoami && cat especialidad.txt";
  var destino = $("escribir");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { destino.textContent = comando; }
  else { var i = 0; (function teclear() { destino.textContent = comando.slice(0, ++i); if (i < comando.length) setTimeout(teclear, 55); })(); }

  // Sobre mí y habilidades
  (P.sobreMi || []).forEach(function (t) { $("sobre-mi-texto").appendChild(marcar(el("p", "", t), t)); });
  (P.habilidades || []).forEach(function (g) {
    var bloque = el("div", "grupo");
    bloque.appendChild(el("h3", "", g.grupo));
    var chips = el("div", "chips");
    g.items.forEach(function (h) { chips.appendChild(el("span", "chip", h)); });
    bloque.appendChild(chips);
    $("habilidades").appendChild(bloque);
  });

  // Certificaciones
  var certs = (P.certificaciones || []).map(function (c) { return { c: c, curso: false }; })
    .concat((P.enCurso || []).map(function (c) { return { c: c, curso: true }; }));
  if (ocultarSiVacio(certs, "certificaciones")) {
    certs.forEach(function (x) {
      var c = x.c, t = el("article", "tarjeta cert" + (x.curso ? " en-curso" : ""));
      var cabeza = el("div", "cert-cabeza");
      if (c.imagen) {
        var logo = el("img", "cert-logo"); logo.src = c.imagen; logo.alt = c.entidad || ""; logo.loading = "lazy";
        cabeza.appendChild(logo);
      }
      cabeza.appendChild(el("div", "sello", x.curso ? "En curso" : (c.anio || "")));
      t.appendChild(cabeza);
      t.appendChild(marcar(el("h3", "", c.nombre), c.nombre));
      t.appendChild(marcar(el("p", "", c.entidad), c.entidad));
      if (c.id) t.appendChild(el("p", "cred-id", "ID de credencial: " + c.id));
      if (c.verificar) t.appendChild(enlace("Verificar credencial ↗", c.verificar, "mini"));
      $("lista-certificaciones").appendChild(t);
    });
  }

  // Proyectos
  if (ocultarSiVacio(P.proyectos, "proyectos")) {
    P.proyectos.forEach(function (p) {
      var t = el("article", "tarjeta proyecto" + (p.destacado ? " destacado" : ""));
      if (p.imagen) { var v = el("div", "proyecto-visual"); var im = el("img"); im.src = p.imagen; im.alt = ""; v.appendChild(im); t.appendChild(v); }
      var cuerpo = el("div", "proyecto-cuerpo");
      if (p.destacado) cuerpo.appendChild(el("div", "cinta", "Proyecto destacado"));
      cuerpo.appendChild(el("h3", "", p.nombre));
      cuerpo.appendChild(el("p", "", p.descripcion));
      var chips = el("div", "chips");
      (p.tecnologias || []).forEach(function (x) { chips.appendChild(el("span", "chip", x)); });
      cuerpo.appendChild(chips);
      var acc = el("div", "acciones");
      if (p.demo) acc.appendChild(enlace("Ver producto ↗", p.demo, "boton boton-claro"));
      if (p.codigo) acc.appendChild(enlace("Código en GitHub ↗", p.codigo, "boton"));
      cuerpo.appendChild(acc);
      t.appendChild(cuerpo);
      $("lista-proyectos").appendChild(t);
    });
  }

  // Servicios
  if (ocultarSiVacio(P.servicios, "servicios")) {
    P.servicios.forEach(function (s, n) {
      var t = el("article", "tarjeta servicio");
      t.appendChild(el("span", "num", String(n + 1).padStart(2, "0")));
      t.appendChild(el("h3", "", s.nombre));
      t.appendChild(el("p", "", s.descripcion));
      if (s.enlace) t.appendChild(enlace("Conocer más ↗", s.enlace, "mini"));
      $("lista-servicios").appendChild(t);
    });
  }

  // Experiencia y formación
  function linea(lista, id, titulo, sub) {
    (lista || []).forEach(function (x) {
      var li = el("li");
      li.appendChild(el("span", "periodo", x.periodo || ""));
      li.appendChild(marcar(el("h3", "", x[titulo]), x[titulo]));
      li.appendChild(marcar(el("p", "lugar", x[sub]), x[sub]));
      if (x.logros) {
        var ul = el("ul");
        x.logros.forEach(function (l) { ul.appendChild(marcar(el("li", "", l), l)); });
        li.appendChild(ul);
      }
      $(id).appendChild(li);
    });
  }
  linea(P.experiencia, "lista-experiencia", "puesto", "lugar");
  linea(P.formacion, "lista-formacion", "titulo", "lugar");
  if (!(P.experiencia || []).length && !(P.formacion || []).length) $("experiencia").hidden = true;

  // Contacto
  var c = P.contacto || {};
  var canales = [
    c.correo && ["Correo", "mailto:" + c.correo, true],
    c.whatsapp && ["WhatsApp", "https://wa.me/" + c.whatsapp],
    c.linkedin && ["LinkedIn", c.linkedin],
    c.github && ["GitHub", c.github],
    c.tryhackme && ["TryHackMe", c.tryhackme],
    c.hackthebox && ["Hack The Box", c.hackthebox]
  ].filter(Boolean);
  canales.forEach(function (x, n) { $("lista-contacto").appendChild(marcar(enlace(x[0], x[1], n === 0 ? "boton boton-claro" : "boton"), x[1])); });

  // El menú solo enlaza a secciones visibles
  document.querySelectorAll(".nav nav a").forEach(function (a) {
    var destino = document.querySelector(a.getAttribute("href"));
    if (destino && destino.hidden) a.hidden = true;
  });

  // Aviso en pantalla si quedan campos por completar (solo visible mientras existan)
  var faltan = document.querySelectorAll(".pendiente").length;
  if (faltan) {
    var aviso = el("div", "aviso-pendiente", faltan + " campos marcados [COMPLETAR] en datos.js · resaltados en naranja");
    document.body.appendChild(aviso);
  }

  // Aparición al hacer scroll
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var obs = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll(".seccion").forEach(function (s) { s.classList.add("aparecer"); obs.observe(s); });
  }
})();
