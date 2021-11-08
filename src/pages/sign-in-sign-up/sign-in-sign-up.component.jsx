import React from 'react';
import './sign-in-sign-up.style.scss';

import SignIn from '../../components/sign-in/sign-in.component';

import SignUp from '../../components/sign-up/sign-up.component';

const SignInSignUp = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <SignIn />
                </div>
                <div className="col-6">
                    <SignUp />
                </div>
            </div>
        </div>
    )
}

export default SignInSignUp;