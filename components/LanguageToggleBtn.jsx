// components/LanguageToggle.jsx
import React from "react";
import { useLanguage } from "@components/LanguageContext";

export default function LanguageToggleBtn({ onChange }) {
  const { isTranslated, toggleTranslation } = useLanguage();
  const isEnglish = !isTranslated;

  const handleToggle = () => {
    toggleTranslation();
    if (onChange) {
      onChange(!isEnglish);
    }
  };

  return (
    <div className="relative inline-flex items-center border-3 border-slate-400 rounded-full">
      <input
        id="language-toggle"
        type="checkbox"
        className="sr-only"
        checked={isEnglish}
        onChange={handleToggle}
        aria-label="Toggle between English and Spanish"
      />

      <label
        htmlFor="language-toggle"
        className="relative flex items-center w-[3.5rem] h-5 bg-slate-300 rounded-full cursor-pointer"
      >
        <input
          id="language-toggle"
          type="checkbox"
          className="sr-only"
          checked={isEnglish}
          onChange={handleToggle}
        />

        {/* half‑width sliding overlay */}
        <div
          className={`absolute inset-y-0 left-0 w-1/2 bg-white rounded-full shadow-md
      transition-transform duration-300 ease-in-out border border-slate-300
      ${isEnglish ? "translate-x-full" : ""}
    `}
        />

        {/* make sure your labels sit _under_ that overlay */}
        <div className="flex w-full justify-between items-center px-2 text-xs font-bold font-sans">
          <span className={isEnglish ? "text-slate-800" : "text-slate-600"}>
            🇪🇸
          </span>
          <span className={isEnglish ? "text-slate-600" : "text-slate-800"}>
            🇬🇧
          </span>
        </div>
      </label>
    </div>
  );
}
