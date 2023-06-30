
import { avatar1,avatar2,avatar3,Beachpoint1,Beachpoint2,Beachpoint3,count1,count2,count3,Discount,gradient1,gradient2,gradient3,gradient4,gradient5, Hero,Logo,special,Luxury1,Luxury2,sponsor1,sponsor2,video,dotted,umbrella,Frame  } from "../assets/index";

import Date from '../containers/Date'
import styles from "../style";

const HeroSection = () => (
    <div className={`w-full bg-white px-16 py-6 ${styles.flexCenter}`}>
        
     <div className="flex flex-row justify-between">
      <div>
     <form action="#" className="flex flex-col mr-5">
      <label htmlFor="Arrival" className={`font-Roboto font-normal text-[14px] tracking-widest mb-1`}>ARRIVAL</label>
      <input type="date" id="Arrival_date" name="Arrival" className={`border border-pgray py-[10px] px-[15px] max-w-[245px] max-h-[80px]`}/>
     </form>
      </div>

      <div >
     <form action="#" className="flex flex-col mr-5">
      <label htmlFor="Departure" className={`font-Roboto font-normal text-[14px] tracking-widest mb-1`}>DEPATURE</label>
      <input type="date" id="Departure_date" name="Departure" className={`border border-pgray py-[10px] px-[15px] max-w-[245px] max-h-[80px]`}/>
     </form>
      </div>

      <div>
        <label htmlFor="Guests" className={`font-Roboto font-normal text-[14px] tracking-widest mb-1`}>GUESTS</label>
        <select name="Guests" id="guests" className={`border mr-5 ${styles.flexCenter} border-pgray py-[12px] px-[15px] `}>
          <option value="2 Adults 1 Child ">2 Adults, 1 Child</option>
          <option value="1 Adult">Single Adult, 1 Bed</option>
          <option value="2 Adults. 1 Child ">2 Adults, 2 Bes</option>
          <option value="2 Adults. 1 Child ">2 Adults, 1 Child</option>
          <option value="2 Adults. 1 Child ">2 Adults, 1 Child</option>
        </select>
      </div>

      


     
        <input type="submit" value={'Check Availability'} className="bg-active px-[30px] text-white font-Roboto font-normal h-100%"/>
     </div>
         
    </div>
  )


export default HeroSection