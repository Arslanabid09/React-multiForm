import React from 'react';

export const Count = ({
  count,
  label,
  className
}) => {
  return (
    <div className="flex flex-col-reverse justify-center items-center space-y-10">
      <h1 className="font-semibold md:text-lg text-sm text-center text-gray-500">{label}</h1>
      <span className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold rounded-full bg-slate-400 text-white ${className}`}>
        {count}
      </span>
    </div>
  );
};
