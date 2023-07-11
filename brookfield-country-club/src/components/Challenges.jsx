import React from 'react'
import styles from '../style'
import { umbrella } from '../assets'
import { Challenge } from '../constants'

const CountCard = ({img, title, content}) => (
  <div className='flex flex-col '>
      <div className='flex '>

      <div>
      <img src={img} alt="counts" />
      </div>

      <div className='flex flex-col'>
          <h4 className={`${styles.heading2}`}>{title}</h4>
          <p className={`${styles.paragraph} pb-10 border-b`}>{content}</p>
      </div>
      </div>

  </div>
)


const Challenges = () => {

  return (
    <div className={`items-ceter flex flex-1 justify-between ${styles.marginX}`}>
      <div className='flex flex-col'>

        <div className='flex flex-col'>
          <h1 className={`${styles.heading1} text-[26px]`}>
          Always ready to take the next Challenge
          </h1>
          <p className='w-[470px] mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas facere quia rerum dolorem illum exercitationem quisquam voluptatibus aspernatur eos libero?</p>
        </div>

            <img src={umbrella} alt="umbrella" className='w-[350px] h-[307px] ml-[-50px]'/>
      </div>

      <div className='flex flex-col items-center'>
        {Challenge.map((Challenge, index) => (
          <CountCard key={Challenge.title} {...Challenge} index={index}/>
        ))}

      </div>
    </div>
  )
}

export default Challenges