"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LocationIcon, SearchIcon, StreamIcon, TrendingIcon } from "../../../public/svg/SVG";

const Animation = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const roadmapData = [
        {
            phase: "Phase 1: Building the Base",
            details: "Public Whitepaper Launch • Initial Presale Website • Launch • Smart Contract Development • 3rd Party Security Audit • Initial Teambuilding • Marketing Rollout",
            icon: <SearchIcon />,
        },
        {
            phase: "Phase 2: Market Expansion",
            details: "Community Expansion • Visual Marketing • Expansion • Social Media Initiation • Blockchain Development • Technical Knowledge Base Public",
            icon: <TrendingIcon />,
        },
        {
            phase: "Phase 3: Mainstream Rollout",
            details: "CoinMarketCap Listing • Testnet Launch • Wallet Application • Influencer Onboarding • Tier 3 CEX Listing",
            icon: <StreamIcon />,
        },
        {
            phase: "Phase 4: Zerg Rush",
            details: "Mainnet Launch • Tier 1 and Tier 2 CEX Listing • Physical Office Launch in 4 Locations • Regulatory Approval in 12+ Regions",
            icon: <LocationIcon />,
        },
    ];

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
                document.documentElement.style.setProperty("--timeline-height", `${newHeight}%`);
                progressIconRef.current.style.top = `calc(${newHeight}%)`;
            }

            // Dynamically update activeIndex based on scroll thresholds
            if (scrollPosition >= 0 && scrollPosition < sectionHeight * 0.25) {
                setActiveIndex(0);
            } else if (scrollPosition >= sectionHeight * 0.25 && scrollPosition < sectionHeight * 0.5) {
                setActiveIndex(1);
            } else if (scrollPosition >= sectionHeight * 0.5 && scrollPosition < sectionHeight * 0.75) {
                setActiveIndex(2);
            } else if (scrollPosition >= sectionHeight * 0.75) {
                setActiveIndex(3);
            } else {
                setActiveIndex(null); // Reset activeIndex if no threshold is met
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
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
                        left: 50%;
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
                    .roadmap-title {
                        color: #fff;
                        font-size: 1.5rem;
                        font-weight: bold;
                    }
                    .roadmap-details {
                        color: #ccc;
                        font-size: 1rem;
                    }
                    .custom-icon {
                        position: relative;
                        display: inline-block;
                        padding: 10px;
                        border-radius: 50%;
                        background-color: transparent;
                        transition: all 0.3s ease-in-out;
                        z-index: 1;
                    }
                    .custom-icon.active {
                        background-color: #28a745;
                        box-shadow: 0 0 10px rgba(40, 167, 69, 0.8);
                        z-index: -1
                    }
                `}
            </style>
            <div ref={sectionRef} className="position-relative roadmaps">
                <Container
                    style={{
                        minHeight: "100vh",
                        color: "#fff",
                        padding: "100px 20px",
                    }}
                >
                    <h1 className="text-center mb-5" style={{ color: "white" }}>
                        RoadMap
                    </h1>
                    <VerticalTimeline>
                        {roadmapData.map((item, index) => (
                            <VerticalTimelineElement
                                key={index}
                                visible
                                animate={true}
                                className="vertical-timeline-element--work no-box-shadow"
                                contentStyle={{
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                }}
                                contentArrowStyle={{ display: "none" }}
                                date={`${item.phase}`}
                                dateClassName="custom-date fw-bold px-4"
                                icon={
                                    <div
                                        className={`custom-icon ${activeIndex === index ? "active" : ""}`}
                                    >
                                        {item.icon}
                                    </div>
                                }
                                iconClassName="mt-3"
                            >
                                <p className="custom-inner">{item.details}</p>
                            </VerticalTimelineElement>
                        ))}
                        <div ref={progressIconRef}></div>
                    </VerticalTimeline>
                </Container>
            </div>
        </>
    );
};

export default Animation;
