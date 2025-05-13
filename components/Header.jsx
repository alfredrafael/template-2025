import React from "react";
import LanguageToggleButton from "@components/LanguageToggleButton";
import { useLanguage } from "@components/LanguageContext";

const Header = ({
  title,
  subtitle,
  spanishTitle,
  spanishSubtitle,
  extraData,
  fontSize,
}) => {
  const { isTranslated } = useLanguage(); // Get language from context

  return (
    <header className="mt-20 md:mt-24 container max-w-6xl flex flex-col lg:mx-auto md:mb-6 mb-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex-1">
          <h1 className="flex items-center flex-wrap" style={{ fontSize }}>
            <span className="block">
              {!isTranslated ? title : spanishTitle}
            </span>
          </h1>
          <div className="mt-2 md:mt-0 md:text-lg text-gray-600">
            {!isTranslated ? subtitle : spanishSubtitle}
          </div>
          {extraData && (
            <>
              <div className="mb-3 mt-5 -ml-1">{extraData}</div>{" "}
            </>
          )}
        </div>
        <div className="mt-4 md:mt-0">
          <LanguageToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
