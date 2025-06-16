import React from 'react';
import lab from '../../assets/lab.png'
import teach from '../../assets/tech.png'
import pimg from '../../assets/paddis.png'
import studens from '../../assets/students.jpg'

const OurWork = () => {
  return (
    <section className="bg-gradient-to-br from-purple-700 to-orange-400 py-16 px-6 md:px-20 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center drop-shadow-lg">
          Our Work
        </h2>

        {/* Section Description */}
        <div className="text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
          <p className="mb-4">
            We are actively distributing free sanitary pads to women in remote areas, villages, and slum localities. Monthly, we ensure that these sanitary products reach those in need while educating women about the menstrual cycle and the vital importance of hygiene, which is essential for avoiding serious health issues.
          </p>
          <p className="mb-4">
            Our dedicated team of female teachers provides free education to students from below the poverty line, teaching all subjects from 1st to 7th standard at nearby local government grounds to eliminate the barrier of travel. Moreover, we deliver essential computer, internet, and social media training for economically disadvantaged students at our Sector 51 office.
          </p>
          <p className="mb-4">
            We consistently organize events and activities that empower our women and students to showcase their unique talents in dance, singing, cooking, and more, igniting their motivation and confidence.
          </p>
        </div>

        {/* Our Work Blocks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Computer Lab */}
          <div className="bg-purple-900 bg-opacity-60 p-6 rounded-lg shadow hover:shadow-xl transition">
            <div className="text-center mb-4">
              <img src={lab} alt="Computer Lab" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">💻 Computer Lab</h3>
            <p className="text-lg text-white">
              Providing essential computer, internet, and social media training to students, equipping them with the tools they need to succeed in the digital world.
            </p>
          </div>

          {/* Our Teacher */}
          <div className="bg-purple-900 bg-opacity-60 p-6 rounded-lg shadow hover:shadow-xl transition">
            <div className="text-center mb-4">
              <img src={teach} alt="Our Teacher" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">👩‍🏫 Our Teacher</h3>
            <p className="text-lg text-white">
              Dedicated female teachers are offering free education to underprivileged children, teaching a range of subjects to empower them for a brighter future.
            </p>
          </div>

          {/* Educating Students */}
          <div className="bg-purple-900 bg-opacity-60 p-6 rounded-lg shadow hover:shadow-xl transition">
            <div className="text-center mb-4">
              <img src={studens} alt="Educating Students" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">📚 Educating Students</h3>
            <p className="text-lg text-white">
              Teaching students from 1st to 7th standard at local government grounds, providing education closer to home to eliminate barriers like travel.
            </p>
          </div>

          {/* Sanitary Pad Distribution Campaign */}
          <div className="bg-purple-900 bg-opacity-60 p-6 rounded-lg shadow hover:shadow-xl transition">
            <div className="text-center mb-4">
              <img src={pimg} alt="Sanitary Pad Distribution" className="w-full h-48 object-cover rounded-lg" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">🌸 Sanitary Pad Distribution</h3>
            <p className="text-lg text-white">
              Monthly distribution of free sanitary pads to women in need, with a focus on raising awareness about menstrual hygiene and health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
