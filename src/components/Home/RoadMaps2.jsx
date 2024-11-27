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
import DotSpinner from '../shared/DotSpinner';

const roadmapData = [
    {
        title: 'Phase 1: Building the Base',
        items: [
            { text: 'Public Whitepaper Launch', completed: true },
            { text: 'Initial Presale Website Launch', completed: true },
            { text: 'Smart Contract Development', completed: true },
            { text: '3rd Party Security Audit', completed: true },
            { text: 'Initial Teambuilding', completed: false },
            { text: 'Marketing Rollout', completed: false },
        ],
        // icon: <SiReactos className='text-black' />
    },
    {
        title: 'Phase 2 - Market Expansion ',
        items: [
            { text: 'Community Expansion', completed: false },
            { text: 'Visual Marketing Expansion', completed: false },
            { text: 'Social Media Initiation', completed: false },
            { text: 'Blockchain Development', completed: false },
            { text: 'Technical Knowledge Base', completed: false },
        ],
        // icon: <SiReactos className='text-black' />
    },
    {
        title: 'Phase 3 - Mainstream Rollout',
        items: [
            { text: 'CoinMarketCap Listing', completed: false },
            { text: 'Testnet Launch', completed: false },
            { text: 'Wallet Application', completed: false },
            { text: 'Influencer Onboarding', completed: false },
            { text: 'Tier 3 CEX Listing', completed: false },
        ],
        // icon: <SiReactos className='text-black' />
    },
    {
        title: 'Phase 4 - Zerg Rush',
        items: [
            { text: 'Mainnet Launch', completed: false },
            { text: 'Tier 1 and Tier 2 CEX Listing', completed: false },
            { text: 'Physical Office Launch in 4 Locations', completed: false },
            { text: 'Regulatory Approval in 12+ Regions', completed: false },
        ],
        // icon: <SiReactos className='text-black' />
    },
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
                    <h1 className='text-white fw-bold text-center  '>Roadmap</h1>
                    <div className="border-bottom border-secondary"></div>
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
                                <h1 className="fs-2 mb-4 fw-bold">{phase.title}</h1>
                                <ul className="list-unstyled">
                                    {phase.items.map((item, idx) => (
                                        <li key={idx} className="mb-3 fs-5 d-flex">
                                            {item.completed ? (
                                                <FaCheckCircle className="me-2 mt-1" style={{ color: '#28a745', minWidth: '20px', minHeight: '20px' }} />
                                            ) : (
                                                <div className="me-2 mt-1">
                                                    <DotSpinner />
                                                </div>
                                            )}
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </Container>
            </div>
        </>
    );
};

export default RoadMaps;
