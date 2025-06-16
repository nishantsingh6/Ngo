// ErrorPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-600 mb-4">Oops!</h1>
        <p className="text-xl text-gray-700 mb-4">The page you're looking for doesn't exist.</p>
        <p className="text-md text-gray-500 mb-6">It might have been moved or deleted.</p>
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
