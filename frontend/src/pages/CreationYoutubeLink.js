import React, {Component} from 'react';
import Modal from '../components/Modal/Modal';
import './CreationEvenement.css';
import AuthContext from '../context/auth-context';
import Spinner from '../components/Spinner/Spinner';
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
                const youtubeLinks = resData.data.youtubeLinks;
                this.setState({youtubeLinks: youtubeLinks, isLoading:false})
            })
            .catch(err =>{
                console.log(err)
                this.setState({isLoading:false})
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
                {this.context.token &&
                    (<div className="events-control form-action_">
                    <p> Liste de vidéos youtube </p>
                    <button className="btn" onClick={this.startCreateYoutubeLinkHandler} > Create Videos</button>
                    </div>)
                }
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