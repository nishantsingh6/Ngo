import React from 'react';

const Mission = () => {
  return (
    <section className="bg-gradient-to-br from-purple-700 to-orange-400 py-16 px-6 md:px-20 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center drop-shadow-lg">
          Our Mission
        </h2>

        <div className="space-y-16">
          {/* Education and Career */}
          <div className="bg-purple-900 bg-opacity-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-3xl font-semibold mb-4 flex items-center gap-3">
              📚 Education and Career
            </h3>
            <p className="text-lg leading-relaxed">
              We are determined to educate and inspire economically disadvantaged students to
              recognize their inherent talents and achieve greatness. Our goal is to equip them with
              basic education and critical knowledge about computers and the digital landscape—their
              key to thriving in today’s world. We refuse to let these students feel left behind; instead,
              we empower them to explore and excel, just like their peers.
            </p>
          </div>

          {/* Women Empowerment */}
          <div className="bg-purple-900 bg-opacity-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-3xl font-semibold mb-4 flex items-center gap-3">
              🌸 Women Empowerment
            </h3>
            <p className="text-lg leading-relaxed">
              We are dedicated to creating an inclusive platform for every woman to earn, learn,
              and express herself without barriers or limitations. Every woman deserves the
              opportunity to contribute to her own life and her family’s wellbeing, achieving
              independence and self-sufficiency. In today’s world, equality between men and women
              is non-negotiable, and we are here to reinforce that message and support women in
              forging their own paths.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
