import { MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

const navigation = {
  solutions: [
    { name: "Home", href: "/" },
    { name: "Explore Hostels", href: "/listings" },
    { name: "Blogs", href: "/blogs" },
  ],
  support: [
    { name: "Terms and Conditions", href: "/terms-and-conditions" },
    { name: "Refer & Earn", href: "/refer-and-earn" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ],
  company: [
    { name: "About Us", href: "/about-us" },
    { name: "Terms and Conditions", href: "/terms-and-conditions" },
    { name: "Refer & Earn", href: "/refer-and-earn" },
  ],
  legal: [],
  social: [
    {
      name: "Facebook",
      href: "https://m.facebook.com/StudentHousingIN",
      icon: (props) => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M16.387 13.1712L16.9213 9.77947H13.63V7.57483C13.63 6.6474 14.0895 5.74117 15.5589 5.74117H17.0763V2.85288C16.1926 2.71209 15.2997 2.63593 14.4048 2.625C11.6959 2.625 9.92733 4.25198 9.92733 7.19326V9.77947H6.92456V13.1712H9.92733V21.375H13.63V13.1712H16.387Z"
            fill="#337FFF"
          />
        </svg>
      ),
    },
    {
      name: "Linkedin",
      href: "https://in.linkedin.com/company/student-housing-india",
      icon: (props) => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M1.81616 3.28516C1.81616 2.47499 2.49442 1.81738 3.33052 1.81738H20.7921C21.6285 1.81738 22.3064 2.47499 22.3064 3.28516V20.8401C22.3064 21.6505 21.6285 22.3076 20.7921 22.3076H3.33052C2.4945 22.3076 1.81616 21.6506 1.81616 20.8403V3.28492V3.28516Z"
            fill="#006699"
          />
          <path
            d="M8.0428 18.9646V9.73984H4.97663V18.9646H8.04312H8.0428ZM6.51036 8.48056C7.57937 8.48056 8.2449 7.77221 8.2449 6.88697C8.2249 5.98155 7.57937 5.29297 6.53069 5.29297C5.48128 5.29297 4.7959 5.98155 4.7959 6.88689C4.7959 7.77213 5.46119 8.48048 6.49027 8.48048H6.51012L6.51036 8.48056ZM9.73997 18.9646H12.8059V13.8136C12.8059 13.5383 12.8259 13.2622 12.9069 13.0656C13.1285 12.5145 13.633 11.9441 14.4802 11.9441C15.5894 11.9441 16.0334 12.7899 16.0334 14.0301V18.9646H19.0992V13.6754C19.0992 10.8421 17.5868 9.52357 15.5695 9.52357C13.9157 9.52357 13.1893 10.4479 12.7857 11.0775H12.8061V9.74016H9.74013C9.78015 10.6055 9.73989 18.9649 9.73989 18.9649L9.73997 18.9646Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/studenthousing_mumbai?igshid=YmMyMTA2M2Y=",
      icon: (props) => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M8.58625 12.0007C8.58625 10.1158 10.1147 8.58744 12.0007 8.58744C13.8867 8.58744 15.4161 10.1158 15.4161 12.0007C15.4161 13.8856 13.8867 15.414 12.0007 15.414C10.1147 15.414 8.58625 13.8856 8.58625 12.0007ZM6.73999 12.0007C6.73999 14.9045 9.09522 17.2583 12.0007 17.2583C14.9063 17.2583 17.2615 14.9045 17.2615 12.0007C17.2615 9.09693 14.9063 6.74311 12.0007 6.74311C9.09522 6.74311 6.73999 9.09693 6.73999 12.0007ZM16.2403 6.53464C16.2402 6.77765 16.3123 7.01523 16.4473 7.21734C16.5823 7.41945 16.7742 7.57701 16.9988 7.6701C17.2234 7.76318 17.4706 7.78761 17.7091 7.7403C17.9476 7.69299 18.1667 7.57605 18.3387 7.40429C18.5107 7.23252 18.6279 7.01364 18.6755 6.77532C18.723 6.537 18.6987 6.28994 18.6058 6.06539C18.5128 5.84084 18.3553 5.64889 18.1532 5.5138C17.9511 5.37871 17.7134 5.30655 17.4702 5.30646H17.4698C17.1438 5.30661 16.8313 5.43604 16.6008 5.66632C16.3703 5.8966 16.2406 6.20891 16.2403 6.53464ZM7.86171 20.335C6.86285 20.2895 6.31994 20.1233 5.95915 19.9828C5.48083 19.7967 5.13954 19.575 4.78071 19.2169C4.42189 18.8588 4.19977 18.518 4.01438 18.04C3.87373 17.6796 3.70735 17.1368 3.66195 16.1386C3.61228 15.0593 3.60236 14.7351 3.60236 12.0008C3.60236 9.26649 3.6131 8.94318 3.66195 7.86301C3.70744 6.86475 3.87505 6.32306 4.01438 5.96159C4.20059 5.48355 4.42238 5.14247 4.78071 4.78386C5.13905 4.42525 5.48001 4.20327 5.95915 4.01798C6.31978 3.87742 6.86285 3.71114 7.86171 3.66576C8.94163 3.61612 9.26603 3.60621 12.0007 3.60621C14.7355 3.60621 15.0602 3.61694 16.141 3.66576C17.1399 3.71122 17.6819 3.87873 18.0436 4.01798C18.5219 4.20327 18.8632 4.42574 19.222 4.78386C19.5808 5.14198 19.8021 5.48355 19.9883 5.96159C20.129 6.322 20.2954 6.86475 20.3408 7.86301C20.3904 8.94318 20.4004 9.26649 20.4004 12.0008C20.4004 14.7351 20.3904 15.0584 20.3408 16.1386C20.2953 17.1368 20.1281 17.6794 19.9883 18.04C19.8021 18.518 19.5803 18.8591 19.222 19.2169C18.8637 19.5747 18.5219 19.7967 18.0436 19.9828C17.6829 20.1233 17.1399 20.2896 16.141 20.335C15.0611 20.3846 14.7367 20.3945 12.0007 20.3945C9.2648 20.3945 8.9413 20.3846 7.86171 20.335ZM7.77688 1.82373C6.68623 1.87336 5.94095 2.0462 5.2901 2.29931C4.61606 2.56069 4.04544 2.91135 3.47524 3.48031C2.90504 4.04927 2.55506 4.62044 2.29353 5.29409C2.04027 5.94496 1.86733 6.68937 1.81766 7.77938C1.76717 8.8711 1.75562 9.22012 1.75562 12.0007C1.75562 14.7813 1.76717 15.1303 1.81766 16.222C1.86733 17.3121 2.04027 18.0564 2.29353 18.7073C2.55506 19.3806 2.90512 19.9524 3.47524 20.5211C4.04536 21.0898 4.61606 21.44 5.2901 21.7021C5.94218 21.9552 6.68623 22.128 7.77688 22.1777C8.86983 22.2273 9.21849 22.2397 12.0007 22.2397C14.783 22.2397 15.1322 22.2281 16.2246 22.1777C17.3153 22.128 18.0601 21.9552 18.7114 21.7021C19.385 21.44 19.956 21.0901 20.5262 20.5211C21.0964 19.9521 21.4457 19.3806 21.708 18.7073C21.9612 18.0564 22.135 17.312 22.1838 16.222C22.2335 15.1295 22.2451 14.7813 22.2451 12.0007C22.2451 9.22012 22.2335 8.8711 22.1838 7.77938C22.1342 6.68929 21.9612 5.94455 21.708 5.29409C21.4457 4.62085 21.0955 4.05017 20.5262 3.48031C19.9569 2.91045 19.385 2.56069 18.7122 2.29931C18.0601 2.0462 17.3153 1.87255 16.2254 1.82373C15.133 1.77409 14.7838 1.76172 12.0016 1.76172C9.21931 1.76172 8.86983 1.77327 7.77688 1.82373Z"
            fill="url(#paint0_radial_1305_3078)"
          />
          <path
            d="M8.58625 12.0007C8.58625 10.1158 10.1147 8.58744 12.0007 8.58744C13.8867 8.58744 15.4161 10.1158 15.4161 12.0007C15.4161 13.8856 13.8867 15.414 12.0007 15.414C10.1147 15.414 8.58625 13.8856 8.58625 12.0007ZM6.73999 12.0007C6.73999 14.9045 9.09522 17.2583 12.0007 17.2583C14.9063 17.2583 17.2615 14.9045 17.2615 12.0007C17.2615 9.09693 14.9063 6.74311 12.0007 6.74311C9.09522 6.74311 6.73999 9.09693 6.73999 12.0007ZM16.2403 6.53464C16.2402 6.77765 16.3123 7.01523 16.4473 7.21734C16.5823 7.41945 16.7742 7.57701 16.9988 7.6701C17.2234 7.76318 17.4706 7.78761 17.7091 7.7403C17.9476 7.69299 18.1667 7.57605 18.3387 7.40429C18.5107 7.23252 18.6279 7.01364 18.6755 6.77532C18.723 6.537 18.6987 6.28994 18.6058 6.06539C18.5128 5.84084 18.3553 5.64889 18.1532 5.5138C17.9511 5.37871 17.7134 5.30655 17.4702 5.30646H17.4698C17.1438 5.30661 16.8313 5.43604 16.6008 5.66632C16.3703 5.8966 16.2406 6.20891 16.2403 6.53464ZM7.86171 20.335C6.86285 20.2895 6.31994 20.1233 5.95915 19.9828C5.48083 19.7967 5.13954 19.575 4.78071 19.2169C4.42189 18.8588 4.19977 18.518 4.01438 18.04C3.87373 17.6796 3.70735 17.1368 3.66195 16.1386C3.61228 15.0593 3.60236 14.7351 3.60236 12.0008C3.60236 9.26649 3.6131 8.94318 3.66195 7.86301C3.70744 6.86475 3.87505 6.32306 4.01438 5.96159C4.20059 5.48355 4.42238 5.14247 4.78071 4.78386C5.13905 4.42525 5.48001 4.20327 5.95915 4.01798C6.31978 3.87742 6.86285 3.71114 7.86171 3.66576C8.94163 3.61612 9.26603 3.60621 12.0007 3.60621C14.7355 3.60621 15.0602 3.61694 16.141 3.66576C17.1399 3.71122 17.6819 3.87873 18.0436 4.01798C18.5219 4.20327 18.8632 4.42574 19.222 4.78386C19.5808 5.14198 19.8021 5.48355 19.9883 5.96159C20.129 6.322 20.2954 6.86475 20.3408 7.86301C20.3904 8.94318 20.4004 9.26649 20.4004 12.0008C20.4004 14.7351 20.3904 15.0584 20.3408 16.1386C20.2953 17.1368 20.1281 17.6794 19.9883 18.04C19.8021 18.518 19.5803 18.8591 19.222 19.2169C18.8637 19.5747 18.5219 19.7967 18.0436 19.9828C17.6829 20.1233 17.1399 20.2896 16.141 20.335C15.0611 20.3846 14.7367 20.3945 12.0007 20.3945C9.2648 20.3945 8.9413 20.3846 7.86171 20.335ZM7.77688 1.82373C6.68623 1.87336 5.94095 2.0462 5.2901 2.29931C4.61606 2.56069 4.04544 2.91135 3.47524 3.48031C2.90504 4.04927 2.55506 4.62044 2.29353 5.29409C2.04027 5.94496 1.86733 6.68937 1.81766 7.77938C1.76717 8.8711 1.75562 9.22012 1.75562 12.0007C1.75562 14.7813 1.76717 15.1303 1.81766 16.222C1.86733 17.3121 2.04027 18.0564 2.29353 18.7073C2.55506 19.3806 2.90512 19.9524 3.47524 20.5211C4.04536 21.0898 4.61606 21.44 5.2901 21.7021C5.94218 21.9552 6.68623 22.128 7.77688 22.1777C8.86983 22.2273 9.21849 22.2397 12.0007 22.2397C14.783 22.2397 15.1322 22.2281 16.2246 22.1777C17.3153 22.128 18.0601 21.9552 18.7114 21.7021C19.385 21.44 19.956 21.0901 20.5262 20.5211C21.0964 19.9521 21.4457 19.3806 21.708 18.7073C21.9612 18.0564 22.135 17.312 22.1838 16.222C22.2335 15.1295 22.2451 14.7813 22.2451 12.0007C22.2451 9.22012 22.2335 8.8711 22.1838 7.77938C22.1342 6.68929 21.9612 5.94455 21.708 5.29409C21.4457 4.62085 21.0955 4.05017 20.5262 3.48031C19.9569 2.91045 19.385 2.56069 18.7122 2.29931C18.0601 2.0462 17.3153 1.87255 16.2254 1.82373C15.133 1.77409 14.7838 1.76172 12.0016 1.76172C9.21931 1.76172 8.86983 1.77327 7.77688 1.82373Z"
            fill="url(#paint1_radial_1305_3078)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1305_3078"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(4.47787 22.3364) scale(26.7483 26.7323)"
            >
              <stop offset="0.09" stop-color="#FA8F21" />
              <stop offset="0.78" stop-color="#D82D7E" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_1305_3078"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(14.1821 23.2538) scale(21.0814 21.0687)"
            >
              <stop offset="0.64" stop-color="#8C3AAA" stop-opacity="0" />
              <stop offset="1" stop-color="#8C3AAA" />
            </radialGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "Youtube",
      href: "https://youtube.com/@studenthousingmumbai1681",
      icon: (props) => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path
            d="M22.3622 6.84205C22.1173 5.92159 21.393 5.19545 20.4715 4.94659C18.8053 4.5 12.1201 4.5 12.1201 4.5C12.1201 4.5 5.4383 4.5 3.7687 4.94659C2.85059 5.19205 2.1263 5.91818 1.87807 6.84205C1.43262 8.5125 1.43262 12 1.43262 12C1.43262 12 1.43262 15.4875 1.87807 17.158C2.1229 18.0784 2.84719 18.8045 3.7687 19.0534C5.4383 19.5 12.1201 19.5 12.1201 19.5C12.1201 19.5 18.8053 19.5 20.4715 19.0534C21.3896 18.808 22.1139 18.0818 22.3622 17.158C22.8076 15.4875 22.8076 12 22.8076 12C22.8076 12 22.8076 8.5125 22.3622 6.84205Z"
            fill="#FF3000"
          />
          <path
            d="M9.98466 15.2148L15.5375 12L9.98466 8.78523V15.2148Z"
            fill="white"
          />
        </svg>
      ),
    },
  ],
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Explore Hostels", href: "/listings" },
    { name: "Blogs", href: "/blogs" },
    { name: "Locations", href: "/locations" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "FAQs", href: "/faqs" },
  ],
};

