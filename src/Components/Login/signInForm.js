import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSignUp } from '../../redux/actions';
import { baseUrl } from '../../Common/config'

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uName: '',
            email: '',
            password: ''
        }
    }
    handleChangeUname = (e) => {
        console.log(e.target.value);
        this.setState({ uName: e.target.value });
    }
    handleChangeEmail = (e) => {
        //  console.log(e.target.value)
        this.setState({ email: e.target.value });
    }
    handleChangePass = (e) => {
        // console.log(e.target.value)
        this.setState({ password: e.target.value })
    }

    signup = (e) => {
        e.preventDefault();
        let paramObj = {
            name: this.state.uName,
            email: this.state.email,
            password: this.state.password
        }
        const url = `${baseUrl}/save`;
        console.log('paramObj',paramObj);
        
        this.props.getSignUp({url: url, body: paramObj})
    }
    render() {
        return (
            <div className="row d-flex justify-content-center">
                <div className="col-sm-4 ">
                    <form className="demoForm" onSubmit={this.signup}>
                        <div style={{ borderStyle: 'ridge' }}>

                        <div className="form-group">
                                <label>Username</label>
                                <input type="text" value={this.state.uName} onChange={this.handleChangeUname} className="form-control" name="uname" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" value={this.state.email} onChange={this.handleChangeEmail} className="form-control" name="email" />
                            </div>
                            <div className="form-group">
                                <label className="">password</label>
                                <input type="password" value={this.state.password} onChange={this.handleChangePass} className="form-control" name="password" />
                            </div>
                            <button type="submit" className="btn btn-primary center">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToprops = (state) =>{
    console.log(state);
} 

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getSignUp: getSignUp
    },dispatch)
} 

export default connect(mapStateToprops, mapDispatchToProps)(SignInForm);
