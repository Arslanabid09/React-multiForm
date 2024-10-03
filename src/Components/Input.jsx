import React from 'react'

const Input = ({
    placeholder,
    type,
    onChange,
    className,
    value
}) =>   <input type={type} value={value} className={`bg-slate-300 rounded-md p-3 md:p-4 border-none outline-black outline-8 font-semibold ${className}`} placeholder={placeholder} onChange={onChange} />



export default Input