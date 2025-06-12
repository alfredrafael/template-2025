import React from "react";
import Header from "@components/Header";
import { postsData } from "../../data/postsData";
import PostCard1 from "@components/PostCard1";
import Link from "next/link";
import { useLanguage } from "@components/LanguageContext";
import { useRouter } from "next/router";

export default function AllPostsPage() {
  console.log("AllPostsPage", postsData);
  const { isTranslated } = useLanguage(); // Get language from context
  const router = useRouter();
  return (
    <main className="pageContainer">
      <Header
        title={<>All posts page</>}
        subtitle="Your subtitle (if any) goes here"
        spanishTitle={<>Todos los artículos</>}
        spanishSubtitle="Tu subtítulo (si alguno) va aquí."
        translateBtn
        searchBar
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-y-8 gap-y-6 list-none">
        {postsData.map((post) => (
          <li className="shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 ease-in-out">
            <Link
              href={
                !isTranslated
                  ? `/posts/${post.id}`
                  : `/posts/${post.id}?lang=es`
              }
              key={post.id}
              tabIndex="-1"
            >
              <PostCard1
                cardImage={post.featuredImage}
                cardTitle={!isTranslated ? post.title : post.spanishTitle}
                cardText={!isTranslated ? post.subtitle : post.spanishSubtitle}
              />
            </Link>
            {/* <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-gray-600">{post.subtitle}</p>
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-auto rounded mt-2"
              /> */}
          </li>
        ))}
      </ul>
    </main>
  );
}
