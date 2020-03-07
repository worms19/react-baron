import React from 'react';

import EncartBlanc from '../components/Encart/EncartBlanc';
import Footer2 from "../components/Footer2/Footer2";
import ReactMediaView from "react-media-view";
import helpers from "../helpers/date";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

export default class GalleryPhoto2 extends React.Component {
  constructor() {
    super();
      this.state = {
          media: [
              { src:'img/br-img/190705_Baron CrÉne_003.jpg',
                index: 0
              },
              { src:'img/br-img/190705_Baron CrÉne_006.jpg',
                index: 1
              },
              { src:'img/br-img/190705_Baron CrÉne_009.jpg',
                index: 2
              },
              { src:'img/br-img/190705_Baron CrÉne_010.jpg',
                index: 3
              },
              { src:'img/br-img/190705_Baron CrÉne_015.jpg',
                index: 4
              },
              { src:'img/br-img/190705_Baron CrÉne_016.jpg',
                index: 5
              },
              { src:'img/br-img/190705_Baron CrÉne_020.jpg',
                index: 6
              },
              { src:'img/br-img/190705_Baron CrÉne_022.jpg',
                index: 7
              },
              { src:'img/br-img/190705_Baron CrÉne_026.jpg',
                index: 8
              },
              { src:'img/br-img/190705_Baron CrÉne_036.jpg',
                index: 9
              },
              { src:'img/br-img/190927_Baron CrÉne_Portraits_006_WEB.jpg',
                index: 10
              },
              { src:'img/br-img/190927_Baron CrÉne_Portraits_008_WEB.jpg',
                index: 11
              },
              { src:'img/br-img/190927_Baron CrÉne_Portraits_009_WEB.jpg',
                index: 12
              },
              { src:'img/br-img/190927_Baron CrÉne_Portraits_010_WEB.jpg',
                index: 13
              },
              { src:'img/br-img/190927_Baron CrÉne_Portraits_021_WEB.jpg',
                index: 14
              },
              { src:'img/br-img/190927_Baron CrÉne_Portraits_033_WEB.jpg',
                index: 15
              },
              { src:'img/br-img/190927_Baron CrÉne_Portraits_037_WEB.jpg',
                index: 16
              },
              { src:'img/br-img/190927_Baron CrÉne_Portraits_056_WEB.jpg',
                index: 17
              },
              { src:'img/br-img/190927_Baron CrÉne_Portraits_058_WEB.jpg',
                index: 18
              },
              { src:'img/br-img/190927_Baron CrÉne_Portraits_066_WEB.jpg',
                index: 19
              },
              { src:'img/br-img/190927_Baron CrÉne_Portraits_069_WEB.jpg',
                index: 20
              },
              { src:'img/br-img/190927_Baron CrÉne_Portraits_075_WEB.jpg',
                index: 21
              },
              { src:'img/br-img/190927_Baron CrÉne_Portraits_082_WEB.jpg',
                index: 22
              },
              { src:'img/br-img/Baron Crane - International-4277.jpg',
                index: 23
              },
              { src:'img/br-img/Baron Crane - International-4412.jpg',
                index: 24
              },
              { src:'img/br-img/Baron Crane - International-4416.jpg',
                index: 25
              },
              { src:'img/br-img/Baron Crane - International-4455.jpg',
                index: 26
              },
              { src:'img/br-img/Baron Crane - Portrait-.jpg',
                index: 27
              },
              { src:'img/br-img/DSC_0639.jpg',
                index: 28
              },
              { src:'img/br-img/DSC_9395.jpg',
                index: 29
              },
              { src:'img/br-img/DSC_9417.jpg',
                index: 30
              },
              { src:'img/br-img/DSC_9479.jpg',
                index: 31
              },
              { src:'img/br-img/DSC_9494.jpg',
                index: 32
              },
              { src:'img/br-img/DSC_9530.jpg',
                index: 33
              },
              { src:'img/br-img/DSC_9610.jpg',
                index: 34
              },
              { src:'img/br-img/DSC_9702.jpg',
                index: 35
              },
              { src:'img/br-img/DSC_9807.jpg',
                index: 36
              },
              { src:'img/br-img/DSC_9833.jpg',
                index: 37
              },

          ],
          photoIndex: 0,
          isOpen: false,
      };

  }


    handleClick = (mediaObject) => {
        this.setState({
            isOpen: true,
            photoIndex: mediaObject.index
        });
    };

  render() {

      const { photoIndex, isOpen } = this.state;
      const { media } = this.state;
      const images = media.map(m  =>  m.src);
      const isMobile = helpers.isMobileDevice();
      const row = isMobile === true ? 1 : 3;

      return (
        <div>

      <div className="container">
        <EncartBlanc
          text1="See What’s NeWs"
          text2="Latest Photos"
          size={1}
        />
        <div className="background-grey2 paddingBot">

            <ReactMediaView
                media={media}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                columnCount={row}
                onClick={this.handleClick}
            />
        </div>
          <button type="button" onClick={() => this.setState({ isOpen: true })}>
              Open Lightbox
          </button>
          {isOpen && (
          <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                  this.setState({
                      photoIndex: (photoIndex + images.length - 1) % images.length,
                  })
              }
              onMoveNextRequest={() =>
                  this.setState({
                      photoIndex: (photoIndex + 1) % images.length,
                  })
              }
          />
          )}
        </div>
        <Footer2
          isOn={true}
        />
        </div>
    );
  }
}
