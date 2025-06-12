"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import LanguageToggle from "./LanguageToggleBtn";
import Image from "next/image";

export default function Navbar({
  bgColor,
  dropDownBg,
  dropDownBgHover,
  navItems = {},
}) {
  const [opacity, setOpacity] = useState(1);
  const [openDropdownKey, setOpenDropdownKey] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);
  const dropdownRef = useRef(null);

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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMobileItem(null);
  };

  return (
    <nav
      ref={dropdownRef}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-800 transition-opacity duration-300"
      style={{ opacity, backgroundColor: bgColor || "rgba(31, 41, 55, 0.8)" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Desktop Logo */}
          <div className="hidden md:flex">
            <Link href="/" className="flex items-center">
              <Image
                src={
                  "http://www.alfredorafael.com/wp-content/uploads/2019/02/whileLogoName-e1551079673184.png"
                }
                height={70}
                width={70}
              />
            </Link>
          </div>

          {/* Mobile Logo and Language Toggle */}
          <div className="flex w-full pr-2 items-center justify-between md:hidden">
            <Link href="/" className="flex items-center">
              <Image
                src={
                  "http://www.alfredorafael.com/wp-content/uploads/2019/02/whileLogoName-e1551079673184.png"
                }
                height={70}
                width={70}
              />
            </Link>
            <LanguageToggle />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {Object.entries(navItems).map(([path, item]) =>
              !item.dropdownValues ? (
                <Link
                  key={path}
                  href={path}
                  className="rounded-md px-3 py-2 text-lg font-medium font-serif text-white hover:text-white border border-transparent hover:border-gray-400 transition-colors "
                >
                  {item.name}
                </Link>
              ) : (
                <div key={path} className="relative">
                  <button
                    className="flex items-center rounded-md pl-3 py-2 text-lg font-medium font-serif text-white transition-colors border border-transparent hover:border-gray-400"
                    onClick={() => toggleDropdown(path)}
                    aria-expanded={openDropdownKey === path}
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
                    <div
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                      style={{ backgroundColor: dropDownBg || "#040182" }}
                    >
                      <div className="py-1">
                        {item.dropdownValues.map((sub, i) => (
                          <Link
                            key={i}
                            href={sub.dropDownHref}
                            className={`block px-4 py-2 text-lg font-serif text-white transition-colors hover:text-white hover:bg-[#323163]`}
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
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white transition-colors hover:bg-slate-700"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
        id="mobile-menu"
      >
        <div className="space-y-1 bg-slate-700 px-2 pb-3 pt-2">
          {Object.entries(navItems).map(([path, item]) =>
            !item.dropdownValues ? (
              <Link
                key={path}
                href={path}
                className="hover:text-white block rounded-md px-3 py-2 text-base font-medium font-serif text-white transition-colors hover:bg-slate-600"
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            ) : (
              <div key={path} className="space-y-1">
                <button
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium font-serif text-white transition-colors hover:bg-slate-600"
                  onClick={() => toggleMobileItem(path)}
                  aria-expanded={expandedMobileItem === path}
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
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedMobileItem === path
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-1 pl-4">
                    {item.dropdownValues.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.dropDownHref}
                        className="block rounded-md px-3 py-2 text-base font-medium font-serif text-slate-300 transition-colors hover:bg-slate-600 hover:text-white"
                        onClick={closeMobileMenu}
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
