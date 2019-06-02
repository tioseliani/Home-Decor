import React, { Component } from 'react';

class AboutUs extends Component {
    state = {  }
    render() { 
        return (
            <section className="about-us-section">
                <img className="about-us-banner" src="img/wall-decor.jpg" alt="decor" />
                <div className="banner-text-box">
                    <h2 className="about-us-title">ABOUT US</h2>
                    <div className="red-line"></div>
                    <p className="about-us-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, 
                        necessitatibus beatae officia dolore accusamus minus, 
                        porro quisquam hic magnam vitae minima incidunt reprehenderit. 
                        Et impedit praesentium sed nostrum expedita magnam. Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Ad illum aliquid fugiat laborum, tenetur doloribus quidem maiores minus amet, quasi, 
                        harum hic fugit dolor ipsa odit illo! Totam, excepturi quia?
                        Quos magni sapiente harum neque dicta ullam aliquid velit est, 
                        nam molestiae totam ducimus soluta adipisci officia enim quisquam commodi 
                        cumque inventore sunt perspiciatis saepe nostrum omnis ut. Doloremque, eveniet?
                    </p>
                </div>
            </section>
        );
    }
}
 
export default AboutUs;