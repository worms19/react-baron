import React from 'react';
import EncartBlanc from '../components/Encart/EncartBlanc';
import Footer2 from "../components/Footer2/Footer2";
import ReactMediaView from "react-media-view";
import helpers from "../helpers/date";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import './GalleryPhoto.css'; // This only needs to be imported once in your app

export default class GalleryPhoto2 extends React.Component {
  constructor() {
    super();
      this.state = {
          media: [
              { src:'img/br-img/thumbnails/190705_Baron CrÉne_003_tn.jpg',   index: 0},
              { src:'img/br-img/thumbnails/190705_Baron CrÉne_006_tn.jpg', index: 1},
              { src:'img/br-img/thumbnails/190705_Baron CrÉne_009_tn.jpg', index: 2},
              { src:'img/br-img/thumbnails/190705_Baron CrÉne_010_tn.jpg', index: 3},
              { src:'img/br-img/thumbnails/190705_Baron CrÉne_015_tn.jpg', index: 4},
              { src:'img/br-img/thumbnails/190705_Baron CrÉne_016_tn.jpg', index: 5},
              { src:'img/br-img/thumbnails/190705_Baron CrÉne_020_tn.jpg', index: 6},
              { src:'img/br-img/thumbnails/190705_Baron CrÉne_022_tn.jpg', index: 7},
              { src:'img/br-img/thumbnails/190705_Baron CrÉne_026_tn.jpg', index: 8},
              { src:'img/br-img/thumbnails/190705_Baron CrÉne_036_tn.jpg', index: 9},
              { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_006_WEB_tn.jpg', index: 10},
              { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_008_WEB_tn.jpg', index: 11},
              { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_009_WEB_tn.jpg', index: 12},
              { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_010_WEB_tn.jpg', index: 13},
              { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_021_WEB_tn.jpg', index: 14},
              { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_033_WEB_tn.jpg', index: 15},
              { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_037_WEB_tn.jpg', index: 16},
              { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_056_WEB_tn.jpg', index: 17},
              { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_058_WEB_tn.jpg', index: 18},
              { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_066_WEB_tn.jpg', index: 19},
              { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_069_WEB_tn.jpg', index: 20},
              { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_075_WEB_tn.jpg', index: 21},
              { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_082_WEB_tn.jpg', index: 22},
              { src:'img/br-img/thumbnails/Baron Crane - International-4277_tn.jpg', index: 23},
              { src:'img/br-img/thumbnails/Baron Crane - International-4412_tn.jpg', index: 24},
              { src:'img/br-img/thumbnails/Baron Crane - International-4416_tn.jpg', index: 2},
              { src:'img/br-img/thumbnails/Baron Crane - International-4455_tn.jpg', index: 26},
              { src:'img/br-img/thumbnails/Baron Crane - Portrait-_tn.jpg', index: 27},
              { src:'img/br-img/thumbnails/DSC_0639_tn.jpg', index: 28},
              { src:'img/br-img/thumbnails/DSC_9395_tn.jpg', index: 29},
              { src:'img/br-img/thumbnails/DSC_9417_tn.jpg', index: 30},
              { src:'img/br-img/thumbnails/DSC_9479_tn.jpg', index: 31},
              { src:'img/br-img/thumbnails/DSC_9494_tn.jpg', index: 32},
              { src:'img/br-img/thumbnails/DSC_9530_tn.jpg', index: 33},
              { src:'img/br-img/thumbnails/DSC_9610_tn.jpg', index: 34},
              { src:'img/br-img/thumbnails/DSC_9702_tn.jpg', index: 35},
              { src:'img/br-img/thumbnails/DSC_9807_tn.jpg', index: 36},
              { src:'img/br-img/thumbnails/DSC_9833_tn.jpg', index: 37},
              { src:'img/s/thumbnails/90525481_2568839440052653_857821074862112768_n_tn.jpg', index: 38},
              { src:'img/s/thumbnails/90528153_160923881708807_4128829542854819840_n_tn.jpg', index: 39},
              { src:'img/s/thumbnails/90528971_202380831094092_3672688313619185664_n_tn.jpg', index: 40},
              { src:'img/s/thumbnails/90559980_986744631722905_9218820449557807104_n_tn.jpg', index: 41},
              { src:'img/s/thumbnails/90642265_213575803079895_8818855395394060288_n_tn.jpg', index: 42},
              { src:'img/s/thumbnails/90735703_530625244259060_5300557523839877120_n_tn.jpg', index: 43},
              { src:'img/s/thumbnails/Baron-Crane_851_hdhhrdc1_tn.jpg', index: 44},
              { src:'img/s/thumbnails/Baron-Crane_851_nrxa6e1v_tn.jpg', index: 45},
          ],
          photoIndex: 0,
          isOpen: false,
      };
      this.images = [
          'img/br-img/190705_Baron CrÉne_003.jpg',
          'img/br-img/190705_Baron CrÉne_006.jpg',
          'img/br-img/190705_Baron CrÉne_009.jpg',
          'img/br-img/190705_Baron CrÉne_010.jpg',
          'img/br-img/190705_Baron CrÉne_015.jpg',
          'img/br-img/190705_Baron CrÉne_016.jpg',
          'img/br-img/190705_Baron CrÉne_020.jpg',
          'img/br-img/190705_Baron CrÉne_022.jpg',
          'img/br-img/190705_Baron CrÉne_026.jpg',
          'img/br-img/190705_Baron CrÉne_036.jpg',
          'img/br-img/190927_Baron CrÉne_Portraits_006_WEB.jpg',
          'img/br-img/190927_Baron CrÉne_Portraits_008_WEB.jpg',
          'img/br-img/190927_Baron CrÉne_Portraits_009_WEB.jpg',
          'img/br-img/190927_Baron CrÉne_Portraits_010_WEB.jpg',
          'img/br-img/190927_Baron CrÉne_Portraits_021_WEB.jpg',
          'img/br-img/190927_Baron CrÉne_Portraits_033_WEB.jpg',
          'img/br-img/190927_Baron CrÉne_Portraits_037_WEB.jpg',
          'img/br-img/190927_Baron CrÉne_Portraits_056_WEB.jpg',
          'img/br-img/190927_Baron CrÉne_Portraits_058_WEB.jpg',
          'img/br-img/190927_Baron CrÉne_Portraits_066_WEB.jpg',
          'img/br-img/190927_Baron CrÉne_Portraits_069_WEB.jpg',
          'img/br-img/190927_Baron CrÉne_Portraits_075_WEB.jpg',
          'img/br-img/190927_Baron CrÉne_Portraits_082_WEB.jpg',
          'img/br-img/Baron Crane - International-4277.jpg',
          'img/br-img/Baron Crane - International-4412.jpg',
          'img/br-img/Baron Crane - International-4416.jpg',
          'img/br-img/thumbnails/Baron Crane - Portrait-.jpg',
          'img/br-img/Baron Crane - International-4455.jpg',
          'img/br-img/DSC_0639.jpg',
          'img/br-img/DSC_9395.jpg',
          'img/br-img/DSC_9417.jpg',
          'img/br-img/DSC_9479.jpg',
          'img/br-img/DSC_9494.jpg',
          'img/br-img/DSC_9530.jpg',
          'img/br-img/DSC_9610.jpg',
          'img/br-img/DSC_9702.jpg',
          'img/br-img/DSC_9807.jpg',
          'img/br-img/DSC_9833.jpg',
          'img/s/90525481_2568839440052653_857821074862112768_n.jpg',
          'img/s/90528153_160923881708807_4128829542854819840_n.jpg',
          'img/s/90528971_202380831094092_3672688313619185664_n.jpg',
          'img/s/90559980_986744631722905_9218820449557807104_n.jpg',
          'img/s/90642265_213575803079895_8818855395394060288_n.jpg',
          'img/s/90735703_530625244259060_5300557523839877120_n.jpg',
          'img/s/Baron-Crane_851_hdhhrdc1.jpg',
          'img/s/Baron-Crane_851_nrxa6e1v.jpg'
      ];
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
      const { images } = this;
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





