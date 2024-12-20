import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LocationIcon, SearchIcon, StreamIcon, TrendingIcon } from "../../../public/svg/SVG";

const RoadMaps = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [lastActiveIndex, setLastActiveIndex] = useState(null);
    const lastScrollY = useRef(0);

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

    const handleScroll = () => {
        if (sectionRef.current) {
            const sectionTop = sectionRef.current.offsetTop;
            const sectionHeight = sectionRef.current.clientHeight;
            const scrollY = window.scrollY;

            const scrollPosition = scrollY - sectionTop + 500;
            const scrollPercentage = Math.min(100, (scrollPosition / sectionHeight) * 100);

            const timeline = document.querySelector(".vertical-timeline");
            if (timeline) {
                timeline.style.setProperty("--timeline-height", `${scrollPercentage}%`);
            }

            if (scrollPercentage >= 4 && scrollPercentage < 11) {
                setActiveIndex(0);
            } else if (scrollPercentage >= 32 && scrollPercentage < 40) {
                setActiveIndex(1);
            } else if (scrollPercentage >= 55 && scrollPercentage < 65) {
                setActiveIndex(2);
            } else if (scrollPercentage >= 80) {
                setActiveIndex(3);
            }

            if (scrollY > lastScrollY.current) {
                if (activeIndex > lastActiveIndex) {
                    setLastActiveIndex(activeIndex);
                }
            } else {
                if (activeIndex !== null) {
                    setLastActiveIndex(null);
                }
            }
            lastScrollY.current = scrollY;
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeIndex]);

    return (
        <>
            <style>
                {`
                    .vertical-timeline {
                        --timeline-height: 0;
                    }

                    .vertical-timeline::before {
                        height: var(--timeline-height, 10%) !important;
                        transition: height 0.2s ease-in-out;
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
                    .roadmap-icon {
                        position: relative;                       
height:40px;
width:40px;
                        border-radius: 50%;
                        background-color: transparent;
                        transition: all 0.3s ease-in-out;
                        z-index: 1;
                    }
                    .active {
                        background-color: #28a745;
                        transform: scale(1.2);
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
                                dateClassName="custom-date fs-1 fw-bold px-md-4 px-2"
                                icon={
                                    <div
                                        className={`roadmap-icon ${activeIndex >= index ? "active" : ""}`}
                                    >
                                        {item.icon}
                                    </div>
                                }
                                iconClassName="mt-3"
                            >
                                <p className="custom-inner p-5">{item.details}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </Container>
            </div>
        </>
    );
};

export default RoadMaps;
