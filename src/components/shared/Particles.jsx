"use client";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = ({ particleColor = "#00FF00", backgroundColor = "#000000" }) => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true, zIndex: -2 },
                particles: {
                    number: {
                        value: 30,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    color: {
                        value: particleColor, // Dynamic particle color
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        animation: {
                            enable: true,
                            speed: 1,
                            minimumValue: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: 5,
                        random: true,
                        animation: {
                            enable: true,
                            speed: 5,
                            minimumValue: 0.1,
                            sync: false,
                        },
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: particleColor, // Dynamic link color
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: "none",
                        random: false,
                        straight: false,
                        outModes: {
                            default: "out",
                        },
                    },
                },
                background: {
                    color: {
                        value: backgroundColor, // Dynamic background color
                    },
                },
            }}
        />
    );
};

export default ParticlesBackground;
