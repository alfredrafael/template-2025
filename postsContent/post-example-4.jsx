import React from "react";
import { useLanguage } from "@components/LanguageContext";

export default function PostExample4() {
  const { isTranslated } = useLanguage(); // Get language from context
  return (
    <main className="-ml-0 md:-ml-2">
      {!isTranslated ? (
        // English version ////////////////////////////////////////////////////
        <p className="text-lg mb-4">
          This is an example post content. You can add your text here. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      ) : (
        // Spanish version ////////////////////////////////////////////////////
        <p className="text-lg mb-4">
          Este es un contenido de ejemplo para la publicación. Puedes agregar tu
          texto aquí. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      )}
    </main>
  );
}
