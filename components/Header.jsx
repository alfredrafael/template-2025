import React from "react";
import { useLanguage } from "@components/LanguageContext";
import SearchBar from "@components/SearchBar";
import Image from "next/image";

const PageHeader = ({
  title,
  subtitle,
  spanishTitle,
  spanishSubtitle,
  searchBar,
  imgSrc,
  className = "",
  photoCreditName,
  photoCreditLink,
}) => {
  const { isTranslated } = useLanguage(); // Get language from context

  // Build className strings using template literals
  const headerClasses = `
    mt-20 md:mt-24 flex flex-col ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  const titleClasses = `
    mt-0 text-3xl text-gray-900
    mb-2 transition-colors font-serif flex-1
  `
    .trim()
    .replace(/\s+/g, " ");

  const subtitleClasses = `
    text-base md:text-base text-gray-600 mb-2
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <header className={headerClasses}>
      {" "}
      {/* Mobile layout (default) */}
      <div className="sm:hidden">
        {searchBar && (
          <div className="mb-4">
            <SearchBar placeholder={isTranslated ? "Buscar..." : "Search..."} />
          </div>
        )}
        <div className="flex flex-col relative">
          {imgSrc && (
            <Image
              src={imgSrc || "https://placecats.com/300/200"}
              alt={isTranslated ? `Imagen destacada` : `Featured image`}
              loading="eager"
              width={640}
              height={360}
              priority
              quality={100}
              className="w-full h-48 object-cover rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out mb-4"
            />
          )}
          {photoCreditName && photoCreditLink && (
            <span className="text-xs absolute text-gray-500 bottom-5 right-1 bg-white bg-opacity-75 rounded-lg px-2 ">
              <a href={photoCreditLink} className=" text-slate-600">
                {isTranslated ? "Imagen" : "Source"}
              </a>
            </span>
          )}
        </div>

        <div className="flex flex-row gap-4">
          {/* Text content */}
          <div>
            <div className="flex items-center">
              <h1 className={titleClasses}>
                {isTranslated ? spanishTitle || title : title}
              </h1>
            </div>
            {(isTranslated ? spanishSubtitle : subtitle) && (
              <div className={subtitleClasses}>
                {isTranslated ? spanishSubtitle || subtitle : subtitle}
              </div>
            )}
          </div>
        </div>
        <hr className="border-gray-300 mt-3 mb-4" />
      </div>
      <div className="hidden sm:block">
        {searchBar && (
          <div className="mb-6">
            <SearchBar
              placeholder={isTranslated ? "Buscar" : "Search Claims"}
            />
          </div>
        )}
        <div className="flex flex-row justify-between items-start gap-4">
          <div className="flex flex-row">
            {/* Image - left side on tablet/desktop */}
            <div className="shrink-0 relative">
              {imgSrc && (
                <Image
                  src={imgSrc || "https://placecats.com/300/200"}
                  alt={isTranslated ? `Imagen destacada` : `Featured image`}
                  width={200}
                  height={128}
                  className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out max-h-32 object-cover mr-6"
                  loading="eager"
                  quality={100}
                  priority
                />
              )}
              {photoCreditName && photoCreditLink && (
                <span className="text-xs text-gray-500 flex justify-start mt-1 -mb-3">
                  {isTranslated ? "Foto:" : "Photo:"}
                  <a href={photoCreditLink} className="ml-1">
                    {photoCreditName}
                  </a>
                </span>
              )}
            </div>

            {/* Text content */}
            <div className="flex-1 min-w-0">
              <h1 className={titleClasses}>
                {isTranslated ? spanishTitle || title : title}
              </h1>
              {(isTranslated ? spanishSubtitle : subtitle) && (
                <div className={subtitleClasses}>
                  {isTranslated ? spanishSubtitle || subtitle : subtitle}
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="border-gray-300 mt-3 mb-4" />
      </div>
    </header>
  );
};

export default PageHeader;
