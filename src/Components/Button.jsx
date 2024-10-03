import React from 'react'

const Button = ({
    label,
    className,
    onClick,
    type
}) => <button type={type} onClick={onClick} className={`
    bg-black rounded-md px- py-2  md:p-4 border-none text-xl text-white outline-8 font-semibold ${className}`}>{label}</button>
  


export default Button