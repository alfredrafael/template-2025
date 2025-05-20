"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router"; // or 'next/navigation'
import Link from "next/link";
import { postsData } from "../data/postsData";

export default function SearchBar({ placeholder = "Search..." }) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();
  const containerRef = useRef();

  // 1) compute title/spanishTitle suggestions
  const suggestions = query
    ? postsData.filter((post) =>
        [post.title, post.spanishTitle].some((str) =>
          str.toLowerCase().includes(query.toLowerCase())
        )
      )
    : [];

  // 2) submit → go to /search?q=…
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setIsFocused(false);
  };

  // 3) click outside closes dropdown
  useEffect(() => {
    const onClickOutside = (e) => {
      if (containerRef.current?.contains(e.target)) return;
      setIsFocused(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto max-w-[72rem] relative"
      ref={containerRef}
    >
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          {/* Search icon as inline SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <input
          type="search"
          className="w-full py-2 pl-10 pr-20 rounded-3xl border focus:outline-none"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsFocused(true);
          }}
          onFocus={() => setIsFocused(true)}
        />

        {/* 2) clear “×” */}
        {query && (
          <button
            type="button"
            className="absolute right-[6.5rem] top-2 text-gray-400"
            onClick={() => {
              setQuery("");
              setIsFocused(false);
            }}
          >
            &times;
          </button>
        )}

        {/* 3) Search button */}
        <button
          type="submit"
          className="absolute right-2 bottom-2 px-4 rounded-3xl bg-gray-100"
        >
          Search
        </button>

        {/* 4) suggestions dropdown */}
        {isFocused && suggestions.length > 0 && (
          <ul className="absolute z-20 top-full left-0 right-0 bg-white border rounded-b-3xl max-h-60 overflow-y-auto shadow-lg">
            {suggestions.map((post) => (
              <li
                key={post.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {/* link directly into each post’s page */}
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
}

//  <button
//           type="submit"
//           className="absolute right-2.5 bottom-2 top-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-3xl text-sm font-medium transition-colors border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
//         >
//           Search
//         </button>
