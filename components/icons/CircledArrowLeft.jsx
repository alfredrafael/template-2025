import React from "react";

const CircledArrowLeft = (props) => {
  const { fillColor, opacity } = props;
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_1349_1558)">
        <rect
          width="40"
          height="40"
          rx="20"
          transform="matrix(-1 0 0 1 40 0)"
          fill={fillColor || "#969191"}
          fillOpacity={opacity || "0.3"}
        />
        <path
          d="M9.84687 20.8154C9.62656 20.6044 9.5 20.3091 9.5 19.9998C9.5 19.6904 9.62656 19.3998 9.84687 19.1841L18.0969 11.3091C18.5469 10.8779 19.2594 10.8966 19.6859 11.3466C20.1125 11.7966 20.0984 12.5091 19.6484 12.9357L13.4328 18.8748H29.375C29.9984 18.8748 30.5 19.3763 30.5 19.9998C30.5 20.6232 29.9984 21.1248 29.375 21.1248H13.4328L19.6531 27.0591C20.1031 27.4904 20.1172 28.1982 19.6906 28.6482C19.2641 29.0982 18.5516 29.1123 18.1016 28.6857L9.85156 20.8107L9.84687 20.8154Z"
          fill={fillColor || "white"}
          fillOpacity="1"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_1349_1558"
          x="-12"
          y="-12"
          width="64"
          height="64"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1349_1558"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1349_1558"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CircledArrowLeft;
