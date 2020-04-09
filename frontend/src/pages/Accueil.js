import React from 'react';
import Footer2 from "../components/Footer2/Footer2";
import './Accueil.css'
import helpers from "../helpers/date";
import ModalAccueil from "../components/Modal/ModalAccueil";

const bottom ={
    position: 'absolute',
    bottom: '0',
    width: '100%'
};

const height ={
    display: 'flex',
    height: '90.9vh'
};




export default function Accueil() {

    const isMobile = helpers.isMobileDevice();
    return (
        <div style={height}>
            <ModalAccueil
                title="News"
                canCancel={true}
                onCancel={() => {}}
                onConfirm={() => {}}
                confirmText="">
                <img className="appImage"
                     src="img/s/92953669_832875450532001_5435424805513854976_n.jpg"
                />
            </ModalAccueil>
                {
                    !isMobile &&
                        <div className="bandCampPlayer">
                            <iframe className="frame"
                                    src="https://bandcamp.com/EmbeddedPlayer/album=3971644861/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
                                    seamless>
                                <a href="http://baroncrane.bandcamp.com/album/electric-shades">Electric Shades by Baron
                                    Crâne</a>
                            </iframe>
                        </div>
                }

            <div style={bottom}>
                <Footer2
                    isOn={false}
                    noBack={true}
                />
            </div>
        </div>
    );
}


