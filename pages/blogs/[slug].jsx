import { gql } from "@apollo/client";
import client from "../../apolloClient";
import Layout from "../../components/Layout";
import styles from "../../styles/BlogContent.module.css";
import moment from "moment/moment";
import Head from "next/head";
import Link from "next/link";

export default function Blog({ blog }) {
  return (
    <>
      <Head>
        <title>{blog.pageTitle || blog.title}</title>

        {blog.description && (
          <meta name="description" content={blog.description} />
        )}

        {blog.metaTags?.map((tag, index) => {
          if (tag.metaProperty) {
            return (
              <meta
                key={index}
                property={tag.metaProperty}
                content={tag.metaContent}
              />
            );
          }

          if (tag.metaName && tag.metaName !== "Title") {
            return (
              <meta
                key={index}
                name={tag.metaName}
                content={tag.metaContent}
              />
            );
          }

          return null;
        })}

        {blog.schemaMarkup && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: blog.schemaMarkup,
            }}
          />
        )}
      </Head>

      
    <Layout>
      <div className="w-[70%] md:w-[65%] lg:w-[55%] mx-auto py-16 lg:py-20">
        {/* page route */}
        <div className="text-xs sm:text-sm md:text-base">
          <span className="text-brandColor">
            <Link href="/">Home&nbsp;&nbsp;</Link>/&nbsp;&nbsp;
            <Link href="/blogs">Blogs&nbsp;&nbsp;</Link>/&nbsp;&nbsp;
          </span>
          <span>{blog.title}</span>
        </div>

        {/* blog content */}
        <div className="rounded-xl mt-5 md:mt-10 w-full">
          <img className="rounded-xl w-full" src={blog.coverPhoto.url} />
        </div>
        <div className="mt-3 md:mt-5 text-sm md:text-lg text-brandColor font-[500]">
          {moment(blog.createdOn).format("ll")}
        </div>

        <div
          className={styles["blog-content"]}
          dangerouslySetInnerHTML={{ __html: blog.content.html }}
        ></div>
      </div>
    </Layout>
  );
}

// export async function getStaticPaths() {
//     try {
//         const { data } = await client.query({
//             query: gql`
//                 query Blogs {
//                     blogs {
//                         id
//                     }
//                 }
//             `,
//         });
//         const { blogs } = data;

//         console.log("Blog ids: ", blogs);

//         // Generate the paths array based on the fetched IDs
//         const paths = blogs.map((blog) => ({
//             params: { id: blog.id },
//         }));

//         return {
//             paths,
//             fallback: false,
//         };
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return {
//             paths: [],
//             fallback: false,
//         };
//     }
// }

export async function getServerSideProps(context) {
  const { slug } = context.params;
  try {
    const { data } = await client.query({
      query: gql`
        query Blogs($slug: String!) {
          blogs(where: { slug: $slug }) {
            createdAt
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
            id
            description
            publishedAt
            title
            pageTitle
            updatedAt
          }
        }
      `,
      variables: {
        slug,
      },
    });
    const { blogs } = data;
    return {
      props: {
        blog: blogs[0],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        blog: null,
      },
    };
  }
}
