import React, {Component} from 'react';
import './contact.css'


class ContactForm2 extends Component{

    constructor(props) {
        super(props);
        this.nameElRef = React.createRef();
        this.emailElRef = React.createRef();
        this.phoneElRef = React.createRef();
        this.messageElRef = React.createRef();
    }

    modalConfirmHandler = () =>{

        const name = this.nameElRef.current.value;
        const email = this.emailElRef.current.value;
        const phone = +this.phoneElRef.current.value;
        const message = this.messageElRef.current.value;



        const contactMessage = {name, email, phone, message};
        console.log(contactMessage);

        const requestBody = {
            query: `
                mutation {
                    createContactMessage(contactInput:{ nom: "${name}",mail: "${email}",message: ${message},date: "${Date.now()}"})
                    {
                        _id
                         message
                    }
                }
            `
        };


        fetch('http://localhost:8000/graphql',{
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res =>{
                if(res.status !== 200 && res.status !== 201){
                    throw new Error('Failed!');
                }
                return res.json();
            })
            .catch(err =>{
                console.log(err)
            });
    };
    render(){

        return(
            <div className="container">
                <form id="contact" action="" method="post">
                    <h3>Quick Contact</h3>
                    <h4>Contact us today, and get reply with in 24 hours!</h4>
                    <fieldset>
                        <input placeholder="Your name" type="text" tabIndex="1"  required autoFocus/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your Email Address" type="email" tabIndex="2" required/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your Phone Number" type="tel" tabIndex="3" required/>
                    </fieldset>
                    <fieldset>
                        <textarea placeholder="Type your Message Here...."  tabIndex="5" required></textarea>
                    </fieldset>
                    <fieldset>
                       <input name="submit" type="button" onClick={this.modalConfirmHandler} id="contact-submit" >Submit</input>*/
                    </fieldset>
                </form>


            </div>
        );
    }
}

export default  ContactForm2;