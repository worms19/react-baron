   
 import React from 'react'
 import EncartBlanc from './EncartBlanc';


 const divStyle={
    backgroundImage: 'url(img/bg-img/a13.jpg)',
         };
 
  const Events = () => (


    <section className="events-area section-padding-100">
    <EncartBlanc />
        <div className="container">
            <div className="row">

                {/* <!-- Single Event Area --> */}
                <div className="col  col-lg-12">
                    <div className="single-event-area mb-30">
                        <div className="event-thumbnail">
                            <img src="img/bg-img/a15.jpg" alt="" />
                        </div>
                        <div className="event-text">
                            <h4>Celebration Days Act XXII // Dätcha Mandala</h4>
                            <div className="event-meta-data">
                                <a href="#" className="event-place">La Grange à Musique </a>
                                <a href="#" className="event-date">June 15, 2018</a>
                            </div>
                            <a  target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/events/2279537552296287/" className="btn see-more-btn">See Event</a>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Event Area --> */}
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="single-event-area mb-30">
                        <div className="event-thumbnail">
                            <img src="img/bg-img/a16.jpg" alt="" />
                        </div>
                        <div className="event-text">
                            <h4>Baron-Crâne • Effet-Barré • Homecoming </h4>
                            <div className="event-meta-data">
                                <a href="#" className="event-place">le Picolo café</a>
                                <a href="#" className="event-date">June 15, 2018</a>
                            </div>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/events/281099735922703/" className="btn see-more-btn">See Event</a>
                        </div>
                    </div>
                </div>

                {/* <!-- Single Event Area --> */}
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="single-event-area mb-30">
                        <div className="event-thumbnail">
                            <img src="img/bg-img/a17.jpg" alt="" />
                        </div>
                        <div className="event-text">
                            <h4>Planet ibiza</h4>
                            <div className="event-meta-data">
                                <a href="#" className="event-place">Space Ibiza</a>
                                <a href="#" className="event-date">June 15, 2018</a>
                            </div>
                            <a target="_blank" rel="noopener noreferrer"  href="https://www.facebook.com/events/272097440130055/" className="btn see-more-btn">See Event</a>
                        </div>
                    </div>
                </div>

								

             
          

            </div>

            <div className="row">
                <div className="col-12">
                    <div className="load-more-btn text-center mt-70">
                        <a href="#" className="btn oneMusic-btn">Load More <i className="fa fa-angle-double-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>


   
    )

 
export default Events
 