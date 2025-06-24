import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Installation from '../../assets/IMG-20250614-WA0012.jpg'
import Sec37 from '../../assets/IMG-20250614-WA0018.jpg'

const eventsData = [
  {
    title: "Installation of vending machine at District Court in Rewari",
    description: "We installed a sanitary pad vending machine at the District Court in Rewari to ensure women visiting or working there have easy access to menstrual hygiene products. This initiative supports women’s health and aims to raise awareness about the importance of menstrual hygiene in public spaces.",
    image:Installation,
  },
 {
  title: "Installation of vending machine at Sector 37",
  description: "On 7 June 2025, we installed a sanitary pad vending machine at Sector 37. To mark the occasion, we organized a program at the local library with girls, discussing menstrual hygiene, common challenges, and the importance of open conversations. Boys were also educated about basic menstrual knowledge. The session concluded with the distribution of sanitary pads, and participants shared their experiences.",
  image: Sec37,
},
  {
    title: "Monthly Gift Distribution",
    description: "Every month, we distribute gifts to women to encourage and inspire them, making them feel valued and motivated.",
    image: "/images/event3.jpg",
  },
  {
    title: "Women's Day Celebration",
    description: "On March 8th, we celebrated Women’s Day with great enthusiasm. We played several engaging games, discussed important concerns affecting women, and distributed sanitary pads. The event was filled with positivity, empowerment, and meaningful conversations that inspired everyone present.",
    image: "/images/event4.jpg",
  },
  {
    title: "Exercise Program",
    description: "Twice a week, we conduct an exercise program where we not only encourage participants to stay active but also educate them about the importance of exercise, highlighting its benefits and potential drawbacks.",
    image: "/images/event5.jpg",
  },
  {
    title: "Painting & Drawing Classes",
    description: "Twice a month, we organize painting and drawing classes for children, providing them with a creative outlet to express their imagination and develop their artistic skills.",
    image: "/images/event6.jpg",
  },
  {
    title: "Holi Celebration with the Women",
    description: "On March 13th, we joyfully celebrated Holi with the women, where we provided refreshments, enjoyed vibrant sessions of dancing, and singing. The event was filled with colors, laughter, and moments of togetherness.",
    image: "/images/event7.jpg",
  },
  {
    title: "Holi Celebration with the Kids",
    description: "On March 13th, we joyfully celebrated Holi, where we provided refreshments, played fun games, and enjoyed lively sessions of dancing and singing. The event was filled with colors, laughter, and unforgettable memories for everyone.",
    image: "/images/event8.jpg",
  },
];

const Events = () => {
  const [showFullText, setShowFullText] = useState({});

  const toggleText = (index) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section className="bg-gradient-to-br from-purple-700 to-orange-400 py-16 px-6 md:px-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-10 drop-shadow-lg">
        Our Events
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {eventsData.map((event, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-purple-900 bg-opacity-60 p-6 rounded-lg shadow hover:shadow-xl transition">
              {/* Event Image */}
              <div className="mb-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover rounded-md"
                />
              </div>

              {/* Event Title */}
              <h3 className="text-1xl font-bold text-white mb-2">
                {event.title}
              </h3>

              {/* Event Description */}
              <p className="text-sm text-white text-justify font-medium">
                {showFullText[idx] ? event.description : `${event.description.substring(0, 100)}...`}
              </p>

              {/* Show More / Show Less */}
              <span
                className="text-purple-200 cursor-pointer mt-2 hover:underline"
                onClick={() => toggleText(idx)}
              >
                {showFullText[idx] ? "Show Less" : "Show More"}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Events;
