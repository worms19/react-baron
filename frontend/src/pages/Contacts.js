
import React,{Component} from 'react';
import EncartBlanc from '../components/Encart/EncartBlanc';
import Footer from '../components/Footer/Footer';
import AuthContext from "../context/auth-context";
import Spinner from "../components/Spinner/Spinner";
import ContactList from "../components/Contact/ContactList";
import EventList from "../components/Events/EventList/EventList";



class Contacts extends Component {

    state = {
        creating:false,
        contactsMessages:[],
        isLoading: true,
        selectedEvent: null
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchContacts();
        console.log('fetch terminé');
    }
    static contextType = AuthContext;

    fetchContacts = () => {
        this.setState({isLoading: true})
        const requestBody = {
            query: `
                query {
                    contactsMessages
                    {
                        _id 
                        nom
                        mail
                        phone
                        message
                        date
                    }
                }
            `
        };
        fetch('https://react-baron.herokuapp.com/graphql',{
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
            .then(resData =>{
                const contactsMessages = resData.data.contactsMessages;
                console.table('constact message Fetched ', contactsMessages)
                this.setState({contactsMessages: contactsMessages, isLoading:false})
            })
            .catch(err =>{
                console.log(err)
                this.setState({isLoading:false})
            });
    };

    deleteContact =(messageId) => {

        const requestBody = {
            query: `
                mutation {
                    cancelMessage(messageId: "${messageId}")
                    {
                        _id

                    }
                }
            `
        };

        const token = this.context.token;


        fetch('https://react-baron.herokuapp.com/graphql',{
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res =>{
                if(res.status !== 200 && res.status !== 201){
                    throw new Error('Failed!');
                }
                return res.json();
            })
            .then(resData =>{
                console.log(resData);
                this.setState( prevState =>{
                    const updatedMessages = prevState.contactsMessages.filter(contactsMessage => {
                        return contactsMessage._id !== messageId;
                    });
                    console.table(updatedMessages);
                    return{contactsMessages: updatedMessages};
                });
            })
            .catch(err =>{
                console.log(err)
            });
    };


    render() {
        return (
            <React.Fragment>
                {this.state.isLoading
                    ?    <Spinner/>
                    :   <ContactList
                            contacts={this.state.contactsMessages}
                            onDeleteContact = {this.deleteContact}/>

                }
            </React.Fragment>
        );
    }
}




export default Contacts;
