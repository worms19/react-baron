import React from 'react';

import EncartBlanc from '../components/Encart/EncartBlanc';
import Footer2 from "../components/Footer2/Footer2";
import ResponsiveGallery from "react-responsive-gallery";

export default class GalleryPhoto2 extends React.Component {
  constructor() {
    super();
  }

  render() {
    const photos = [
      /* { src: 'react-baron/dummy/11.jpg', width: 3, height: 2 },
          { src: 'react-baron/dummy/12.jpg', width: 3, height: 2 },
          { src: 'react-baron/dummy/4.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/5.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/6.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/7.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/8.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/9.jpg',   width: 3, height: 2 },

          { src: 'react-baron/dummy/8.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/9.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/8.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/9.jpg',   width: 3, height: 2 },

          { src: 'react-baron/dummy/10.jpg', width: 3, height: 2 } */
      { src: '/dummy/large-gallery/13.jpg'},
      { src: '/dummy/large-gallery/14.jpg'},
      { src: '/dummy/large-gallery/15.jpg'},
      { src: '/dummy/large-gallery/16.jpg'},
      { src: '/dummy/large-gallery/17.jpg'},
      { src:'img/br-img/190705_Baron Crâne_001.jpg'},
      { src:'img/br-img/190705_Baron Crâne_003.jpg'},
      { src:'img/br-img/190705_Baron Crâne_005.jpg'},
      { src:'img/br-img/190705_Baron Crâne_006.jpg'},
      { src:'img/br-img/190705_Baron Crâne_008.jpg'},
      { src:'img/br-img/190705_Baron Crâne_009.jpg'},
      { src:'img/br-img/190705_Baron Crâne_010.jpg'},
      { src:'img/br-img/190705_Baron Crâne_015.jpg'},
      { src:'img/br-img/190705_Baron Crâne_016.jpg'},
      { src:'img/br-img/190705_Baron Crâne_020.jpg'},
      { src:'img/br-img/190705_Baron Crâne_021.jpg'},
      { src:'img/br-img/190705_Baron Crâne_022.jpg'},
      { src:'img/br-img/190705_Baron Crâne_026.jpg'},
      { src:'img/br-img/190705_Baron Crâne_032.jpg'},
      { src:'img/br-img/190705_Baron Crâne_036.jpg'},
      { src:'img/br-img/190705_Baron Crâne_038.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_001_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_004_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_006_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_007_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_008_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_009_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_009_WEB 2.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_009_WEB 3.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_010_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_010_WEB 2.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_018_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_021_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_022_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_031_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_032_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_033_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_037_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_039_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_045_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_048_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_050_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_052_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_053_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_054_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_055_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_056_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_057_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_058_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_059_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_066_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_069_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_070_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_074_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_075_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_077_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_082_WEB.jpg'},
      { src:'img/br-img/190927_Baron Crâne_Portraits_083_WEB.jpg'},
      { src:'img/br-img/Baron Crane - International-4266.jpg'},
      { src:'img/br-img/Baron Crane - International-4277.jpg'},
      { src:'img/br-img/Baron Crane - International-4344.jpg'},
      { src:'img/br-img/Baron Crane - International-4407.jpg'},
      { src:'img/br-img/Baron Crane - International-4410.jpg'},
      { src:'img/br-img/Baron Crane - International-4412.jpg'},
      { src:'img/br-img/Baron Crane - International-4415.jpg'},
      { src:'img/br-img/Baron Crane - International-4416.jpg'},
      { src:'img/br-img/Baron Crane - International-4418.jpg'},
      { src:'img/br-img/Baron Crane - International-4428.jpg'},
      { src:'img/br-img/Baron Crane - International-4455.jpg'},
      { src:'img/br-img/Baron Crane - Portrait-.jpg'},
      { src:'img/br-img/Baron Crane - Portrait-4192.jpg'},
      { src:'img/br-img/DSC_0639.jpg'},
      { src:'img/br-img/DSC_0657.jpg'},
      { src:'img/br-img/DSC_9395.jpg'},
      { src:'img/br-img/DSC_9408.jpg'},
      { src:'img/br-img/DSC_9417.jpg'},
      { src:'img/br-img/DSC_9437.jpg'},

    ];



    return (
        <div>

      <div className="container">
        <EncartBlanc
          text1="See What’s NeWs"
          text2="Latest Photos"
          size={1}
        />
        <div className="background-grey2">

        <ResponsiveGallery
              useLightBox={true}
              images={photos}

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
