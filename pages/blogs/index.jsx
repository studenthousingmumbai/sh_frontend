import { gql } from "@apollo/client"
import client from "../../apolloClient"
import Layout from "../../components/Layout";
import moment from "moment/moment";
import Link from "next/link";

export default function Blogs({ blogs }) {
  console.log(blogs)
  return (
    <Layout>
        <div className="">
            <div className="relative flex items-center w-full h-[400px] bg-blog-landscape bg-cover bg-center bg-no-repeat" >
                <div className="ml-16 sm:ml-24 lg:ml-44 my-auto uppercase font-bold text-white text-3xl sm:text-4xl md:text-5xl border-l-4 border-yellow-400 px-5 py-1 sm:py-2 md:py-3">blogs</div>
            </div>
            <div className="w-[80%] mx-auto my-12">

                {/* flex layout */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {blogs.map((blog, index) => (
                        <div className="border border-gray-200 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.01] hover:shadow-md hover:border-gray-400 transform transition duration-300 ease-in-out" key={index}>

                            {/* blog image */}
                            <div className="rounded-lg">
                                <img className="rounded-lg" src={blog?.coverPhoto?.url} alt="blog_image" />
                            </div>

                            <div>
                                {/* created at */}
                                <div className="mt-3 sm:mt-4 text-xs md:text-base font-semibold text-brandColor">
                                    {moment(blog.createdOn).format('ll')}
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
                                <Link href={`/blogs/${blog.id}`}>
                                    Read more...
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export async function getStaticProps(){
    try {
        const { data } = await client.query({
            query: gql`
                query Blogs {
                    blogs {
                        coverPhoto {
                            url
                        }
                        createdAt
                        createdOn
                        description
                        id
                        publishedAt
                        title
                        updatedAt
                    }
                }
            `
        });
    
        const { blogs } = data;
    
        return {
            props: {
                blogs
            }
        };
    } 
    catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                blogs: []
            },
            revalidate: 10
        };
    }
}