import React, { Component } from 'react';
import { Link } from "@reach/router";

class Navigation extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
                <ul>
                    <li><Link to={"/"} activestyle={{ color: "red" }}>HOME</Link></li>
                    <li><Link to={"/AboutUs"} activestyle={{ color: "red" }}>ABOUT US</Link></li>
                    <li><a href="https://google.com">CATEGORY</a></li>
                    <li><Link to={"/contact"}>CONTACT US</Link></li>
                </ul>
            </nav>
        );
    }
}
export default Navigation;