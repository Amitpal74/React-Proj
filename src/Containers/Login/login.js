import React, { Component } from 'react';
import LoginForm from '../../Components/Login/loginForm';

class Login extends Component {
    state = {}
    render() {
        return (
            <div className="">
                {/* <div className="">
                    <h2>React Form Validation Demo </h2>
                </div> */}
               <LoginForm/>
            </div>
        );
    }
}

export default Login;