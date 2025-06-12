//pages/posts/[postId].jsx
import PostHeader from "@components/PostHeader";
import { postsData } from "../../data/postsData";
import LanguageToggleButton from "../../components/LanguageToggleButton";
import { useLanguage } from "../../components/LanguageContext";
import Head from "next/head";
import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function PostPage({ post }) {
  const { isTranslated } = useLanguage();

  if (!post) {
    return <p>Post not found.</p>;
  }

  // Dynamically Import Post Content Based on postId
  let PostContent;
  try {
    PostContent = require(`../../postsContent/${post.id}.jsx`).default;
  } catch (error) {
    console.error(`Error loading content for postId: ${post.id}`, error);
    PostContent = () => <p>Content not available.</p>;
  }

  const featuredImage = post.featuredImage.startsWith("https")
    ? post.featuredImage
    : `${baseUrl}${post.featuredImage}`;
  const postUrl = `${baseUrl}/posts/${post.id}`;

  return (
    <>
      <Head>
        <title>{isTranslated ? post.spanishTitle : post.title}</title>
        <meta
          property="og:title"
          content={isTranslated ? post.spanishTitle : post.title}
        />
        <meta
          property="og:description"
          content={isTranslated ? post.spanishSubtitle : post.subtitle}
        />
        <meta property="og:image" content={featuredImage} />
        <meta
          property="og:url"
          content={isTranslated ? `${postUrl}?lang=es` : postUrl}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={isTranslated ? post.spanishTitle : post.title}
        />
        <meta
          name="twitter:description"
          content={isTranslated ? post.spanishSubtitle : post.subtitle}
        />
        <meta name="twitter:image" content={featuredImage} />
      </Head>
      <div className="pageContainer">
        <PostHeader
          searchBar
          post={post} // post object passed directly
        />
        <PostContent />
        <section className="my-12">
          <div className="text-sm mb-4">
            {isTranslated
              ? "Éste artículo es parte de las siguientes categorías:"
              : "Post is part the following categories:"}
          </div>
          <div className="flex flex-wrap gap-2">
            {post.category.map((category, index) => {
              const categorySlug = isTranslated
                ? post.spanishCategory[index]
                : category;
              return (
                <Link
                  key={index}
                  href={`/categories/${encodeURIComponent(categorySlug)}`}
                  className="text-sm text-gray-500 bg-gray-200 rounded-full px-2 py-1 hover:bg-gray-300 transition"
                >
                  {categorySlug}
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { postId } = params;
  const post = postsData.find((p) => p.id === postId);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const paths = postsData.map((post) => ({
    params: { postId: post.id },
  }));

  return { paths, fallback: false };
}
