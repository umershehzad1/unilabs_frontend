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
        title: 'Building the Base',
        items: [
            { text: 'Public Whitepaper Launch', completed: true },
            { text: 'Initial Presale Website Launch', completed: false },
            { text: 'Smart Contract Development', completed: true },
            { text: '3rd Party Security Audit', completed: true },
            { text: 'Initial Teambuilding', completed: true },
            { text: 'Marketing Rollout', completed: true },
        ],
        icon: <SiReactos className='text-black' />
    },
    {
        title: 'Market Expansion ',
        items: [
            { text: 'Community Expansion', completed: true },
            { text: 'Visual Marketing Expansion', completed: false },
            { text: 'Social Media Initiation', completed: true },
            { text: 'Blockchain Development', completed: true },
            { text: 'Technical Knowledge Base', completed: true },
        ],
        icon: <SiReactos className='text-black' />
    },
    {
        title: 'Mainstream Rollout',
        items: [
            { text: 'CoinMarketCap Listing', completed: true },
            { text: 'Testnet Launch', completed: false },
            { text: 'Wallet Application', completed: true },
            { text: 'Influencer Onboarding', completed: true },
            { text: 'Tier 3 CEX Listing', completed: true },
        ],
        icon: <SiReactos className='text-black' />
    },
    {
        title: 'Zerg Rush',
        items: [
            { text: 'Mainnet Launch', completed: true },
            { text: 'Tier 1 and Tier 2 CEX Listing', completed: false },
            { text: 'Physical Office Launch in 4 Locations', completed: true },
            { text: 'Regulatory Approval in 12+ Regions', completed: true },
        ],
        icon: <SiReactos className='text-black' />
    },
    // ... rest of the data
];

const RoadMaps = () => {
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
                speed: 0.3,
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
                document.documentElement.style.setProperty('--timeline-height', `${newHeight}%`);
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
                        height: var(--timeline-height, 10%) !important;
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
