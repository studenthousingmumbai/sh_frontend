import apis from "../lib/apis";
import client from "../apolloClient";
import { gql } from "@apollo/client";

const base_url = "https://studenthousing.co.in";
const static_pages = [
  "contact-us",
  "about-us",
  "faqs",
  "locations",
  "signin",
  "signup",
  "terms-and-conditions",
  "listings",
  "forgot-password",
  "profile",
  "order-history",
  "refer-and-earn",
  "boys-hostel",
  "girls-hostel",
];

const fetchAllListings = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query HostelsOrder {
          hostelsOrders(first: 1) {
            hostel(first: 1000) {
              slug
            }
          }
        }
      `,
    });
    const { hostelsOrders } = data;
    const hostels = hostelsOrders[0].hostel;
    return hostels;
  } catch (e) {
    console.error("Error fetching data:", e);
    return [];
  }
};

const fetchAllHostelsNearCollege = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query HostelsNearCollege {
          hostelsNearColleges(first: 1000) {
            slug
          }
        }
      `,
    });
    const { hostelsNearColleges } = data;
    return hostelsNearColleges;
  } catch (err) {
    return [];
  }
};

const fetchAllHostelsNearLocation = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query HostelsNearLocation {
          hostelsNearLocations(first: 1000) {
            slug
          }
        }
      `,
    });
    const { hostelsNearLocations } = data;
    return hostelsNearLocations;
  } catch (err) {
    console.error("Error occured while fetching hostels near location: ", err);
    return [];
  }
};

const fetchAllInstitutions = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query Institution {
          institutions(first: 1000) {
            slug
          }
        }
      `,
    });
    const { institutions } = data;
    return institutions;
  } catch (err) {
    console.error("Error occured while fetching all institutions: ", err);
    return [];
  }
};

const fetchAllBlogs = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query Blogs {
          blogs(first: 1000) {
            slug
          }
        }
      `,
    });
    const { blogs } = data;
    return blogs;
  } catch (err) {
    console.error("Error occured while fetching all blogs: ", err);
    return [];
  }
};

export default function Sitemap() {
  return null;
}

async function fetchDynamicRoutesData() {
  const [
    listings,
    hostelsNearColleges,
    blogs,
    hostelsNearLocation,
    institutions,
  ] = await Promise.all([
    fetchAllListings(),
    fetchAllHostelsNearCollege(),
    fetchAllBlogs(),
    fetchAllHostelsNearLocation(),
    fetchAllInstitutions(),
  ]);
  return {
    listings: listings.map((item) => item.slug),
    hostelsNearCollege: hostelsNearColleges.map((item) => item.slug),
    blogs: blogs.map((item) => item.slug),
    hostelsNearLocation: hostelsNearLocation.map((item) => item.slug),
    institutions: institutions.map((item) => item.slug),
  };
}

async function generateSitemap() {
  const {
    hostelsNearCollege,
    hostelsNearLocation,
    institutions,
    blogs,
    listings,
  } = await fetchDynamicRoutesData();

  // get all blog ids
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${base_url}</loc>
        </url>
        ${listings.map(
          (slug) =>
            ` 
            <url>
                <loc>${base_url}/listing/${slug}</loc>
            </url>
            `
        )}
        ${hostelsNearCollege.map(
          (slug) =>
            ` 
            <url>
                <loc>${base_url}/hostels-near-college/${slug}</loc>
            </url>
            `
        )}
        ${hostelsNearLocation.map(
          (slug) =>
            ` 
            <url>
                <loc>${base_url}/hostels-near-location/${slug}</loc>
            </url>
            `
        )}
        ${institutions.map(
          (slug) =>
            ` 
            <url>
                <loc>${base_url}/institution/${slug}</loc>
            </url>
            `
        )}
        ${blogs.map(
          (slug) =>
            ` 
            <url>
                <loc>${base_url}/blogs/${slug}</loc>
            </url>
            `
        )}
        ${static_pages.map(
          (page) =>
            `
            <url>
                <loc>${base_url}/${page}</loc>
            </url>
            `
        )}
    </urlset>
    `;
}

export const getServerSideProps = async (ctx) => {
  ctx.res.setHeader("Content-Type", "text/xml");

  const xml = await generateSitemap();

  ctx.res.write(xml);
  ctx.res.end();

  return {
    props: {},
  };
};
