import React from 'react';
import '../CSS/YoutubeList.css';
import EncartYoutube from './EncartYoutube/EncartYoutube';
import EncartYoutubeLs from './EncartYoutube/EncartYoutubeLs';

const YoutubeList = (props) => {
  const youtubeLinks = props.youtubeLinks.map((youtubeLink, index) => (
    <EncartYoutubeLs
      link={youtubeLink.link}
    />
  ));
  return (
    <ul className="sa">
      {youtubeLinks}
    </ul>
  );
};

export default YoutubeList;
