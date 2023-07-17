import { BeachPoints } from '../constants'
import BeachpointCard from '../containers/BeachpointCard'
import styles from '../style'

const Updates = () => {
  return (
    <div className={` bg-[#EDF0F5]`}>
          <div className={` ${styles.marginX} flex flex-col lg:flex-row justify-between mb-7`}>
              <div className={`flex flex-col ${styles.marginY}`}>
                  <h1 className={`${styles.heading1}`}>Stay Updated with Beachpoint</h1>
                  <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur quas molestias nesciunt distinctio odit hic itaque voluptate blanditiis culpa accusantium.</p>
              </div>
              <button className='h-fit w-fit mt-7 lg:mt-60'>View All Post</button>
          </div>

          <div className={`justify-between flex flex-col sm:flex-row ${styles.marginX}`}>
            {BeachPoints.map((Beachpoint, index) => (
              <BeachpointCard key={Beachpoint.title} {...Beachpoint} index={index} />
            ))}
          </div>
    </div>
  )
}

export default Updates