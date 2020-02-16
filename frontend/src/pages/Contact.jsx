import React from 'react';
import EncartBlanc from '../components/Encart/EncartBlanc';
import Footer from '../components/Footer/Footer';
import './Contact.css';
import ContactForm2 from '../components/Objects/ContactForm2';
import BookingEncart from "../components/Events/2/BookingEncart";
import PressKitEncart from "../components/Events/2/PressKitEncart";
import Footer2 from "../components/Footer2/Footer2";

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
            <PressKitEncart
                t1={"ENGLISH VERSION"}
                t2={"Bio"}
                t3={"Review"}
                t4={"DOWNLOAD"}
                l1={"dummy/press-kit-baron-crane.pdf"}
            />
            <PressKitEncart
                t1={"VERSION FRANCAISE"}
                t2={"Bio"}
                t3={"Presse"}
                t4={"TELECHARGER"}
                l1={"dummy/dossier-presse-baron-crane.pdf"}
            />
        </div>
      </div>
      <Footer2
        isOn={true}
        noBack={false}
        />
    </div>

);

export default Contact;
