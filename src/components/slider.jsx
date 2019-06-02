import React, { Component } from 'react';

const Slider = props => {
    return (
        <div className="slideshow-imgs">
        <SliderImage />
        <br></br>
    </div>
    )
}

class SliderImage extends Component {
    constructor(props) {
        super();
        this.state = {
            backgroundImg: "img/home-accesorizes.jpg"
        };
        this.imgs = [
            "img/home-accesorizes.jpg",
            "img/kind-words.jpg",
            "img/home-accesorizes.jpg",
            "img/home-accesorizes.jpg"
        ];
        this.text = [
            'Ideas For Interior Design',
            'Give Your Home a new Style',
            'A Style that Makes a Statement',
            'Interior that Reflects You'
        ];
        this.slogan = [
            'Best Home Decorating Ideas',
            'Best Home Decorating Ideas',
            'Best Home Decorating Ideas',
            'Best Home Decorating Ideas'
        ];
        this.index = 0;
    }

    componentDidMount() {
        this.timerID = setTimeout(() => this.changeBGnext(), 4000);
    }

    changeBGnext() {
        clearTimeout(this.timerID);
        this.timerID = setTimeout(() => this.changeBGnext(), 4000);

        this.index = (this.index + 1 > this.imgs.length - 1) ? 0 : this.index + 1;
        this.setState({
            backgroundImg: this.imgs[this.index]
        });
    }
    changeBGprev() {
        clearTimeout(this.timerID);
        this.timerID = setTimeout(() => this.changeBGnext(), 4000);

        this.index = (this.index - 1 < 0) ? 2 : this.index - 1;
        this.setState({
            backgroundImg: this.imgs[this.index]
        });
    }
    changeBG(id) {
        clearTimeout(this.timerID);
        this.timerID = setTimeout(() => this.changeBGnext(), 4000);

        this.index = id;
        this.setState({
            backgroundImg: this.imgs[this.index]
        });
    }
    
    render() {
        return (
            <main className="mySlides fade" style={{ backgroundImage: `url("${this.state.backgroundImg}")` }}>
                <div className="slider-contant">
                    <h1 className="slider-title">{this.text[this.index]}</h1>
                    <p>{this.slogan[this.index]}</p>
                </div>
                <div className="slider-red-circles">
                    <span className="red-circle" onClick={(e) => this.changeBG(0)}></span>
                    <span className="red-circle" onClick={(e) => this.changeBG(1)}></span>
                    <span className="red-circle" onClick={(e) => this.changeBG(2)}></span>
                    <span className="red-circle" onClick={(e) => this.changeBG(3)}></span>
                </div>
            </main>
        );
    }
}

export default Slider;