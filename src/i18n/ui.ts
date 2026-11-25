export const languages = {
  en: "English",
  es: "Español",
} as const;

export const defaultLang = "en" as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    "meta.description":
      "Full Stack Software Engineer in Cali, Colombia. Shipped work, experience, stack and contact.",

    "nav.label": "Sections",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.work": "Work",
    "nav.index": "Index",
    "nav.stack": "Stack",
    "nav.contact": "Contact",
    "nav.language": "Language",
    "nav.skip": "Skip to content",

    "hero.role": "Full Stack Software Engineer",
    "hero.based": "Based in Cali, Colombia",
    "hero.available": "Available for work and freelance projects",
    "hero.email": "Write me an email",
    "hero.linkedin": "LinkedIn",
    "hero.github": "GitHub",
    "hero.scroll": "Scroll",
    "hero.photoAlt": "Portrait of Andrés Giraldo",

    "about.title": "About",

    "experience.title": "Experience",
    "experience.present": "Present",
    "experience.details": "What I do there",
    "experience.education": "Education",

    "work.title": "Selected work",
    "work.visit": "Visit site",
    "work.code": "Source code",
    "work.start": "Start",
    "work.end": "End",
    "work.shotAlt": "Screenshot of the live {name} site",
    "work.private": "Private build, no public site yet",

    "index.title": "Index",
    "index.more": "More projects",
    "index.details": "Highlights",

    "stack.title": "Stack",
    "stack.languages": "Spoken languages",

    "contact.title": "Contact",
    "contact.lead": "Have a product to build or a team to join?",
    "contact.email": "Email",
    "contact.copy": "Copy email",
    "contact.copied": "Copied",
    "contact.footer": "Designed and built by Andrés Giraldo with Astro.",
  },
  es: {
    "meta.description":
      "Ingeniero de Software Full Stack en Cali, Colombia. Trabajo publicado, experiencia, stack y contacto.",

    "nav.label": "Secciones",
    "nav.about": "Perfil",
    "nav.experience": "Experiencia",
    "nav.work": "Trabajo",
    "nav.index": "Índice",
    "nav.stack": "Stack",
    "nav.contact": "Contacto",
    "nav.language": "Idioma",
    "nav.skip": "Ir al contenido",

    "hero.role": "Ingeniero de Software Full Stack",
    "hero.based": "Desde Cali, Colombia",
    "hero.available": "Disponible para empleo y proyectos freelance",
    "hero.email": "Escríbeme un correo",
    "hero.linkedin": "LinkedIn",
    "hero.github": "GitHub",
    "hero.scroll": "Desliza",
    "hero.photoAlt": "Retrato de Andrés Giraldo",

    "about.title": "Perfil",

    "experience.title": "Experiencia",
    "experience.present": "Presente",
    "experience.details": "Qué hago allí",
    "experience.education": "Educación",

    "work.title": "Trabajo destacado",
    "work.visit": "Ver sitio",
    "work.code": "Código fuente",
    "work.start": "Inicio",
    "work.end": "Fin",
    "work.shotAlt": "Captura del sitio en vivo de {name}",
    "work.private": "Desarrollo privado, aún sin sitio público",

    "index.title": "Índice",
    "index.more": "Más proyectos",
    "index.details": "Destacados",

    "stack.title": "Stack",
    "stack.languages": "Idiomas",

    "contact.title": "Contacto",
    "contact.lead": "¿Tienes un producto por construir o un equipo al que sumarme?",
    "contact.email": "Correo",
    "contact.copy": "Copiar correo",
    "contact.copied": "Copiado",
    "contact.footer": "Diseñado y construido por Andrés Giraldo con Astro.",
  },
} as const;
