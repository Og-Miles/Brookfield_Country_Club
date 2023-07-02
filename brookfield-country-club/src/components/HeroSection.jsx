import styles from "../style";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const HeroSection = () => (
    <div className={`w-full bg-white px-10 py-10 rounded ${styles.flexCenter} sm:mt-[318px] mt-[250px] sm:border-none border-blue-400`}>
        
     <div className={`flex sm:flex-row flex-col justify-between ${styles.flexCenter}`}>
      <div>
     <form action="#" className="flex flex-col sm:mr-5 mr-0 sm:mb-0 mb-3">
      <label htmlFor="Arrival" className={`font-Roboto font-normal text-[14px] tracking-widest mb-1 text-p__blue__black`}>
        ARRIVAL
      </label>
      <input 
      type="date" 
      id="Arrival_date" 
      name="Arrival" 
      className={`border border-pgray py-[10px] px-[15px] max-w-[245px] max-h-[80px] text-p__blue__black outline-none cursor-pointer`} />
      
     </form>
      </div>

      <div >
     <form action="#" className="flex flex-col sm:mr-5 mr-0 sm:mb-0 mb-3">
      <label htmlFor="Departure" className={`font-Roboto font-normal text-[14px] tracking-widest mb-1 text-p__blue__black`}>DEPARTURE</label>
      <input type="date" id="Departure_date" name="Departure" className={`border border-pgray py-[10px] px-[15px] max-w-[245px] max-h-[80px] text-p__blue__black outline-none cursor-pointer`}/>
     </form>
      </div>

      <div>
        <label htmlFor="Guests" className={`font-Roboto font-normal text-[14px] tracking-widest mb-1 text-p__blue__black`}>GUESTS</label>
        <select name="Guests" id="guests" className={`border sm:mr-5 mr-0 sm:mb-0 mb-3 ${styles.flexCenter} border-pgray py-[12px] px-[15px] outline-none cursor-pointer classic pr-5`}>
          <option value="2 Adults 1 Child " className="text-p__blue__black">2 Adults, 1 Child</option>
          <option value="1 Adult" className="text-p__blue__black">Single Adult, 1 Bed</option>
          <option value="2 Adults. 1 Child " className="text-p__blue__black">2 Adults, 2 Bed</option>
          <option value="2 Adults. 1 Child " className="text-p__blue__black">2 Adults, 2 Children</option>
          <option value="2 Adults. 1 Child " className="text-p__blue__black">Extras</option>
        </select>
      </div>

      


     
        <button className={`btn mt-6 font-normal`}>Check Availability</button>
     </div>
         
    </div>
  )


export default HeroSection