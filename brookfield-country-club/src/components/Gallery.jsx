import React from 'react'
import { gradient1, gradient2, gradient3, gradient4, gradient5 } from '../assets'
import styles from '../style'
import { Suites } from '../constants'

const Gallery = () => {
  return (

    <div className='items-center justify-center mt-7 h-fit'>

        <div className="items-center justify-center content-center text-center">
          <div className="flex flex-col text-center items-center">
            <h1 className={`font-Yeseva One md:text-[48px] text-[22px] text-center mb-5`}>Rooms & Suites</h1>
            <p className={`text-center md:w-full w-[80%] text-pgray mb-5`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quidem, <br /> ea rerum excepturi quae facere mollitia exercitationem quia <br /> doloribus magnam nemo maiores sed dicta cumque?</p>
          </div>
        </div>


        <div className='grid xs:grid-cols-3 grid-cols-1 md:grid-col-2 md:gap-x-6 gap-x-none gap-y-3 items-center content-center justify-center'>
    
      <div className="flex bg-[url('/src/assets/gradient1.png')] sticky object-contain w-[450px] h-[300px] bg-contain">
          <div className='bg-white w-fit h-fit flex flex-col pl-[10px] pr-[80px] absolute bottom-4 left-2'>
            <p>
              <span className={`${styles.paragraph}`}>FROM </span>
              <span className='font-semibold'>$49.99</span>
            </p>
            <h4 className='font-Yeseva One'>Balcony Room</h4>
          </div>
      </div>

      <div className="flex bg-[url('/src/assets/gradient2.png')] w-[450px] md:h-[608px] h-[300px] bg-contain sticky md:row-span-2 row-span-1 bg-no-repeat">
          <div className='bg-white w-fit h-fit flex flex-col pl-[10px] pr-[80px] absolute bottom-4 left-2 '>
            <p>
              <span className={`${styles.paragraph}`}>FROM </span>
              <span className='font-semibold'>$99.99</span>
            </p>
            <h4 className='font-Yeseva One'>Superior Room</h4>
          </div>
      </div>
      <div className="flex bg-[url('/src/assets/gradient3.png')] w-[450px] h-[300px] sticky bg-contain">
          <div className='bg-white w-fit h-fit flex flex-col pl-[10px] pr-[80px] absolute bottom-4 left-2 '>
            <p>
              <span className={`${styles.paragraph}`}>FROM </span>
              <span className='font-semibold'>$69.99</span>
            </p>
            <h4 className='font-Yeseva One'>Deluxe Room</h4>
          </div>
      </div>
      <div className="flex bg-[url('/src/assets/gradient4.png')] w-[450px] h-[300px] sticky bg-contain">
          <div className='bg-white w-fit h-fit flex flex-col pl-[10px] pr-[80px] absolute bottom-4 left-2'>
            <p>
              <span className={`${styles.paragraph}`}>FROM </span>
              <span className='font-semibold'>79.99</span>
            </p>
            <h4 className='font-Yeseva One'>Sea View Room</h4>
          </div>
      </div>
      <div className="flex bg-[url('/src/assets/gradient5.png')] w-[450px] h-[300px] sticky  bg-contain">
          <div className='bg-white w-fit h-fit flex flex-col pl-[10px] pr-[80px] absolute bottom-4 left-2 '>
            <p>
              <span className={`${styles.paragraph}`}>FROM </span>
              <span className='font-semibold'>$89.99</span>
            </p>
            <h4 className='font-Yeseva One'>Luxury Suite Room</h4>
          </div>
      </div>

    </div>
    </div>
    
  )
}

export default Gallery