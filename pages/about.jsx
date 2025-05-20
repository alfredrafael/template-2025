import React, { useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../components/LanguageContext";
import Header from "../components/Header";
import Head from "next/head";

const About = () => {
  const { isTranslated } = useLanguage(); // Use global language context
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <>
      <Head>
        <title>
          {isTranslated ? `Página Web | Acerca de` : `Page Name | About`}
        </title>

        <meta
          name="description"
          content={
            isTranslated
              ? `Description of the page in English`
              : `Descripción de la página en español`
          }
        />
        <link rel="canonical" href={baseUrl} />
      </Head>
      <main className="pageContainer">
        <Header
          title="About this site"
          subtitle="Why it exists, and what it aims to achieve."
          spanishTitle="Sobre esta página web"
          spanishSubtitle="Por qué existe, y qué pretende lograr."
          translateBtn
        />
        <div className="">
          {!isTranslated ? (
            // English version ////////////////////////////////////////////////////
            <section className="englishVersion">
              <p className="md:md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              </p>
            </section>
          ) : (
            // Spanish version ////////////////////////////////////////////////////
            <section className="spanishVersion">
              <p className="md:md:text-lg">
                Loremo ipsumo dolor sit amet, consectetur adipiscing elit. Sed
              </p>
            </section>
          )}
        </div>
      </main>
    </>
  );
};

export default About;
