import React from "react";
import style from "../styles/modules/login.module.css";

class StudentLogin extends React.Component{
    
    constructor(){
        super();
        this.state = {
            email: null,
            password:null,
            loginError:''
        };
    }


    render(){
        
        return(
            <div
      style={{ height: "100vh", width: "100vw" }}
      className={style.body}
    >
           <div className={style.container}>
               
                <div className = {style.Loginarea}>
        <h1 id="header">Log In</h1>
        {/*form that takes and submits the user's input and checks for authentication*/}
        <form onSubmit={(e)=> this.submitLogin(e)}>
            <div >
            <input className={style.input} type="text" autoFocus required  onChange={(e) => this.userTyping('email',e)} placeholder="Email or Student ID"/> 
            </div>
            <div >
            <input className={style.input} type="password" required  onChange={(e) => this.userTyping('password',e)} placeholder="Password"/>
            </div>
            <button className= {style.button}  type="sumbit">Log in</button>
            {/*Redirects the user to the Sign up page*/}
           <h4>Don't have an account?</h4>
           
           <h1>link</h1>
        </form>
        {
            //checks if there is an error while Logging in
            //and displays an error message if there is
            this.state.loginError?<div>{this.state.loginError}</div>
            :
            null 
        }
        </div>
           </div>
           </div>
        );
    }
    userTyping = (type, e) =>{
        switch (type) {
            case 'email':
                this.setState({email: e.target.value});
                break;
                case 'password':
                    this.setState({password: e.target.value});
                     break;
        
            default:
                break;
        }
    }

    submitLogin = (e) => {
        e.preventDefault();//prevents the refreshing of the page
    }

}
export default StudentLogin;