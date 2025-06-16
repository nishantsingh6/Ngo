import React from 'react';

const WhoCanSupportUs = () => {
  return (
    <section className="bg-gradient-to-br from-white via-purple-100 to-orange-100 py-16 px-6 md:px-20 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-12 drop-shadow-lg">
          Who Can Support Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* NGOs */}
          <div className="bg-purple-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">🌐 NGOs</h3>
            <p className="text-md font-medium text-gray-700">
              Non-governmental organizations can collaborate with us for outreach, funding, and on-ground implementation of health and education programs.
            </p>
          </div>

          {/* Corporates / CSR */}
          <div className="bg-purple-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">💼 Corporates & CSR</h3>
            <p className="text-md font-medium text-gray-700">
              Companies can support our mission through Corporate Social Responsibility (CSR) initiatives, helping scale impact with technology, resources, and grants.
            </p>
          </div>

          {/* Individuals */}
          <div className="bg-purple-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">🙋‍♀️ Individuals</h3>
            <p className="text-md font-medium text-gray-700">
              Every individual can make a difference by donating, volunteering, or spreading awareness about menstrual hygiene and digital literacy.
            </p>
          </div>

          {/* Educational Institutions */}
          <div className="bg-purple-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">🏫 Educational Institutions</h3>
            <p className="text-md font-medium text-gray-700">
              Schools and colleges can partner with us to set up study points, computer labs, and organize health workshops.
            </p>
          </div>

          {/* Government Bodies */}
          <div className="bg-purple-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">🏛 Government Bodies</h3>
            <p className="text-md font-medium text-gray-700">
              Government departments can join hands to promote digital inclusion and menstrual hygiene through schemes and joint initiatives.
            </p>
          </div>

          {/* International Organizations */}
          <div className="bg-purple-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">🌍 International Organizations</h3>
            <p className="text-md font-medium text-gray-700">
              Global health and education organizations can offer technical expertise, tools, and funding to expand our programs across underserved regions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanSupportUs;
