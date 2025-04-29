import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const ContactCard = ({ contactdata }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div>
        <h1 className="text-blue-dark text-4xl font-medium font-oswald md:text-5xl">
          Find Us in Your City
        </h1>
      </div>
      {contactdata.map((contact, indx) => (
        <Link
          key={indx}
          className="bg-white p-2 shadow-md hover:scale-105 transition-transform duration-700"
        >
          <img src={contact.img} alt="" />
          <div className="mt-4 space-y-3">
            <h2 className="font-medium font-oswald text-xl text-gray-700">{contact.office}</h2>
            <p className="font-poppins text-lg text-gray-600">{contact.subTitle}</p>
            <span className="flex items-center flex-wrap gap-3 text-blue-500 font-poppins">
              <span className="flex items-center gap-2 ">
                <FaPhoneVolume />
                <a href="#">{contact.phone}</a>
              </span>
              {contact?.phone2 && (
                <span className="flex items-center gap-2">
                  <FaPhoneVolume />
                  <a href="#">{contact.phone2}</a>
                </span>
              )}

              <span className="flex items-center gap-2">
                <MdLocationOn />
                <a href="#">{contact.location}</a>
              </span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ContactCard;
