import React, { useState } from "react";
import Logo from "../../assets/aladdin.png";
import { Link } from "react-router-dom";
// import SearchModel from "./models/SearchModel";
import { FaArrowRight, FaTimes, FaUser } from "react-icons/fa";
// import { IoSearch } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
// import instution from "../../assets/instution2.png";
// import student from "../../assets/studenticon2.png";
import ContactModel from "./models/ContactModel";
import InfinityTextSlider from "./slider/InfinityTextSlider";
const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const navItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Courses",
      link: "/courses",
    },
    {
      label: "Contact Us",
      link: "/contact",
    },
  ];

  const IsSearchBoxOpen = () => {
    setSearchOpen((open) => !open);
  };

  const IsContactButtonOpen = () => {
    setContactOpen((open) => !open);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-[9999] bg-white">
      <div className="relative px-4 lg:px-8 xl:px-0 max-w-screen-xl mx-auto flex items-center justify-between py-3 md:py-5">
        <Link to="/">
          <img src={Logo} className="h-16" alt="Company Logo" />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <ul className="flex space-x-6 items-center">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.link}
                  className={`font-medium font-poppins text-[16px] flex items-center space-x-2 transition-colors text-blue-dark hover:text-blue-dark/80`}
                >
                  {item.label}
                  {item?.subItems && (
                    <>
                      <MdOutlineArrowDropDown />
                    </>
                  )}
                </Link>
              </li>
            ))}
            {/* <li>
              <Link
                className={`font-poppins text-[26px] transition-colors text-blue-dark hover:text-blue-dark/80`}
              >
                <IoSearch onClick={IsSearchBoxOpen} />
                {searchOpen && <SearchModel setSearchOpen={setSearchOpen} />}
              </Link>
            </li> */}
            {/* <li>
            
          </li> */}
          </ul>
          <button
            onClick={IsContactButtonOpen}
            className="flex items-center gap-x-2 bg-blue-dark hover:scale-105 hover:bg-blue-dark/70 transition-transform duration-500 text-white text-[16px] md:text-[20px] font-poppins py-3 px-5"
          >
            Book Free Consultation <FaArrowRight />
          </button>

          {contactOpen && <ContactModel setContactOpen={setContactOpen} />}
        </div>
        {/*third section button */}
        {/* <div className="hidden md:block relative z-50">
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <Link
                className={`font-medium font-poppins text-[16px] relative inline-block text-left group transition-colors text-blue-dark hover:text-blue-dark/80`}
              >
                <span className="flex items-center space-x-1">
                  <FaUser /> <MdOutlineArrowDropDown />
                </span>
                <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white border-2 shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                  <div className="py-1 divide-y divide-gray-200">
                    <Link className="flex items-center space-x-3 px-4 py-2 text-[16px] font-medium font-poppins hover:bg-gray-100">
                      <img src={student} alt="" className="size-8" />
                      <span>Student</span>
                    </Link>
                    <Link className="flex items-center space-x-3 px-4 py-2 text-[16px] font-medium font-poppins hover:bg-gray-100">
                      <img src={instution} alt="" className="size-8" />
                      <span>Institution</span>
                    </Link>
                  </div>
                </div>
              </Link>
              <button
                onClick={IsContactButtonOpen}
                className="flex items-center gap-x-2 bg-blue-dark hover:scale-105 hover:bg-blue-dark/70 transition-transform duration-500 text-white text-[164px] md:text-[20px] font-poppins py-3 px-5"
              >
                Book Free Session <FaArrowRight />
              </button>

              {contactOpen && <ContactModel setContactOpen={setContactOpen} />}
            </div>
          </div>
        </div> */}
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4 transition-transform duration-500">
          {/* <Link
            className={`font-poppins text-[26px] transition-colors text-blue-dark hover:text-blue-dark/80`}
          >
            <IoSearch onClick={IsSearchBoxOpen} />
            {searchOpen && <SearchModel setSearchOpen={setSearchOpen} />}
          </Link> */}
          <button
            className="text-gray-800 hover:text-red-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 border-2 border-blue-dark text-blue-dark rounded-md p-1 font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        {/* mobile screen */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden bg-black/50 transition-transform duration-500">
            <div
              className="absolute inset-0 bg-opacity-75"
              onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* Menu Panel */}
            <div className="absolute right-0 top-0 h-full w-6/12 sm:w-4/12 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full relative">
                <Link to="/">
                  <img src={Logo} className="h-14" alt="Company Logo" />
                </Link>
                {/* Menu Header */}

                <button
                  className="text-white hover:text-white absolute top-5 right-5 bg-blue-dark text rounded-full p-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaTimes className="text-16" />
                </button>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <ul className="space-y-2 divide-y divide-gray-300">
                    {navItems.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.link}
                          className="block px-4 py-2 text-lg font-medium text-blue-dark rounded-lg transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-blue-dark w-full">
        <InfinityTextSlider />
      </div>
    </div>
  );
};

export default Header;
