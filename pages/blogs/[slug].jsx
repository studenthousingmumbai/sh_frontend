import { gql } from "@apollo/client";
import client from "../../apolloClient";
import Layout from "../../components/Layout";
import styles from "../../styles/BlogContent.module.css";
import moment from "moment/moment";
import Head from "next/head";
import Link from "next/link";

export default function Blog({ blog }) {
  if (!blog) return null;

  const pageTitle = blog.pageTitle || blog.title;
  const description = blog.description || "";

  return (
    <>
      {/* ================= SEO HEAD (MUST BE OUTSIDE LAYOUT) ================= */}
      <Head>
        <title>{pageTitle}</title>

        {description && (
          <meta name="description" content={description} />
        )}

        {/* ===== Open Graph (optional but recommended) ===== */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        {description && (
          <meta property="og:description" content={description} />
        )}
        {blog.coverPhoto?.url && (
          <meta property="og:image" content={blog.coverPhoto.url} />
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

        {/* ===== Schema Markup ===== */}
        {blog.schemaMarkup && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: blog.schemaMarkup,
            }}
          />
        )}
      </Head>

      {/* ================= PAGE LAYOUT ================= */}
      <Layout>
        <div className="w-[70%] md:w-[65%] lg:w-[55%] mx-auto py-16 lg:py-20">
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
            pageTitle
            description
            createdOn
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
