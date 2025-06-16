import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success('Message sent successfully!');
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          toast.error('Failed to send message. Please try again.');
          setLoading(false);
        }
      );
  };

  return (
    <section className="bg-gradient-to-br from-white via-purple-100 to-orange-100 py-16 px-6 md:px-20 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-800 mb-12 text-center drop-shadow">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white p-8 rounded-lg shadow-md space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <input type="hidden" name="time" value={new Date().toLocaleString()} />

            <button
              type="submit"
              disabled={loading}
              className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-2 rounded transition flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
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
