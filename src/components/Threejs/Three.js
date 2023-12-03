import React, { Component } from 'react';
import DOTS from 'vanta/dist/vanta.dots.min';
import './Three.css';
import '../Responsive.css';

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
            minHeight: 400, // Set height to the window's height
            minWidth: 600, // Set width to the window's width
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
            <div className='dootdoot'
                ref={this.vantaRef}
            >

            </div>
        );
    }
}

export default Three;
