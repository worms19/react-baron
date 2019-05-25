    
    
 import React from 'react'
 import EncartBlanc from './EncartBlanc';

 const divStyle={
    backgroundImage: 'url(img/bg-img/a13.jpg)',
         };
 const GalleryPhoto = ( {image}) => (
  

    <div className="slide-img bg-img"    >
    <div className="fullwidth-block gallery">
    <EncartBlanc />
    {/* <section className="breadcumb-area bg-img bg-overlay  bg-fixed has-bg-img" >
    <div className="bradcumbContent">
        <p>See what’s new</p>
        <h2>Gallery</h2>
     </div>
    </section> */}
    <div className="container">
    	{/* <!-- ##### Breadcumb Area Start ##### --> */}
		{/* <section className="contact-area section-padding-100 bg-img bg-overlay bg-fixed has-bg-img" style={ divStyle2 }></section> */}
        
    {/* <!-- ##### Breadcumb Area End ##### --> */}
        <div className="content fullwidth">
            
            <div className="filter-links filterable-nav">
                <select className="mobile-filter">
                    <option value="*">Show all</option>
                    <option value=".concert">Concert</option>
                    <option value=".band">Band</option>
                    <option value=".stuff">Stuff</option>
                </select>
                <a href="#" className="current" data-filter="*">Show all</a>
                <a href="#" data-filter=".concert">Concert</a>
                <a href="#" data-filter=".band">Band</a>
                <a href="#" data-filter=".stuff">Stuff</a>
            </div>
            <div className="Background">
            <div className="filterable-items">
                <div className="filterable-item concert">
                    <a href="/dummy/large-gallery/featured-image-1.jpg"><figure><img src="/dummy/featured-image-1.jpg" alt="gallery 1"/></figure></a>
                </div>
                <div className="filterable-item concert">
                    <a href=" /dummy/large-gallery/2.jpg"><figure><img src=' /dummy/2.jpg' alt="gallery 2"/></figure></a>
                </div>
                <div className="filterable-item stuff">
                    <a href=" /dummy/large-gallery/3.jpg"><figure><img src=" /dummy/3.jpg" alt="gallery 3"/></figure></a>
                </div>
                <div className="filterable-item concert">
                    <a href=" /dummy/large-gallery/4.jpg"><figure><img src=" /dummy/4.jpg" alt="gallery 4"/></figure></a>
                </div>
                <div className="filterable-item band">
                    <a href=" /dummy/large-gallery/5.jpg"><figure><img src=" /dummy/5.jpg" alt="gallery 5"/></figure></a>
                </div>
                <div className="filterable-item stuff">
                    <a href=" /dummy/large-gallery/6.jpg"><figure><img src=" /dummy/6.jpg" alt="gallery 6"/></figure></a>
                </div>
                <div className="filterable-item concert">
                    <a href=" /dummy/large-gallery/7.jpg"><figure><img src=" /dummy/7.jpg" alt="gallery 7"/></figure></a>
                </div>
                <div className="filterable-item band">
                    <a href=" /dummy/large-gallery/8.jpg"><figure><img src=" /dummy/8.jpg" alt="gallery 8"/></figure></a>
                </div>
                <div className="filterable-item band">
                    <a href=" /dummy/large-gallery/9.jpg"><figure><img src=" /dummy/9.jpg" alt="gallery 9"/></figure></a>
                </div>
                <div className="filterable-item stuff">
                    <a href=" /dummy/large-gallery/10.jpg"><figure><img src=" /dummy/10.jpg" alt="gallery 10"/></figure></a>
                </div>
                <div className="filterable-item band">
                    <a href=" /dummy/large-gallery/11.jpg"><figure><img src=" /dummy/11.jpg" alt="gallery 11"/></figure></a>
                </div>
                <div className="filterable-item stuff">
                    <a href=" /dummy/large-gallery/12.jpg"><figure><img src=" /dummy/12.jpg" alt="gallery 12"/></figure></a>
                </div>
            </div>
        </div>
        </div>
    </div>
</div> 
</div> 

                )
 
 export default GalleryPhoto
  