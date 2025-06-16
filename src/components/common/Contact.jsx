import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-white via-purple-100 to-orange-100 py-16 px-6 md:px-20 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-800 mb-12 text-center drop-shadow">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-2 rounded transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            <div className="bg-purple-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">📍 Address</h3>
              <p>Vinaywings Navjeevan Foundation<br />Sector 34, Noida, Uttar Pradesh, India</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">📞 Phone</h3>
              <p>+91 9354811924</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">✉️ Email</h3>
              <p>vwnjfoundation@gmail.com</p>
            </div>

            {/* Optional Map Embed */}
            <div className="rounded-lg overflow-hidden shadow">
 <iframe
  title="Google Map of Noida Sector 34"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.944318121079!2d77.32040201461447!3d28.57208418244169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c98cd6e76027f%3A0xd53d34630d9fe115!2sSector%2034%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1626308912342!5m2!1sen!2sin"
  width="100%"
  height="200"
  style={{ border: '0' }}
  allowFullScreen
  loading="lazy"
/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
