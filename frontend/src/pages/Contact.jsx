import React from 'react';
import EncartBlanc from '../components/Encart/EncartBlanc';
import Footer from '../components/Footer/Footer';
import './Contact.css';
import ContactForm2 from '../components/Objects/ContactForm2';
import BookingEncart from "../components/Events/2/BookingEncart";
import PressKitEncart from "../components/Events/2/PressKitEncart";

const Contact = (props) => (

    <div>
      <div className="container ">
        <EncartBlanc
          text1="See What NeWs"
          text2="Get in touch"
          size={1}
        />
        <div className="marg">
          <ContactForm2 />
        </div>
        <div className="marg">
          <BookingEncart />
        </div>
          <div className="row">
            <div className="col-md-4 col-md-offset-4 center back">
                <h2>PressKit</h2>
            </div>
          </div>
        <div className="marg">
            <PressKitEncart/>
            <PressKitEncart/>
        </div>
      </div>
      <Footer />
    </div>

);

export default Contact;
