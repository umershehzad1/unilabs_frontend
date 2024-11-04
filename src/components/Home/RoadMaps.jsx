"use client";
import React, { useEffect, useRef, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Button, Container, Spinner } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import SectionHeading from '../shared/SectionHeading';
import { SiReactos } from "react-icons/si";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const roadmapData = [
    {
        title: 'Launch Phase 1',
        items: [
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: true },
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: false },
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: true }
        ],
        icon: <SiReactos className='text-black' />
    },
    {
        title: 'Launch Phase 1',
        items: [
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: true },
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: false },
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: true }
        ],
        icon: <SiReactos className='text-black' />
    },
    {
        title: 'Launch Phase 1',
        items: [
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: true },
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: false },
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: true }
        ],
        icon: <SiReactos className='text-black' />
    },
];

const RoadMaps = () => {
    const [scrollHeight, setScrollHeight] = useState(10);
    const sectionRef = useRef(null);

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesOptions = {
        fullScreen: { enable: false },
        fpsLimit: 60,
        motion: {
            reduce: {
                value: true, 
            }
        },
        interactivity: {
            events: {
                onHover: { enable: false, mode: "repulse" },
                resize: false,
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
            },
        },
        particles: {
            color: { value: "#202731" },
            links: {
                color: "#202731",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 0.1,
                straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 100 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
    };
    
    

    const handleScroll = () => {
        if (sectionRef.current) {
            const sectionTop = sectionRef.current.offsetTop;
            const sectionHeight = sectionRef.current.clientHeight;
            const scrollY = window.scrollY;
            const maxScroll = sectionHeight - window.innerHeight;
            const scrollPosition = scrollY - sectionTop;

            if (scrollPosition >= 0 && scrollPosition <= maxScroll) {
                const newHeight = Math.min(100, (scrollPosition / maxScroll) * 100);
                setScrollHeight(newHeight);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <style>
                {`
                    .vertical-timeline::before {
                        height: ${scrollHeight}% !important;
                    }
                `}
            </style>

            <div ref={sectionRef} className="position-relative">
                <Particles
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        zIndex: -1,
                    }}
                    id="tsparticles"
                    init={particlesInit}
                    options={particlesOptions}
                />

                <Container className='py-5 ' style={{ zIndex: 9999 }}>
                    <SectionHeading heading={"UNILabs Roadmap"} />
                    <VerticalTimeline className='my-4'>
                        {roadmapData.map((phase, index) => (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element--work no-box-shadow"
                                contentStyle={{ background: 'transparent', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid #438446' }}
                                iconStyle={{ background: '#438446', color: '#fff' }}
                                icon={phase.icon}
                                visible={true}
                                animate={true}
                            >
                                <h1 className="vertical-timeline-element-title fw-bold">{phase.title}</h1>
                                <ul className="list-unstyled">
                                    {phase.items.map((item, idx) => (
                                        <li key={idx} className="mb-3 fs-5 d-flex">
                                            {item.completed ? (
                                                <FaCheckCircle className="me-2 mt-1" style={{ color: '#28a745', minWidth: '20px', minHeight: '20px' }} />
                                            ) : (
                                                <Spinner
                                                    animation="border"
                                                    size="sm"
                                                    className="me-2 mt-2"
                                                    style={{ color: '#fff', minWidth: '20px', minHeight: '20px' }}
                                                />
                                            )}
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                    <div className='text-center'>
                        <Button className="py-2 px-3 nav-button">Download RoadMap</Button>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default RoadMaps;
