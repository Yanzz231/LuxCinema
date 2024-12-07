import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex  justify-center mt-20">
            <div className="text-center p-6 max-w-lg bg-gray-800 shadow-md rounded-md">
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <p className="mt-4 text-xl text-red-600 font-semibold">Page Not Found</p>
                <p className="mt-2 text-red-500">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>
                <Link to="/" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
