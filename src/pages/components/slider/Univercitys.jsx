import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import img1 from "../../../assets/univercity/u1.jpg";
import img2 from "../../../assets/univercity/u2.jpg";
import img3 from "../../../assets/univercity/u3.png";
import img4 from "../../../assets/univercity/u4.jpg";
import img5 from "../../../assets/univercity/u5.jpg";
import img6 from "../../../assets/univercity/u6.png";
import img7 from "../../../assets/univercity/u7.jpg";
// import img8 from "../../../assets/univercity/u8.png";
// import img9 from "../../../assets/univercity/u9.png";
// import img10 from "../../../assets/univercity/u10.jpg";
import img11 from "../../../assets/univercity/u11.png";
// import img12 from "../../../assets/univercity/u12.png";
import { Link } from "react-router-dom";
const Univercitys = () => {
  const swiperRef = useRef(null);

  // Sample data - replace with your actual content
  const items = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
    // { id: 8, img: img8 },
    // { id: 9, img: img9 },
    // { id: 10, img: img10 },
    { id: 11, img: img11 },
    // { id: 12, img: img12 },
  ];
  return (
    <div className="bg-white/80">
      <div className="relative px-4 py-12 max-w-screen-xl mx-auto">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
          onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
          className="w-full"
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <Link
                className="flex items-center justify-center 
          rounded-lg transition-shadow duration-300 cursor-pointer"
              >
                <img src={item.img} alt="" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Univercitys;
