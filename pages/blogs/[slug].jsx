import { gql } from "@apollo/client";
import client from "../../apolloClient";
import Layout from "../../components/Layout";
import styles from "../../styles/BlogContent.module.css";
import moment from "moment/moment";
import Head from "next/head";
import Link from "next/link";

export default function Blog({ blog }) {
  if (!blog) return null;

  return (
    <Layout>
      <Head>
        {/* ✅ PAGE TITLE */}
        <title>{blog.pageTitle || blog.title}</title>

        {/* ✅ META TAGS */}
        {blog.metaTags?.map((tag, index) =>
          tag.metaName ? (
            <meta key={index} name={tag.metaName} content={tag.metaContent} />
          ) : tag.metaProperty ? (
            <meta
              key={index}
              property={tag.metaProperty}
              content={tag.metaContent}
            />
          ) : null
        )}

        {/* ✅ SCHEMA MARKUP */}
        {blog.schemaMarkup && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: blog.schemaMarkup,
            }}
          />
        )}
      </Head>

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
        <div className="rounded-xl mt-5 md:mt-10 w-full">
          <img
            className="rounded-xl w-full"
            src={blog.coverPhoto.url}
            alt={blog.title}
          />
        </div>

        {/* Date */}
        <div className="mt-3 md:mt-5 text-sm md:text-lg text-brandColor font-[500]">
          {moment(blog.createdOn).format("ll")}
        </div>

        {/* Content */}
        <div
          className={styles["blog-content"]}
          dangerouslySetInnerHTML={{ __html: blog.content.html }}
        />
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const { data } = await client.query({
      query: gql`
        query Blog($slug: String!) {
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
    console.error(error);
    return {
      props: {
        blog: null,
      },
    };
  }
}
