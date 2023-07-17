import { BeachPoints } from '../constants'
import BeachpointCard from '../containers/BeachpointCard'
import styles from '../style'

const Updates = () => {
  return (
    <div className={` bg-[#EDF0F5] pb-16`}>
          <div className={` ${styles.marginX} flex flex-col sm:flex-row justify-between mb-3`}>
              <div className={`flex flex-col ${styles.marginY} `}>
                  <h1 className={`${styles.heading1}`}>Stay Updated with Beachpoint</h1>
                  <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur quas molestias nesciunt distinctio odit hic itaque voluptate blanditiis culpa accusantium.</p>
              </div>
              <button className={`${styles.marginY} h-fit w-fit`}>View All Post</button>
          </div>

          <div className={`justify-evenly flex flex-wrap`}>
            {BeachPoints.map((Beachpoint, index) => (
              <BeachpointCard key={Beachpoint.title} {...Beachpoint} index={index} />
            ))}
          </div>
    </div>
  )
}

export default Updates