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
            { src:'img/new/thumbnails/Baron Crane-7589_tn.jpg ',   index: 0},
            { src:'img/new/thumbnails/Baron Crane-7593_tn.jpg ',   index: 1},
            { src:'img/new/thumbnails/Baron Crane-7604_tn.jpg ',   index: 2},
            { src:'img/new/thumbnails/Baron Crane-7617_tn.jpg ',   index: 3},
            { src:'img/new/thumbnails/Baron Crane-7635_tn.jpg ',   index: 4},
            { src:'img/new/thumbnails/Baron Crane-7639_tn.jpg ',   index: 5},
            { src:'img/new/thumbnails/Baron Crane-7644_tn.jpg ',   index: 6},
            { src:'img/new/thumbnails/Baron Crane-7743_tn.jpg ',   index: 7},
            { src:'img/new/thumbnails/Baron Crane-7771_tn.jpg ',   index: 8},
            { src:'img/new/thumbnails/Baron Crane-7780_tn.jpg ',   index: 9},
            { src:'img/new/thumbnails/Baron Crane-7875_tn.jpg ',   index: 10},
            { src:'img/new/thumbnails/Baron Crane-7968_tn.jpg ',   index: 11},
            { src:'img/new/thumbnails/Baron Crane-7996_tn.jpg ',   index: 12},
            { src:'img/new/thumbnails/Baron Crane-8109_tn.jpg ',   index: 13},
            { src:'img/new/thumbnails/Baron Crane-8163_tn.jpg ',   index: 14},
            { src:'img/new/thumbnails/Baron Crane-8191_tn.jpg ',   index: 15},
            { src:'img/new/thumbnails/Baron Crane-8210_tn.jpg ',   index: 16},
            { src:'img/new/thumbnails/Baron Crane-8462_tn.jpg ',   index: 17},
            { src:'img/new/thumbnails/Baron Crane-8541_tn.jpg ',   index: 18},
            { src:'img/new/thumbnails/Baron Crane-8579_tn.jpg ',   index: 19},
            { src:'img/new/thumbnails/Baron Crane-8620_tn.jpg ',   index: 20},
            { src:'img/new/thumbnails/Baron Crane-8642_tn.jpg ',   index: 21},
            { src:'img/new/thumbnails/Baron Crane-8651_tn.jpg ',   index: 22},
            { src:'img/new/thumbnails/Baron Crane-8682_tn.jpg ',   index: 23},
            { src:'img/new/thumbnails/Baron Crane-8709_tn.jpg ',   index: 24},
            { src:'img/new/thumbnails/IMG_0108_tn.jpg ',   index: 25},
            { src:'img/new/thumbnails/IMG_0109_tn.jpg ',   index: 26},
            { src:'img/new/thumbnails/IMG_0196_tn.jpg ',   index: 27},
            { src:'img/new/thumbnails/IMG_0235_tn.jpg ',   index: 28},
            { src:'img/new/thumbnails/IMG_0237_tn.jpg ',   index: 29},
            { src:'img/new/thumbnails/IMG_0238_tn.jpg ',   index: 30},
            { src:'img/new/thumbnails/IMG_0239_tn.jpg ',   index: 31},
            { src:'img/new/thumbnails/IMG_0240_tn.jpg ',   index: 32},
            { src:'img/new/thumbnails/IMG_0241_tn.jpg ',   index: 33},
            { src:'img/new/thumbnails/IMG_0242_tn.jpg ',   index: 34},
            { src:'img/new/thumbnails/IMG_0243_tn.jpg ',   index: 35},
            { src:'img/new/thumbnails/IMG_0244_tn.jpg ',   index: 36},
            { src:'img/new/thumbnails/IMG_0245_tn.jpg ',   index: 37},
            { src:'img/new/thumbnails/IMG_0246_tn.jpg ',   index: 38},
            { src:'img/new/thumbnails/IMG_0271_tn.jpg ',   index: 39},
            { src:'img/new/thumbnails/IMG_0276_tn.jpg ',   index: 40},
            { src:'img/new/thumbnails/IMG_0278_tn.jpg ',   index: 41},
            { src:'img/new/thumbnails/IMG_0279_tn.jpg ',   index: 42},
            { src:'img/new/thumbnails/IMG_0280_tn.jpg ',   index: 43},
            { src:'img/new/thumbnails/IMG_0281_tn.jpg ',   index: 44},
            { src:'img/new/thumbnails/IMG_0282_tn.jpg ',   index: 45},
            { src:'img/new/thumbnails/IMG_0283_tn.jpg ',   index: 46},
            { src:'img/new/thumbnails/IMG_1612_tn.jpg ',   index: 47},
            { src:'img/new/thumbnails/IMG_1613_tn.jpg ',   index: 48},
            { src:'img/new/thumbnails/IMG_1614_tn.jpg ',   index: 49},
            { src:'img/new/thumbnails/IMG_1615_tn.jpg ',   index: 50},
            { src:'img/new/thumbnails/IMG_1616_tn.jpg ',   index: 51},
            { src:'img/new/thumbnails/IMG_1617_tn.jpg ',   index: 52},
            { src:'img/new/thumbnails/IMG_1618_tn.jpg ',   index: 53},
            { src:'img/new/thumbnails/IMG_1619_tn.jpg ',   index: 54},
            { src:'img/new/thumbnails/IMG_1620_tn.jpg ',   index: 55},
            { src:'img/new/thumbnails/sélection Basse Batterie jolie_tn.jpg ',   index: 56},
            { src:'img/new/thumbnails/sélection Basse Batterie très cool_tn.jpg ',   index: 57},
            { src:'img/new/thumbnails/sélection Basse Guitare TB ++_tn.jpg ',   index: 58},
            { src:'img/new/thumbnails/sélection Batterie Basse Guitare_tn.jpg ',   index: 59},
            { src:'img/new/thumbnails/sélection Guitare batterie jolie_tn.jpg ',   index: 60},
            { src:'img/new/thumbnails/sélection Léo Guitare seul cheveux vnr _tn.jpg ',   index: 61},
            { src:'img/new/thumbnails/sélection Léo Guitare seul gueule_tn.jpg ',   index: 62},
            { src:'img/new/thumbnails/sélection Oliv seul Rouge_tn.jpg ',   index: 63},
                { src:'img/br-img/thumbnails/190705_Baron CrÉne_003_tn.jpg',   index: 64},
                { src:'img/br-img/thumbnails/190705_Baron CrÉne_006_tn.jpg', index: 65},
                { src:'img/br-img/thumbnails/190705_Baron CrÉne_009_tn.jpg', index: 66},
                { src:'img/br-img/thumbnails/190705_Baron CrÉne_010_tn.jpg', index: 67},
                { src:'img/br-img/thumbnails/190705_Baron CrÉne_015_tn.jpg', index: 68},
                { src:'img/br-img/thumbnails/190705_Baron CrÉne_016_tn.jpg', index: 69},
                { src:'img/br-img/thumbnails/190705_Baron CrÉne_020_tn.jpg', index: 70},
                { src:'img/br-img/thumbnails/190705_Baron CrÉne_022_tn.jpg', index: 71},
                { src:'img/br-img/thumbnails/190705_Baron CrÉne_026_tn.jpg', index: 72},
                { src:'img/br-img/thumbnails/190705_Baron CrÉne_036_tn.jpg', index: 73},
                { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_006_WEB_tn.jpg', index: 74},
                { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_008_WEB_tn.jpg', index: 75},
                { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_009_WEB_tn.jpg', index: 76},
                { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_010_WEB_tn.jpg', index: 77},
                { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_021_WEB_tn.jpg', index: 78},
                { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_033_WEB_tn.jpg', index: 79},
                { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_037_WEB_tn.jpg', index: 80},
                { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_056_WEB_tn.jpg', index: 81},
                { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_058_WEB_tn.jpg', index: 82},
                { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_066_WEB_tn.jpg', index: 83},
                { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_069_WEB_tn.jpg', index: 84},
                { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_075_WEB_tn.jpg', index: 85},
                { src:'img/br-img/thumbnails/190927_Baron CrÉne_Portraits_082_WEB_tn.jpg', index: 86},
                { src:'img/br-img/thumbnails/Baron Crane - International-4277_tn.jpg', index: 87},
                { src:'img/br-img/thumbnails/Baron Crane - International-4412_tn.jpg', index: 88},
                { src:'img/br-img/thumbnails/Baron Crane - International-4416_tn.jpg', index: 89},
                { src:'img/br-img/thumbnails/Baron Crane - International-4455_tn.jpg', index: 90},
                { src:'img/br-img/thumbnails/Baron Crane - Portrait-_tn.jpg', index: 91},
                { src:'img/br-img/thumbnails/DSC_0639_tn.jpg', index: 92},
                { src:'img/br-img/thumbnails/DSC_9395_tn.jpg', index: 93},
                { src:'img/br-img/thumbnails/DSC_9417_tn.jpg', index: 94},
                { src:'img/br-img/thumbnails/DSC_9479_tn.jpg', index: 95},
                { src:'img/br-img/thumbnails/DSC_9494_tn.jpg', index: 96},
                { src:'img/br-img/thumbnails/DSC_9530_tn.jpg', index: 97},
                { src:'img/br-img/thumbnails/DSC_9610_tn.jpg', index: 98},
                { src:'img/br-img/thumbnails/DSC_9702_tn.jpg', index: 99},
                { src:'img/br-img/thumbnails/DSC_9807_tn.jpg', index: 100},
                { src:'img/br-img/thumbnails/DSC_9833_tn.jpg', index: 101},
                { src:'img/s/thumbnails/90525481_2568839440052653_857821074862112768_n_tn.jpg', index: 102},
                { src:'img/s/thumbnails/90528153_160923881708807_4128829542854819840_n_tn.jpg', index: 103},
                { src:'img/s/thumbnails/90528971_202380831094092_3672688313619185664_n_tn.jpg', index: 104},
                { src:'img/s/thumbnails/90559980_986744631722905_9218820449557807104_n_tn.jpg', index: 105},
                { src:'img/s/thumbnails/90642265_213575803079895_8818855395394060288_n_tn.jpg', index: 106},
                { src:'img/s/thumbnails/90735703_530625244259060_5300557523839877120_n_tn.jpg', index: 107},
                { src:'img/s/thumbnails/Baron-Crane_851_hdhhrdc1_tn.jpg', index: 108},
                { src:'img/s/thumbnails/Baron-Crane_851_nrxa6e1v_tn.jpg', index: 109},
          ],
          photoIndex: 0,
          isOpen: false,
      };
      this.images = [
        'img/new/Photo Baron 2022/Baron Crane-7589.jpg',
'img/new/Photo Baron 2022/Baron Crane-7593.jpg',
'img/new/Photo Baron 2022/Baron Crane-7604.jpg',
'img/new/Photo Baron 2022/Baron Crane-7617.jpg',
'img/new/Photo Baron 2022/Baron Crane-7635.jpg',
'img/new/Photo Baron 2022/Baron Crane-7639.jpg',
'img/new/Photo Baron 2022/Baron Crane-7644.jpg',
'img/new/Photo Baron 2022/Baron Crane-7743.jpg',
'img/new/Photo Baron 2022/Baron Crane-7771.jpg',
'img/new/Photo Baron 2022/Baron Crane-7780.jpg',
'img/new/Photo Baron 2022/Baron Crane-7875.jpg',
'img/new/Photo Baron 2022/Baron Crane-7968.jpg',
'img/new/Photo Baron 2022/Baron Crane-7996.jpg',
'img/new/Photo Baron 2022/Baron Crane-8109.jpg',
'img/new/Photo Baron 2022/Baron Crane-8163.jpg',
'img/new/Photo Baron 2022/Baron Crane-8191.jpg',
'img/new/Photo Baron 2022/Baron Crane-8210.jpg',
'img/new/Photo Baron 2022/Baron Crane-8462.jpg',
'img/new/Photo Baron 2022/Baron Crane-8541.jpg',
'img/new/Photo Baron 2022/Baron Crane-8579.jpg',
'img/new/Photo Baron 2022/Baron Crane-8620.jpg',
'img/new/Photo Baron 2022/Baron Crane-8642.jpg',
'img/new/Photo Baron 2022/Baron Crane-8651.jpg',
'img/new/Photo Baron 2022/Baron Crane-8682.jpg',
'img/new/Photo Baron 2022/Baron Crane-8709.jpg',
'img/new/Photo Baron 2022/IMG_0108.jpg',
'img/new/Photo Baron 2022/IMG_0109.jpg',
'img/new/Photo Baron 2022/IMG_0196.jpg',
'img/new/Photo Baron 2022/IMG_0235.jpg',
'img/new/Photo Baron 2022/IMG_0237.jpg',
'img/new/Photo Baron 2022/IMG_0238.jpg',
'img/new/Photo Baron 2022/IMG_0239.jpg',
'img/new/Photo Baron 2022/IMG_0240.jpg',
'img/new/Photo Baron 2022/IMG_0241.jpg',
'img/new/Photo Baron 2022/IMG_0242.jpg',
'img/new/Photo Baron 2022/IMG_0243.jpg',
'img/new/Photo Baron 2022/IMG_0244.jpg',
'img/new/Photo Baron 2022/IMG_0245.jpg',
'img/new/Photo Baron 2022/IMG_0246.jpg',
'img/new/Photo Baron 2022/IMG_0271.jpg',
'img/new/Photo Baron 2022/IMG_0276.jpg',
'img/new/Photo Baron 2022/IMG_0278.jpg',
'img/new/Photo Baron 2022/IMG_0279.jpg',
'img/new/Photo Baron 2022/IMG_0280.jpg',
'img/new/Photo Baron 2022/IMG_0281.jpg',
'img/new/Photo Baron 2022/IMG_0282.jpg',
'img/new/Photo Baron 2022/IMG_0283.jpg',
'img/new/Photo Baron 2022/IMG_1612.jpg',
'img/new/Photo Baron 2022/IMG_1613.jpg',
'img/new/Photo Baron 2022/IMG_1614.jpg',
'img/new/Photo Baron 2022/IMG_1615.jpg',
'img/new/Photo Baron 2022/IMG_1616.jpg',
'img/new/Photo Baron 2022/IMG_1617.jpg',
'img/new/Photo Baron 2022/IMG_1618.jpg',
'img/new/Photo Baron 2022/IMG_1619.jpg',
'img/new/Photo Baron 2022/IMG_1620.jpg',
'img/new/Photo Baron 2022/sélection Basse Batterie jolie.jpg',
'img/new/Photo Baron 2022/sélection Basse Batterie très cool.jpg',
'img/new/Photo Baron 2022/sélection Basse Guitare TB ++.jpg',
'img/new/Photo Baron 2022/sélection Batterie Basse Guitare.jpg',
'img/new/Photo Baron 2022/sélection Guitare batterie jolie.jpg',
'img/new/Photo Baron 2022/sélection Léo Guitare seul cheveux vnr .jpg',
'img/new/Photo Baron 2022/sélection Léo Guitare seul gueule.jpg',
'img/new/Photo Baron 2022/sélection Oliv seul Rouge.jpg',
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
          'img/s/Baron-Crane_851_nrxa6e1v.jpg', 
          'imgimg/new/Photo Baron 2022/Baron Crane-7589.jpg',
          'imgimg/new/Photo Baron 2022/Baron Crane-7593.jpg',
          'imgimg/new/Photo Baron 2022/Baron Crane-7604.jpg'
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

                style={{ gap: '51px'}}
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





