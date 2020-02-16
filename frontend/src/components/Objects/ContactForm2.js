import React, {Component} from 'react';
import './contact.css'
const moment = require('moment');

export default class ContactForm2 extends Component{

    constructor(props) {
        super(props);
        this.handleNameOfMessage = this.handleNameOfMessage.bind(this);
        this.handleEmailOfMessage = this.handleEmailOfMessage.bind(this);
        this.handlePhoneOfMessage = this.handlePhoneOfMessage.bind(this);
        this.handleMessage = this.handleMessage.bind(this)
        this.state = {
            SignatureOfGuest: "",
            EmailOfMessage: "",
            PhoneOfMessage: "",
            NameOfMessage: "",
            Message: "",
        };
    }

    handleNameOfMessage(event) {
        this.setState({ NameOfMessage: event.target.value });
    }
    handleEmailOfMessage(event) {
        this.setState({EmailOfMessage: event.target.value });
    }
    handlePhoneOfMessage(event) {
        this.setState({ PhoneOfMessage: event.target.value });
    }
    handleMessage(event) {
        this.setState({ Message: event.target.value });
    }

    /*sendMessage = event => {
        event.preventDefault();
        this.setState({
            NameOfMessage: event.target.value,
            EmailOfMessage: event.target.value,
            PhoneOfMessage: event.target.value,
            Message: event.target.value
        });
        console.log('damdam', this.state.NameOfMessage, this.state.EmailOfMessage, this.state.PhoneOfMessage, this.state.Message);
    }*/

    sendMessage = (event) =>{
        this.setState({creating:false});
        const nom = this.state.NameOfMessage;
        const mail = this.state.EmailOfMessage;
        const phone = this.state.PhoneOfMessage;
        const message = this.state.Message;
        const date = moment().format("MMM Do YY");
        const messageLog = {nom, mail, message, date};

        const requestBody = {
            query: `
                mutation {
                    createContactMessage(contactInput:
                    {
                     nom: "${nom}",
                     mail: "${mail}",
                     message: "${message}",
                     date: "${date}",
                     phone:"${phone}"
                    })
                    {
                        _id
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
                //return res.json();
            })
            .catch(err =>{
                console.log(err)
            });

        this.setState({
            NameOfMessage: event.target.value,
            EmailOfMessage: event.target.value,
            PhoneOfMessage: event.target.value,
            Message: event.target.value
        });
    };

    render(){
        return(
            <div className="container">
                <form id="contact" >
                    <h3>Quick Contact</h3>
                    <h4>Contact us today, and get reply with in 24 hours!</h4>
                    <fieldset>
                        <input
                            type="text"
                            onChange={this.handleNameOfMessage}
                            className="NameinputForm"
                            value={this.state.NameOfMessage}
                            placeholder="Your name"
                            tabIndex="1"
                        />
                    </fieldset>
                    <fieldset>
                        <input
                            type="email"
                            onChange={this.handleEmailOfMessage}
                            className="NameinputForm"
                            value={this.state.EmailOfMessage}
                            placeholder="Your Email Address"
                            tabIndex="2"
                        />
                    </fieldset>
                    <fieldset>
                        <input
                            type="text"
                            onChange={this.handlePhoneOfMessage}
                            className="NameinputForm"
                            value={this.state.PhoneOfMessage}
                            placeholder="Your phone"
                            tabIndex="3"
                        />
                    </fieldset>
                    <fieldset>
                        <textarea
                            onChange={this.handleMessage}
                            placeholder="Type your Message Here...."
                            value={this.state.Message}
                            tabIndex="4"
                        />
                    </fieldset>
                    <fieldset>

                    <button
                        className="submit"
                        type="button"
                        onClick={this.sendMessage}
                    >
                        Submit</button>
                    </fieldset>

                </form>
            </div>
        );
    }
}
