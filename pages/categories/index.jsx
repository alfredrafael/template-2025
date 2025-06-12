import React from "react";
import Header from "../../components/Header";
import Link from "next/link";
import Head from "next/head";
import { categories } from "../../data/postsData";
import { useLanguage } from "../../components/LanguageContext";
import { categoriesData } from "../../data/categoriesData";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const AllCategories = () => {
  console.log("Categories:", categories);
  const { isTranslated } = useLanguage(); // Get language state from context

  return (
    <>
      <Head>
        <title>
          {isTranslated ? `Todas las Categorías` : `All Catergories`}
        </title>

        <meta name="description" content={`Explore our categories.`} />

        <link rel="canonical" href={`${baseUrl}`} />
      </Head>
      <main className="pageContainer">
        <Header
          title={"All Categories"}
          subtitle={"Explore all categories"}
          spanishTitle={"Todas las categorías"}
          spanishSubtitle={"Explora todas las categorías"}
          translateBtn
          searchBar
        />

        <div className="container max-w-6xl flex flex-col lg:mx-auto pt-6">
          {categoriesData.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {categoriesData.map((category) => (
                <li
                  key={category.categoryName}
                  className="shadow-xl rounded-3xl border hover:shadow-2xl transition duration-300 ease-in-out list-none"
                >
                  <Link
                    href={`/categories/${category.categoryName}`}
                    className="block"
                  >
                    <img
                      src={category.categoryImage}
                      alt={
                        isTranslated
                          ? category.categoryTranslatedName
                          : category.categoryName
                      }
                      className="w-full h-40 object-cover rounded-t-3xl"
                    />
                    <div className="p-6">
                      <div className="text-xl font-semibold">
                        {isTranslated
                          ? category.categoryTranslatedName
                          : category.categoryName}
                      </div>
                      <div className="text-gray-600">
                        {isTranslated
                          ? category.categoryTranslatedDescription
                          : category.categoryDescription}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              {isTranslated
                ? "No hay categorías disponibles."
                : "No categories available."}
            </p>
          )}
        </div>
      </main>
    </>
  );
};

export default AllCategories;
