import React from 'react';

const Registered = () => {
  return (
    <div className="flex flex-col justify-center items-center  bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Thank You!</h1>
      <p className="text-lg text-gray-600 mb-2">You are now registered.</p>
      <p className="text-lg italic text-gray-500">You will receive a confirmation email shortly.</p>
    </div>
  );
};

export default Registered;
