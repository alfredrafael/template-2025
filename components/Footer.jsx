import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import IchthusLogo from "./icons/IchthusLogo";

export default function Footer() {
  const { isTranslated } = useLanguage();
  return (
    <footer className="borderTopEffect w-full bottom-0 left-0 bg-[#040182] text-white mt-8">
      <div className="mx-auto px-4 md:px-0 flex-auto min-w-0 flex flex-col my-auto max-w-6xl">
        <section>
          <ul className="text-sm mt-8 flex flex-col space-y-2  md:flex-row md:space-x-4 md:space-y-0  pl-2 list-none ">
            <li>
              <Link href="/about" className="text-white hover:text-gray-300">
                Some link
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:text-gray-300">
                Another Link
              </Link>
            </li>
          </ul>

          <div className="mt-7 pb-10  flex flex-row justify-between">
            {!isTranslated ? (
              <div className="text-xs pl-2">
                © {new Date().getFullYear()} Your website. All rights reserved.
              </div>
            ) : (
              <div className="text-xs pl-2">
                © {new Date().getFullYear()} Tu página web. Todos los derechos
                reservados.
              </div>
            )}
            {/* <div className="-mt-6 md:mr-2">
              <Image
                src={CircleChristianFishGray} // The imported image
                alt="Christian Fish Logo"
                width={30} // Adjust width as needed
                height={0} // Adjust height as needed
                priority // Optimize loading for this image
              />
            </div> */}
            <div className="min-w-12 md:mr-5 md:-mt-[2rem] -mt-[1rem]">
              <IchthusLogo color={"white"} />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
