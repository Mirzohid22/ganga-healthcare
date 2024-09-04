import React from 'react';

const FiveHundredPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow">
                <h1 className="text-4xl font-bold mb-4">500 Internal Server Error</h1>
                <p className="text-gray-700">Oops! Something went wrong on our end.</p>
            </div>
        </div>
    );
};

export default FiveHundredPage;