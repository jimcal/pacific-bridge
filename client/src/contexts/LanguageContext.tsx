import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "en" | "zh-Hant";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectDefaultLang(): Lang {
  try {
    const stored = localStorage.getItem("pb.lang");
    if (stored === "zh-Hant" || stored === "en") return stored;
  } catch {}

  const navLangs = (navigator as any)?.languages as string[] | undefined;
  const primary = (navigator as any)?.language as string | undefined;
  const guess = (navLangs && navLangs[0]) || primary || "en";
  const upper = guess.toLowerCase();
  if (
    upper.startsWith("zh") &&
    (upper.includes("tw") || upper.includes("hk") || upper.includes("mo") || upper.includes("hant"))
  ) {
    return "zh-Hant";
  }
  return "zh-Hant";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => "zh-Hant");

  useEffect(() => {
    try {
      localStorage.setItem("pb.lang", lang);
    } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState(prev => (prev === "en" ? "zh-Hant" : "en"));

  const value = useMemo(() => ({ lang, setLang, toggle }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
