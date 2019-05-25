
    
 import React from 'react'
 import PreLoader from './PreLoader';



 const divStyle={
    backgroundImage: 'url(img/bg-img/a13.jpg)',
         };

 const PageAccueil = () => (


<section className="hero-area">
        <div className="hero-slides owl-carousel">
            <div className="single-hero-slide d-flex align-items-center justify-content-center">
                <div className="slide-img bg-img"  style={divStyle}></div>
               
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-slides-content text-center">
                                <h6 data-animation="fadeInUp" data-delay="100ms">Latest Ep</h6>
                                <h2 data-animation="fadeInUp" data-delay="300ms">Electric Shade <span>Electric Shade</span></h2>
                                <a data-animation="fadeInUp" data-delay="500ms" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=2Y4wYXLRu9w" className="btn oneMusic-btn mt-50">Discover <i className="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Single Hero Slide --> */}
            <div className="single-hero-slide d-flex align-items-center justify-content-center">
                {/* <!-- Slide Img --> */}
                <div className="slide-img bg-img" styles="background-image: url(img/bg-img/bg-2.jpg);"></div>
                {/* <!-- Slide Content --> */}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-slides-content text-center">
                                <h6 data-animation="fadeInUp" data-delay="100ms">Latest album</h6>
                                <h2 data-animation="fadeInUp" data-delay="300ms">Baron Crâne (2015) <span>Baron Crâne (2015)</span></h2>
                                <a data-animation="fadeInUp" data-delay="500ms" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=dw7N2Wq-oVg&t=198s" className="btn oneMusic-btn mt-50">Discover <i className="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  


)
 
export default PageAccueil
 