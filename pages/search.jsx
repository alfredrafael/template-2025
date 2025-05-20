import Header from "../components/Header";
import { useLanguage } from "@components/LanguageContext";

import { useRouter } from "next/router";
import { postsData } from "../data/postsData";

export default function SearchPage() {
  const { isTranslated } = useLanguage();

  const { q } = useRouter().query;
  const term = (q || "").toLowerCase();

  // now include tags in your filter
  const results = postsData.filter((post) => {
    const inTitle =
      post.title.toLowerCase().includes(term) ||
      post.spanishTitle.toLowerCase().includes(term);
    const inTags = post.tags.some((t) => t.toLowerCase().includes(term));
    return inTitle || inTags;
  });

  return (
    <main className="pageContainer">
      <Header
        // title={<>Search results for '{q}'</>}
        // spanishTitle={<>Resultados de '{q}'</>}
        translateBtn
        searchBar
      />

      {results.length ? (
        <ul className="space-y-4">
          {results.map((p) => (
            <li key={p.id}>
              <a
                href={`/posts/${p.id}`}
                className="text-blue-600 hover:underline"
              >
                {!isTranslated ? p.title : p.spanishTitle}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found.</p>
      )}
    </main>
  );
}
