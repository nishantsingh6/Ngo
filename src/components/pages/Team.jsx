import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import male from '../../assets/male.jpeg';
import female from '../../assets/female.jpeg';

const teamMembers = [
  {
    name: 'Nitu Yadav',
    role: 'Founder & Director',
    image: female,
    description: 'Leads the foundation with a strong vision to empower women and provide education to underprivileged children.',
  },
  {
    name: 'Jyoti Patel',
    role: 'Manager',
    image: female,
    description: 'Coordinates daily operations and ensures smooth execution of all programs and outreach campaigns within local communities.',
  },
  {
    name: 'Ajit Yadav',
    role: 'Co-partner',
    image: male,
    description: 'Plays a key role in organizing educational workshops and hygiene awareness drives in underserved areas.',
  },
  {
    name: 'Rekha Yadav',
    role: 'Upadaykash',
    image: female,
    description: 'Supports field-level activities and community engagement, ensuring effective communication between volunteers and beneficiaries.',
  },
  {
    name: 'Sujata Patel',
    role: 'Teacher',
    image: female,
    description: 'Provides primary education to children, creating a supportive learning environment that encourages curiosity and growth.',
  },
  {
    name: 'Shivani Yadav',
    role: 'Teacher',
    image: female,
    description: 'Specializes in teaching foundational subjects and mentoring children to build confidence and academic skills.',
  },
  {
    name: 'Preeti Singh',
    role: 'Social Media',
    image: female,
    description: 'Manages the foundation’s social media presence, spreading awareness and highlighting community impact through digital platforms.',
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
