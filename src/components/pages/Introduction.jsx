import React from 'react';

const Introduction = () => {
  return (
    <section className="bg-gradient-to-br from-white via-purple-100 to-orange-100 py-16 px-6 md:px-20 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-800 mb-10 text-center drop-shadow">
          About Vinaywings Navjeevan Foundation
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-14">
          {/* Left: Text Content */}
          <div className="md:w-2/3 text-lg leading-relaxed">
            <p className="mb-5">
              <strong className="text-purple-900">Vinaywings Navjeevan Foundation</strong>, founded by <strong className="text-purple-900">Nitu Yadav</strong>, is on a mission to empower women and uplift economically disadvantaged students by providing free computers and essential education.
            </p>
            <p className="mb-5">
              Our commitment extends beyond education—into the critical realm of health and hygiene. Through our <strong className="text-purple-900">Feelwow</strong> brand, we distribute free sanitary pads to raise awareness about menstrual health among illiterate women living below the poverty line.
            </p>
            <p>
              With compassion at our core, we strive to bring dignity, knowledge, and opportunity to those who need it most.
            </p>
          </div>

          {/* Right: Video Embed OR Image*/}
          {/* <div className="md:w-1/3 text-center">
            <img
              src="/images/nitu-yadav.jpg"
              alt="Nitu Yadav"
              className="rounded-lg shadow-lg w-full max-w-xs mx-auto"
            />
            <p className="mt-4 font-medium text-purple-700">Founder – Nitu Yadav</p>
          </div> */}
          <div className="md:w-1/3 text-center">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/enuUviVcH9A"
                title="Nitu Yadav - Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <p className="mt-4 font-medium text-purple-800">Founder – Nitu Yadav</p>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-purple-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-purple-800 mb-3">📘 Education </h3>
            <p>Providing free computers and essential education to underprivileged students.</p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-purple-800 mb-3">🌸 Women Empowerment</h3>
            <p>Empowering women with knowledge, digital tools, and healthcare awareness.</p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-purple-800 mb-3">🩺 Menstrual Hygiene</h3>
            <p>Distributing free sanitary pads through <strong>Feelwow</strong> and educating women on menstrual health.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
