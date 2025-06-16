import React from 'react';

const Conclusion = () => {
  return (
    <section className="bg-gradient-to-br from-purple-100 via-white to-orange-100 py-16 px-6 md:px-20 text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-800 mb-6 drop-shadow">
          Join Us in Making a Difference
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Our mission is unwavering and transparent, focusing on the empowerment of women and the education of economically disadvantaged students.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          We unequivocally invite you to support our cause in any way you can. Your involvement will yield immeasurable blessings and satisfaction.
        </p>
        <a
          href="/donate"
          className="inline-block bg-purple-700 hover:bg-purple-800 text-white text-lg font-semibold px-8 py-3 rounded-full shadow transition"
        >
          Support Our Mission
        </a>
      </div>
    </section>
  );
};

export default Conclusion;
