import React from 'react';

const Fund = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-100 via-rose-100 to-pink-100 py-16 px-6 md:px-20 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-12 drop-shadow-lg">
          Why We Need Funds
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sanitary Pads Distribution */}
          <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">🌸 Sanitary Pads Distribution</h3>
            <p className="text-md text-gray-700 font-medium">
              We provide free sanitary pads to women in villages and slums through our <strong>Feelwow</strong> initiative, ensuring menstrual hygiene and health education.
            </p>
          </div>

          {/* Education & Study Points */}
          <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">📚 Expanding Education Access</h3>
            <p className="text-md text-gray-700 font-medium">
              Funds help us establish more study points and provide essential educational materials to students who cannot afford quality learning resources.
            </p>
          </div>

          {/* Computer Labs & Digital Training */}
          <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">💻 Digital Literacy Programs</h3>
            <p className="text-md text-gray-700 font-medium">
              Your support allows us to build computer labs and offer internet access to children from economically weaker sections, opening new career opportunities.
            </p>
          </div>

          {/* Events & Celebrations */}
          <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">🎉 Events for Empowerment</h3>
            <p className="text-md text-gray-700 font-medium">
              We host events like Women’s Day, Holi celebrations, and health awareness programs to build confidence and a sense of belonging among women and kids.
            </p>
          </div>

          {/* Logistics & Volunteer Support */}
          <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">🚚 Logistics & Volunteer Support</h3>
            <p className="text-md text-gray-700 font-medium">
              Funds help cover transportation, supplies, and meals for volunteers who help us deliver programs directly in underserved communities.
            </p>
          </div>

          {/* Vending Machines */}
          <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">🩸 Vending Machine Installations</h3>
            <p className="text-md text-gray-700 font-medium">
              We plan to install low-cost sanitary pad vending machines in public areas like stations and slums. Your donations make this innovation possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fund;
