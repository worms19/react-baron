import React, {Component} from 'react';
import './Auth.css';
import AuthContext from '../context/auth-context'

class AuthPage extends Component{
    state = {
        isLogin: true,
    };

    static contextType = AuthContext;


    constructor(props){
        super(props);
        this.emailEl = React.createRef();
        this.passwordEl = React.createRef();
    }

    switchModeHandler = () => {
        this.setState( prevState =>{
            return{
                isLogin: !prevState.isLogin
            };
        })
    }

    submitHandler = event => {
        event.preventDefault();
        const email = this.emailEl.current.value;
        const password = this.passwordEl.current.value;

        if (email.trim() === 0 || password.trim()===0)
        {
            return;
        }
        console.log(email,password);

        let requestBody = {
            query: `
                query {
                    login(email: "${email}",password: "${password}"){
                        userId
                        token
                        tokenExpiration
                    }
                }
            `
        };
        if(!this.state.isLogin){
            requestBody = {
                query: `
                mutation {
                createUser(userInput:{email: "${email}",password: "${password}"})
                {
                _id
                email
                }
                }`
            };
        }

        fetch('http://localhost:8000/graphql',{
          method: 'POST',
          body: JSON.stringify(requestBody),
            headers: {
              'Content-Type': 'application/json'
            }
        })
            .then(res =>{
                if(res.status !== 200 && res.status !== 201){
                    throw new Error('Failed!');
                }
                return res.json();
                })
            .then(resData =>{
                if(resData.data.login.token){
                    this.context.login(
                        resData.data.login.token,
                        resData.data.login.userId,
                        resData.data.tokenExpiration);
                }
                console.log(resData);
            })
            .catch(err =>{
            console.log(err)
        });
    }



    render(){
        return(
            <div className="form-background_">
                <form className="auth-form_" onSubmit={this.submitHandler}>
                    <div className="form-control_">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" ref={this.emailEl}/>
                    </div>  <div className="form-control_">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" ref={this.passwordEl}/>
                    </div>
                    <div className="form-action_">
                        <button type="submit" >Submit</button>
                        <button type="button" onClick={this.switchModeHandler}>Switch to {this.state.isLogin ? 'Sign Up' : 'Login' }</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default  AuthPage;