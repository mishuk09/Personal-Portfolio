import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";

const ParticleJS = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);

        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            //mouse effect distance
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        //particle color
                        // value: "#6B76C1",
                        value: "#E0D3D3",
                    },
                    links: {
                        //particle connector
                        color: "#0F111E",
                        distance: 50,
                        enable: true,
                        opacity: 0.5,
                        width: 0.5,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            //number of particles
                            enable: true,
                            area: 700,
                        },
                        value: 70,
                    },
                    opacity: {
                        value: 0.3,
                    },
                    shape: {
                        type: "triangle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }} />
    );
};

export default ParticleJS;