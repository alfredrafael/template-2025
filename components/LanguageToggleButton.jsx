// components/LanguageToggleButton.jsx
import React, { useState } from "react";
import { useLanguage } from "@components/LanguageContext";

export default function LanguageToggle({ onChange }) {
  const { isTranslated, toggleTranslation } = useLanguage();

  const [isEnglish, setisEnglish] = useState(true);

  const handleToggle = () => {
    const newValue = !isEnglish;
    setisEnglish(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    // <div className="translate-btn">
    //   <button onClick={toggleTranslation}>
    //     {isTranslated ? "Read in English" : "En Español"}
    //   </button>
    // </div>

    <div className="md:-mt-4 md:mb-4 mb-2">
      <div className="relative inline-block">
        <input
          id="language-toggle"
          type="checkbox"
          className="sr-only"
          checked={isEnglish}
          onChange={handleToggle}
          aria-label="Language toggle button"
          onClick={toggleTranslation}
        />
        <label
          htmlFor="language-toggle"
          className="block relative cursor-pointer w-[7rem] md:w-[10rem] h-8 bg-[#040182] rounded-full p-0.1"
        >
          <span className="sr-only">Toggle language</span>
          <span
            className={`absolute inset-0 rounded-full transition-all duration-200 ${
              isEnglish ? "" : "bg-[#040182]"
            }`}
          ></span>
          <span
            className={`block absolute top-1 left-1 bottom-1 w-[calc(50%-0.25rem)] bg-white rounded-full transition-all duration-200 ${
              isEnglish ? "translate-x-[calc(100%)]" : ""
            }`}
          ></span>
        </label>

        <span
          className={`absolute top-[.5rem] left-0 w-1/2 text-center pointer-events-none font-bold text-xs uppercase ${
            isEnglish ? "text-white" : "text-[#040182]"
          }`}
        >
          <span className="hidden md:block">Español</span>{" "}
          <span className="md:hidden text-md">ES 🇪🇸</span>
        </span>

        <span
          className={`absolute top-[.5rem] right-0 w-1/2 text-center pointer-events-none font-bold text-xs uppercase ${
            isEnglish ? "text-[#040182]" : "text-white"
          }`}
        >
          <span className="hidden md:block">English</span>{" "}
          <span className="md:hidden text-md">EN 🇬🇧</span>
        </span>
      </div>
    </div>
  );
}
