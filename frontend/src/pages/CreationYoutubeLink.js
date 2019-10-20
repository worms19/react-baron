import React, {Component} from 'react';

import Modal from '../components/Modal/Modal'
import Backdrop from '../components/Backdrop/Backdrop'
import './CreationEvenement.css'
import AuthContext from '../context/auth-context'
import Spinner from '../components/Spinner/Spinner'
import YoutubeList from "../components/Youtube/YoutubeList";

class YoutubeLinkPage extends Component{
    state = {
        creating:false,
        youtubeLinks:[],
        isLoading: false,
        selectedYoutubeLink: null
    };

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.linkElRef = React.createRef();
    }

    componentDidMount() {
        this.fetchYoutubeLinks();
    }

    startCreateYoutubeLinkHandler = () =>{
        this.setState({creating:true});
    };

    modalConfirmHandler = () =>{
        this.setState({creating:false});
        const link = this.linkElRef.current.value;
        const youtubeLink = {link};
        console.log(youtubeLink);
        const requestBody = {
            query: `
                mutation {
                    createYoutubeLink(youtubeLinkInput:{ link: "${link}"})
                    {
                        _id
                        link
                       
                    }
                }
            `
        };

        const token = this.context.token;
        console.log(`token = ${token}`)
        fetch('http://localhost:8000/graphql',{
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
                    const updatedYoutubeLink =[...prevState.youtubeLinks];
                    updatedYoutubeLink.push({
                        _id : resData.data.createYoutubeLink._id,
                        link : resData.data.createYoutubeLink.link
                    });
                    return{youtubeLinks: updatedYoutubeLink};
                });
            })
            .catch(err =>{
                console.log(err)
            });
    };

    modalCancelHandler = () =>{
        this.setState({creating:false, selectedYoutubeLink: null});
    };
    fetchYoutubeLinks = () => {
        this.setState({isLoading: true})
        const requestBody = {
            query: `
                query {
                    youtubeLinks
                    {
                        _id
                        link
                    }
                }
            `
        };

        const token = this.context.token;
        console.log(`token = ${token}`)

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
                const youtubeLinks = resData.data.youtubeLinks;
                this.setState({youtubeLinks: youtubeLinks, isLoading:false})
            })
            .catch(err =>{
                console.log(err)
                this.setState({isLoading:false})
            });
    };


    createYoutubeLinkHandler = ()=>{

        if(!this.context.token){
            this.setState({selectedYoutubeLink:null});
            return;
        }
        const requestBody = {
            query: `
                mutation {
                    createYoutubeLink(youtubeLinkId: "${this.state.selectedYoutubeLink._id}")
                    {
                        _id
                       createdAt
                       updatedAt
                    }
                }
            `
        };

        const token = this.context.token;
        console.log(`token = ${token}`)

        fetch('http://localhost:8000/graphql',{
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res =>{
                console.log(res)
                if(res.status !== 200 && res.status !== 201){
                    throw new Error('Failed!');
                }
                return res.json();
            })
            .then(resData =>{
                console.log(resData)
                this.setState({selectedYoutubeLink:null});
            })
            .catch(err =>{
                console.log(err)
            });
    };

    onDeleteYoutubeLink =(youtubeLinkId) => {

        const requestBody = {
            query: `
                mutation {
                    cancelYoutubeLink(youtubeLinkId: "${youtubeLinkId}")
                    {
                        _id

                    }
                }
            `
        };

        const token = this.context.token;

        fetch('http://localhost:8000/graphql',{
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
                    const updatedYoutubeLinks= prevState.youtubeLinks.filter(youtubeLink => {
                        return youtubeLink._id !== youtubeLinkId;
                    });
                    console.table(updatedYoutubeLinks);
                    return{youtubeLinks: updatedYoutubeLinks};
                });
            })
            .catch(err =>{
                console.log(err)
            });
    };

    render(){

        return(


            <React.Fragment>
                {(this.state.creating || this.state.selectedYoutubeLink) &&
                <Backdrop/>
                }
                {this.state.creating &&  (
                    <Modal
                        title="Add Event"
                        canConfirm
                        canCancel
                        onCancel={this.modalCancelHandler}
                        onConfirm={this.modalConfirmHandler}
                        confirmText="Confirm">
                        <form>
                            <div className="form-control">
                                <label htmlFor="title">Link</label>
                                <input type="text" id="title" ref={this.linkElRef}/>
                            </div>
                        </form>
                    </Modal>
                )}
                {this.state.selectedYoutubeLink &&  (
                    <Modal
                        title={this.state.selectedYoutubeLink.title}
                        canConfirm
                        canCancel
                        onCancel={this.modalCancelHandler}
                        onConfirm={this.bookEventHandler}
                        confirmText="Book">
                        <h1>{this.state.selectedYoutubeLink.link}</h1>
                    </Modal>
                )}

                {this.context.token && (<div className="events-control">
                    <p> Share your own youtubeLink </p>
                    <button className="btn" onClick={this.startCreateYoutubeLinkHandler} > Create Event</button>
                </div>)}
                {this.state.isLoading
                    ?    <Spinner/>
                    :   (<YoutubeList
                        youtubeLinks={this.state.youtubeLinks}
                        authUserId={this.context.userId}
                        onDeleteYoutubeLink = {this.onDeleteYoutubeLink}/>)
                }

            </React.Fragment>
        );
    }
}

export default  YoutubeLinkPage;