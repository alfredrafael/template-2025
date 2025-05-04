import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const router = useRouter(); // Next.js router
  const { lang } = router.query;

  const [isTranslated, setIsTranslated] = useState(false);

  useEffect(() => {
    lang === "es" ? setIsTranslated(true) : setIsTranslated(false);
  }, [lang]);

  const toggleTranslation = () => {
    const newLang = isTranslated ? "en" : "es";
    setIsTranslated(!isTranslated);
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          lang: newLang,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const contextValue = useMemo(
    () => ({ isTranslated, toggleTranslation }),
    [isTranslated]
  );

  return (
    <LanguageContext.Provider value={{ isTranslated, toggleTranslation }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
