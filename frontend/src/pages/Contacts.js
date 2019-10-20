
import React,{Component} from 'react';
import EncartBlanc from '../components/Encart/EncartBlanc';
import Footer from '../components/Footer/Footer';
import AuthContext from "../context/auth-context";
import Spinner from "../components/Spinner/Spinner";
import ContactList from "../components/Contact/ContactList";



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
                        message
                        date
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

    render() {
        return (

            <div className=" bg-img">

                <section className="events-area ">

                    <div className="container">
                        <div className="row">

                            {this.state.isLoading
                                ?    <Spinner/>
                                :   (

                                    <ContactList

                                        contacts={this.state.contactsMessages}
                                        onDeleteEvent = {console.log('salut')}/>
                                )
                            }




                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="load-more-btn text-center mt-70">
                                    <a href="#" className="btn oneMusic-btn">
                                        Load More
                                        <i className="fa fa-angle-double-right"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>


        );
    }
}




export default Contacts;
