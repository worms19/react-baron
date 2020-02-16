import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="background-grey2">
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
                    <textarea name="message" className="form-control" id="message" cols="30" rows="10" placeholder="Message" />
                  </div>
                </div>
                <div className="col-12 text-center mb">
                  <button className="btn oneMusic-btn mt-30" type="submit">
                    Send
<i className="fa fa-angle-double-right" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
