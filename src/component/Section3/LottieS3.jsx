import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function LottieS3() {

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../assets/lottie/connect.json')
    })
  }, [])
  
  return (
    <div className="App">
      <div className="container" ref={container}></div>
    </div>
  );
}

export default LottieS3;