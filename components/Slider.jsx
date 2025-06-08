import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CircledArrowRight from "@components/icons/CircledArrowRight";
import CircledArrowLeft from "@components/icons/CircledArrowLeft";
import { useLanguage } from "@components/LanguageContext";

const Slider = ({ dataArray = [] }) => {
  const { isTranslated } = useLanguage(); // Get language from context

  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const firstCard = sliderRef.current.querySelector('[class*="min-w-["]');
      if (!firstCard) return;

      const gap = window.matchMedia("(min-width: 768px)").matches ? 32 : 16;
      const scrollAmount = firstCard.offsetWidth + gap;

      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // State for handling the arrows' active/inactive state
  const [isLastCard, setIsLastCard] = useState(false);
  const [isFirstCard, setIsFirstCard] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setIsFirstCard(scrollLeft === 0);
        setIsLastCard(scrollLeft + clientWidth >= scrollWidth - 1);
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (slider) slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:mb-8 mb-6">
      <div className="relative">
        <div
          className="no-scrollbar flex gap-4 overflow-x-auto overflow-y-hidden py-[0.6rem] md:gap-8"
          ref={sliderRef}
        >
          {dataArray.length > 0 ? (
            dataArray.map((cardDataObj, index) => (
              <Link
                key={index}
                href={
                  isTranslated
                    ? { pathname: cardDataObj.cardHref, query: { lang: "es" } }
                    : cardDataObj.cardHref
                }
                className="group relative flex h-[20rem] w-[18rem] min-w-[18rem] flex-shrink-0 justify-center overflow-hidden rounded-2xl md:min-w-[19rem] border-4 border-transparent hover:border-gray-300 transition-all duration-100 ease-in-out"
              >
                {/* Dark gradient overlay */}
                <div className="z-10 absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent" />

                {/* text text */}
                <div
                  className="absolute z-10 flex text-center px-2 pt-6 text-2xl md:text-3xl md:text-[140%] text-white font-serif"
                  style={{ textShadow: "1px 1px 1px black" }}
                >
                  {!isTranslated ? cardDataObj.text : cardDataObj.spanishText}
                </div>

                <Image
                  priority
                  src={
                    cardDataObj.imageSrc ||
                    "https://via.placeholder.com/296x400?text=No+Image"
                  }
                  alt={cardDataObj.text}
                  className="h-full w-full object-cover"
                  width={296}
                  height={400}
                />
              </Link>
            ))
          ) : (
            <span className="text-center text-gray-500">
              No cards available
            </span>
          )}
        </div>
      </div>

      {/* Arrows for scrolling */}
      {dataArray.length > 0 && (
        <div className="justify-between mt-4 flex gap-4">
          <hr className="w-[90%] border-[#7d7d7d] mt-5" />
          <div className="gap-4 flex">
            <button onClick={() => scroll("left")} disabled={isFirstCard}>
              <CircledArrowLeft opacity={isFirstCard ? 0.3 : 0.6} />
            </button>
            <button onClick={() => scroll("right")} disabled={isLastCard}>
              <CircledArrowRight opacity={isLastCard ? 0.3 : 0.6} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
