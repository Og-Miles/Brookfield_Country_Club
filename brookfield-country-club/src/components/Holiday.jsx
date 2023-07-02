import styles from '../style';
import { Frame } from '../assets';

const Holiday = () => {
  return (
    <div className={` ${styles.marginY} ${styles.marginX} ${styles.flexCenter} flex sm:flex-row flex-col justify-between flex-1`}>

      
      <img src={Frame} alt="frame" className='sm:max-w-[700px] max-w-[310px]'/>
     

     <div className={`flex-col`}>
        <h1 className={`${styles.heading1}`}>Quality Holiday With Us</h1>
        <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis voluptatum culpa fuga error corrupti accusamus consequuntur quae atque esse.</p>
        <button>Read More</button>
     </div>
     

    
   
    </div>
  )
}

export default Holiday