import React, { Component } from 'react';
import { Carousel } from 'antd';

import phone from '../img/banner-iphone-samsung.png';
import oeh from '../img/banner-oeh.png';
import cables from '../img/banner-cables.png';

class Slideshow extends Component {

    render() {
        /**Styles */

        const phones = {
            canvas: {
                height: "500px"
            },
            img: {
                height: "500px",
                marginLeft: "50px"
            },
            text: {
                lineHeight: "20px",
                position: "relative",
                left: "15%",
                top: "-250px"
            }
        };

        return(

            <Carousel>
                <div>
                    <div style={phones.canvas}>
                        <img src={phone} style={phones.img} />
                        <h1 style={phones.text}>Premium Smartphones</h1>
                        <h2 style={phones.text}>Everyday</h2>
                    </div>
                </div>
                <div>
                    <div style={{ height: "500px", background: "#000000" }}>
                        <img src={oeh} style={{ height: "500px", position: "relative", left: "25%" }} />
                        <h1 style={{ color: "#ffffff", lineHeight: "20px", position: "relative", top: "-250px", left: "-250px" }}>Block it Out.</h1>
                        <h2 style={{ color: "#ffffff", lineHeight: "20px", position: "relative", top: "-250px", left: "-250px" }}>Noise Cancelling Headphones</h2>
                    </div>
                </div>
                <div>
                    <div style={{ height: "500px" }}>
                        <img src={cables} style={{ height: "250px", position: "relative", left: "20%", top: "50%" }} />
                        <h1 style={{ lineHeight: "20px", position: "relative", top: "-100px" }}>Color-Matched Cables</h1>
                        <h2 style={{ lineHeight: "20px", position: "relative", top: "-100px" }}>Strong. Affordable. Yours.</h2>
                    </div>
                </div>
            </Carousel >
        );
    }
}

export default Slideshow;