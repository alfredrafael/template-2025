import React from "react";
import LanguageToggleButton from "@components/LanguageToggleButton";
import { useLanguage } from "@components/LanguageContext";
import SearchBar from "@components/SearchBar";

const PageHeader = ({
  title,
  subtitle,
  spanishTitle,
  spanishSubtitle,
  page,
  translateBtn,
  searchBar,
}) => {
  const { isTranslated } = useLanguage(); // Get language from context

  return (
    <header className="mt-20 md:mt-24 container max-w-6xl flex flex-col lg:mx-auto md:mb-6 mb-4">
      {searchBar && (
        <div className="mb-2 md:mb-4">
          <SearchBar placeholder={isTranslated ? "Búsqueda" : "Search"} />
        </div>
      )}

      <div className="">
        <div>
          <div className="mb-3 md:mb-0 relative">
            {translateBtn && (
              <div className="float-right pt-1.5 hidden md:inline-block">
                <LanguageToggleButton />
              </div>
            )}
            <h1 className="max-w-[calc(100%-10px)]">
              {!isTranslated ? title : spanishTitle}
            </h1>
          </div>
          <div className="mb-3 md:mb-1 md:text-lg text-gray-600">
            {!isTranslated ? subtitle : spanishSubtitle}
          </div>
          {page && (
            <>
              <div className="md:ml-0 md:mt-1 -mt-2 mb-2 md:mb-0">{page}</div>{" "}
            </>
          )}
        </div>
        {translateBtn && (
          <div className="md:hidden pt-2 md:pt-3 md:-ml-1">
            <LanguageToggleButton />
          </div>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
