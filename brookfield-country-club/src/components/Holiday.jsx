import styles from '../style';
import { Frame } from '../assets';

const Holiday = () => {
  return (
    <div className={` ${styles.marginY} ${styles.marginX} ${styles.flexCenter} flex lg:flex-row flex-col justify-between flex-1`}>

      <div>
      <img src={Frame} alt="frame" className='sm:max-w-[700px] max-w-[310px] md:max-w-[437px]'/>
      </div>
     

     <div className={`flex-col`}>
        <h1 className={`${styles.heading1}`}>Quality <br /> Holiday With Us</h1>
        <p className={`${styles.paragraph} marg`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis voluptatum culpa fuga error corrupti accusamus consequuntur quae atque esse.</p>
        <button>Read More</button>
     </div>
     

    
   
    </div>
  )
}

export default Holiday