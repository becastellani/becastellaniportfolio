import { useState, useEffect } from "react";
import { portfolioData as ptData } from "../data/portfolioData";
import { portfolioData as enData } from "../data/portfolioData.en";
import { portfolioData as esData } from "../data/portfolioData.es";
import { portfolioData as frData } from "../data/portfolioData.fr";
import { portfolioData as deData } from "../data/portfolioData.de";

export const LANGS = {
  pt: { label: "PT", flag: "🇧🇷", name: "Português" },
  en: { label: "EN", flag: "🇺🇸", name: "English" },
  es: { label: "ES", flag: "🇪🇸", name: "Español" },
  fr: { label: "FR", flag: "🇫🇷", name: "Français" },
  de: { label: "DE", flag: "🇩🇪", name: "Deutsch" },
};

const DATA_BY_LANG = {
  pt: ptData,
  en: enData,
  es: esData,
  fr: frData,
  de: deData,
};

export default function usePortfolioTranslation() {
  const [lang, setLang] = useState(
    () => localStorage.getItem("portfolio_lang") || "pt"
  );

  const changeLang = (newLang) => {
    localStorage.setItem("portfolio_lang", newLang);
    setLang(newLang);
  };

  const data = DATA_BY_LANG[lang] || ptData;

  return {
    data,
    lang,
    changeLang,
    langs: LANGS,
  };
}