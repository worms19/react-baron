import React from 'react';
import EncartBlanc from '../components/Encart/EncartBlanc';
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

            </div>

        <div className="marg">
            {/* <PressKitEncart
                t1={"ENGLISH VERSION"}
                t2={"Bio"}
                t3={"Review"}
                t4={"DOWNLOAD"}
                l1={"dummy/BARONCRANE_Pressbook_2023.pdf"}
            /> */}
            <PressKitEncart
                t1={"PRESS KIT"}
                t2={"Bio"}
                t3={"Presse / Review"}
                t4={"TELECHARGER"}
                l1={"dummy/BARONCRANE_Pressbook_2023.pdf"}
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
