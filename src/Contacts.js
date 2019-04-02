
    
 import React from 'react'
 import EncartBlanc from './EncartBlanc';
 import AfficheCd from './AfficheCd'

 
  const divStyle={
     backgroundImage: 'url(img/bg-img/a13.jpg)',
          };
  
 
 

          const Contacts = ({image}) => (
  
    
            // {/* <!-- ##### Contact Area Start ##### --> */}
                        <section className="contact-area section-padding-100 bg-img bg-overlay bg-fixed has-bg-img" style={ image }>
                            <div className="container ">
                            <div className="row ">
                                            <div className="col-12 ">
                                                    <div className="section-heading white ">
                                                            <p>See what’s new</p>
                                                            <h2>Get In Touch</h2>
                                                    </div>
                                            </div>
                                    </div>
                    
                                    <div className="row">
                                            <div className="col-12">
                                                    {/* <!-- Contact Form Area --> */}
                                                    <div className="contact-form-area">
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
                                                                            <div className="col-12 text-center">
                                                                                    <button className="btn oneMusic-btn mt-30" type="submit">Send <i className="fa fa-angle-double-right"></i></button>
                                                                            </div>
                                                                    </div>
                                                            </form>
                                                    </div>
                                            </div>
                                    </div>
                            </div>
                    </section>             
                     )
         
         export default Contacts
          