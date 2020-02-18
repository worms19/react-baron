import React from 'react';
import YouTube from 'react-youtube';
import './EncartYoutube.css'
const EncartYoutubeLs = (props) => {

    const isMobileDevice = () => {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };

    const a = isMobileDevice();
    console.log(a);
    return(
  <div className="youtube-centered">
    <YouTube
        className={a === true ? "width" : ""}
      videoId={props.link}
      onReady={props.onReady}
    />
  </div>
    );
};

export default EncartYoutubeLs;
