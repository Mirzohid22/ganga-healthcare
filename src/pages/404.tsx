import React from 'react';

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
            <p className="text-lg text-gray-600">Oops! The page you&apos;re looking for does not exist.</p>
        </div>
    );
};

export default NotFoundPage;