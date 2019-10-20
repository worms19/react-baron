import React from 'react';
import '../CSS/YoutubeList.css'
import EncartYoutube from "./EncartYoutube/EncartYoutube";

const YoutubeList = props =>{

    const youtubeLinks = props.youtubeLinks.map((youtubeLink,index) => {
        return (
            <EncartYoutube
                link={youtubeLink.link}
                key={youtubeLink._id}
                youtubeLinkId = {youtubeLink._id}
                deleteThisLink = {props.onDeleteYoutubeLink}
                />
                );
        });

    return (
        <ul className="youtubeLink__list">
            {youtubeLinks}
        </ul>
    );
}

export default YoutubeList;

