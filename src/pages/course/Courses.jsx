import React, { useCallback, useEffect, useState } from "react";
import ai from "../../assets/artificial.png"
import FqsList from "../components/FqsList";
const Courses = () => {
  const homeData = [
    {
      title: "Overview",
      link: "#overview",
    },
    {
      title: "Artificial Intelligence Courses in Abroad - Important Highlights",
      link: "#highlights",
    },
    {
      title: "Why Study Artificial Intelligence Courses in the UK?",
      link: "#study",
    },
    {
      title: "Entry Requirements for AI Programs in the UK",
      link: "#eligibility",
    },
    {
      title: "Artificial Intelligence Courses in Abroad Universities",
      link: "#universities",
    },
    {
      title: "List of Artificial Intelligence Courses in the UK",
      link: "#list",
    },
    {
      title: "Artificial Intelligence Course Fees and Living Costs in UK",
      link: "#living",
    },
    {
      title: "Student Visa Cost for Artificial Intelligence Courses in the UK",
      link: "#visa",
    },
    {
      title: "Scholarships for Artificial Intelligence Courses in the UK",
      link: "#scholarships",
    },
    {
      title: "Salary after Artificial Intelligence Courses in the UK",
      link: "#salary",
    },
    {
      title: "Final Considerations",
      link: "#conclusion",
    },
    {
      title: "FAQs",
      link: "#FAQs",
    },
  ];

  const highlightData = [
    {
      particular: "Course Name",
      statistic: "Artificial Intelligence (AI)",
    },
    {
      particular: "Total AI Course Universities",
      statistic: "50+ in UK",
    },
    {
      particular: "Top Careers After AI",
      statistic:
        "AI Engineer, Robotics Scientist, Machine Learning Specialist, Data Scientist, NLP Researcher",
    },
    {
      particular: "Exams Required",
      statistic: "IELTS, PTE, TOEFL, Duolingo (UKVI-approved)",
    },
    {
      particular: "Average UK Visa Cost",
      statistic: "£363 (Student Visa) + £490/year (IHS Surcharge)",
    },
    {
      particular: "Scholarships",
      statistic:
        "Chevening Scholarships, GREAT Scholarships, Commonwealth Scholarships, University-specific AI bursaries",
    },
    {
      particular: "Top UK Universities",
      statistic:
        "University of Cambridge, University of Oxford, Imperial College London, University of Edinburgh, UCL",
    },
  ];

  const aiRankingUnivercity = [
    {
      univercity: "University of Cambridge",
      program: "MPhil in Machine Learning and Machine Intelligence",
      duration: "11 months",
      free: "£32,405",
    },
    {
      univercity: "University of Oxford",
      program: "MSc in Advanced Computer Science (AI specialisation)",
      duration: "11 months",
      free: "£32,405",
    },
    {
      univercity: "University of Oxford",
      program: "Oxford, United Kingdom",
      duration: "1 year",
      free: "Varies",
    },
    {
      univercity: "University College London (UCL)",
      program: "Robotics and Artificial Intelligence MEng",
      duration: "4 years",
      free: "£38,300",
    },
    {
      univercity: "University of Edinburgh",
      program: "MSc Artificial Intelligence; BSc Artificial Intelligence",
      duration: "1-4 years",
      free: "£32,200 (BSc)",
    },
    {
      univercity: "University of Manchester",
      program: "MSc Artificial Intelligence",
      duration: "1 year",
      free: "Varies",
    },

    {
      univercity: "University of St Andrews",
      program: "MSc Artificial Intelligence",
      duration: "1 year",
      free: "Varies",
    },
    {
      univercity: "City, University of London",
      program: "MSc Artificial Intelligence",
      duration: "1 year",
      free: "Varies",
    },
    {
      univercity: "University of Sheffield",
      program: "BSc Computer Science (Artificial Intelligence)",
      duration: "3 years",
      free: "£26,950",
    },
    {
      univercity: "Queen Mary University of London",
      program: "BSc/MSc in Computer Science and Artificial Intelligence",
      duration: "3-4 years",
      free: "£26,250–£28,950",
    },
  ];

  const quRankingSub = [
    {
      univercity: "University of Cambridge",
      country: "Cambridge, UK",
      quRank: "3",
    },
    {
      univercity: "University of Oxford",
      country: "Oxford, UK",
      quRank: "4",
    },
    {
      univercity: "Imperial College London",
      country: "London, UK",
      quRank: "6",
    },
    {
      univercity: "The University of Manchester",
      country: "Manchester, UK",
      quRank: "32",
    },
  ];

  const listAi = [
    {
      list: "Human-Computer Interaction",
    },
    {
      list: "Machine Learning & Autonomous Systems",
    },
    {
      list: "AI & Computer Science",
    },
    {
      list: "AI & Data Science",
    },
    {
      list: "Control Systems & AI (with Industry Placements)",
    },
    {
      list: "Ethical AI & Biosciences",
    },
    {
      list: "Human-Centred Big Data",
    },
    {
      list: "Financial Intelligence & AI",
    },
  ];

  const scholarship = [
    {
      list: "The DeepMind Scholarship",
    },
    {
      list: "Dean Benson Scholarship",
    },
    {
      list: "£10,000 OfS Conversion MSc Scholarships",
    },
    {
      list: "Manju Mehrotra Scholarship",
    },

    {
      list: "Aziz Foundation Scholarship",
    },

    {
      list: "Cardiff India scholarships",
    },
  ];

  const criteria = [
    {
      list: "Eligibility criteria",
    },
    {
      list: "Top AI courses & specializations",
    },
    {
      list: "Tuition fees & scholarships",
    },
    {
      list: "Best universities for AI",
    },
    {
      list: "Career prospects & salaries",
    },
  ];

  const [activeLink, setActiveLink] = useState(null);

  const handleScroll = useCallback(() => {
    const sections = homeData.map((data) =>
      document.getElementById(data.link.slice(1))
    );
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const section of sections) {
      if (!section) continue;
      const { offsetTop, offsetHeight } = section;
      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        setActiveLink(section.id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  function throttle(fn, wait) {
    let time = Date.now();
    return function () {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  }

  return (
    <div className="bg-blue-seondary">
      <section className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Main Content (left side) */}
          <div className="hidden w-72 flex-shrink-0 md:block space-y-3 bg-blue-seondary text-gray-800">
            <div className="sticky top-4">
              <ul className="border border-gray-300 divide-y divide-gray-300 shadow-md">
                {homeData.map((data, indx) => {
                  const sectionId = data.link.slice(1);
                  return (
                    <li
                      key={indx}
                      className={`p-0 ${
                        activeLink === sectionId
                          ? "bg-blue-dark text-white"
                          : "hover:bg-gray-200"
                      }`}
                    >
                      <a
                        href={data.link}
                        onClick={(e) => {
                          e.preventDefault();
                          const section = document.getElementById(sectionId);
                          if (section) {
                            setActiveLink(sectionId);
                            section.scrollIntoView({
                              behavior: "smooth",
                              block: "center",
                            });
                            setTimeout(() => handleScroll(), 1000);
                          }
                        }}
                        className={`block p-2 font-poppins ${
                          activeLink === sectionId
                            ? "text-white"
                            : "text-gray-800 hover:text-gray-900"
                        }`}
                      >
                        {data.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Sidebar Links (right side) */}
          <div className=" flex-1">
            <div className="sticky top-4 p-4 space-y-8">
              <h1 className="text-2xl md:text-4xl font-bold text-blue-dark font-poppins">
                International Artificial Intelligence Education Programs
              </h1>
              <div className="relative">
                <img
                  src={ai}
                  alt="Artificial Intelligence Program"
                  className="w-full object-contain"
                />
                {/* <div className="absolute inset-0 bg-white/2"></div> */}
              </div>
              {/* part one */}
              <div id="overview">
                <h1 className="text-blue-dark text-xl md:text-3xl font-bold font-poppins">
                  Overview
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  Artificial Intelligence (AI) has emerged as a revolutionary
                  field with the power to transform industries worldwide. As
                  demand for skilled AI professionals surges, pursuing
                  Artificial Intelligence courses abroad has become a top choice
                  for students seeking world-class education and global
                  exposure.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  Studying AI abroad opens doors to lucrative career
                  opportunities, cutting-edge research, and access to
                  prestigious institutions. Whether you're looking for AI
                  courses after 12th or advanced specializations, international
                  education provides unparalleled advantages in this
                  fast-growing field.
                </p>
                <p className="text-xl text-gray-800 font-poppins font-semibold">
                  This guide explores everything you need to know about studying
                  Artificial Intelligence abroad, including:
                </p>
                <div>
                  <ul className="space-y-2 px-4">
                    {criteria.map((list, idx) => (
                      <li
                        key={idx}
                        className="font-poppins text-lg text-gray-800 flex"
                      >
                        <span className="text-blue-dark pr-2">✔</span>{" "}
                        {list.list}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* part two */}
              <div>
                <h1
                  id="highlights"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Global Opportunities in AI Education
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  There are 150+ universities abroad that offer Artificial
                  Intelligence courses. These universities do not have any
                  specific requirements except common criteria.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  Candidates who want to study in AI Courses after 12th can
                  check the important highlights of the course below.
                </p>

                <div className="mt-12 border-l border-r border-b border-gray-300 overflow-x-auto">
                  <div className="bg-red-primary w-full p-2">
                    <h3 className="text-white text-xl font-bold font-poppins">
                      Artificial Intelligence Courses Abroad Highlights
                    </h3>
                  </div>
                  <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-300">
                      <tr className="divide-x divide-gray-300">
                        <th className="py-3 px-6 font-poppins font-bold">
                          Particulars
                        </th>
                        <th className="py-3 px-6 font-poppins font-bold">
                          Statistics (UK Focus)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y divide-gray-300">
                      {highlightData.map((data, idx) => (
                        <tr className="divide-x divide-gray-300" key={idx}>
                          <td className="px-2 py-2 font-poppins">
                            {data.particular}
                          </td>
                          <td className="px-2 py-2 font-poppins">
                            {data.statistic}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* part three */}
              <div>
                <h1
                  id="study"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Why Study Artificial Intelligence Courses in the UK?
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  Enrolling in artificial intelligence programs abroad provides
                  significant benefits for future AI specialists. Below are key
                  reasons why undertaking AI studies after 12th grade in
                  international destinations is a strategic decision.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Academic Excellence:
                  </span>
                  Leading UK universities are globally recognized for their AI
                  innovation and teaching standards. Partnering with Aladdin
                  Group, students gain access to world-class faculty,
                  participate in groundbreaking research, and utilize
                  state-of-the-art methodologies.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1.5">
                    Advanced Facilities:
                  </span>
                  UK institutions often feature specialized AI labs,
                  high-performance computing systems, and industry partnerships.
                  These resources elevate learning experiences and enable
                  hands-on work with real-world AI applications.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Career Advancement:
                  </span>
                  Obtaining an AI qualification from a top UK university expands
                  job prospects. Graduates develop a competitive edge, accessing
                  global networks and opportunities with leading AI
                  organizations that prioritize UK-trained professionals.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Innovative Learning Environments:
                  </span>{" "}
                  The UK’s dynamic AI landscape exposes students to diverse
                  methodologies and emerging trends, fostering adaptable
                  problem-solving skills and cross-disciplinary expertise.
                </p>
              </div>

              {/* part four */}
              <div>
                <h1
                  id="eligibility"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Entry Requirements for AI Programs in the UK
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  The eligibility criteria for Artificial Intelligence Courses
                  in the UK may vary by institution. However, there are certain
                  universal requirements for pursuing AI studies:
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Educational Background:
                  </span>
                  A 12th-grade qualification and a bachelor's degree in a
                  relevant subject, such as computer science, engineering,
                  mathematics, or statistics, are often prerequisites for
                  admission to AI courses. Some universities may admit students
                  with prior coursework or work experience in AI-related fields.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Letters of Recommendation:
                  </span>
                  Universities often ask for letters of recommendation from
                  professors or professionals who can vouch for the applicant's
                  academic capabilities and potential.
                </p>

                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Statement of Purpose:
                  </span>
                  A compelling
                  <a href="#" className="text-blue-500 px-1">
                    statement of purpose
                  </a>
                  outlining the student's motivations, career aspirations, and
                  alignment with the chosen AI program is a crucial part of the
                  application process.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  It is essential to review the specific eligibility criteria
                  for each UK university and programme of interest, as they may
                  differ.
                </p>
              </div>

              {/* part five */}
              <div>
                <h1
                  id="universities"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Artificial Intelligence Courses in Abroad Universities
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>

              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  When it comes to studying artificial intelligence in the UK,
                  several universities stand out for their outstanding
                  programmes, research excellence, and industry connections.
                  These institutions provide students with the advanced
                  knowledge and practical skills needed to excel in the field of
                  AI.
                </p>

                <div className="mt-12 border-l border-r border-b border-gray-300 overflow-x-auto">
                  <div className="bg-red-primary w-full p-2">
                    <h3 className="text-white text-lg md:text-xl font-bold font-poppins">
                      Top UK Universities for Artificial Intelligence Courses
                    </h3>
                  </div>
                  <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-300">
                      <tr className="divide-x divide-gray-300">
                        <th className="py-3 px-6 font-poppins font-bold">
                          University
                        </th>
                        <th className="py-3 px-6 font-poppins font-bold">
                          Notable AI Programme(s)
                        </th>
                        <th className="py-3 px-6 font-poppins font-bold">
                          Typical Duration
                        </th>
                        <th className="py-3 px-6 font-poppins font-bold">
                          Indicative Fees (International)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y divide-gray-300">
                      {aiRankingUnivercity.map((data, idx) => (
                        <tr className="divide-x divide-gray-300" key={idx}>
                          <td className="px-2 py-2 font-poppins font-medium text-sm">
                            {data.univercity}
                          </td>
                          <td className="px-2 py-2 font-poppins">
                            {data.program}
                          </td>
                          <td className="px-2 py-2 font-poppins">
                            {data.duration}
                          </td>
                          <td className="px-2 py-2 font-poppins">
                            {data.free}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-12 border-l border-r border-b border-gray-300 overflow-x-auto">
                  <div className="bg-red-primary w-full p-2">
                    <h3 className="text-white text-lg md:text-lg font-semibold md:font-bold font-poppins">
                      Artificial Intelligence Courses After 12th Abroad: Top UK
                      Universities (QS Subject Rankings)
                    </h3>
                  </div>
                  <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-300">
                      <tr className="divide-x divide-gray-300">
                        <th className="py-3 px-6 font-poppins font-bold">
                          University Name
                        </th>
                        <th className="py-3 px-6 font-poppins font-bold">
                          Location
                        </th>
                        <th className="py-3 px-6 font-poppins font-bold">
                          QS World University Rankings by Subject 2023
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y divide-gray-300">
                      {quRankingSub.map((data, idx) => (
                        <tr className="divide-x divide-gray-300" key={idx}>
                          <td className="px-2 py-2 font-poppins font-medium text-sm">
                            {data.link ? (
                              <a href="#" className="text-blue-500">
                                {data.univercity}
                              </a>
                            ) : (
                              data.univercity
                            )}
                          </td>
                          <td className="px-2 py-2 font-poppins">
                            {data.country}
                          </td>
                          <td className="px-2 py-2 font-poppins">
                            {data.quRank}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* part six */}
              <div>
                <h1
                  id="list"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  List of Artificial Intelligence Courses in Abroad
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  Students pursuing artificial intelligence in the UK have
                  access to a wide range of courses designed to suit their
                  interests and career goals. AI courses are available at
                  multiple academic levels, including bachelor’s, master’s, and
                  postgraduate diploma programmes.
                </p>
                <p className="text-lg text-gray-800 font-medium font-poppins">
                  Here are some popular AI subject areas offered by UK
                  institutions:
                </p>
                <div>
                  <ul
                    className="space-y-2 px-4"
                    style={{ listStyle: "square" }}
                  >
                    {listAi.map((list, idx) => (
                      <li
                        key={idx}
                        className="font-poppins text-lg text-gray-800 marker:text-blue-dark"
                      >
                        {list.list}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* part seven */}
              <div>
                <h1
                  id="living"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Artificial Intelligence Course Fees and Living Costs in UK
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>

              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  Understanding tuition fees and living expenses is essential
                  for planning your studies in the UK. Costs can vary depending
                  on the university, city, and type of programme.
                </p>

                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Tuition Fees -
                  </span>
                  For international students, AI course fees typically range
                  from £15,000 to £30,000 per year. Fees may be higher at
                  prestigious universities or for specialised AI programmes.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  <span className="font-bold text-gray-700 pr-1">
                    Living Costs -
                  </span>
                  Average living expenses-including accommodation, food,
                  transportation, and other essentials-generally range from
                  £10,000 to £18,000 per year, depending on the location and
                  lifestyle.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  It is important to check the latest tuition and living costs
                  for your chosen university and course. Aladdin Group
                  counsellors can provide updated guidance and help you plan
                  your budget.
                </p>
                <h2 className="font-bold text-xl text-gray-800 font-poppins">
                  Student Visa Cost for Artificial Intelligence Courses in the
                  UK
                </h2>
                <p className="text-lg text-gray-800 font-poppins">
                  Obtaining a student visa is required for international
                  students studying AI in the UK.
                </p>

                <div>
                  <ul
                    className="space-y-2 px-4"
                    style={{ listStyle: "square" }}
                  >
                    <li className="font-poppins text-lg text-gray-800 marker:text-blue-dark">
                      <span className="pr-2 font-bold text-gray-700">
                        Visa Application Fee:
                      </span>
                      Approximately £348 for applications made outside the UK.
                    </li>
                    <li className="font-poppins text-lg text-gray-800 marker:text-blue-dark">
                      <span className="pr-2 font-bold text-gray-700">
                        Immigration Health Surcharge (IHS):
                      </span>
                      £470 per year for international students, mandatory for
                      all overseas applicants.
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-gray-800 font-poppins">
                  These costs are subject to change, so always verify current
                  fees before applying.
                </p>
                <h2 className="font-bold text-xl text-gray-800 font-poppins">
                  Scholarships for Artificial Intelligence Courses in the UK
                </h2>
                <p className="text-lg text-gray-800 font-poppins">
                  Studying AI in the UK can be expensive, but various
                  scholarships and funding options are available to support
                  international students. Many UK universities, government
                  bodies, and private organisations offer scholarships
                  specifically for AI or related fields.
                </p>
                <p className="text-lg text-gray-800 font-bold font-poppins">
                  Examples include:
                </p>
                <div>
                  <ul
                    className="space-y-2 px-4"
                    style={{ listStyle: "square" }}
                  >
                    {scholarship.map((list, idx) => (
                      <li
                        key={idx}
                        className="font-poppins text-lg text-gray-800 marker:text-blue-dark"
                      >
                        {list.list}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* part eight */}
              <div>
                <h1
                  id="visa"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Student Visa Cost for Artificial Intelligence Courses in the
                  UK
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  Securing a student visa is a vital step for international
                  students planning to study artificial intelligence in the UK.
                  The main costs involved are:
                </p>
                <div>
                  <ul
                    className="space-y-2 px-4"
                    style={{ listStyle: "square" }}
                  >
                    <li className="font-poppins text-lg text-gray-800 marker:text-blue-dark">
                      <span className="pr-2 font-bold text-gray-700">
                        Visa Application Fee:
                      </span>
                      The standard fee for a UK student visa (Tier 4/Student
                      Route) is approximately £363 when applying from outside
                      the UK.
                    </li>
                    <li className="font-poppins text-lg text-gray-800 marker:text-blue-dark">
                      <span className="pr-2 font-bold text-gray-700">
                        Immigration Health Surcharge (IHS):
                      </span>
                      International students are also required to pay the IHS,
                      which is £470 per year. This fee provides access to the
                      National Health Service (NHS) during your studies.
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-gray-800 font-poppins">
                  These charges are mandatory for all overseas students and
                  should be factored into your overall study budget. Fees may be
                  updated periodically, so always check the latest requirements
                  before applying.
                </p>
              </div>

              {/* part ning */}
              <div>
                <h1
                  id="scholarships"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Scholarships for Artificial Intelligence Courses in the UK
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  It might be expensive to study artificial intelligence
                  subjects abroad, but there are several Pursuing AI studies in
                  the UK can be a significant investment, but a range of
                  scholarships and financial aid options are available to help
                  international students manage costs. Scholarships may be
                  provided by universities, government bodies, or private
                  organisations, and often target students with strong academic
                  records or financial need.
                </p>
                <p className="text-lg text-gray-700 font-bold font-poppins">
                  Notable awards include:
                </p>
                <div>
                  <ul
                    className="space-y-2 px-4"
                    style={{ listStyle: "square" }}
                  >
                    {scholarship.map((list, idx) => (
                      <li
                        key={idx}
                        className="font-poppins text-lg text-gray-800 marker:text-blue-dark"
                      >
                        {list.list}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-lg text-gray-800 font-poppins">
                  Each scholarship has its own eligibility criteria and
                  application process. Prospective students are encouraged to
                  research thoroughly or consult Aladdin Group counsellors for
                  up-to-date information and application support.
                </p>
              </div>

              {/* part ten */}
              <div>
                <h1
                  id="salary"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Salary after Artificial Intelligence Courses in the UK
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  Completing an artificial intelligence course in the UK can
                  lead to rewarding career opportunities and competitive
                  salaries. Earnings vary depending on job title, sector,
                  location, and experience. According to the Office for National
                  Statistics, the average annual salary for IT and
                  telecommunications professionals in the UK is around £50,000.
                  AI specialists with advanced qualifications and niche
                  expertise-such as in machine learning, natural language
                  processing, or robotics-can command even higher salaries,
                  especially in sectors like finance, healthcare, and
                  technology.
                </p>
              </div>
              {/* part eleven */}
              <div>
                <h1
                  id="conclusion"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  Final Considerations
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-poppins">
                  Pursuing artificial intelligence studies overseas offers
                  unparalleled advantages, including access to globally renowned
                  institutions, innovative learning environments,
                  state-of-the-art facilities, and enhanced career prospects.
                  While tuition and living costs vary by study destination,
                  scholarships and funding opportunities are widely available to
                  ease financial burdens for international students.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  AI professionals can expect competitive salaries influenced by
                  qualifications, specialisation, and regional market demands.
                  To make informed decisions, prospective students should
                  thoroughly evaluate programmes, institutions, costs, funding
                  options, and career pathways.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  The insights provided here aim to guide students seeking top
                  AI programmes abroad. For tailored advice, consult Aladdin
                  Group’s expert counsellors for UK-focused AI course
                  placements.
                </p>
                <p className="text-lg text-gray-800 font-poppins">
                  If unable to visit in person, utilise online consultation
                  services via our website.
                </p>
              </div>

              {/* part twoleve */}
              <div>
                <h1
                  id="FAQs"
                  className="text-blue-dark text-xl md:text-3xl font-bold font-poppins"
                >
                  FAQs
                </h1>
                <div className="w-40 h-1 mt-2 bg-red-primary" />
              </div>
              <FqsList />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
