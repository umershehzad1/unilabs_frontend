"use client";
import { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import DotSpinner from '../shared/DotSpinner';
import WavyLineHero from '../shared/WavyLineHero';

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
    },
    {
        title: 'Phase 4 - Zerg Rush',
        items: [
            { text: 'Mainnet Launch', completed: false },
            { text: 'Tier 1 and Tier 2 CEX Listing', completed: false },
            { text: 'Physical Office Launch in 4 Locations', completed: false },
            { text: 'Regulatory Approval in 12+ Regions', completed: false },
        ],
    },
];

const RoadMaps = () => {
    const sectionRef = useRef(null);
    const progressIconRef = useRef(null);

    const handleScroll = () => {
        if (sectionRef.current && progressIconRef.current) {
            const sectionTop = sectionRef.current.offsetTop;
            const sectionHeight = sectionRef.current.clientHeight;
            const scrollY = window.scrollY;
            const maxScroll = sectionHeight - window.innerHeight;
            const scrollPosition = scrollY - sectionTop;
            if (scrollPosition >= 0 && scrollPosition <= maxScroll) {
                const newHeight = Math.min(100, (scrollPosition / maxScroll) * 100);
                document.documentElement.style.setProperty('--timeline-height', `${newHeight}%`);
                progressIconRef.current.style.top = `calc(${newHeight}%)`;
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
                        height: var(--timeline-height, 0%) !important;
                        transition: height 0.2s ease-in-out; 

                    }
                    .progress-icon {
                        position: absolute;
                        left: 50.1%;
                        transform: translateX(-50%);
                        top: 0;
                        z-index: 10;
                        width: 24px;
                        height: 24px;
                        background-color: #28a745;
                        border-radius: 50%;

                        box-shadow: 0 0 10px rgba(40, 167, 69, 0.8),
                                    0 0 20px rgba(40, 167, 69, 0.6),
                                    0 0 30px rgba(40, 167, 69, 0.4);
                        transition: top 0.2s ease-in-out; 
                    }
                    @media (max-width: 1170px) {
                        .progress-icon {
                            left: 9px;
                            transform: none;
                        }
                    }
                `}
            </style>

            <div ref={sectionRef} className="position-relative roadmaps">
                <WavyLineHero />
                <div className="purple-bg-right right"></div>
                <div className="purple-bg-right left"></div>

                <Container className="py-5">
                    <h1 className="text-white fw-bold text-center">Roadmap</h1>
                    <div className="border-bottom border-secondary"></div>
                    <VerticalTimeline className="my-4">
                        {roadmapData.map((phase, index) => (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element-work no-box-shadow"
                                contentStyle={{ background: 'transparent', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '6px solid #438446' }}
                                iconStyle={{ background: '#438446', color: '#fff' }}
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
                        <div ref={progressIconRef} className="progress-icon"></div>
                    </VerticalTimeline>
                </Container>


            </div>
        </>
    );
};

export default RoadMaps;
