import React from 'react';
import '../CSS/YoutubeList.css';
import EncartYoutubeLs from './EncartYoutube/EncartYoutubeLs';

const   YoutubeList = (props) => {
    const createYouLink = (youtubeLink, index, length) => {
        let prop ={};
        prop.link= youtubeLink.link;
        prop.onReady = index === (length-1) ? props.onReady : () => {};
        return  (<EncartYoutubeLs{ ...prop }/>);
    };
    const length = props.youtubeLinks.length;
    const youtubeLinks = props.youtubeLinks.map((youtubeLink, index) => {
        return createYouLink(youtubeLink,index,length);
    });

  return (
    <ul className="sa">
      {youtubeLinks}
    </ul>
  );
};

export default YoutubeList;


