import React from 'react'
import { gradient1, gradient2, gradient3, gradient4, gradient5 } from '../assets'
import styles from '../style'

const Gallery = () => {
  return (
    <div className={`grid grid-rows-3 xs:grid-flow-col grid-flow-row w-full ${styles.marginY}`}>
  <div className="col-span-2 h-fit">
    <img src={gradient1} alt="" className='w-[450px]'/>
  </div>
  <div className="row-span-2 col-span-2 h-fit">
    <img src={gradient2} alt="" className='w-[450px]'/>
    
  </div>
  <div className="row-span-3 h-fit object-contain flex-0.6">
  <img src={gradient3} alt="" className='w-[450px] h-[600px]'/>
  </div>
   
  <div className="col-span-2 h-fit">
  <img src={gradient4} alt="" className='w-[450px]'/>
  </div>
  <div className="row-span-2 col-span-2 h-fit">
  <img src={gradient5} alt="" className='w-[450px]'/>
  </div>
</div>
  )
}

export default Gallery