import styles from '../style'
import TestimonialCard from '../containers/TestimonialCard'
import { Testimonials } from '../constants'

const Testimoniale = () => {
  return (
    <div className={`${styles.marginY} ${styles.marginX}`}>
      <div className='flex flex-col'>
          {/* Heading / Paragraph */}

        <div className='flex flex-col w-full text-center'>
          <h1 className='font-Yeseva One text-[24px] lg:text-[48px] mb-5'>What People Say?</h1>
          <p className={`text-pgray m-auto lg:w-[35%] w-[100%] mb-5`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reiciendis enim dolorem consectetur harum facilis cum est minus ab illo!
          </p>
        </div>
        {/* Testimonial Card Render */}

      <div className='flex-wrap sm:flex-row flex justify-evenly items-center mt-5'>
        {Testimonials.map((Testimonial, index) => (
          <TestimonialCard key={Testimonial.name} {...Testimonial} index={index}/>
        ))}
      </div>

      </div>
    </div>
  )
}

export default Testimoniale