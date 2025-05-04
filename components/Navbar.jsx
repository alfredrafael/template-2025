"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import IchthusLogo from "./icons/IchthusLogo";

export default function Navbar() {
  const [opacity, setOpacity] = useState(1);
  const [openDropdownKey, setOpenDropdownKey] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);
  const dropdownRef = useRef(null);

  const navItems = {
    "/": { name: "Home" },
    "/about": { name: "About" },
    "/posts": {
      name: "Dropdowns",
      dropdownValues: [
        { dropdownName: "Dropdown 1", dropDownHref: "/" },
        { dropdownName: "Dropdown 2", dropDownHref: "/about" },
      ],
    },
    "/somePage": { name: "Data" },
    "/contact": { name: "Contact" },
  };

  useEffect(() => {
    const handleScroll = () => {
      const newOpacity = Math.max(0.7, 1 - window.scrollY / 600);
      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownKey(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (key) => {
    setOpenDropdownKey(openDropdownKey === key ? null : key);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileItem = (key) => {
    setExpandedMobileItem(expandedMobileItem === key ? null : key);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-opacity duration-300"
      style={{
        backgroundColor: "#040182",
        opacity,
      }}
      ref={dropdownRef}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-0">
        <div className="flex justify-between items-center h-16">
          <div className="min-w-12 md:mr-6">
            <Link href="/">
              <IchthusLogo color={"white"} />
            </Link>
          </div>
          <div className="flex items-center">
            {/* <div className="min-w-12 md:mr-6"> // for items on the left side of the navbar
              <Link href="/">
                <IchthusLogo color={"white"} />
              </Link>
            </div> */}

            <div className="hidden md:flex items-center space-x-4">
              {Object.entries(navItems).map(([path, item]) =>
                !item.dropdownValues ? (
                  <Link
                    key={path}
                    href={path}
                    className="text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div key={path} className="relative">
                    <button
                      className="text-white px-3 -mr-2 py-2 rounded-md text-lg font-medium hover:bg-gray-700 flex items-center"
                      onClick={() => toggleDropdown(path)}
                    >
                      {item.name}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform ${
                          openDropdownKey === path ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {openDropdownKey === path && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                        >
                          {item.dropdownValues.map((sub, i) => (
                            <Link
                              key={i}
                              href={sub.dropDownHref}
                              className="block px-4 py-2 text-lg text-white hover:bg-gray-700"
                              role="menuitem"
                              onClick={() => setOpenDropdownKey(null)}
                            >
                              {sub.dropdownName}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="text-lg font-bold flex justify-center items-center w-full md:hidden text-white">
            <span>Woke</span>
            <span className="inline-block scale-x-[-1]">y</span>
            <span>pedia.com</span>
            <span className="sr-only">Open main menu</span>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <svg
                className={`${mobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${mobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-[max-height] duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800">
          {Object.entries(navItems).map(([path, item]) =>
            !item.dropdownValues ? (
              <Link
                key={path}
                href={path}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <div key={path} className="space-y-1">
                <button
                  className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                  onClick={() => toggleMobileItem(path)}
                >
                  <span>{item.name}</span>
                  <svg
                    className={`h-5 w-5 transition-transform ${
                      expandedMobileItem === path ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
                    expandedMobileItem === path
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 space-y-1">
                    {item.dropdownValues.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.dropDownHref}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setExpandedMobileItem(null);
                        }}
                      >
                        {sub.dropdownName}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

// <div className="min-w-12 md:mr-6 -mr-2">
//               <Link href="/">
//                 <Image
//                   src={
//                     "http://www.alfredorafael.com/wp-content/uploads/2019/02/whileLogoName-e1551079673184.png"
//                   }
//                   height={75}
//                   width={75}
//                 />
//               </Link>
//             </div>
