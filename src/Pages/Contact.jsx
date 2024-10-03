import React from 'react';
import Input from '../Components/Input';
import { useForm } from '../Context/FormContext';

const Contact = () => {
  const { errors, formData, setFormData } = useForm(); // Corrected typo from setFromData to setFormData

  return (
    <section className='space-y-4'>
      <h1 className='mx-10 text-xl font-bold tracking-wider md:text-3xl'>Contact Information:</h1>
      <div className='flex flex-col w-3/4 mx-auto gap-y-2'>
        <div className='flex flex-col'>
        <Input
          className={''}
          type={'text'}
          placeholder={'Street Address'}
          value={formData.streetAddress}
          onChange={(e) => setFormData((formData)=>( { ...formData, streetAddress: e.target.value }))} // Corrected typo
        />
        {errors.streetAddress && <p className='text-red-500'>{errors.streetAddress}</p>}
        
        </div>
        <Input
          className={''}
          type={'number'}
          placeholder={'House Number'}
          value={formData.houseNumber}
          onChange={(e) => setFormData((formData)=>( { ...formData, houseNumber: e.target.value }))} // Corrected typo
        />
        {errors.houseNumber && <p className='text-red-500 text-sm'>{errors.houseNumber}</p>}
        
        <div className='grid grid-cols-2 gap-4 justify-evenly gap-x-3'>
          <div className='flex flex-col'>
          <Input
            className={'w-full'}
            type={'text'}
            placeholder={'Country'}
            value={formData.country}
            onChange={(e) => setFormData((formData)=>( { ...formData, country: e.target.value }))} // Corrected typo
          />
          {errors.country && <p className='text-red-500'>{errors.country}</p>}
          </div>
          <div className='flex flex-col'>
         <Input
            className={'w-full'}
            type={'text'}
            placeholder={'State'}
            value={formData.state}
            onChange={(e) => setFormData((formData)=>( { ...formData, state: e.target.value }))} // Corrected typo
          />
          {errors.state && <p className='text-red-500'>{errors.state}</p>}
          
         </div>
         <div className='flex flex-col'>
         <Input
            className={'w-full'}
            type={'text'}
            placeholder={'Town/City'}
            value={formData.town}
            onChange={(e) => setFormData((formData)=>( { ...formData, town: e.target.value }))} // Corrected typo
          />
          {errors.town && <p className='text-red-500'>{errors.town}</p>}
          
         </div>
         <div className='flex flex-col'>
         <Input
            className={'w-full'}
            type={'number'}
            placeholder={'Zip Code'}
            value={formData.zip}
            onChange={(e) => setFormData((formData)=> ({ ...formData, zip: e.target.value }))} // Corrected typo
          />
          {errors.zip && <p className='text-red-500'>{errors.zip}</p>}
        
         </div>
         </div>

        <Input
          className={''}
          type={'number'}
          placeholder={'Phone Number'}
          value={formData.phone}
          onChange={(e) => setFormData((formData) =>({ ...formData, phone: e.target.value }))} // Corrected typo
        />
        {errors.phone && <p className='text-red-500'>{errors.phone}</p>}

        <p className='font-semibold text-gray-500 tracking-wider'>
          Once we receive your information, we will contact you
        </p>
      </div>
    </section>
  );
};

export default Contact;
