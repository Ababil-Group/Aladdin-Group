import React from "react";

const FooterLinks = () => {
  const importantLinks = [
    "Upcoming Events",
    "Upcoming Intakes",
    "News",
    "Free Online Counselling",
    "Sitemap",
    "Statement of Purpose",
    "LOR",
    "Career",
    "Youth Mobility Scheme",
    "Comments about MOEC for the AIRC",
    "Visa Achievers",
    "Contact Us",
    "Blogs",
    "Test Prep",
    "UK India TOEFL Scholarship",
  ];

  const studyAbroad = [
    "USA",
    "UK",
    "Canada",
    "Australia",
    "New Zealand",
    "Germany",
    "Ireland",
    "France",
    "Italy",
    "Switzerland",
    "Netherland",
    "Spain",
  ];

  const ieltsCenters = [
    "Jaipur",
    "Delhi",
    "Noida",
    "Pune",
    "Lucknow",
    "Hyderabad",
    "Agra",
    "Aurangabad",
    "Indore",
  ];

  const branches = [
    "Jaipur",
    "Delhi",
    "Mumbai",
    "Noida",
    "Indore",
    "Ahmedabad",
    "Aurangabad",
    "Pune",
    "Lucknow",
    "Hyderabad",
    "Agra",
    "Dubai",
  ];

  const topUniversities = [
    "Top Universities in Canada",
    "Top Universities in USA",
    "Top Universities in UK",
    "Top Universities in Australia",
    "Top Universities in New Zealand",
    "Top Universities in Germany",
  ];

  return (
    <footer className=" p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Important Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins text-gray-900">
              Important Links
            </h3>
            <ul className="space-y-2">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-gray-700 text-gray-900 text-[15px] font-poppins"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Abroad Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins text-gray-900">
              Study Abroad
            </h3>
            <ul className="space-y-2">
              {studyAbroad.map((country, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-gray-700 text-gray-900 text-[15px] font-poppins"
                  >
                    {country}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* IELTS Centers Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins text-gray-900">
              IELTS Centre
            </h3>
            <ul className="space-y-2">
              {ieltsCenters.map((center, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-gray-700 text-gray-900 text-[15px] font-poppins"
                  >
                    {center}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Branches Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins text-gray-900">
              Our Branches
            </h3>
            <ul className="space-y-2">
              {branches.map((branch, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-gray-700 text-gray-900 text-[15px] font-poppins"
                  >
                    {branch}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Universities Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins text-gray-900">
              Top Universities
            </h3>
            <ul className="space-y-2">
              {topUniversities.map((university, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-gray-700 text-gray-900 text-[15px] font-poppins"
                  >
                    {university}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Meridean Overseas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks;
