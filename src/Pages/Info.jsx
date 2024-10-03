import React from 'react'
import Input from '../Components/Input'
import { useForm } from '../Context/FormContext'

const Info = () => {
  const { errors, formData, setFormData } = useForm();

  

  return (
    <section className='space-y-4'>
      <h1 className='mx-10 text-xl font-bold tracking-wider md:text-3xl'>Personal Information:</h1>
      <div className='flex flex-col w-3/4 mx-auto gap-y-2'>
        <div className='flex justify-evenly gap-x-3'>
          <div className='w-full'>
            <Input
              className={'w-full'}
              type={'text'}
              placeholder={'First Name'}
              value={formData.name}
              onChange={(e)=>setFormData((prev)=> ({...prev,name:e.target.value}))}
            />
            {errors.name ? <p className="text-red-500">{errors.name}</p>:""}
          </div>
          <div className='w-full'>

          <Input
            type={'text'}
            placeholder={'Last Name'}
            className={'w-full'}
            value={formData.lastName}
            onChange={(e)=>setFormData((prev)=> ({...prev,lastName:e.target.value}))}
            />
          {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
            </div>
        </div>
        <Input
          className={''}
          type={'email'}
          placeholder={'Email'}
          value={formData.email}
          onChange={(e)=>setFormData((prev)=> ({...prev,email:e.target.value}))}

        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <Input
          className={''}
          type={'date'}
          placeholder={'Date Of Birth'}
          value={formData.date}
          onChange={(e)=>setFormData((prev)=> ({...prev,date:e.target.value}))}

        />
        {errors.date && <p className="text-red-500 ">{errors.date}</p>}

        <p className='font-semibold tracking-wider text-gray-500'>We will never share your information</p>
      </div>
    </section>
  );
};

export default Info;
