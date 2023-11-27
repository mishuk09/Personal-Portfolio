import React from 'react';
import Wave from 'react-wavify';
import './Wave.css';

const WaveComponent = () => {
    return (
        <div className='wavecomponent' style={{ overflowX: 'auto' }}>
            <div style={{ height: '280px' }}> {/* Adjust the desired height */}
                <Wave
                    fill='#0487FB'
                    paused={false}
                    style={{ display: 'flex', flexWrap: 'nowrap', height: '100%' }}
                    options={{
                        height: 20,
                        amplitude: 20,
                        speed: 0.5,
                        points: 3
                    }}
                />
            </div>
        </div>
    );
};

export default WaveComponent;
