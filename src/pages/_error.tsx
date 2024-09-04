import React from 'react';

const ErrorPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800">Oops! Something went wrong.</h1>
            <p className="text-lg text-gray-600">We apologize for the inconvenience.</p>
        </div>
    );
};

export default ErrorPage;