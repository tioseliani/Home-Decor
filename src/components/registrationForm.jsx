import React, { Component } from 'react';

class RegistrationForm extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="registration">
                {/* <i class="fas fa-times close-btn"></i> */}
                <form action="" name="reg-form" method="POST" id="reg-form" class="registration-form form-desc">
                    <p class="form-title">Create an Account</p>
                    <div class="alert alert-warning hidden">
                        <ol class="errors">

                        </ol>
                    </div>
                    <label for="fname"></label>
                    <input type="text" name="first name" id="fname" placeholder="First Name" />

                    <label for="lname"></label>
                    <input type="text" name="last name" id="lname" placeholder="Last Name" />

                    <label for="personalNumber"></label>
                    <input type="text" name="personal number" min="11" max="11" id="personalNumber" placeholder="ID Number" />

                    <label for="balance"></label>
                    <input type="number" name="balance" id="balance" placeholder="Your Balance" />

                    <label for="email"></label>
                    <input type="email" name="email" id="reg-email" placeholder="Email" />

                    <label for="password"></label>
                    <input type="password" name="password" id="reg-password" placeholder="Password" />

                    <button type="button" class="btn form-btn" id="submitBtn">Register</button>
                </form>
	        </div>
         );
    }
}
 
export default RegistrationForm;