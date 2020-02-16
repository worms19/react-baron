
import React from 'react';
import YouTube from 'react-youtube';
import EncartBlanc from '../components/Encart/EncartBlanc';
import '../App.css';
import Footer2 from "../components/Footer2/Footer2";


const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1,
  },
};

const Video = () => (
  <div className="">
    <EncartBlanc
      text1="See What NeWs"
      text2="Latests Videos"
    />
    <div className="background-grey">
      <div className="youtube-centered">
        <YouTube
          videoId="QWusFkPm2E4"
        />
      </div>
      <div className="youtube-centered">
        <YouTube
          videoId="SDPEbt0uknk"
        />
      </div>
      <div className="youtube-centered">
        <YouTube
          videoId="uWqmB2M1Cu0"
        />
      </div>
    </div>
      <Footer2
        isOn={false}
        />
        />
  </div>
);

export default Video;
