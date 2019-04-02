 
 import React from 'react'
 import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import EncartBlanc from './EncartBlanc';

 export default class Gallery2 extends React.Component {

   constructor() {
     super();
     this.state = { currentImage: 0 };
     this.closeLightbox = this.closeLightbox.bind(this);
     this.openLightbox = this.openLightbox.bind(this);
     this.gotoNext = this.gotoNext.bind(this);
     this.gotoPrevious = this.gotoPrevious.bind(this);
    }
    openLightbox(event, obj) {
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true,
        });
      }
      closeLightbox() {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        });
      }
      gotoPrevious() {
        this.setState({
          currentImage: this.state.currentImage - 1,
        });
      }
      gotoNext() {
        this.setState({
          currentImage: this.state.currentImage + 1,
        });
      }
      
      
      render(){
        const photos = [
          { src: '/dummy/11.jpg', width: 3, height: 2 },
          { src: '/dummy/12.jpg', width: 3, height: 2 },
          { src: '/dummy/4.jpg',   width: 3, height: 2 },
          { src: '/dummy/5.jpg',   width: 3, height: 2 },
          { src: '/dummy/6.jpg',   width: 3, height: 2 },
          { src: '/dummy/7.jpg',   width: 3, height: 2 },
          { src: '/dummy/8.jpg',   width: 3, height: 2 },
          { src: '/dummy/9.jpg',   width: 3, height: 2 },
         
          { src: '/dummy/8.jpg',   width: 3, height: 2 },
          { src: '/dummy/9.jpg',   width: 3, height: 2 },
          { src: '/dummy/8.jpg',   width: 3, height: 2 },
          { src: '/dummy/9.jpg',   width: 3, height: 2 },

          { src: '/dummy/10.jpg', width: 3, height: 2 }
          
          ];
        
   
        return     <div className="slide-img bg-img"    >
            <EncartBlanc text1 = {'See What’s NeWs'}
                         text2 = {'Latests Photos'} />
          
                      
              <div className="gallery-photo">
            

                <Gallery photos={photos} direction={"column"} columns={4}  onClick={this.openLightbox} />
                <Lightbox images={photos}
                  onClose={this.closeLightbox}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  currentImage={this.state.currentImage}
                  isOpen={this.state.lightboxIsOpen}
                />
           
          </div>    
      </div>  
    }
}
 










