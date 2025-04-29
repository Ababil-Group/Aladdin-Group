import React from "react";
import AI from "../../assets/11.jpg";
import { FaArrowRight } from "react-icons/fa";
import graduated from "../../assets/homepageBenefit.jpg";
import shape from "../../assets/shape-28.png";
const HomePage = () => {
  const lists = [
    {
      list: "AI Specialists: Focused solely on AI/ML/Data Science at Russell Group universities.",
    },
    {
      list: "Industry-Ready Guidance: Match programs to UK job market needs.",
    },
    {
      list: "Technical Support: SOP reviews, PhD proposals, portfolio help.",
    },
    {
      list: "Visa Success: 98% approval rate with mock interviews/documentation experts.",
    },
    {
      list: "Beyond Admission: Workshops, internships, networking.",
    },
  ];

  const stats = [
    {
      data: "98%",
      title: "UK Visa Approval Rate for AI Students",
    },
    {
      data: "85%",
      title: "Scholarship Success Rate for MSc Applicants",
    },
    {
      data: "24-Hour",
      title: "Application Turnaround Guarantee",
    },
  ];

  return (
    <div className="bg-white">
      <div
        className="bg-cover bg-center py-16  px-2"
        style={{ backgroundImage: `url(${AI})` }}
      >
        <div className="max-w-screen-lg mx-auto">
          <div className="max-w-screen-sm space-y-10">
            <h1 className="text-5xl font-semibold font-oswald leading-15 tracking-wider  text-blue-dark">
              Trusted UK AI Education Specialists
            </h1>
            <p className="text-lg font-poppins text-gray-800 text-justify">
              Aladdin Group partners with leading UK universities to place
              international students in cutting-edge Artificial Intelligence
              programs. From course selection to visa success, we simplify your
              journey to studying AI in England.
            </p>

            <a
              href="#consultation"
              className="inline-flex items-center gap-2 bg-blue-dark hover:scale-105 hover:bg-blue-dark/70 transition-transform duration-500 text-white text-[20px] font-poppins py-3 px-5"
            >
              Book Your Free UK AI Consultation{" "}
              <span>
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 my-16 gap-8">
          <div className="relative">
            <img src={graduated} alt="" className="p-2" />
            <div className="absolute inset-0 bg-white/20"></div>
          </div>
          <div className="space-y-6 p-2">
            <h2 className="text-4xl font-bold font-poppins text-blue-dark">
              Your Pathway to Premier AI Education in the UK
            </h2>
            <p className="text-gray-800 text-lg font-poppins text-justify">
              At Aladdin Group, we're not just consultants - we're your
              strategic partners in securing admissions to the UK's most
              prestigious Artificial Intelligence programs. Our London-based
              team of AI specialists provides unmatched expertise in navigating
              the competitive landscape of UK technical education.
            </p>

            <ul
              className="space-y-3 p-4 marker:text-blue-dark"
              style={{ listStyle: "square" }}
            >
              {lists.map((list, inx) => (
                <li key={inx} className="space-y-3">
                  <span className="flex gap-4 font-poppins text-lg text-gray-800 marker:text-blue-dark">
                    {list.list}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center py-16 px-2"
        style={{ backgroundImage: `url(${shape})` }}
      >
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="text-center">
            <h3 className="text-4xl sm:text-5xl font-semibold font-oswald leading-15 tracking-wider uppercase text-blue-dark">
              Our Customers Are Always Happy
            </h3>
          </div>
          <div className="mt-12">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-y-10 ">
              {stats.map((item, idx) => (
                <li key={idx} className="text-center px-12 md:px-16">
                  <h4 className="text-5xl text-blue-dark font-oswald font-bold">
                    {item.data}
                  </h4>
                  <p className="mt-3 font-poppins text-lg font-medium">
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
