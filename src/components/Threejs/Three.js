import React, { Component } from 'react';
import DOTS from 'vanta/dist/vanta.dots.min';

class Three extends Component {
    constructor(props) {
        super(props);
        this.vantaRef = React.createRef();
        this.vantaEffect = null;
    }

    componentDidMount() {
        this.vantaEffect = DOTS({
            el: this.vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: window.innerHeight, // Set height to the window's height
            minWidth: window.innerWidth, // Set width to the window's width
            scale: 1.00,
            scaleMobile: 1.00,
            showLines: false,
            color: 0x00ff00, // Set the dots color, using hexadecimal notation
            backgroundColor: 0x000000, // Set the background color, using hexadecimal notation
            // Any additional parameters you want to pass
        });
    }

    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy();
    }

    render() {
        return (
            <div
                ref={this.vantaRef}
                style={{
                    width: '100vh', // Set width to 100% of the viewport width
                    height: '400px', // Set height to 100% of the viewport height
                    overflow: 'hidden', // Hide any content that overflows
                }}
            >
                {/* Content goes here */}
            </div>
        );
    }
}

export default Three;
