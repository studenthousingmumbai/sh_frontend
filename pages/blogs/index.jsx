import { gql } from "@apollo/client"
import client from "../../apolloClient"

export default function Blogs({ blogs }) {
  return (
    <div>
        {blogs.map(blog => (
            <div>
                {blog.title}
            </div> 
        ))}
    </div>
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