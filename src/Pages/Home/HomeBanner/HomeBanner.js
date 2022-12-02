import React, { useCallback } from 'react';
import './HomeBanner.css';

import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const HomeBanner = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    
    return (
        //     <Particles
        //             height='100vh'
        //             width='100vw'         
        //             id="tsparticles"
        //             init={particlesInit}
        //             loaded={particlesLoaded}
        //             options={{
        //                 particles: {
        //                     number: {
        //                         value: 62,
        //                         density: {
        //                             enable: true,
        //                             value_area: 236.7442924896818
        //                         }
        //                     },
        //                     color: {
        //                         value: "black"
        //                     },
        //                     shape: {
        //                         type: "circle",
        //                         stroke: {
        //                             width: 0,
        //                             color: "#000000"
        //                         },
        //                         polygon: {
        //                             nb_sides: 6
        //                         },
        //                         image: {
        //                             src: "",
        //                             width: 100,
        //                             height: 100
        //                         }
        //                     },
        //                     opacity: {
        //                         value: 1,
        //                         random: true,
        //                         anim: {
        //                             enable: true,
        //                             speed: 1,
        //                             opacity_min: 0,
        //                             sync: false
        //                         }
        //                     },
        //                     size: {
        //                         value: 1,
        //                         random: false,
        //                         anim: {
        //                             enable: false,
        //                             speed: 4,
        //                             size_min: 0.3,
        //                             sync: false
        //                         }
        //                     },
        //                     line_linked: {
        //                         enable: false,
        //                         distance: 150,
        //                         color: "red",
        //                         opacity: 0.4,
        //                         width: 1
        //                     },
        //                     move: {
        //                         enable: true,
        //                         speed: 1,
        //                         direction: "none",
        //                         random: true,
        //                         straight: false,
        //                         out_mode: "out",
        //                         bounce: false,
        //                         attract: {
        //                             enable: false,
        //                             rotateX: 600,
        //                             rotateY: 600
        //                         }
        //                     }
        //                 },
        //                 interactivity: {
        //                     detect_on: "canvas",
        //                     events: {
        //                         onhover: {
        //                             enable: true,
        //                             mode: "repulse"
        //                         },
        //                         onclick: {
        //                             enable: true,
        //                             mode: "repulse"
        //                         },
        //                         resize: true
        //                     },
        //                     modes: {
        //                         grab: {
        //                             distance: 400,
        //                             line_linked: {
        //                                 opacity: 1
        //                             }
        //                         },
        //                         bubble: {
        //                             distance: 250,
        //                             size: 0,
        //                             duration: 2,
        //                             opacity: 0,
        //                             speed: 3
        //                         },
        //                         repulse: {
        //                             distance: 400,
        //                             duration: 0.4
        //                         },
        //                         push: {
        //                             particles_nb: 4
        //                         },
        //                         remove: {
        //                             particles_nb: 2
        //                         }
        //                     }
        //                 },
        //                 retina_detect: true
        //             }}
        // />
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
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#000000",
                },
                links: {
                    color: "#000000",
                    distance: 140,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    directions: "bottom",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 100,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }}
    />
    );
};

export default HomeBanner;