import './App.css';
import React, { useState } from "react";



const Fullscreen = () => {
const [fillScreen, setFillScreen] = useState(false);
   
let elem = document.documentElement;

   function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    };
    setFillScreen(true);
  }

  return (
      <div>{!fillScreen && (<div className="fullscreen">
      <h3>Please switch to fullscreen mode</h3>
      <button onClick={() => openFullscreen()} className="cta-button fullscreen-wallet-button">fullscreen Mode</button>
      </div>)}
</div>
  )

};

export default Fullscreen;