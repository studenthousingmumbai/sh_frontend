import HeroBanner from "../../components/HeroBanner";
import Queries from "../../components/Queries";
import Layout from "../../components/Layout";
import FAQ from "../../components/FaqAccordion";
import RoomOptionsAndPricing from "../../components/RoomOptionsAndPricing";
import Ameities from "../../components/Amenities";
import StudentTestimonials from "../../components/StudentTestimonials";
import apis from "../../lib/apis";
import ExcellenceEducationStudentLife from "../../components/ExcellenceEducationStudentLife";
import InstitutionWhyChoose from "../../components/InstitutionWhyChoose";

const faqItems = [
  {
    id: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-2",
    question: "Is it styled?",
    answer:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    id: "item-3",
    question: "Is it animated?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

const mock = {
  slug: "sss",
  collegeName: "Mithibai College",
  locationName: "Mithibai College",
  hostelName: "Aster A by Student Housing",
  hostelListingLink: "#",
  hostelDescription1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed nunc et libero finibus interdum. Nam augue urna, dapibus et consectetur sed, ullamcorper in nunc. Vestibulum maximus nunc nec arcu",
  hostelDescription2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed nunc et libero finibus interdum. Nam augue urna, dapibus et consectetur sed, ullamcorper in nunc. Vestibulum maximus nunc nec arcu egestas, congue sollicitudin nibh pellentesque. Praesent porttitor nibh id velit gravida, sit amet vehicula dui dictum. Nullam ornare quam sed enim volutpat, vel posuere sem porta. Fusce tempus, velit id condimentum mollis, libero est maximus diam, luctus tristique orci arcu vulputate erat. Nulla fermentum nulla ac rutrum finibus. Morbi in nibh aliquam odio ultricies viverra ac ut diam",
  images: [
    "/hostels/girls-rooms-img-1.png",
    "/hostels/girls-rooms-img-2.png",
    "/hostels/girls-rooms-img-3.png",
    "/hostels/girls-rooms-img-1.png",
    "/hostels/girls-rooms-img-2.png",
    "/hostels/girls-rooms-img-3.png",
    "/hostels/girls-rooms-img-1.png",
    "/hostels/girls-rooms-img-2.png",
    "/hostels/girls-rooms-img-3.png",
    "/hostels/girls-rooms-img-1.png",
    "/hostels/girls-rooms-img-2.png",
    "/hostels/girls-rooms-img-3.png",
    "/hostels/girls-rooms-img-1.png",
    "/hostels/girls-rooms-img-2.png",
    "/hostels/girls-rooms-img-3.png",
  ],

  whyChoose: [
    {
      title: "Academic Excellence",
      subTitle:
        "A top-ranked institution with highly qualified faculty and a strong curriculum",
    },

    {
      title: "State-of-the-Art Facilities",
      subTitle:
        "A top-ranked institution with highly qualified faculty and a strong curriculum",
    },
    {
      title: "Vibrant Campus Life",
      subTitle:
        "A top-ranked institution with highly qualified faculty and a strong curriculum",
    },
    {
      title: "Industry Exposure",
      subTitle:
        "A top-ranked institution with highly qualified faculty and a strong curriculum",
    },
    {
      title: "Prime Location",
      subTitle:
        "A top-ranked institution with highly qualified faculty and a strong curriculum",
    },
  ],
};

export default function Institutions({
  all_listings,
  total,
  gender,
  listingDetails,
}) {
  console.log("listing details", listingDetails);
  console.log("all listing", all_listings);
  return (
    <Layout>
      <HeroBanner
        title={mock.collegeName}
        subTitle={
          "Find the perfect stay with modern amenities, security, and a friendly community."
        }
        image={"/hero-banner/institution-hero-banner.png"}
      />

      <ExcellenceEducationStudentLife data={mock} />

      <InstitutionWhyChoose data={mock} />

      <Ameities />

      <StudentTestimonials />

      <RoomOptionsAndPricing
        sectionTitle={"Recommended Hostels"}
        data={all_listings}
      />

      <Queries />

      <FAQ faqs={faqItems} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { gender } = query;

  try {
    // Fetch data from external API
    const { listings: all_listings, total } = await apis.getAllListings(
      process.env.NEXT_PUBLIC_API_BASE_URL,
      {
        filters: gender ? { publish: true, gender } : { publish: true },
        skip: 0,
        limit: 0,
      }
    );

    const { data } = await client.query({
      query: gql`
        query Institution($slug: String!) {
          institutions(where: { slug: $slug }, first: 1, skip: 0) {
            slug
            collegeName
            aboutCollege
            collegeSellingPoints {
              title
              description
            }
          }
        }
      `,
      variables: {
        slug,
      },
    });
    const { institutions } = data;
    const listingDetails = institutions[0];

    // Pass data to the page via props
    return {
      props: {
        listingDetails,
        all_listings,
        total,
        gender: (gender && gender) || null,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        listingDetails: null,
        all_listings: [],
        total: 0,
        gender: (gender && gender) || null,
      },
    };
  }
}
