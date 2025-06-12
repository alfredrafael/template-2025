"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@components/LanguageContext";

export default function PostCard2({
  title,
  subtitle,
  image = "https://placecats.com/300/200",
  spanishTitle,
  className = "",
  imagePosition = "right",
  size = "medium",
  onClick,
}) {
  const { isTranslated } = useLanguage(); // Get language state from context
  const [imageError, setImageError] = useState(false);

  // Size mappings
  const sizeClasses = {
    small: {
      card: "p-3 gap-3",
      image: "w-16 h-16",
      title: "text-sm font-semibold line-clamp-1",
      subtitle: "text-xs line-clamp-2",
    },
    medium: {
      card: "p-4 gap-4",
      image: "w-20 h-20 sm:w-24 sm:h-24",
      title: "text-base font-bold line-clamp-2",
      subtitle: "text-sm line-clamp-2",
    },
    large: {
      card: "p-4 gap-5",
      image: "w-24 h-24 sm:w-32 sm:h-32",
      title: "text-lg md:text-xl md:mt-4 mt-0 font-bold line-clamp-2",
      subtitle: "text-base line-clamp-3",
    },
    custom: {
      card: "pt-3 pr-3 pb-3 pl-4 gap-3",
      image: "w-20 h-20 sm:w-32 sm:h-32",
      title: "text-lg md:text-2xl line-clamp-2 -mt-1 md:mt-4",
      subtitle: "text-sm md:text-base line-clamp-2",
    },
  };

  const altText = !isTranslated
    ? `Featured image for the ${title} post`
    : `Imagen para el artículo titulado ${spanishTitle || title}`;

  // Build className strings using template literals instead of cn
  const cardClasses = `
    flex rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out 
    border border-gray-300 
    group cursor-pointer ${
      imagePosition === "left" ? "flex-row-reverse" : "flex-row"
    } 
    ${sizeClasses[size].card} ${className}
  `
    .trim()
    .replace(/\s+/g, " "); // Trim whitespace and normalize spaces

  const titleClasses = `
    ${sizeClasses[size].title} text-gray-900  
    group-hover:text-gray-900 transition-colors text-medium mt-1 font-serif text-base
  `
    .trim()
    .replace(/\s+/g, " ");

  const subtitleClasses = `
    ${sizeClasses[size].subtitle} text-gray-600 mt-1
  `
    .trim()
    .replace(/\s+/g, " ");

  const imageClasses = `
    ${sizeClasses[size].image} object-cover rounded-lg transition-transform group-hover:scale-105
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <div className={cardClasses} onClick={onClick}>
      <div className="flex-1 min-w-0">
        <h2 className={titleClasses}>{title}</h2>
        {subtitle && <span className={subtitleClasses}>{subtitle}</span>}
      </div>

      {image && !imageError && (
        <div className="flex-shrink-0 relative overflow-hidden rounded-lg">
          <Image
            src={image || "https://placecats.com/300/200"}
            alt={altText}
            width={imagePosition === "left" ? 100 : 120}
            height={imagePosition === "left" ? 100 : 120}
            className={imageClasses}
            onError={() => setImageError(true)}
          />
        </div>
      )}
    </div>
  );
}
