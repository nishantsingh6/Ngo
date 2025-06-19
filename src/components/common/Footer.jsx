import React from 'react';
import logo from '../../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo and Foundation Name */}
       <div className="flex items-center space-x-3">
  <img
    src={logo}
    alt="Vinaywings Navjeevan Foundation Logo"
    className="w-20 h-20 rounded-full object-cover bg-white p-1 shadow-lg"
  />
  <span className="text-xl font-bold tracking-wide">Vinaywings Navjeevan Foundation</span>
</div>


        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <a href="/about" className="hover:text-orange-400 transition">About Us</a>
          <a href="/events" className="hover:text-orange-400 transition">Events</a>
          <a href="/gallery" className="hover:text-orange-400 transition">Gallery</a>
          <a href="/contact" className="hover:text-orange-400 transition">Contact</a>
        </nav>

        {/* Contact Info */}
        <div className="text-sm text-gray-300 text-center md:text-right space-y-1">
          <p>Email: <a href="mailto: vwnjfoundation@gmail.com" className="hover:text-orange-400">vwnjfoundation@gmail.com</a></p>
          <p>Phone: <a href="tel:+91 9354811924" className="hover:text-orange-400">+91 9354811924</a></p>
          <p>© {new Date().getFullYear()} Vinaywings Navjeevan Foundation. All rights reserved.</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mt-6">
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-white hover:text-orange-400 transition text-2xl" />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white hover:text-orange-400 transition text-2xl" />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white hover:text-orange-400 transition text-2xl" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white hover:text-orange-400 transition text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
