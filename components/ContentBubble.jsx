import React from "react";

export default function ContentBubble({ children }) {
  return (
    <div className="contentBubble rounded-xl pb-8 pt-6 px-6 md:px-10 shadow-lg mb-6 bubbleBorder  bg-[#fff] leading-8">
      {children}
    </div>
  );
}
