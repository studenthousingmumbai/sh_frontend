import apis from "../lib/apis";

export default function Sitemap() {
  return null;
}

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
];

export const getServerSideProps = async (ctx) => {
  ctx.res.setHeader("Content-Type", "text/xml");

  const xml = await generateSitemap();

  ctx.res.write(xml);
  ctx.res.end();

  return {
    props: {},
  };
};

async function generateSitemap() {
  // get all listings ids
  const { listings } = await apis.getAllListings(
    "https://api.studenthousing.co.in",
    {
      filters: { publish: true },
      skip: 0,
      limit: 0,
    }
  );
  console.log("All listings: ", listings);
  const listing_ids = listings.map((listing) => listing.id);

  // get all blog ids
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${base_url}</loc>
        </url>
        ${listing_ids.map(
          (id) =>
            ` 
            <url>
                <loc>${base_url}/listing/${id}</loc>
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
