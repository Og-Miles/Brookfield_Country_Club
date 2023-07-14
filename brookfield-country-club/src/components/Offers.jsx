import React from 'react'
import styles from '../style'
import { special } from '../assets'
import { Discounts } from '../constants'

const DiscountCard = ({img, fee, title, content}) => (
  <div className={`flex flex-col ${styles.marginY}`}>
      <div className='flex'>
      <div>
      <img src={img} alt="counts" />
      </div>

      <div className='flex flex-col ml-7'>
          {fee}
          <h4 className={`${styles.heading2}`}>{title}</h4>
          <p className={`${styles.paragraph} w-[200px]`}>{content}</p>
      </div>
      </div>

  </div>
)

const Offers = () => {
  return (
    <div className={`${styles.marginX} ${styles.marginY}`}>
        <div className={`flex justify-between`}>
          <div className='flex flex-col'>
            <h1 className={`${styles.heading1}`}>Beachpoint <br /> Special Offers</h1>
            <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolore repellat ab natus ullam ratione enim blanditiis minus nostrum atque.</p>
          </div>
          <button className='h-[100%] md:w-[100px]'>View All Offers</button>
        </div>

        <div className='flex justify-between'>
          <div>
            {Discounts.map((Discount, index) => (
              <DiscountCard key={Discount.title} {...Discount} index={index}/>
            ))}
          </div>

          <div className="flex-end bg-[url('/src/assets/dotted.png')] bg-no-repeat bg-contain static right-0">
              <img src={special} alt="special" />
          </div>
        </div>
      
    </div>
  )
}

export default Offers