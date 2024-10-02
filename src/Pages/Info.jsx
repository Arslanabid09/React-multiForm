import React from 'react'
import Input from '../Components/Input'
import { useForm } from '../Context/FormContext'

const Info = () => {
  const {errors,formData,setFromData} = useForm();
  return (
    <section className='    space-y-4'>
        <h1 className='  mx-10 text-xl font-bold tracking-wider md:text-3xl'>Personal Information:</h1>
        <div className='flex flex-col      w-3/4  mx-auto gap-y-2'>
          <div className='flex justify  gap-x-3'>
            <div>
            <Input className={'w-full'} value={formData.name} onChange={(e)=>{setFromData.name(e.traget.value)}} type={'text'} placeholder={'First Name'}/>
              </div>            
            <Input type={'text'} placeholder={'Last Name'}
            className={'w-full'}
            onChange={(e)=>{setFromData.lastName(e.traget.value)}}
            value={formData.lastName}
            />
          </div>
          <Input  className={''} type={'email'} placeholder={'Email'}
          value={formData.email} onChange={(e)=>{setFromData.email(e.traget.value)}}
          />
          <Input className={''} type={'date'} placeholder={'Date Of Birth'}
          value={formData.date} onChange={(e)=>{setFromData.date(e.traget.value)}}
          />
        <p className='font-semibold tracking-wider text-gray-500'>We will never share your information</p>
        </div>
        
    </section>
  )
}

export default Info