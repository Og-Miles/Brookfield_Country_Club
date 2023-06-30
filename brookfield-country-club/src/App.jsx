import React from 'react'
import styles from './style'
import { avatar1,avatar2,avatar3,Beachpoint1,Beachpoint2,Beachpoint3,count1,count2,count3,Discount,gradient1,gradient2,gradient3,gradient4,gradient5, Hero,Logo,special,Luxury1,Luxury2,sponsor1,sponsor2,video,dotted,umbrella,Frame  } from "../src/assets/index";
import { Navbar, Offers, Gallery, HeroSection, Testimonials, Holiday, Footer, Video,  Updates,Challenges, Resort} from './components';

const App = () => (
  
  <div className='w-full overflow-hidden'>
      {/* Navbar Section */}
    <div className={`${styles.paddingX} ${styles.flexCenter} w-full`}>
     <div className={`${styles.boxWidth} `}>
          <Navbar />
     </div>

    </div>

    {/* Hero Section */}
    <div className={`${styles.flexCenter} back-img `}>
      <div>
       <HeroSection/>
      </div>
    </div>
    
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
       <Holiday/>
       
       <Challenges/>
      </div>
    </div>


    <div className={`${styles.flexCenter}`}>
      <div>
       <Gallery/>
      </div>
    </div>

    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
       <Offers/>
       <Resort/>
      </div>
    </div>

    <div className={`${styles.flexCenter}`}>
      <div>
       <Video/>
      </div>
    </div>

    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
       <Testimonials/>
       <Updates/>
       <Footer/>
      </div>
    </div>
  </div>

    
  )


export default App