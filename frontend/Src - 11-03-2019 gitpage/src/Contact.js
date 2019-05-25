    
    
       
 import React from 'react'
 import EncartBlanc from './EncartBlanc';

 
 

 const Contact = () => (
  
    
    // {/* <!-- ##### Contact Area Start ##### --> */}
				

	
					<div className="container ">
					
					<EncartBlanc text1 = {'See What NeWs'}
             			text2 = {'Get in touch'} />

							<div className="background-grey"  >
									<div className="col-12">
											{/* <!-- Contact Form Area --> */}
											<div className="contact-form-area" >
													<form action="#" method="post">
															<div className="row">
																	<div className="col-md-6 col-lg-4">
																			<div className="form-group">
																					<input type="text" className="form-control" id="name" placeholder="Name" />
																			</div>
																	</div>
																	<div className="col-md-6 col-lg-4">
																			<div className="form-group">
																					<input type="email" className="form-control" id="email" placeholder="E-mail" />
																			</div>
																	</div>
																	<div className="col-lg-4">
																			<div className="form-group">
																					<input type="text" className="form-control" id="subject" placeholder="Subject" />
																			</div>
																	</div>
																	<div className="col-12">
																			<div className="form-group">
																					<textarea name="message" className="form-control" id="message" cols="30" rows="10" placeholder="Message"></textarea>
																			</div>
																	</div>
																	<div className="col-12 text-center mb" >
																			<button className="btn oneMusic-btn mt-30" type="submit">Send <i className="fa fa-angle-double-right"></i></button>
																	</div>
															</div>
													</form>
											</div>
									</div>
							</div>
			<section className="breadcumb-area2"  >
    			<div className="bradcumbContent ">
        			<h2>PressKit</h2>
   				</div>
			</section>	

				{/* <!-- Single Event Area --> */}
				<div className="col-12 col-md-6 col-lg-6">
							<div className="single-event-area mb-5">
							
							<div className="event-text">
                            <h4>VERSION FRANCAISE </h4>
                            <div className="event-meta-data">
                                <a href="#" className="event-place">Bio</a>
                                <a href="#" className="event-date">Presse</a>
                            </div>
                            <a target="_blank" rel="noopener noreferrer" href="react-baron/dummy/dossier-presse-baron-crane.pdf" className="btn see-more-btn">See Event</a>

                        </div>
                    </div>
                </div>

					{/* <!-- Single Event Area --> */}
					<div className="col-12 col-md-6 col-lg-6">
							<div className="single-event-area mb-5">
							
							<div className="event-text">
                            <h4>ENGLISH VERSION </h4>
                            <div className="event-meta-data">
                                <a href="#" className="event-place">Bio</a>
                                <a href="#" className="event-date">Reviews</a>
                            </div>
                            <a target="_blank" rel="noopener noreferrer" href="react-baron/dummy/press-kit-baron-crane.pdf" className="btn see-more-btn">See Event</a>

                        </div>
                    </div>
                </div>

					</div>
                    
             )
 
 export default Contact
  