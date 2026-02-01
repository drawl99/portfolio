export const languages = {
  en: "English",
  es: "Español",
} as const;

export const defaultLang = "en" as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Section titles
    "section.about": "About",
    "section.experience": "Experience",
    "section.projects": "Projects",
    "section.skills": "Skills",
    "section.education": "Education",

    // Experience section
    "experience.present": "Present",
    "experience.summary": "Summary:",
    "experience.responsibilities": "Responsibilities:",
    "experience.showMore": "Show more",
    "experience.showLess": "Show less",

    // Hero section
    "hero.openOptions": "Open options",
    "hero.contact": "Contact:",

    // Projects section
    "projects.viewOn": "View {name} in GitHub",
    "projects.technologies": "Technologies used",

    // General
    "general.seeMore": "See more",
    "general.language": "Language",
  },
  es: {
    // Section titles
    "section.about": "Sobre mí",
    "section.experience": "Experiencia",
    "section.projects": "Proyectos",
    "section.skills": "Habilidades",
    "section.education": "Educación",

    // Experience section
    "experience.present": "Presente",
    "experience.summary": "Resumen:",
    "experience.responsibilities": "Responsabilidades:",
    "experience.showMore": "Ver más",
    "experience.showLess": "Ver menos",

    // Hero section
    "hero.openOptions": "Abrir opciones",
    "hero.contact": "Contacto:",

    // Projects section
    "projects.viewOn": "Ver {name} en GitHub",
    "projects.technologies": "Tecnologías utilizadas",

    // General
    "general.seeMore": "Ver más",
    "general.language": "Idioma",
  },
} as const;
