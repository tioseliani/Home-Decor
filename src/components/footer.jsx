import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer>
                <div className="container">
                    <div className="contact-info">
                        <p className="contact-title">Get in Touch</p>
                        <div className="phone-number">
                            <i className="fas fa-phone-square"></i>
                            <a href="tel:1 (412) 381-5500">+1 (412) 381-5500</a>
                        </div>
                        <a href="http://fb.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                        <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter-square"></i>
                        </a>
                        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>

                    </div>
                    <p className="rights clear">© 2019 All Rights Reserved</p>
                </div>
            </footer>
         );
    }
}
 
export default Footer;