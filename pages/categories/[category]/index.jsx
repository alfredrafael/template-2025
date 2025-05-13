import Link from "next/link";
import Head from "next/head";
import Header from "@components/Header";
import PostCard1 from "@components/PostCard1";
import { useRouter } from "next/router";
import { useLanguage } from "@components/LanguageContext"; // Import language context
import { postsData } from "../../../data/postsData";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function ArticlesWithSpecificCategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  const { isTranslated } = useLanguage(); // Get language state from context

  if (!category) return <p>Loading...</p>;

  // Filter posts based on language
  const filteredPosts = postsData.filter(
    (post) =>
      isTranslated
        ? post.spanishCategory.includes(category) // Use Spanish category
        : post.category.includes(category) // Use English category
  );

  return (
    <>
      <Head>
        <title>
          {isTranslated
            ? `Afirmaciones Woke en Esta Categoría`
            : `Woke Claims in this category`}
        </title>

        <meta
          name="description"
          content={
            isTranslated
              ? `Afrimaciones 'woke' bajo esta categoría`
              : `Woke claims under this category.`
          }
        />
        <link rel="canonical" href={baseUrl} />
      </Head>
      {/* <PageHeader
        title={`Woke Claims in the '${category}' Category`}
        subtitle={"Explore our posts categorized by topics."}
        spanishTitle={`Afirmaciones Woke en la categoría de ${category}`}
        spanishSubtitle={
          "Explora nuestras publicaciones clasificadas por categorías."
        }
      /> */}
      <main className="pageContainer">
        <header className="mt-20 md:mt-24 container max-w-6xl flex flex-col lg:mx-auto mb-8">
          <div className="md:flex justify-between">
            <div>
              <h1 className="">
                {!isTranslated
                  ? `Posts in the Category of '${category}'`
                  : `Artículos en la categoría de ${category}`}
              </h1>
              <div className="mb-3 md:mb-0 md:text-lg text-gray-600">
                {!isTranslated
                  ? "Explore our posts categorized by topics"
                  : `Artículos en la categoría de ${category}`}
              </div>
            </div>
          </div>
        </header>

        {filteredPosts.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {filteredPosts.map((post) => (
              <li>
                <Link
                  href={
                    !isTranslated
                      ? `/posts/${post.id}`
                      : `/posts/${post.id}?lang=es`
                  }
                  className="shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 ease-in-out"
                  key={post.id}
                >
                  <PostCard1
                    cardImage={post.featuredImage}
                    cardTitle={isTranslated ? post.spanishTitle : post.title}
                    cardText={
                      isTranslated
                        ? post.spanishSubtitle || post.subtitle
                        : post.subtitle
                    }
                  />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            {isTranslated
              ? "No hay publicaciones para esta categoría."
              : "No posts found for this category."}
          </p>
        )}
      </main>
    </>
  );
}
