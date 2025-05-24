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
