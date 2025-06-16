import React from 'react';
import img from '../../assets/holi.jpg';
import img2 from '../../assets/student.jpg';
import img3 from '../../assets/students.jpg';
import img4 from '../../assets/teaching.jpg';
import img5 from '../../assets/tech.png';
import img6 from '../../assets/welcomeImg.jpg';
import img7 from '../../assets/visit.jpg';
import img8 from '../../assets/paddis.png';

const images = [
  { src: img, alt: 'Image 1' },
  { src: img2, alt: 'Image 2' },
  { src: img3, alt: 'Image 3' },
  { src: img4, alt: 'Image 4' },
  { src: img5, alt: 'Image 5' },
  { src: img6, alt: 'Image 6' },
  { src: img7, alt: 'Image 7' },
  { src: img8, alt: 'Image 8' },
];

const Gallery = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-12 drop-shadow-lg">
          Our Gallery
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
              />
              {/* Hover effect
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="text-white text-xl font-semibold">View Image</span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
