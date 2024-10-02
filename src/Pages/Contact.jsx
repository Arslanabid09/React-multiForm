import React from 'react'
import Input from '../Components/Input'
import { useForm } from '../Context/FormContext'

const Contact = () => {
  const {errors,formData,setFromData} = useForm();

  return (
    <section className=' space-y-4'>
        <h1 className='  mx-10 text-xl font-bold tracking-wider md:text-3xl'>Contact Information:</h1>
        <div className='flex flex-col      w-3/4  mx-auto gap-y-2'>
          <Input className={''} type={'text'} placeholder={'Street Address'}
            value={formData.streetAddress} onChange={(e)=>{setFromData.streetAddress(e.target.value)}}
          />
          <Input className={''} type={'text'} placeholder={'House Number'}
            value={formData.houseNumber} onChange={(e)=>{setFromData.houseNumber(e.target.value)}}
          
          />
          <div className='grid grid-cols-2 gap-4 justify-evenly  gap-x-3'>
            <Input className={'w-full'} type={'text'} placeholder={'Country'}
            value={formData.country} onChange={(e)=>{setFromData.country(e.target.value)}}
            
            />
            <Input type={'text'} placeholder={'State'}
            className={'w-full'}
            value={formData.town} onChange={(e)=>{setFromData.town(e.target.value)}}

            />
            <Input className={'w-full'} type={'text'} placeholder={'Town/City'}/>
            <Input className={'w-full'} type={'text'} placeholder={'Zip Code'}/>
            
          </div>
          <Input className={''} type={'number'} placeholder={'Phone Number'}/>

        <p className='font-semibold text-gray-500 tracking-wider'>Once we receive your information, we will contact you</p>
        </div>
        
    </section>
  )
}

export default Contact