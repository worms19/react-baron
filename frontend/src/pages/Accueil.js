import React, { useState } from "react";
import Footer2 from "../components/Footer2/Footer2";
import "./Accueil.css";
import helpers from "../helpers/date";
import ModalAccueil from "../components/Modal/ModalAccueil";
import YouTube from "react-youtube";

const bottom = {
  position: "absolute",
  bottom: "0",
  width: "100%",
};

const height = {
  display: "flex",
  height: "90.9vh",
};
const mb = {
  marginBottom: "20px",
};

export default function Accueil() {
  const [displayModal, setDisplayModal] = useState(true);
  const isMobile = helpers.isMobileDevice();

  const closeModal = () => {
    setDisplayModal(false);
  };
  return (
    <div style={height}>
      {displayModal && !isMobile && (
        <ModalAccueil
          title="News"
          canCancel={true}
          onCancel={closeModal}
          onConfirm={() => {}}
          confirmText=""
        >
          <div style={mb}>
            <a
              href="https://marsredsky.bigcartel.com/products"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="appImage"
                src="img/s/215332888_2953708918220150_6812760165352714749_n.jpg"
              />
            </a>
          </div>
          <div className="center" style={mb}>
            <a
              href="https://marsredsky.bigcartel.com/products"
              target="_blank"
              rel="noopener noreferrer"
              className="vv"
            >
              <button className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-colorInherit buttonBlack vv">
                PRE-ORDER
              </button>
            </a>
          </div>
          <YouTube videoId={"alta1B3zpCA"} onReady={() => {}} />
        </ModalAccueil>
      )}
      {!isMobile && (
        <div className="bandCampPlayer">
          
          <iframe className="frame" src="https://bandcamp.com/EmbeddedPlayer/album=3686361986/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://baroncrane.bandcamp.com/album/les-beaux-jours">Les Beaux Jours by Baron Crâne</a></iframe>
          {/* <iframe  src="https://bandcamp.com/EmbeddedPlayer/album=3686361986/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://baroncrane.bandcamp.com/album/les-beaux-jours">Les Beaux Jours by Baron Crâne</a></iframe> */}
        </div>
      )}

      <div style={bottom}>
        <Footer2 isOn={false} noBack={true} />
      </div>
    </div>
  );
}


