import React from 'react';
import OurWork from './Ourwork';
import aboutV from '../../assets/aboutVideo.mp4'

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br from-white via-purple-100 to-orange-100 py-16 px-6 md:px-20 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-purple-800 mb-12 text-center drop-shadow-lg">
          About Vinaywings Navjeevan Foundation
        </h1>

        {/* Introduction */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          {/* Left Text */}
          <div className="md:w-2/3 text-lg leading-relaxed space-y-6">
            <p>
              <strong className="text-purple-900">Vinaywings Navjeevan Foundation</strong>, founded by <strong className="text-purple-900">Nitu Yadav</strong>, is dedicated to empowering women and uplifting economically disadvantaged students by providing free computer knowledge and essential education.
            </p>
            <p>
              Our commitment extends beyond education into critical areas like health and hygiene. Under our brand <strong className="text-purple-900">Feelwow</strong>, we distribute free sanitary pads to raise awareness about menstrual health among illiterate women living below the poverty line.
            </p>
            <p>
              With compassion at our core, we strive to bring dignity, knowledge, and opportunity to those who need it most.
            </p>
          </div>

          {/* Right: Video Embed */}
          <div className="md:w-1/3 text-center">
           <div className="w-full relative pt-[56.25%] overflow-hidden rounded-lg shadow-lg">
  <video
    src={aboutV}
    controls
    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
    title="Nitu Yadav - Introduction"
  />
</div>


            <p className="mt-4 font-medium text-purple-800">Founder – Nitu Yadav</p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-purple-50 p-10 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-purple-800 mb-6 text-center">Our Mission</h2>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our mission is unwavering and transparent, focusing on the empowerment of women and the education of economically disadvantaged students. We unequivocally invite you to support our cause in any way you can. Your involvement will yield immeasurable blessings and satisfaction.
          </p>
        </div>

        {/* Focus Areas */}
        <div>
          <h2 className="text-3xl font-semibold text-purple-800 mb-10 text-center">Focus Areas</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-purple-800 mb-3">📘 Education </h3>
              <p>
                Providing free computer knowledge and essential education to underprivileged students, helping them unlock a better future.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-purple-800 mb-3">🌸 Women Empowerment</h3>
              <p>
                Empowering women with digital tools, education, and healthcare awareness to uplift their social and economic status.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-purple-800 mb-3">🩺 Menstrual Hygiene</h3>
              <p>
                Distributing free sanitary pads through <strong>Feelwow</strong> and educating women on menstrual health to improve their quality of life.
              </p>
            </div>
          </div>
        </div>
      </div>
     <div className='mt-10'>
       <OurWork/>
     </div>
    </section>
  );
};

export default AboutUs;
