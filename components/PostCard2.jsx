import React from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

const PostCard2 = ({ title, subtitle, image, spansihTitle }) => {
  const { isTranslated } = useLanguage(); // Get language state from context
  return (
    <>
      <div className="flex justify-between rounded-xl py-4 max-h-[10rem] pl-6 pr-4 bg-white highlight-shadow shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="textContainer">
          <h2 className="mb-2 font-bold">{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="imageContainer ml-3 shrink-0">
          <Image
            src={image}
            alt={
              !isTranslated
                ? `Featured image for the ${title} post`
                : `Imagen para el artículo titulado ${spansihTitle}`
            }
            width={100}
            height={100}
            className="rounded-lg max-h-[6rem] md:max-h-[4rem]"
          />
        </div>
      </div>
    </>
  );
};

export default PostCard2;
