import React from 'react';

import './sign-in.style.scss';

class SignIn extends React.Component{
    constructor(){
        super();

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();

        this.setState({email:'', password:''});
    }

    handleChange = event => {
        const {value, name} = event.target;
        console.log(event.target.value);

        this.setState({[name]: value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sign in with your E-mail and password</span>

                <form onSubmit={this.handleSubmit}>
                    <label className='d-block mt-5'>E-Mail</label>
                    <input 
                    name="email" 
                    type="text" 
                    value={this.state.email} 
                    required
                    onChange={this.handleChange}
                    />

                    <label className='d-block mt-3'>PassWord</label>
                    <input 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    required
                    onChange={this.handleChange}
                    />

                    <input className='d-block mt-3' type="submit"/>
                </form>
            </div>
        )
    }
}

export default SignIn;