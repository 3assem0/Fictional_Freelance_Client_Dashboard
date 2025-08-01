import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center h-full text-center py-20">
    <h1 className="text-5xl font-bold text-indigo-600 mb-4">404</h1>
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
    <p className="text-gray-500 mb-6">Sorry, the page you are looking for does not exist.</p>
    <Link to="/" className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition">Go to Dashboard</Link>
  </div>
);

export default NotFound; 