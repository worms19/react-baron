import React, {Component} from 'react';

import Modal from '../components/Modal/Modal'
import Backdrop from '../components/Backdrop/Backdrop'
import './CreationEvenement.css'
import AuthContext from '../context/auth-context'
import Spinner from '../components/Spinner/Spinner'
import YoutubeList from "../components/Youtube/YoutubeList";
import EncartBlanc from "../components/Encart/EncartBlanc";
import YouTube from "react-youtube";
import Footer from "../components/Footer/Footer";
import YoutubeListLs from "../components/Youtube/YoutubeListLs";

class DisplayYoutubeLink extends Component{
    state = {
        creating:false,
        youtubeLinks:[],
        isLoading: false,
        selectedYoutubeLink: null
    };

    static contextType = AuthContext;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchYoutubeLinks();
    }

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

    render(){
        return(
            <React.Fragment>
                <div className="slide-img bg-img"   >
                    <EncartBlanc text1 = {'See What NeWs'}
                                 text2 = {'Latests Videos'}
                                 size = {1}
                    />
                    <div className="background-grey">
                        {this.state.isLoading
                            ?    <Spinner/>
                            :   <YoutubeListLs
                                youtubeLinks={this.state.youtubeLinks}
                                />
                        }
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default  DisplayYoutubeLink;