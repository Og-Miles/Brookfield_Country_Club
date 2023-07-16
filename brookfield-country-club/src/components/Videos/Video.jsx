import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { video } from '../../assets';
import './video.css';
import styles from '../../style';

const Video = () => {
  const vidRef = React.useRef();
  const [playVideo, setPlayVideo] = useState(false);

  const handleVideo = () => {
      setPlayVideo ((prevPlayVideo) => !prevPlayVideo );  
      if (playVideo) {
          vidRef.current.pause();
        }else{
          vidRef.current.play();
        }
  }
  return (
    <div className='app__video'>
    <video 
    src={video}
    ref={vidRef}
    type ='video/mp4'
    loop
    controls = {false}
    muted
    />
    <div className="app__video-overlay flex flex-col items-center justify-center">
      <div className='justify center'>
        <h1 className={`text-[14px] lg:text-[48px] font-Yeseva One text-white mb-3 max-w-[1085px]`}>View the Experience right before you live it</h1>
      </div>
      <div className="app__video-overlay_circle flex items-center justify-center"
      onClick={handleVideo}
      >
        
        {playVideo
          ?<BsPauseFill color='#fff' fontSize={30}/>
          :<BsFillPlayFill color='#fff' fontSize={30}/>
        }
      </div>
    </div>
  </div>
);
}

export default Video;