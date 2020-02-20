import React, {Component} from 'react';
import './contact.css'
import Button from "@material-ui/core/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
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
            handleErrorNom: false,
            handleErrorMail:false,
            handleErrorPhone:false,
            handleErrorMessage:false
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

    sendMessage = (event) =>{

        const verifyInput = (nom, mail, phone, message) => {
            let error = false;
            if(nom === "" || nom === undefined){
                error = true;
                this.setState({
                    handleErrorNom:true
                });
            }
            if(mail === "" || mail === undefined){
                error = true;
                this.setState({
                    handleErrorMail:true
                });
            }
            if(phone === "" || phone === undefined){
                error = true;
                this.setState({
                    handleErrorPhone:true
                });
            }
            if(message === "" || message === undefined){
                error = true;
                this.setState({
                    handleErrorMessage:true
                });
            }
            return error;
        };

        this.setState({
            creating:false,
            handleErrorNom: false,
            handleErrorMail: false,
            handleErrorPhone: false,
            handleErrorMessage: false
        });
        const nom = this.state.NameOfMessage;
        const mail = this.state.EmailOfMessage;
        const phone = this.state.PhoneOfMessage;
        const message = this.state.Message;
        const date = moment().format("MMM Do YY");
        const error = verifyInput(nom, mail, phone, message);
        if(error === false){
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

        fetch('http://51.178.18.81/graphql',{
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
                NameOfMessage: "",
                EmailOfMessage: "",
                PhoneOfMessage: "",
                Message: ""
            });
        }
    };

    render(){
        const red={
            color: 'red'
        };
        const button={
            width: '100%',
            textAlign: 'center',
            color: 'white'
        };
        return(
            <div className="container">
                <form id="contact" >
                    {(this.state.handleErrorMessage === true ||
                    this.state.handleErrorMail === true ||
                    this.state.handleErrorPhone === true ||
                    this.state.handleErrorMessage === true) &&
                    <ul>
                        <li>{
                            this.state.handleErrorNom === true &&
                                <h4 style={red}>
                                    <FontAwesomeIcon icon={faExclamationTriangle}/>
                                    &nbsp;The Name Input must be filled
                                </h4>}
                        </li>
                        <li>{
                            this.state.handleErrorMail === true &&
                                <h4 style={red}>
                                    <FontAwesomeIcon icon={faExclamationTriangle}/>
                                    &nbsp;The Mail Input must be filled
                                </h4>
                        }</li>
                        <li>{this.state.handleErrorPhone === true &&
                            <h4 style={red}>
                                <FontAwesomeIcon icon={faExclamationTriangle}/>
                                &nbsp;The Phone Input must be filled
                            </h4>
                        }</li>
                        <li>{this.state.handleErrorMessage === true &&
                            <h4 style={red}>
                            <FontAwesomeIcon icon={faExclamationTriangle}/>
                            &nbsp;The Message Input must be filled
                            </h4>
                        }</li>
                    </ul>
                    }
                    <h3>Quick Contact</h3>
                    <h4>Contact us today, and get reply within 24 hours!</h4>
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
                        <div style={button}>
                            <Button variant="outlined" color="inherit" onClick={this.sendMessage}>Submit</Button>
                        </div>
                    </fieldset>

                </form>
            </div>
        );
    }
}
