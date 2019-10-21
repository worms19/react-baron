 import React from 'react'
 import EncartBlanc from '../components/Encart/EncartBlanc';
 import Footer from "../components/Footer/Footer";
 import BlackWindow from "../components/Objects/blackWindow";
 import BlackWindow2 from "../components/Objects/blackWindow2";
 import ContactForm2 from "../components/Objects/ContactForm2";
 import ContactBooking from "../components/Objects/ContactBooking";

 const Contact = () => (

 			<div>
					<div className="container ">
							<EncartBlanc
								text1 = {'See What NeWs'}
								text2 = {'Get in touch'}
								size = {1}
							/>
							<ContactForm2/>
							<ContactBooking/>
							<section className="breadcumb-area2"  >
								<div className="bradcumbContent ">
									<h2>PressKit</h2>
								</div>
							</section>
						<BlackWindow/>
						<BlackWindow2/>
					</div>
				<Footer/>
 			</div>
             )
 
 export default Contact
  