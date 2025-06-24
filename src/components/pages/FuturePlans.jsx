import React, { useState } from 'react';
import vend from '../../assets/IMG-20250614-WA0009.jpg'
import study from '../../assets/studyPoint.jpg';
import comp from '../../assets/labImg.jpg';

const FuturePlans = () => {
  // State to track the expanded text for each section
  const [expandedText, setExpandedText] = useState({
    vendingMachine: false,
    studyPoints: false,
    computerLab: false,
  });

  // Toggle function to handle "Show More" / "Show Less"
  const toggleText = (section) => {
    setExpandedText((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <section className="bg-gradient-to-br from-white via-purple-100 to-orange-100 py-16 px-6 md:px-20 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-purple-800 mb-12 drop-shadow-lg">
          Our Future Plans
        </h2>

        {/* Future Plans Blocks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sanitary Pad Vending Machine */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="text-center mb-4">
              <img
                src={vend}
                alt="Sanitary Pad Vending Machine"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-3">🩸 Sanitary Pad Vending Machine</h3>
            <p className="text-md font-medium text-gray-700">
              {expandedText.vendingMachine
                ? "We plan to install sanitary pad vending machines in women's toilets at railway stations, metro points, villages, and slum localities. These machines will provide sanitary pads at little to no cost, ensuring women have a reliable option during their menstrual cycle and eliminating the need for unsafe substitutes. "
                : "We plan to install sanitary pad vending machines in women's toilets at railway stations..."}
                <span
              className="text-purple-700 cursor-pointer mt-2 font-medium hover:underline"
              onClick={() => toggleText('vendingMachine')}
            >
              {expandedText.vendingMachine ? "Show Less" : "Show More"}
            </span>
            </p>
          </div>

          {/* Expanding Study Points */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="text-center mb-4">
              <img
                src={study}
                alt="Expanding Study Points"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-3">📚 Expanding Study Points</h3>
            <p className="text-md font-medium text-gray-700">
              {expandedText.studyPoints
                ? "We will expand our study points to educate as many students as possible, bringing education closer to home and eliminating barriers like distance for underprivileged children. "
                : "We will expand our study points to educate as many students as possible..."}
                <span
              className="text-purple-700 cursor-pointer mt-2 font-medium hover:underline"
              onClick={() => toggleText('studyPoints')}
            >
              {expandedText.studyPoints ? "Show Less" : "Show More"}
            </span>
            </p>
          </div>

          {/* Computer Lab */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="text-center mb-4">
              <img
                src={comp}
                alt="Computer Lab"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-3">💻 Computer Lab</h3>
            <p className="text-md font-medium text-gray-700">
              {expandedText.computerLab
                ? "We will establish a dedicated computer lab for below poverty line students, allowing them to harness the power of the internet and social media to showcase their talents and explore a wide range of career opportunities. "
                : "We will establish a dedicated computer lab for below poverty line students..."}
                <span
              className="text-purple-700 cursor-pointer mt-2 font-medium hover:underline"
              onClick={() => toggleText('computerLab')}
            >
              {expandedText.computerLab ? "Show Less" : "Show More"}
            </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturePlans;
