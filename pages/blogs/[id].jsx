import { gql } from "@apollo/client"
import client from "../../apolloClient"

export default function Blog({ blog }) {
    console.log("Blog: ", blog); 

    return (
        <div>
            <img src={blog.coverPhoto.url}/>
            <div dangerouslySetInnerHTML={{ __html: blog.content.html }}></div>
        </div>
    )
}

export async function getStaticPaths() {
    try {
        const { data } = await client.query({
            query: gql`
                query Blogs {
                    blogs {
                        id
                    }
                }
            `,
        });
        const { blogs } = data;
        
        console.log("Blog ids: ", blogs); 

        // Generate the paths array based on the fetched IDs
        const paths = blogs.map((blog) => ({
            params: { id: blog.id },
        }));
      
        return {
            paths,
            fallback: false,
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            paths: [],
            fallback: false,
        };
    }
}


export async function getStaticProps(context) {
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
							markdown
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
			}
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		return {
			props: {
				blog: null
			}
		};
	}
}
