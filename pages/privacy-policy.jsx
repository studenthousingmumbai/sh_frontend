import Layout from "../components/Layout";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
<>
      <Head>
        <title>Privacy Policy | Student Housing</title>
        <meta
          name="description"
          content="Read the Privacy Policy of Student Housing India Pvt. Ltd. to understand how we collect, use, and protect your personal information."
        />
      </Head>
    
    <Layout>
      <div className="text-gray-800 px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">
          Effective Date: June 18, 2025 <br />
          Website:{" "}
          <a
            href="https://www.studenthousing.co.in"
            className="text-blue-600 underline"
          >
            www.studenthousing.co.in
          </a>
        </p>

        <Section title="1. Who We Are">
          <p>
            Student Housing India Pvt. Ltd. is a student accommodation provider
            operating since 2015, offering premium hostel and housing solutions
            to college students across India. With over 1,100 students residing
            at 15+ hostels, we also offer value-added services such as:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Nutritious daily meals</li>
            <li>Laundry</li>
            <li>Housekeeping</li>
            <li>Gym facilities</li>
            <li>24/7 security</li>
            <li>Wi-Fi and more</li>
          </ul>
        </Section>

        <Section title="2. Information We Collect">
          <p className="font-semibold mt-2">a. Personal Information:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full Name</li>
            <li>Contact Number</li>
            <li>Email Address</li>
            <li>Gender</li>
            <li>Date of Birth</li>
            <li>College Name and ID</li>
            <li>Address (permanent and local)</li>
            <li>Emergency Contact Details</li>
            <li>ID Proof (e.g., Aadhaar, Passport, or College ID)</li>
          </ul>

          <p className="font-semibold mt-4">b. Payment Information:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Billing details (amounts paid, dates, method of payment)</li>
            <li>
              Note: We do not store credit/debit card details; secure
              third-party gateways are used for transactions.
            </li>
          </ul>

          <p className="font-semibold mt-4">c. Usage Information:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>IP Address</li>
            <li>Browser Type and Version</li>
            <li>Pages Visited</li>
            <li>Duration of Visit</li>
            <li>Referring Websites</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul className="list-disc pl-5 space-y-1">
            <li>Process hostel bookings and manage your stay</li>
            <li>Contact you for updates or important information</li>
            <li>Provide support and respond to inquiries</li>
            <li>Improve services and user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-2">
            We do not sell, rent, or trade your personal information to third
            parties.
          </p>
        </Section>

        <Section title="4. Cookies and Tracking Technologies">
          <p>
            Our website uses cookies to enhance your experience, analyze site
            traffic, and personalize content. You can disable cookies through
            your browser settings, though some features may be limited as a
            result.
          </p>
        </Section>

        <Section title="5. Data Security">
          <ul className="list-disc pl-5 space-y-1">
            <li>SSL encryption on our website</li>
            <li>Role-based access to personal information</li>
            <li>Secure hosting and database storage</li>
          </ul>
          <p className="mt-2">
            While we take all reasonable measures to protect your data, no
            online method is entirely foolproof. Please also protect your own
            login information.
          </p>
        </Section>

        <Section title="6. Sharing of Information">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              With trusted vendors (e.g., food, laundry, or housekeeping
              partners)
            </li>
            <li>With payment gateways for billing purposes</li>
            <li>When required by law or to protect the safety of residents</li>
          </ul>
        </Section>

        <Section title="7. Your Rights">
          <ul className="list-disc pl-5 space-y-1">
            <li>Access and correct your personal data</li>
            <li>Request deletion of your data (subject to applicable laws)</li>
            <li>Withdraw consent for data use where applicable</li>
            <li>Receive a copy of the data we hold about you</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, please contact us at:
            <br />
            📧{" "}
            <a
              href="mailto:info@studenthousing.co.in"
              className="text-blue-600 underline"
            >
              info@studenthousing.co.in
            </a>
          </p>
        </Section>

        <Section title="8. Third-Party Links">
          <p>
            Our website may include links to other websites or services. We are
            not responsible for the privacy practices of these third parties.
            Please review their policies before providing any data.
          </p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>
            We may update this Privacy Policy periodically. The latest version
            will always be available on this page with the updated effective
            date.
          </p>
        </Section>

        <Section title="10. Contact Us">
          <p className="space-y-2">
            Student Housing India Pvt. Ltd. <br />
            📍 Plot number 32 Ganga Niwas
            <br />
            Vaikunthlal Mehta Road
            <br />
            Juhu, Vile Parle west
            <br />
            Mumbai - 400056 <br />
            📞 Phone: +91 98197 80000 <br />
            📧 Email:{" "}
            <a
              href="mailto:info@studenthousing.co.in"
              className="text-blue-600 underline"
            >
              info@studenthousing.co.in
            </a>{" "}
            <br />
            🌐 Website:{" "}
            <a
              href="https://www.studenthousing.co.in"
              className="text-blue-600 underline"
            >
              www.studenthousing.co.in
            </a>
          </p>
        </Section>
      </div>
    </Layout>
</>
  
  );
};

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div className="text-base space-y-2">{children}</div>
  </div>
);

export default PrivacyPolicy;
