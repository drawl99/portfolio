import type { Lang } from "./ui";

import cvEn from "../../cv.json";
import cvEs from "./cv.es.json";

type CVData = typeof cvEn;

const cvData: Record<Lang, CVData> = {
  en: cvEn,
  es: cvEs as CVData,
};

export function getCV(lang: Lang): CVData {
  return cvData[lang];
}

export function getBasics(lang: Lang) {
  return cvData[lang].basics;
}

export function getWork(lang: Lang) {
  return cvData[lang].work;
}

export function getEducation(lang: Lang) {
  return cvData[lang].education;
}

export function getSkills(lang: Lang) {
  return cvData[lang].skills;
}

export function getProjects(lang: Lang) {
  return cvData[lang].projects;
}

export function getLanguages(lang: Lang) {
  return cvData[lang].languages;
}
