
import React,{Component} from 'react';
import AuthContext from "../context/auth-context";
import Spinner from "../components/Spinner/Spinner";
import EventListLs from "../components/Events/EventList/EventListLs";
import Footer2 from "../components/Footer2/Footer2";
import './Events.css'

class Events extends Component {


    constructor(props) {
        super(props);
        this.barNameElRef = React.createRef();
        this.eventNameElRef = React.createRef();
        this.dateElRef = React.createRef();
        this.fbLinkElRef = React.createRef();
        this.state= {
            creating:false,
            events:[],
            isLoading: true,
            selectedEvent: null
        };
    }

    componentDidMount() {
        this.fetchEvents();
    }
    static contextType = AuthContext;

    fetchEvents = () => {
        this.setState({isLoading: true})
        const requestBody = {
            query: `
                query {
                    events
                    {
                        _id
                        barName
                        eventName                        
                        fbLink
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
                const events = resData.data.events;
                this.setState({events: events, isLoading:false})
            })
            .catch(err =>{
                console.log(err)
                this.setState({isLoading:false})
            });
    };

    onDeleteEvent =(eventId) => {

        const requestBody = {
            query: `
                mutation {
                    cancelEvent(eventId: "${eventId}")
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
                this.setState( prevState =>{
                    const updatedEvents = prevState.events.filter(event => {
                        return event._id !== eventId;
                    });
                    return{events: updatedEvents};
                });
            })
            .catch(err =>{
                console.log(err)
            });
    };


    render() {
        return (
            <div>
                <div className="container">
                    {this.state.isLoading
                        ?    <Spinner/>
                        :
                            (<EventListLs
                            events={this.state.events}
                            authUserId={this.context.userId}
                            />)
                    }
                </div>
                <Footer2
                    isOn={true}
                />
            </div>
        );
    }
}




export default Events;
