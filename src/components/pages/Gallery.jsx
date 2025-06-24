import React from 'react';
import img from '../../assets/holi.jpg';
import img2 from '../../assets/student.jpg';
import img3 from '../../assets/students.jpg';
import img4 from '../../assets/teaching.jpg';
import img5 from '../../assets/tech.png';
import img6 from '../../assets/welcomeImg.jpg';
import img7 from '../../assets/visit.jpg';
import img8 from '../../assets/paddis.png';
import img9 from '../../assets/IMG-20250614-WA0003.jpg'
import img10 from '../../assets/IMG-20250614-WA0022.jpg'
import img11 from '../../assets/IMG-20250614-WA0008.jpg'
import img12 from '../../assets/IMG-20250614-WA0009.jpg'
import img13 from '../../assets/IMG-20250614-WA0010.jpg'
import img14 from '../../assets/IMG-20250614-WA0011.jpg'
import img15 from '../../assets/IMG-20250614-WA0012.jpg'
import img16 from '../../assets/IMG-20250614-WA0013.jpg'
import img17 from '../../assets/IMG-20250614-WA0014.jpg'
import img18 from '../../assets/IMG-20250614-WA0015.jpg'
import img19 from '../../assets/IMG-20250614-WA0016.jpg'
import img20 from '../../assets/IMG-20250614-WA0017.jpg'
import img21 from '../../assets/IMG-20250614-WA0018.jpg'
import img22 from '../../assets/IMG-20250614-WA0019.jpg'
import img23 from '../../assets/IMG-20250614-WA0020.jpg'
import img24 from '../../assets/IMG-20250614-WA0021.jpg'




const images = [
  { src: img, alt: 'Image 1' },
  { src: img2, alt: 'Image 2' },
  { src: img3, alt: 'Image 3' },
  { src: img4, alt: 'Image 4' },
  { src: img5, alt: 'Image 5' },
  { src: img6, alt: 'Image 6' },
  { src: img7, alt: 'Image 7' },
  { src: img8, alt: 'Image 8' },
  { src: img9, alt: 'Image 9' },
  { src: img10, alt: 'Image 10' },
  { src: img11, alt: 'Image 11' },
  { src: img12, alt: 'Image 12' },
  { src: img13, alt: 'Image 13' },
  { src: img14, alt: 'Image 14' },
  { src: img15, alt: 'Image 15' },
  { src: img16, alt: 'Image 16' },
  { src: img17, alt: 'Image 17' },
  { src: img18, alt: 'Image 18' },
  { src: img19, alt: 'Image 19' },
  { src: img20, alt: 'Image 20' },
  { src: img21, alt: 'Image 21' },
  { src: img22, alt: 'Image 22' },
  { src: img23, alt: 'Image 23' },
  { src: img24, alt: 'Image 24' }
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
