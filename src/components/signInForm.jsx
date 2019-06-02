import React, { Component } from 'react';
class SignInForm extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="authorization">
                {/* <i class="fas fa-times close-sign"></i> */}
                <form action="profile.html" name="" method="POST" id="" class="sign-in-form form-desc">
                    <p class="form-title">Sign In</p>
                    <label for="email">Email *</label>
                    <input type="email" name="email" id="email" />
                    <label for="password">Password *</label>
                    <input type="password" name="password" id="password" />
                    <button type="button" class="btn form-btn" id="signinBtn">Sign In</button>
                </form>
	        </div>
         );
    }
}
 
export default SignInForm;