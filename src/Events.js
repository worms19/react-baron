   
 import React from 'react'
 import EncartBlanc from './EncartBlanc';


 const divStyle={
    backgroundImage: 'url(img/bg-img/a13.jpg)',
         };
 
  const Events = () => (
	<div  className="slide-img bg-img"    >

    <section className="events-area " >
    <EncartBlanc text1 = {'See what’s new'}
                         text2 = {'Latests SHOWS'} />
        <div className="container">
            <div className="row">

                {/* <!-- Single Event Area --> */}
                <div className="col  col-lg-12">
                    <div className="single-event-area mb-5">
                        <div className="event-thumbnail">
                            <img src="img/bg-img/a15.jpg" alt="" />
                        </div>
                        <div className="event-text">
                        <div className="dateLeft">
                                <span className="dateLeft-dateJour">15</span><br/>
                                <span className="dateLeft-dateJour2"> Juin 2012 </span><br/>
                                <span className="dateLeft-dateJour2">le Picolo café</span>
                            </div>
                            <h4>Celebration Days Act XXII // Dätcha Mandala</h4>
                           
                            <a  target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/events/2279537552296287/" className="btn see-more-btn">See Event</a>
                        </div>
                    </div>
                </div>

                

               
                 {/* <!-- Single Event Area --> */}
                 <div className="col-12 col-md-6 col-lg-6">
                    <div className="single-event-area mb-5">
                   
                        <div className="event-text">
                            <div className="dateLeft">
                                <span className="dateLeft-dateJour">15</span><br/>
                                <span className="dateLeft-dateJour2"> Juin 2012 </span><br/>
                                <span className="dateLeft-dateJour2">le Picolo café</span>
                            </div>
                                <h4>Baron-Crâne • Effet-Barré •  </h4>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/events/281099735922703/" className="btn see-more-btn">See Event</a>
                            
                        </div>
                    </div>
                </div>

                
                 {/* <!-- Single Event Area --> */}
                 <div className="col-12 col-md-6 col-lg-6">
                    <div className="single-event-area mb-5">
                   
                        <div className="event-text">
                            <div className="dateLeft">
                                <span className="dateLeft-dateJour">15</span><br/>
                                <span className="dateLeft-dateJour2">Juin</span><br/>
                                <span className="dateLeft-dateJour2">le Picolo café</span>
                            </div>
                                <h4>Baron-Crâne • Effet-Barré  </h4>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/events/281099735922703/" className="btn see-more-btn">See Event</a>
                            
                        </div>
                    </div>
                </div>

                
                 {/* <!-- Single Event Area --> */}
                 <div className="col-12 col-md-6 col-lg-6">
                    <div className="single-event-area mb-5">
                        
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
                    <div className="single-event-area mb-5">
                        
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
                    <div className="single-event-area mb-5">
                        
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
                    <div className="single-event-area mb-5">
                        
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
    </div>

   
    )

 
export default Events
 