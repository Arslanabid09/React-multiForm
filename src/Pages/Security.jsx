import React from 'react'
import Input from '../Components/Input'

const Security = () => {
  return (
    <section className='    space-y-4'>
        <h1 className='  mx-10 text-xl font-bold tracking-wider md:text-3xl'>Secure Information:</h1>
        <div className='flex flex-col      w-3/4  mx-auto gap-y-2'>
            <Input className={'w-full'} type={'number'} placeholder={'SIN Number'}/>
           <span className='text-gray-500 text-sm mt-7'>Enter atleast one form of ID</span>
            <Input type={'number'} placeholder={'Passport Number'} className={'w-full'}/>
          <Input className={''} type={"number"} placeholder={"Driver's License Number"}/>
        </div>
        
    </section>
  )
}

export default Security