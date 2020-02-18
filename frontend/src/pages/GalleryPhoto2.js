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
      { src: '/dummy/large-gallery/17.jpg'}
    ];


    return (
        <div>

      <div className="container">
        <EncartBlanc
          text1="See What’s NeWs"
          text2="Latests Photos"
          size={1}
        />
        <div className="background-grey2">

        <ResponsiveGallery
              useLightBox={true}
              images={photos}/>
        </div>
        </div>
        <Footer2
          isOn={true}
        />
        </div>
    );
  }
}
