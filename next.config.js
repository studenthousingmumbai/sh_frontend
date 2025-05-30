/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: false,
  // experimental: {
  //   scrollRestoration: true,
  // },
  redirects: async () => {
    return [
      {
        source: "/listing/64636de88be80c2cd2f46eef",
        destination: "/listing/ganga-niwas-by-student-housing",
        permanent: true,
      },
      {
        source: "/listing/6465c391eaec865984763f2c",
        destination: "/listing/avenue-by-student-housing",
        permanent: true,
      },
      {
        source: "/listing/6465c81a6c1e41a46cb6f5c7",
        destination: "/listing/crescenzo-by-student-housing",
        permanent: true,
      },
      {
        source: "/listing/6465cf08504ffb9296ce19f8",
        destination: "/listing/anand-by-student-housing",
        permanent: true,
      },
      {
        source: "/listing/646f0f1d0e7ae4ef8afeee44",
        destination: "/listing/ganga-niwas-5th-floor",
        permanent: true,
      },
      {
        source: "/listing/646f11920e7ae4ef8afeefbe",
        destination: "/listing/ganga-niwas-6th-floor",
        permanent: true,
      },
      {
        source: "/listing/646f12940e7ae4ef8afef00e",
        destination: "/listing/ganga-niwas-7th-floor",
        permanent: true,
      },
      {
        source: "/listing/64887b633d01b785d4b5e9af",
        destination: "/listing/bharat-by-student-housing",
        permanent: true,
      },
      {
        source: "/listing/64887b633d01b785d4b5e9af",
        destination: "/listing/bharat-2nd-floor",
        permanent: true,
      },
      {
        source: "/listing/6488800b3d01b785d4b5eb7a",
        destination: "/listing/kapadia-by-student-housing",
        permanent: true,
      },
      {
        source: "/listing/6488811e3d01b785d4b5ebcf",
        destination: "/listing/shradha-suman-by-student-housing",
        permanent: true,
      },
      {
        source: "/listing/6488818d3d01b785d4b5ec49",
        destination: "/listing/shradha-suman-2nd-floor",
        permanent: true,
      },
      {
        source: "/listing/648882f53d01b785d4b5ed4f",
        destination: "/listing/suraj-sadan",
        permanent: true,
      },
      {
        source: "/listing/648883893d01b785d4b5edbe",
        destination: "/listing/moti-mahal-by-student-housing",
        permanent: true,
      },
      {
        source: "/listing/663f2869b2d6ef66812fdde0",
        destination: "/listing/elita-by-student-housing",
        permanent: true,
      },
      {
        source: "/blogs/cls1hevce3z9t0bpgyrjbk3ws",
        destination: "/blogs/student-housing-ville-parle",
        permanent: true,
      },
      {
        source: "/blogs/clsbf8pmn3dkd09o49mv8lgml",
        destination:
          "/blogs/hostels-in-vile-parle-west-the-benefits-of-living-close-to-campus",
        permanent: true,
      },
      {
        source: "/blogs/cltwmpwy00rcn07pe82jb8pug",
        destination:
          "/blogs/student-housing-a-girls-hostel-near-nmims-with-premium-facilities",
        permanent: true,
      },
      {
        source: "/blogs/cm4tjmq3b0hsn07o4h8zx97qp",
        destination:
          "/blogs/why-staying-in-a-hostel-is-the-best-choice-for-students",
        permanent: true,
      },
      {
        source: "/blogs/cm50pp0lc2wmu07pmb4fw6ctt",
        destination: "/blogs/ultimate-guide-selecting-best-student-hostel",
        permanent: true,
      },
      {
        source: "/blogs/cm50q44pc2wzu07pmhvci68w7",
        destination:
          "/blogs/top-reasons-hostels-perfect-for-outstation-students",
        permanent: true,
      },
      {
        source: "/blogs/cm550cgms1rd107po9r67w1xa",
        destination:
          "/blogs/12-comfortable-hostel-life-tips-for-enhancing-your-experience",
        permanent: true,
      },
      {
        source: "/blogs/cm5al9l5i40z207pq1vs9689t",
        destination:
          "/blogs/tips-for-making-friends-in-hostels-building-network",
        permanent: true,
      },
      {
        source: "/blogs/cm5gbdjwn0f4q07png9sfeghj",
        destination:
          "/blogs/the-comprehensive-hostel-packing-checklist-for-students",
        permanent: true,
      },
    ];
  },
  images: {
    domains: [
      "d22y2gqvewxrcl.cloudfront.net",
      "google.com",
      "i.pinimg.com",
      "www.iconinc.co.uk",
      "media.graphassets.com",
      "student-housing-data-bucket.s3.ap-south-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
