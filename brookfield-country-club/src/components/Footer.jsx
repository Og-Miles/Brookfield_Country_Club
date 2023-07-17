import { Logo, sponsor1, sponsor2 } from "../assets"
import styles from "../style"

const Footer = () => {
  return (
    <div className="bg-[#0C112B]">

    <div className={`${styles.marginX}`}>
      
        <div className="justify-between flex flex-col md:flex-row pb-14">
          <div>
            <img src={Logo} alt="Logo" className="w-[128px] h-[64px] mt-16"/>
          </div>

          <div className="flex">
            <img src={sponsor1} alt="sponsor1" className="w-[150px] h-[150px] mt-16 mr-7"/>
            <img src={sponsor2} alt="sponsor2" className="w-[150px] h-[150px] mt-16"/>
          </div>
          
        </div>

        <div className="border-t-2 border-[#66676b2f]">
          <div className={`flex flex-col md:flex-row justify-between mt-2 ${styles.marginX}`}>
            <p className={`${styles.paragraph} mb-5`}>© 2023 Beachpoint Resort - All Rights Reserved</p>
            <p className={`${styles.paragraph}`}>Terms Of Service | Privacy Policy</p>
          </div>
        </div>

    </div>
    </div>
  )
}

export default Footer