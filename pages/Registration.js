import React from 'react';
import './index.css';


function SignUp(){
    
    return(
        //Div for sign up form.
        <div className='SignUpForm'> 
            <form> 
                <div className='PersonalInfo'>
                    <h1>SIGN UP</h1>
                        <label>
                                <input className='textbox' type="text" placeholder='First Name'/>
                            </label>
                        <br/>
                            <label>
                                <input className='textbox' type="text" placeholder='Last Name'/>
                            </label>
                        <br/>
                            <label>
                                <input className='textbox' type="text" placeholder='Student ID Number'/>
                            </label>
                        <br/>
                            <label>
                                <input className='textbox' type="text" placeholder='Student Email'/>
                            </label>
                        <br/>
                            <label>
                                <input className='textbox' type="text" placeholder='Password'/>
                            </label>
                        <br/>
                            <button className= 'RegisterBtn'>
                                Register
                            </button>
                    </div>
                <br/>
            </form>
        </div>
    )

}

export default SignUp;