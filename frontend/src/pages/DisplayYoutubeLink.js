import React, {Component} from 'react';
import './CreationEvenement.css'
import AuthContext from '../context/auth-context'
import Spinner from '../components/Spinner/Spinner'
import EncartBlanc from "../components/Encart/EncartBlanc";
import YoutubeListLs from "../components/Youtube/YoutubeListLs";
import Footer2 from "../components/Footer2/Footer2";

class DisplayYoutubeLink extends Component{




    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.finishLoading = this.finishLoading.bind(this);
        this.state= {
            creating:false,
            youtubeLinks:[],
            isLoading: true,
            selectedYoutubeLink: null,
            isDisplay: false
        };
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
                this.setState({youtubeLinks: youtubeLinks});
                // this.setState({isLoading:false});

            })
            .catch(err =>{
                console.log(err)
            });
    };

    finishLoading = () => {
        this.setState({
            isLoading:false,
            isDisplay: true
        });
    };

    render(){
        const noDisplay ={
            display: 'none',

        };

        return(
            <React.Fragment>
                <div className="slide-img bg-img"   >
                    <EncartBlanc text1 = {'See What NeWs'}
                                 text2 = {'Latests Videos'}
                                 size = {1}
                    />
                        {this.state.isLoading
                         &&
                               <Spinner/>
                        }
                        <div className="caca " style={!this.state.isDisplay ? noDisplay : {}}>
                              <div className="background-grey">
                                    <YoutubeListLs
                                    youtubeLinks={this.state.youtubeLinks}
                                    onReady={this.finishLoading}
                                    />
                                </div>
                        </div>
                </div>
                <Footer2
        isOn={true}
        />
            </React.Fragment>
        );
    }
}

export default  DisplayYoutubeLink;