// const navigation = {
//   solutions: [
//     { name: 'Marketing', href: '#' },
//     { name: 'Analytics', href: '#' },
//     { name: 'Commerce', href: '#' },
//     { name: 'Insights', href: '#' },
//   ],
//   support: [
//     { name: 'Pricing', href: '#' },
//     { name: 'Documentation', href: '#' },
//     { name: 'Guides', href: '#' },
//     { name: 'API Status', href: '#' },
//   ],
//   company: [
//     { name: 'About', href: '#' },
//     { name: 'Blog', href: '#' },
//     { name: 'Jobs', href: '#' },
//     { name: 'Press', href: '#' },
//     { name: 'Partners', href: '#' },
//   ],
//   legal: [
//     { name: 'Claim', href: '#' },
//     { name: 'Privacy', href: '#' },
//     { name: 'Terms', href: '#' },
//   ],
//   social: [
//     {
//       name: 'Facebook',
//       href: '#',
//       icon: (props) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path
//             fillRule="evenodd"
//             d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//     {
//       name: 'Instagram',
//       href: '#',
//       icon: (props) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path
//             fillRule="evenodd"
//             d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//     {
//       name: 'Twitter',
//       href: '#',
//       icon: (props) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//         </svg>
//       ),
//     },
//     {
//       name: 'GitHub',
//       href: '#',
//       icon: (props) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path
//             fillRule="evenodd"
//             d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//     {
//       name: 'YouTube',
//       href: '#',
//       icon: (props) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path
//             fillRule="evenodd"
//             d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//   ],
// }

