import Head from "next/head";
import Header from "@components/Header";
import { useLanguage } from "@components/LanguageContext";

export default function Home() {
  const { isTranslated } = useLanguage(); // Use global language context
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <>
      <Head>
        <title>
          {isTranslated ? `Página Web | Hogar` : `Page Name | Home`}
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
          fontSize={"2rem"}
          title={
            <>
              Welcome to Your <code className="text-red-400">Next.js</code>{" "}
              Template Page
            </>
          }
          subtitle="Your subtitle (if any) goes here"
          spanishTitle={
            <>
              Bienvenido a tu <code className="text-red-400">Next.js</code>{" "}
              Página de Plantilla.
            </>
          }
          spanishSubtitle="Tu subtítulo va aquí."
          translateBtn
        />
        {!isTranslated ? (
          // English version ////////////////////////////////////////////////////
          <section className="englishVersion">
            <p className="md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
          </section>
        ) : (
          // Spanish version ////////////////////////////////////////////////////
          <section className="spanishVersion">
            <p className="md:text-lg">
              Loremo ipsumo dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
          </section>
        )}
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => setClickCount(clickCount + 1)} // Increment counter on click
        >
          I have been clicked {clickCount + " Merrill"} times
        </button>
        <MyButton
          onClick={() => setClickCount(clickCount + 1)}
          color="rebeccaPurple"
          text={`Click Me! ${clickCount}`}
        /> */}
      </main>
    </>
  );
}
