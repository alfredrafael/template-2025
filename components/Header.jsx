import React from "react";
import LanguageToggleButton from "@components/LanguageToggleButton";
import { useLanguage } from "@components/LanguageContext";
const PageHeader = ({
  title,
  subtitle,
  spanishTitle,
  spanishSubtitle,
  page,
  translateBtn,
  translateBtnBottom,
}) => {
  const { isTranslated } = useLanguage(); // Get language from context

  return (
    <header className="mt-20 md:mt-24 container max-w-6xl flex flex-col lg:mx-auto md:mb-6 mb-4">
      <div className="">
        <div>
          <div className="mb-3 md:mb-0 relative">
            {translateBtn && (
              <div className="float-right pt-1.5">
                <LanguageToggleButton />
              </div>
            )}
            <h1 className="max-w-[calc(100%-10px)]">
              {!isTranslated ? title : spanishTitle}
            </h1>
          </div>
          <div className="mb-3 md:mb-0 md:text-lg text-gray-600">
            {!isTranslated ? subtitle : spanishSubtitle}
          </div>
          {page && (
            <>
              <div className="md:ml-0 md:mt-1 -mt-2 mb-2 md:mb-0">{page}</div>{" "}
            </>
          )}
        </div>
        {translateBtnBottom && (
          <div className="md:pt-3">
            <LanguageToggleButton />
          </div>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
