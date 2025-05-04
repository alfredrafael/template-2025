import React from "react";

const CircledArrowRight = (props) => {
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
          fill={fillColor || "#969191"}
          fillOpacity={opacity || "0.6"}
        />
        <path
          d="M30.1531 20.8154C30.3734 20.6044 30.5 20.3091 30.5 19.9998C30.5 19.6904 30.3734 19.3998 30.1531 19.1841L21.9031 11.3091C21.4531 10.8779 20.7406 10.8966 20.3141 11.3466C19.8875 11.7966 19.9016 12.5091 20.3516 12.9357L26.5672 18.8748H10.625C10.0016 18.8748 9.5 19.3763 9.5 19.9998C9.5 20.6232 10.0016 21.1248 10.625 21.1248H26.5672L20.3469 27.0591C19.8969 27.4904 19.8828 28.1982 20.3094 28.6482C20.7359 29.0982 21.4484 29.1123 21.8984 28.6857L30.1484 20.8107L30.1531 20.8154Z"
          fill="white"
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

export default CircledArrowRight;
