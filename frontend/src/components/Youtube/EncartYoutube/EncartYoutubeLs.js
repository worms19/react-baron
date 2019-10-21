import React from 'react'
import YouTube from "react-youtube";

const EncartYoutubeLs = (props) => (

    <div className="youtube-centered">
        <YouTube
            videoId={props.link}
        />
    </div>
)

export default EncartYoutubeLs




