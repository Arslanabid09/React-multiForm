import React from 'react';
import Input from '../Components/Input';
import { useForm } from '../Context/FormContext';

const Security = () => {
  const { errors, formData, setFormData } = useForm(); // Correct typo

  return (
    <section className='space-y-4'>
      <h1 className='mx-10 text-xl font-bold tracking-wider md:text-3xl'>Secure Information:</h1>
      <div className='flex flex-col w-3/4 mx-auto gap-y-2'>
        <Input
          className={'w-full'}
          type={'number'}
          placeholder={'SIN Number'}
          value={formData.sin}
          onChange={(e) => setFormData(()=>({ ...formData, sin: e.target.value }))} // Correct typo
        />
        {errors.sin && <p className='text-red-500'>{errors.sin}</p>} {/* Display error for SIN */}
        
        <span className='text-gray-500 text-sm mt-7'>Enter at least one form of ID</span>

        <Input
          type={'number'}
          placeholder={'Passport Number'}
          className={'w-full'}
          value={formData.passportNumber}
          onChange={(e) => setFormData((formData)=>({ ...formData, passportNumber: e.target.value }))} // Correct typo
        />
        {errors.passportNumber && <p className='text-red-500'>{errors.passportNumber}</p>} {/* Display error for Passport Number */}
        
        <Input
          className={''}
          type={'text'}
          placeholder={"Driver's License Number"}
          value={formData.dLincenseNumber}
          onChange={(e) => setFormData((formData)=>( { ...formData, dLincenseNumber: e.target.value }))} // Correct typo
        />
        {errors.dLincenseNumber && <p className='text-red-500'>{errors.dLincenseNumber}</p>} {/* Display error for Driver's License */}
      </div>
    </section>
  );
};

export default Security;
