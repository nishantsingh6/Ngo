import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const teamMembers = [
  {
    name: 'Nitu Yadav',
    role: 'Founder & Director',
    image: '/images/nitu-yadav.jpg',
    description: 'Leads the foundation with a vision to empower women and educate underprivileged children.',
  },
  {
    name: 'Rajeev Kumar',
    role: 'Operations Head',
    image: '/images/rajeev-kumar.jpg',
    description: 'Ensures all campaigns are executed smoothly and effectively in target communities.',
  },
  {
    name: 'Priya Sharma',
    role: 'Program Coordinator',
    image: '/images/priya-sharma.jpg',
    description: 'Manages educational sessions and hygiene programs across villages and slums.',
  },
  {
    name: 'Ankit Verma',
    role: 'Technical Lead',
    image: '/images/ankit-verma.jpg',
    description: 'Drives digital outreach and uses technology to expand the foundation’s impact.',
  },
];

const Team = () => {
  return (
    <section className="bg-gradient-to-br from-white via-purple-100 to-orange-100 py-16 px-6 md:px-20 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-800 text-center mb-12 drop-shadow-lg">
          Meet Our Team
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3500 }}
          loop
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center h-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-purple-200"
                />
                <h3 className="text-xl font-semibold text-purple-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-700">{member.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
