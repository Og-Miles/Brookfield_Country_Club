import React from 'react'
import styles from '../style'
import { Luxury1, Luxury2 } from '../assets'

const Resort = () => {
  return (
    <div className={` ${styles.marginY}`}>
        <div className={`flex flex-col flex-1 lg:flex-row items-center justify-between ${styles.marginX}`}>
            <div>
              <img src={Luxury1} alt="Luxury" />
            </div>

            <div className='flex-col xs:flex-start'>
              <h1 className={`${styles.heading1}`}>Discover a New <br /> Look of Luxury Hotel</h1>
              <p className={`${styles.paragraph} mb-3`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cupiditate perferendis quia libero tenetur saepe repellat! <br /> Dolore repudiandae similique quae excepturi.</p>
              <button>Read More</button>
            </div>
        </div>

        {/* Section 1B */}
        <div className={`flex flex-col flex-1 lg:flex-row-reverse items-center justify-between ${styles.marginX} ${styles.marginY}`}>
            <div>
              <img src={Luxury2} alt="Luxury" />
            </div>

            <div className='flex-col xs:flex-start'>
              <h1 className={`${styles.heading1}`}>Enjoy the Fanciest <br />  Yacht Resort</h1>
              <p className={`${styles.paragraph} mb-3`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cupiditate perferendis quia libero tenetur saepe repellat! <br /> Dolore repudiandae similique quae excepturi.</p>
              <button>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Resort