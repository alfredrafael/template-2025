// components/LanguageToggleButton.jsx
import React from "react";
import { useLanguage } from "@components/LanguageContext";

export default function LanguageToggle({ onChange }) {
  const { isTranslated, toggleTranslation } = useLanguage();

  // Use isEnglish as the inverse of isTranslated
  const isEnglish = !isTranslated;

  const handleToggle = () => {
    toggleTranslation();
    if (onChange) {
      onChange(!isEnglish);
    }
  };

  return (
    <div className="relative inline-block">
      <input
        id="language-toggle"
        type="checkbox"
        className="sr-only"
        checked={isEnglish}
        onChange={handleToggle}
        aria-label="Language toggle button"
      />
      <label
        htmlFor="language-toggle"
        className="block relative cursor-pointer w-[7rem] md:w-[10rem] h-6 bg-[#040182] rounded-full p-0.1"
      >
        <span className="sr-only">Toggle language</span>
        <span
          className={`absolute inset-0 rounded-full transition-all duration-200 ${
            isEnglish ? "" : "bg-[#040182]"
          }`}
        ></span>
        <span
          className={`block absolute top-[.23rem] left-1 bottom-1 w-[calc(50%-0.25rem)] bg-white rounded-full transition-all duration-200 ${
            isEnglish ? "translate-x-[calc(100%)]" : ""
          }`}
        ></span>
      </label>

      <span
        className={`absolute top-[.23rem] left-0 w-1/2 text-center pointer-events-none font-bold text-xs uppercase ${
          isEnglish ? "text-white" : "text-[#040182]"
        }`}
      >
        <span className="hidden md:block">Español</span>{" "}
        <span className="md:hidden text-md">ES 🇪🇸</span>
      </span>

      <span
        className={`absolute top-[.23rem] right-0 w-1/2 text-center pointer-events-none font-bold text-xs uppercase ${
          isEnglish ? "text-[#040182]" : "text-white"
        }`}
      >
        <span className="hidden md:block">English</span>{" "}
        <span className="md:hidden text-md">EN 🇬🇧</span>
      </span>
    </div>
  );
}
