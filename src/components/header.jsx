import React from 'react';
import Navigation from './navigation';
import { Link } from "@reach/router";

const Header = props => {
    return (
            <header className="header container">
                <Navigation />
                
                <div className="header-func">
                    <div className="search">
                        <label htmlFor="site-search"></label>
                        <input type="search" className="site-search" id="site-search" />
                        <i className="fas fa-search search-icon"></i>
                    </div>
                    <div id="guestButtons">
                        <Link to={"/registration"}><button className="btn register-btn" id="headerRegisterBtn">REGISTER</button></Link>
                        <Link to={"/signIn"}><button className="btn sign-in-btn" id="headerSignInBtn">SIGN IN</button></Link>
                    </div>
                    
                    <div id="userButtons" className="hidden">
                        <span id="userName"></span>
                        <button className="btn sign-in-btn" id='logout'>Logout</button>
                    </div>
                    <div className="shopping-bag">
                    <Link to={"/MyBag"}><i className="fas fa-shopping-bag "></i></Link>
                    </div>
                </div>
            </header>
   
    )
    
}
    
export default Header;