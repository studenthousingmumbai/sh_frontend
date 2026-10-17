import { gql } from "@apollo/client";
import client from "../../apolloClient";
import Layout from "../../components/Layout";
import moment from "moment/moment";
import Link from "next/link";
import Head from "next/head";

export default function Blogs({ blogs }) {
  return (
    <>
      <Head>
        <title>Student Housing Blogs | Hostel Living & Student Tips</title>
        <meta
          name="description"
          content="Read articles on student hostels, accommodation tips, city guides, and student living experiences by Student Housing."
        />
      </Head>

      <Layout>
        <div className="">
          <div className="relative flex items-center w-full h-[400px] bg-blog-landscape bg-cover bg-center bg-no-repeat">
            <h1 className="ml-16 sm:ml-24 lg:ml-44 my-auto uppercase font-bold text-white text-3xl sm:text-4xl md:text-5xl border-l-4 border-yellow-400 px-5 py-1 sm:py-2 md:py-3">
              Blogs
            </h1>
          </div>

          <div className="w-[80%] mx-auto my-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Query already returns newest first, so no .reverse() */}
              {blogs.map((blog) => {
                return (
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="border border-gray-200 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.01] hover:shadow-md hover:border-gray-400 transform transition duration-300 ease-in-out"
                    key={blog.id}
                  >
                    {/* blog image */}
                    <div className="rounded-lg w-full h-full">
                      <img
                        className="rounded-lg w-full h-full object-cover"
                        src={blog?.coverPhoto?.url}
                        alt={blog.title || "blog_image"}
                      />
                    </div>

                    <div>
                      {/* created on */}
                      <div className="mt-3 sm:mt-4 text-xs md:text-base font-semibold text-brandColor">
                        {moment(blog.createdOn || blog.createdAt).format("ll")}
                      </div>

                      {/* title */}
                      <div className="mt-2 sm:mt-3 font-bold text-sm sm:text-lg md:text-2xl">
                        {blog.title}
                      </div>

                      {/* description */}
                      <div className="mt-2 sm:mt-3 flex-grow text-sm sm:text-base">
                        {blog.description}
                      </div>
                    </div>

                    {/* link to */}
                    <div className="mt-3 text-brandColor font-semibold self-start text-xs sm:text-base">
                      Read more...
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ res }) {
  // Stop CDN/browser from serving a stale SSR page
  res.setHeader("Cache-Control", "no-store, max-age=0");

  try {
    const { data } = await client.query({
      query: gql`
        query Blogs {
          blogs(first: 100, orderBy: createdOn_DESC) {
            coverPhoto {
              url
            }
            createdAt
            createdOn
            description
            id
            publishedAt
            title
            pageTitle
            updatedAt
            slug
          }
        }
      `,
      // Skip Apollo's server-side cache so new posts show immediately
      fetchPolicy: "no-cache",
    });

    // Temporary debug log: remove once confirmed
    console.log(
      "blogs fetched:",
      data.blogs.length,
      "latest:",
      data.blogs[0]?.createdOn
    );

    return {
      props: {
        blogs: data.blogs,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        blogs: [],
      },
    };
  }
}