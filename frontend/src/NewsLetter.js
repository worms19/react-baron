


       
 import React from 'react'
 import EncartBlanc from './EncartBlanc';
 
 const divStyle={
    backgroundImage: 'url(img/bg-img/a13.jpg)',
         };
 
  const Newsletter = () => (
    <EncartBlanc />

    <section className="newsletter-testimonials-area">
        <div className="container">
            <div className="row">

                {/* <!-- Newsletter Area --> */}
                <div className="col-12 col-lg-6">
                    <div className="newsletter-area mb-100">
                        <div className="section-heading text-left mb-50">
                            <p>See what’s new</p>
                            <h2>Subscribe to newsletter</h2>
                        </div>
                        <div className="newsletter-form">
                            <form action="#">
                                <input type="search" name="search" id="newsletterSearch" placeholder="E-mail" />
                                <button type="submit" className="btn oneMusic-btn">Subscribe <i className="fa fa-angle-double-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="testimonials-area mb-100 bg-img bg-overlay" style= {divStyle}>
                        <div className="section-heading white text-left mb-50">
                            <p>See what’s new</p>
                            <h2>Testimonial</h2>
                        </div>
                        <div className="testimonials-slide owl-carousel">

                            <div className="single-slide">
                                <p>Nam tristique ex vel magna tincidunt, ut porta nisl finibus. Vivamus eu dolor eu quam varius rutrum. Fusce nec justo id sem aliquam fringilla nec non lacus. Suspendisse eget lobortis nisi, ac cursus odio. Vivamus nibh velit, rutrum.</p>
                                <div className="testimonial-info d-flex align-items-center">
                                    <div className="testimonial-thumb">
                                        <img src="img/bg-img/t1.jpg" alt="" />
                                    </div>
                                    <p>William Smith, Customer</p>
                                </div>
                            </div>
                            <div className="single-slide">
                                <p>Nam tristique ex vel magna tincidunt, ut porta nisl finibus. Vivamus eu dolor eu quam varius rutrum. Fusce nec justo id sem aliquam fringilla nec non lacus. Suspendisse eget lobortis nisi, ac cursus odio. Vivamus nibh velit, rutrum.</p>
                                <div className="testimonial-info d-flex align-items-center">
                                    <div className="testimonial-thumb">
                                        <img src="img/bg-img/t1.jpg" alt="" /> 
                                    </div>
                                    <p>Nazrul Islam, Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>


    )

 
export default Newsletter
 