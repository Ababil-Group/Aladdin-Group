import React, { useRef, useState } from "react";
import contact from "../../assets/bookyouronline.jpg";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { TbLoader } from "react-icons/tb";
const Contact = () => {
  const [submitRign, setSubmitRing] = useState(false);
  const form = useRef();
  const publicKey = "Nel0V-HszB2wBwurh";
  const serviceId = "service_9vkv2fk";
  const templeteId = "template_2sgg4pe";
  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitRing(true);
    emailjs
      .sendForm(serviceId, templeteId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Thank You Sending Message.");
          setSubmitRing(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Sorry try again");
          setSubmitRing(false);
        }
      );
  };
  return (
    <div
      id="consultation"
      className="bg-cover py-16 px-2 relative"
      style={{ backgroundImage: `url(${contact})` }}
    >
      <div className="absolute inset-0 bg-gray-700/40"></div>
      <div className="max-w-screen-lg mx-auto overflow-hidden relative z-50">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
          <h1 className="col-span-5 text-3xl text-center md:text-5xl text-white font-bold font-oswald tracking-wider md:leading-20">
            Book Your Online Counselling Session
          </h1>
          <div className="col-span-7">
            <form
              className="py-4 px-4 bg-white space-y-2"
              ref={form}
              onSubmit={sendEmail}
            >
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name*"
                className="w-full border-b focus:outline-none border-gray-200 py-4"
                required
              />
              <div className="w-full flex items-center border-b border-gray-200 py-4">
                <select
                  name="country_code"
                  id=""
                  className="focus:outline-none w-20 text-gray-600"
                >
                  <option>Country Code*</option>
                  <option value="+44">+44</option>
                  <option value="+88">+88</option>
                  <option value="+66">+66</option>
                  <option value="+22">+22</option>
                </select>
                <input
                  type="number"
                  name="phone_number"
                  placeholder="WhatsApp Number (with country code)*"
                  className="w-full focus:outline-none px-2"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email*"
                required
                name="user_email"
                className="w-full border-b focus:outline-none border-gray-200 py-4"
              />
              <div className="w-full flex items-center border-b border-gray-200 py-4">
                <select
                  name="city_state"
                  id=""
                  className="focus:outline-none w-full text-gray-600"
                >
                  <option>Current Study Level*</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="postgraduate">Postgraduate</option>
                  <option value="phd">PhD</option>
                </select>
              </div>
              <div className="w-full flex items-center border-b border-gray-200 py-4">
                <select
                  name="study_destination"
                  id=""
                  className="focus:outline-none w-full text-gray-600"
                >
                  <option>Preferred UK AI Specialization*</option>
                  <option value="machine-learning">Machine Learning</option>
                  <option value="computer-vision">Computer Vision</option>
                  <option value="nlp">NLP</option>
                  <option value="robotics">Robotics</option>
                  <option value="data-science">Data Science</option>
                </select>
              </div>
              <div className="w-full flex items-center border-b border-gray-200 py-4">
                <select
                  name="preferred_time"
                  id=""
                  className="focus:outline-none w-full text-gray-600"
                >
                  <option>Ideal Start Date*</option>
                  <option value="jan-2025">Jan 2026</option>
                  <option value="sept-2025">Sept 2026</option>
                  <option value="jan-2026">Jan 2027</option>
                </select>
              </div>
              <div className="pt-2 flex items-start  gap-2">
                <input
                  type="checkbox"
                  className="border border-gray-200 w-5 h-5 focus:outline-none cursor-pointer"
                />
                <p className="text-gray-600 text-sm font-poppins">
                  I want scholarship updates for AI programs
                </p>
              </div>
              <div className="pt-2 flex items-start  gap-2">
                <input
                  type="checkbox"
                  className="border border-gray-200 w-5 h-5 focus:outline-none cursor-pointer"
                />
                <p className="text-gray-600 text-sm font-poppins">
                  Yes, I'd like a free
                  <a href="#" className="text-blue-500 px-1">
                    SOP
                  </a>
                  review
                </p>
              </div>
              <div className="pt-2 flex items-start  gap-2">
                <input
                  type="checkbox"
                  className="border border-gray-200 w-5 h-5 focus:outline-none cursor-pointer"
                />
                <p className="text-gray-600 text-sm font-poppins">
                  I consent to Aladdin's Privacy Policy
                </p>
              </div>

              <button className="mt-6 bg-blue-dark text-[16px] cursor-pointer shadow font-medium font-poppins text-white py-3 px-5">
                {submitRign ? (
                  <TbLoader className="animate-spin w-4 h-4" />
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
