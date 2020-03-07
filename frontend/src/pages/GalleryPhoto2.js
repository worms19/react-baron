import React from 'react';

import EncartBlanc from '../components/Encart/EncartBlanc';
import Footer2 from "../components/Footer2/Footer2";
import ResponsiveGallery from "react-responsive-gallery";
import ReactMediaView from "react-media-view";
import helpers from "../helpers/date";

export default class GalleryPhoto2 extends React.Component {
  constructor() {
    super();
      this.state = {
          media: [
              { src:'img/br-img/190705_Baron CrÉne_003.jpg'},
              { src:'img/br-img/190705_Baron CrÉne_006.jpg'},
              { src:'img/br-img/190705_Baron CrÉne_009.jpg'},
              { src:'img/br-img/190705_Baron CrÉne_010.jpg'},
              { src:'img/br-img/190705_Baron CrÉne_015.jpg'},
              { src:'img/br-img/190705_Baron CrÉne_016.jpg'},
              { src:'img/br-img/190705_Baron CrÉne_020.jpg'},
              { src:'img/br-img/190705_Baron CrÉne_022.jpg'},
              { src:'img/br-img/190705_Baron CrÉne_026.jpg'},
              { src:'img/br-img/190705_Baron CrÉne_036.jpg'},
              { src:'img/br-img/190927_Baron CrÉne_Portraits_006_WEB.jpg'},
              { src:'img/br-img/190927_Baron CrÉne_Portraits_008_WEB.jpg'},
              { src:'img/br-img/190927_Baron CrÉne_Portraits_009_WEB.jpg'},
              { src:'img/br-img/190927_Baron CrÉne_Portraits_010_WEB.jpg'},
              { src:'img/br-img/190927_Baron CrÉne_Portraits_021_WEB.jpg'},
              { src:'img/br-img/190927_Baron CrÉne_Portraits_033_WEB.jpg'},
              { src:'img/br-img/190927_Baron CrÉne_Portraits_037_WEB.jpg'},
              { src:'img/br-img/190927_Baron CrÉne_Portraits_056_WEB.jpg'},
              { src:'img/br-img/190927_Baron CrÉne_Portraits_058_WEB.jpg'},
              { src:'img/br-img/190927_Baron CrÉne_Portraits_066_WEB.jpg'},
              { src:'img/br-img/190927_Baron CrÉne_Portraits_069_WEB.jpg'},
              { src:'img/br-img/190927_Baron CrÉne_Portraits_075_WEB.jpg'},
              { src:'img/br-img/190927_Baron CrÉne_Portraits_082_WEB.jpg'},
              { src:'img/br-img/Baron Crane - International-4277.jpg'},
              { src:'img/br-img/Baron Crane - International-4412.jpg'},
              { src:'img/br-img/Baron Crane - International-4416.jpg'},
              { src:'img/br-img/Baron Crane - International-4455.jpg'},
              { src:'img/br-img/Baron Crane - Portrait-.jpg'},
              { src:'img/br-img/DSC_0639.jpg'},
              { src:'img/br-img/DSC_9395.jpg'},
              { src:'img/br-img/DSC_9417.jpg'},
              { src:'img/br-img/DSC_9479.jpg'},
              { src:'img/br-img/DSC_9494.jpg'},
              { src:'img/br-img/DSC_9530.jpg'},
              { src:'img/br-img/DSC_9610.jpg'},
              { src:'img/br-img/DSC_9702.jpg'},
              { src:'img/br-img/DSC_9807.jpg'},
              { src:'img/br-img/DSC_9833.jpg'},



          ]
      };
  }

    handleMouseEnter = (mediaObject, event) => {
        console.log(`You have mouse entered on ${mediaObject.name}`);
    };

    handleMouseLeave = (mediaObject, event) => {
        console.log(`You have mouse leaved from ${mediaObject.name}`);
    };

    handleClick = (mediaObject, event) => {
        console.log(`You have clicked on ${mediaObject.name}`);
    };

  render() {
    const photos = [
           { src:'img/br-img/190705_Baron CrÉne_003.jpg'},
           { src:'img/br-img/190705_Baron CrÉne_006.jpg'},
           { src:'img/br-img/190705_Baron CrÉne_009.jpg'},
           { src:'img/br-img/190705_Baron CrÉne_010.jpg'},
           { src:'img/br-img/190705_Baron CrÉne_015.jpg'},
           { src:'img/br-img/190705_Baron CrÉne_016.jpg'},
           { src:'img/br-img/190705_Baron CrÉne_020.jpg'},
           { src:'img/br-img/190705_Baron CrÉne_022.jpg'},
           { src:'img/br-img/190705_Baron CrÉne_026.jpg'},
           { src:'img/br-img/190705_Baron CrÉne_036.jpg'},
           { src:'img/br-img/190927_Baron CrÉne_Portraits_006_WEB.jpg'},
           { src:'img/br-img/190927_Baron CrÉne_Portraits_008_WEB.jpg'},
           { src:'img/br-img/190927_Baron CrÉne_Portraits_009_WEB.jpg'},
           { src:'img/br-img/190927_Baron CrÉne_Portraits_010_WEB.jpg'},
           { src:'img/br-img/190927_Baron CrÉne_Portraits_021_WEB.jpg'},
           { src:'img/br-img/190927_Baron CrÉne_Portraits_033_WEB.jpg'},
           { src:'img/br-img/190927_Baron CrÉne_Portraits_037_WEB.jpg'},
           { src:'img/br-img/190927_Baron CrÉne_Portraits_056_WEB.jpg'},
           { src:'img/br-img/190927_Baron CrÉne_Portraits_058_WEB.jpg'},
           { src:'img/br-img/190927_Baron CrÉne_Portraits_066_WEB.jpg'},
           { src:'img/br-img/190927_Baron CrÉne_Portraits_069_WEB.jpg'},
           { src:'img/br-img/190927_Baron CrÉne_Portraits_075_WEB.jpg'},
           { src:'img/br-img/190927_Baron CrÉne_Portraits_082_WEB.jpg'},
           { src:'img/br-img/Baron Crane - International-4277.jpg'},
           { src:'img/br-img/Baron Crane - International-4412.jpg'},
           { src:'img/br-img/Baron Crane - International-4416.jpg'},
           { src:'img/br-img/Baron Crane - International-4455.jpg'},
           { src:'img/br-img/Baron Crane - Portrait-.jpg'},
           { src:'img/br-img/DSC_0639.jpg'},
           { src:'img/br-img/DSC_9395.jpg'},
           { src:'img/br-img/DSC_9417.jpg'},
           { src:'img/br-img/DSC_9479.jpg'},
           { src:'img/br-img/DSC_9494.jpg'},
           { src:'img/br-img/DSC_9530.jpg'},
           { src:'img/br-img/DSC_9610.jpg'},
           { src:'img/br-img/DSC_9702.jpg'},
           { src:'img/br-img/DSC_9807.jpg'},
           { src:'img/br-img/DSC_9833.jpg'},
    ];


      const { media } = this.state;
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
        </div>
        <Footer2
          isOn={true}
        />
        </div>
    );
  }
}
