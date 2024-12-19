import Image from 'next/image'
import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles';

const LoginLeftAnime = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };


    return (
        <div>   <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false },

                particles: {
                    number: {
                        value: 50,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    size: {
                        value: 3,
                        random: true,

                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        outModes: {
                            default: "out",
                        },
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#00ff00",
                        opacity: 0.4,
                        width: 1,
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                    },
                    shape: {
                        type: "circle",
                    },
                    color: {
                        value: "#00ff00",
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        repulse: {
                            distance: 100,
                        },
                        push: {
                            quantity: 4,
                        },
                    },
                },
                detectRetina: true,
            }}
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
            }}
        />

            <div className="text-center text-white" style={{ zIndex: 1 }}>
                <div className="d-flex flex-column gap-2 align-items-center">
                    <Image src="/logo.png" width={200} height={100} alt="logo" />
                    <h1 className="fw-bold text-uppercase display-3 ">Unilabs</h1>
                </div>
            </div>
        </div>
    )
}

export default LoginLeftAnime