import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-purple-700 font-semibold border-b-2 border-purple-700 pb-1 transition"
      : "text-purple-500 hover:text-purple-700 hover:border-b-2 hover:border-purple-700 pb-1 transition";

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gradient-to-r from-purple-100 via-purple-200 to-orange-100 shadow-md fixed top-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" onClick={handleNavClick}>
              <img
                src={logo}
                alt="Logo"
                className="h-20 md:h-24 object-contain"
              />
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 items-center">
            <NavLink to="/" className={navLinkClass} onClick={handleNavClick}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={handleNavClick}>
              About us
            </NavLink>
            <NavLink to="/events" className={navLinkClass} onClick={handleNavClick}>
              Events
            </NavLink>
            <NavLink to="/team" className={navLinkClass} onClick={handleNavClick}>
              Our Team
            </NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={handleNavClick}>
              Contact
            </NavLink>
            <NavLink to="/gallery" className={navLinkClass} onClick={handleNavClick}>
              Gallery
            </NavLink>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-700 hover:text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-700 rounded"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-purple-50 px-6 pt-4 pb-6 space-y-4 overflow-hidden"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block text-purple-800 font-semibold border-l-4 border-purple-700 pl-3"
                  : "block text-purple-600 hover:text-purple-800 hover:border-l-4 hover:border-purple-700 pl-3 transition"
              }
              onClick={handleNavClick}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "block text-purple-800 font-semibold border-l-4 border-purple-700 pl-3"
                  : "block text-purple-600 hover:text-purple-800 hover:border-l-4 hover:border-purple-700 pl-3 transition"
              }
              onClick={handleNavClick}
            >
              About us
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive
                  ? "block text-purple-800 font-semibold border-l-4 border-purple-700 pl-3"
                  : "block text-purple-600 hover:text-purple-800 hover:border-l-4 hover:border-purple-700 pl-3 transition"
              }
              onClick={handleNavClick}
            >
              Events
            </NavLink>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive
                  ? "block text-purple-800 font-semibold border-l-4 border-purple-700 pl-3"
                  : "block text-purple-600 hover:text-purple-800 hover:border-l-4 hover:border-purple-700 pl-3 transition"
              }
              onClick={handleNavClick}
            >
              Our Team
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "block text-purple-800 font-semibold border-l-4 border-purple-700 pl-3"
                  : "block text-purple-600 hover:text-purple-800 hover:border-l-4 hover:border-purple-700 pl-3 transition"
              }
              onClick={handleNavClick}
            >
              Contact
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "block text-purple-800 font-semibold border-l-4 border-purple-700 pl-3"
                  : "block text-purple-600 hover:text-purple-800 hover:border-l-4 hover:border-purple-700 pl-3 transition"
              }
              onClick={handleNavClick}
            >
              Gallery
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
