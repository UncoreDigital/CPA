import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-blue-100">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <p>
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>
          <p>
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy. This Privacy
            Policy has been created with the help of the Privacy Policy
            Generator.
          </p>

          <h2 className="text-2xl font-bold mt-6">Interpretation and Definitions</h2>
          <h3 className="text-xl font-semibold mt-4">Interpretation</h3>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>

          <h3 className="text-xl font-semibold mt-4">Definitions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Account</strong>: a unique account created for You to access our Service.</li>
            <li><strong>Affiliate</strong>: an entity that controls, is controlled by or is under common control with a party.</li>
            <li><strong>Company</strong>: refers to Trusted Book Pro, 1451 W Cypress Creek Rd, Fort Lauderdale, FL 33309, USA.</li>
            <li><strong>Cookies</strong>: small files stored on Your Device to track browsing activity.</li>
            <li><strong>Country</strong>: Florida, United States</li>
            <li><strong>Device</strong>: any device that can access the Service.</li>
            <li><strong>Personal Data</strong>: any information relating to an identifiable individual.</li>
            <li><strong>Service Provider</strong>: third-party who processes data on behalf of the Company.</li>
            <li><strong>Usage Data</strong>: data collected automatically when using the Service.</li>
            <li><strong>Website</strong>: Trusted Book Pro, accessible from https://www.trustedbookpro.com</li>
            <li><strong>You</strong>: the individual using the Service.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6">Collecting and Using Your Personal Data</h2>
          <h3 className="text-xl font-semibold mt-4">Types of Data Collected</h3>
          <p>
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information such as Email address, First
            name and last name, and Usage Data.
          </p>

          <h3 className="text-xl font-semibold mt-4">Usage Data</h3>
          <p>
            Usage Data may include information such as Your Device’s IP address,
            browser type, browser version, the pages of our Service that You
            visit, the time and date of Your visit, the time spent on those
            pages, unique device identifiers and other diagnostic data.
          </p>

          <h2 className="text-2xl font-bold mt-6">Tracking Technologies and Cookies</h2>
          <p>
            We use Cookies and similar tracking technologies to monitor activity
            on Our Service. You can instruct Your browser to refuse Cookies, but
            some features may not work properly without them.
          </p>

          <h2 className="text-2xl font-bold mt-6">Use of Your Personal Data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain our Service</li>
            <li>To manage Your Account</li>
            <li>For the performance of a contract</li>
            <li>To contact You regarding updates or services</li>
            <li>To provide You with offers and promotions</li>
            <li>To manage Your requests</li>
            <li>For business transfers (mergers, acquisitions, etc.)</li>
            <li>For data analysis and service improvements</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6">Retention of Your Personal Data</h2>
          <p>
            Trusted Book Pro will retain Your Personal Data only as long as necessary
            to comply with legal obligations, resolve disputes, and enforce our
            agreements.
          </p>

          <h2 className="text-2xl font-bold mt-6">Security of Your Personal Data</h2>
          <p>
            While we use commercially acceptable means to protect Your data, no
            method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="text-2xl font-bold mt-6">Children’s Privacy</h2>
          <p>
            Our Service does not address anyone under the age of 13. If we
            become aware that we have collected Personal Data from children
            without parental consent, we will remove it.
          </p>

          <h2 className="text-2xl font-bold mt-6">Changes to this Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Updates will be
            posted on this page with a new "Last updated" date.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
