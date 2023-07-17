import React from 'react'
import { avatar1 } from '../assets'

const TestimonialCard = ({img, name, content}) => {
  return (
    <div className='flex mb-5'>

    <div className='items-center justify-center flex flex-col'>
        <div className=' border border-pgray items-center py-16 px-4 w-[250px] lg:w-[350px] mb-5'>
            <p className='text-pgray text-center'>{content}</p>
        </div>

        <div className='flex flex-col'>
          <img src={img} alt="avatar" />
          <p className='font-semibold text-center mt-[-35px]'>{name}</p>
        </div>

    </div>
    </div>
  )
}

export default TestimonialCard