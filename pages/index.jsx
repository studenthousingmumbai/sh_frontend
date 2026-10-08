export default Homepage;


export async function getServerSideProps() {
  try {
    const gender = null;

    const announcementQuery = client.query({
      query: gql`
        query Announcement {
          announcements {
            images {
              url
            }
          }
        }
      `,
    });

    const hostelsQuery = client.query({
      query: gql`
        query HostelsOrder${gender ? "($gender: Gender)" : ""} {
          hostelsOrders(first: 1) {
            hostel${gender ? "(where: { gender: $gender })" : ""} {
              name
              slug
              description
              address {
                line1
                line2
                city
                state
                zip
              }
              amenities
              images {
                url
                id
              }
              metatags {
                metaName
                metaContent
                metaProperty
              }
              schemaMarkup
              mapEmbed
              total_price
              price
              gender
              foodMenu {
                id
                url
              }
              video_link
              faqs {
                question
                answer
              }
              occupancies {
                price
                description
                total_beds
                period
              }
              collegesNearby {
                name
                distance
              }
            }
          }
        }
      `,
      variables: { gender },
    });

    const blogsQuery = client.query({
      query: gql`
        query HomepageBlogs {
          blogs(first: 3, orderBy: createdAt_DESC) {
            coverPhoto {
              url
            }
            createdOn
            description
            id
            slug
            title
          }
        }
      `,
    });

    const [announcementResult, hostelsResult, blogsResult] = await Promise.all([
      announcementQuery,
      hostelsQuery,
      blogsQuery,
    ]);

    const announcements = announcementResult?.data?.announcements || [];
    const announcementImages = announcements[0]?.images?.map((image) => image.url) || [];

    const hostelsOrders = hostelsResult?.data?.hostelsOrders || [];
    const listings = hostelsOrders[0]?.hostel || [];

    const blogs = blogsResult?.data?.blogs || [];
    const randomFaqs = pickRandomFaqs(6);

    return {
      props: {
        announcementImages,
        listings,
        randomFaqs,
        blogs,
      },
    };
  } catch (error) {
    console.error("Error fetching homepage data:", error);

    return {
      props: {
        announcementImages: [],
        listings: [],
        randomFaqs: pickRandomFaqs(6),
        blogs: [],
      },
    };
  }
}