import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import img from '../../assets/welcomeImg.jpg';
import visit from '../../assets/visit.jpg';
import teching from '../../assets/teaching.jpg';
import student from '../../assets/student.jpg';
import holi from '../../assets/holi.jpg';
import logo from '../../assets/logo.png';

const images = [
  img,
  visit,
  teching,
  student,
  holi
];

const Herosection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-300 to-orange-300 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Content (Heading + Logo) */}
        <div className="md:w-1/2 text-center md:text-left">
          <div className="mt-6">
            {/* Updated Logo Size */}
            <img src={logo} alt="Logo" className="h-32 md:h-40 inline-block" />
          </div>
          <h1 className="text-4xl md:text-5xl  text-purple-800 font-bold leading-tight">
            Vinay Wings <br /> Navjeevan Foundation
          </h1>
          <div className="bg-white text-black inline-block px-4 py-2 mt-4 rounded shadow">
            <span className="text-lg font-semibold">Powered by The Vinay Enterprises</span>
          </div>
        </div>

        {/* Right Content (Image Slider) */}
        <div className="md:w-1/2 w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop
            className="rounded-lg overflow-hidden"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="rounded-lg shadow-lg w-full object-contain h-auto max-h-96"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