export default function Example() {
  return (
    <footer
      className="bg-gray-900 z-10 relative"
      aria-labelledby="footer-heading"
    >
      <div className="absolute inset-0 bg-[url(/bg-pattern-1.png)] z-0" />

      <h2 id="footer-heading" className="sr-only z-10">
        Footer
      </h2>
      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 justify-between">
          <div className="space-y-8">
            <div className="w-[170px] h-[80px]">
              <img
                className="w-full h-full object-contain"
                src="/logo-bw.png"
                alt="Company name"
              />
            </div>
            {/* <p className="text-sm leading-6 text-gray-300">
                Making the world a better place through constructing elegant hierarchies.
              </p> */}
            {/* <div className="flex space-x-10">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div> */}
          </div>

          <div className="text-sm md:text-lg text-white">
            Our hostels are designed to provide a safe, comfortable, and vibrant
            living space for students. With modern amenities, 24x7 security, and
            a focus on community living, we ensure a home away from home
            experience. Stay connected with us for the latest updates, offers,
            and services tailored just for you!
          </div>
        </div>

        <div className="mt-8 md:mt-14 border-y border-white/10 py-8 flex flex-col md:flex-row gap-8 md:gap-4 text-white w-full">
          <div className="flex flex-col justify-start gap-3.5 w-full md:w-1/2">
            <div className="font-semibold text-2xl">Get in touch</div>
            <div className="text-sm md:text-base w-full md:w-[40%]">
              Ganga Niwas, Next to SBI Bank, Across NMIMS University, VM Road
              Juhu, Vile Parle West, Mumbai- (56)
            </div>
            <div className="flex gap-2.5">
              <PhoneIcon className="w-5 h-5 md:w-6 md:h-6" />
              <Link
                href="tel:+91-9819780000"
                className="text-[#F8C14C] text-sm md:text-base"
              >
                +91-9819780000
              </Link>
            </div>
            <div className="flex gap-2.5">
              <PhoneIcon className="w-5 h-5 md:w-6 md:h-6" />
              <Link
                href="tel:+91-9004033884"
                className="text-[#F8C14C] text-sm md:text-base"
              >
                +91-9004033884
              </Link>
            </div>

            <div className="flex gap-2.5">
              <PhoneIcon className="w-5 h-5 md:w-6 md:h-6" />
              <Link
                href="tel:+91-8779003845"
                className="text-[#F8C14C] text-sm md:text-base"
              >
                +91-8779003845
              </Link>
            </div>
            <div className="flex gap-2.5">
              <MailIcon className="w-5 h-5 md:w-6 md:h-6" />
              <Link
                href="mailto:info@studenthousing.co.in"
                className="text-[#F8C14C] text-sm md:text-base"
              >
                info@studenthousing.co.in
              </Link>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-1/2 md:flex-row gap-4">
            <div className="flex flex-col w-full md:w-1/2">
              <div className="font-semibold text-2xl">Quick Links</div>
              <div>
                {/* <h3 className="text-sm font-semibold leading-6 text-white">Company</h3> */}
                <ul role="list" className="mt-4 md:mt-6 space-y-2 md:space-y-4">
                  {navigation.quickLinks.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} legacyBehavior>
                        <a className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <div className="font-semibold text-2xl">Support</div>
              <div>
                {/* <h3 className="text-sm font-semibold leading-6 text-white">Company</h3> */}
                <ul role="list" className="mt-4 md:mt-6 space-y-2 md:space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} legacyBehavior>
                        <a className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-6 flex-wrap justify-start mt-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    className="text-gray-500 hover:text-gray-400 bg-[#1E2533] p-2 rounded-[8px]"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center text-white opacity-80 py-6">
          © Student Housing India Private Limited. All rights reserved.
        </div>

        {/* <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} legacyBehavior>
                      <a className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <ul role="list" className="mt-6 space-y-4">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} legacyBehavior>
                      <a className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} legacyBehavior>
                      <a className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} legacyBehavior>
                      <a className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div> */}
        {/* <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20">
          <p className="text-xs leading-5 text-gray-400">
            &copy; Student Housing India Private Limited. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
}
