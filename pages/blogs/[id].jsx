import { gql } from "@apollo/client"
import client from "../../apolloClient"
import Layout from "../../components/Layout";
import styles from "../../styles/BlogContent.module.css"
import moment from "moment/moment";

export default function Blog({ blog }) {
    console.log("Blog: ", blog); 

    return (
        <Layout>
            <div className="w-[70%] md:w-[65%] lg:w-[55%] mx-auto py-16 lg:py-20">

                {/* page route */}
                <div className="text-xs sm:text-sm md:text-base">
                    <span className="text-brandColor">Home&nbsp;&nbsp;/&nbsp;&nbsp;Blogs&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                    <span>
                        {blog.title}
                    </span>
                </div>

                {/* blog content */}
                <div className="rounded-xl mt-5 md:mt-10 w-full">
                    <img className="rounded-xl w-full" src={blog.coverPhoto.url}/>
                </div>
                <div className="mt-3 md:mt-5 text-sm md:text-lg text-brandColor font-[500]">
                    {moment(blog.createdOn).format('ll')}
                </div>

                <div className={styles['blog-content']} dangerouslySetInnerHTML={{ __html: blog.content.html }}></div>
            </div>
        </Layout>

    )
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
    const { id } = context.params;

	try {
		const { data } = await client.query({
			query: gql`
				query Blogs($id: ID!) {
					blogs(where: { id: $id }) {
						createdAt
						createdOn
                        coverPhoto {
                            url
                        }
						content {
							html
						}
						id
                        description
						publishedAt
						title
						updatedAt
					}
				}
			`,
			variables: {
				id 
			}
		});
        const { blogs } = data; 
		console.log("Pulled blog: ", blogs); 

		return {
			props: {
				blog: blogs[0]
			}, 
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		return {
			props: {
				blog: null
			}, 
		};
	}
}
