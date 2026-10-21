import { gql } from "@apollo/client";
import client from "../../apolloClient";
import Layout from "../../components/Layout";
import styles from "../../styles/BlogContent.module.css";
import moment from "moment/moment";
import Head from "next/head";
import Link from "next/link";

const SITE_URL = "https://www.studenthousing.co.in";
const SITE_NAME = "Student Housing";
const AUTHOR_NAME = "Student Housing"; // change to the real author name
const LOGO_URL = `${SITE_URL}/logo.png`; // replace with your real logo URL

export default function Blog({ blog }) {
  if (!blog) return null;

  const pageTitle = blog.pageTitle || blog.title;
  const description = blog.description || "";
  const canonicalUrl = `${SITE_URL}/blogs/${blog.slug}`;

  // ================= AUTO-GENERATED BLOGPOSTING SCHEMA =================
  const toISO = (value) => {
    const d = new Date(value);
    return isNaN(d.getTime()) ? undefined : d.toISOString();
  };

  const published = toISO(blog.createdOn || blog.createdAt);
  const modified = toISO(blog.updatedAt || blog.createdOn || blog.createdAt);

  const wordCount = blog.content?.html
    ? blog.content.html
        .replace(/<[^>]*>/g, " ")
        .split(/\s+/)
        .filter(Boolean).length
    : undefined;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#richSnippet`,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    headline: pageTitle,
    name: pageTitle,
    description,
    url: canonicalUrl,
    inLanguage: "en-IN",
    articleSection: "Student Housing",
    ...(published && { datePublished: published }),
    ...(modified && { dateModified: modified }),
    ...(wordCount && { wordCount }),
    ...(blog.coverPhoto?.url && { image: [blog.coverPhoto.url] }),
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
  };

  // Hygraph schema (FAQPage etc.), stripped of any accidental <script> wrapper
  const extraSchema = (blog.schemaMarkup || "")
    .replace(/<\/?script[^>]*>/gi, "")
    .trim();

  // If Hygraph already contains its own BlogPosting/Article, don't duplicate it
  const hasOwnArticleSchema =
    /"@type"\s*:\s*"(BlogPosting|Article)"/.test(extraSchema);

  return (
    <>
      {/* ================= SEO HEAD (MUST BE OUTSIDE LAYOUT) ================= */}
      <Head>
        <title>{pageTitle}</title>

        {description && <meta name="description" content={description} />}

        <link rel="canonical" href={canonicalUrl} />

        {/* ===== Open Graph ===== */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={SITE_NAME} />
        {description && (
          <meta property="og:description" content={description} />
        )}
        {blog.coverPhoto?.url && (
          <meta property="og:image" content={blog.coverPhoto.url} />
        )}
        {published && (
          <meta property="article:published_time" content={published} />
        )}
        {modified && (
          <meta property="article:modified_time" content={modified} />
        )}

        {/* ===== Twitter Card ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        {description && (
          <meta name="twitter:description" content={description} />
        )}
        {blog.coverPhoto?.url && (
          <meta name="twitter:image" content={blog.coverPhoto.url} />
        )}

        {/* ===== Extra meta from Hygraph (OG / Twitter only) ===== */}
        {blog.metaTags?.map((tag, index) => {
          if (tag.metaProperty) {
            return (
              <meta
                key={`prop-${index}`}
                property={tag.metaProperty}
                content={tag.metaContent}
              />
            );
          }

          if (tag.metaName && tag.metaName !== "Title") {
            return (
              <meta
                key={`name-${index}`}
                name={tag.metaName}
                content={tag.metaContent}
              />
            );
          }

          return null;
        })}

        {/* ===== BlogPosting schema (auto-generated) ===== */}
        {!hasOwnArticleSchema && (
          <script
            key="blogposting-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(defaultSchema).replace(/</g, "\\u003c"),
            }}
          />
        )}

        {/* ===== Extra schema from Hygraph (FAQPage etc.) ===== */}
        {extraSchema && (
          <script
            key="extra-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: extraSchema.replace(/</g, "\\u003c"),
            }}
          />
        )}
      </Head>

      {/* ================= PAGE LAYOUT ================= */}
      <Layout>
        <div className="w-[88%] sm:w-[90%] md:w-[65%] lg:w-[55%] mx-auto py-8 md:py-16 lg:py-20">
          {/* Breadcrumb */}
          <div className="text-xs sm:text-sm md:text-base">
            <span className="text-brandColor">
              <Link href="/">Home&nbsp;&nbsp;</Link>/&nbsp;&nbsp;
              <Link href="/blogs">Blogs&nbsp;&nbsp;</Link>/&nbsp;&nbsp;
            </span>
            <span>{blog.title}</span>
          </div>

          {/* Cover Image */}
          {blog.coverPhoto?.url && (
            <div className="rounded-xl mt-5 md:mt-10 w-full">
              <img
                className="rounded-xl w-full"
                src={blog.coverPhoto.url}
                alt={blog.title}
              />
            </div>
          )}

          {/* Published Date */}
          <div className="mt-3 md:mt-5 text-sm md:text-lg text-brandColor font-[500]">
            {moment(blog.createdOn).format("ll")}
          </div>

          {/* Blog Content */}
          <div
            className={styles["blog-content"]}
            dangerouslySetInnerHTML={{ __html: blog.content.html }}
          />
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const { data } = await client.query({
      query: gql`
        query BlogBySlug($slug: String!) {
          blogs(where: { slug: $slug }) {
            title
            slug
            pageTitle
            description
            createdOn
            createdAt
            updatedAt
            coverPhoto {
              url
            }
            content {
              html
            }
            metaTags {
              metaName
              metaContent
              metaProperty
            }
            schemaMarkup
          }
        }
      `,
      variables: {
        slug: params.slug,
      },
    });

    return {
      props: {
        blog: data.blogs[0] || null,
      },
    };
  } catch (error) {
    console.error("Blog fetch error:", error);
    return {
      props: {
        blog: null,
      },
    };
  }
}