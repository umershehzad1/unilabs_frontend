import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const roadmapData = [
    {
        phase: "Phase 1: Building the Base",
        details: "Public Whitepaper Launch • Initial Presale Website • Launch • Smart Contract Development • 3rd Party Security Audit • Initial Teambuilding • Marketing Rollout",
    },
    {
        phase: "Phase 2: Market Expansion",
        details: "Community Expansion • Visual Marketing • Expansion • Social Media Initiation • Blockchain Development • Technical Knowledge Base Public",
    },
    {
        phase: "Phase 3: Mainstream Rollout",
        details: "CoinMarketCap Listing • Testnet Launch • Wallet Application • Influencer Onboarding • Tier 3 CEX Listing",
    },
    {
        phase: "Phase 4: Zerg Rush",
        details: "Mainnet Launch • Tier 1 and Tier 2 CEX Listing • Physical Office Launch in 4 Locations • Regulatory Approval in 12+ Regions",
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
                document.documentElement.style.setProperty("--timeline-height", `${newHeight}%`);
                progressIconRef.current.style.top = `calc(${newHeight}%)`;
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
                `}
            </style>

            <div ref={sectionRef} className="position-relative  roadmaps">
                <Container className="py-5">
                    <h1 className="text-white fw-bold text-center mb-4">Roadmap</h1>
                    <VerticalTimeline className="my-4">
                        {roadmapData.map((item, index) => (
                            <>
                                {/* Phase Title */}
                                <VerticalTimelineElement
                                    key={`${item.phase}-title`}
                                    visible={true}
                                    className="vertical-timeline-element-work no-box-shadow"
                                    contentStyle={{
                                        textAlign: index % 2 === 0 ? "left" : "right",
                                        background: "transparent",
                                    }}
                                    contentArrowStyle={{
                                        borderRight: index % 2 === 0
                                            ? "6px solid #438446"
                                            : "6px solid transparent",
                                        borderLeft: index % 2 !== 0
                                            ? "6px solid #438446"
                                            : "6px solid transparent",
                                    }}
                                    iconStyle={{ background: "#438446", color: "#fff" }}
                                >
                                    <h3 className=" fw-bold text-white">{item.phase}</h3>
                                </VerticalTimelineElement>

                                {/* Phase Details */}
                                <VerticalTimelineElement
                                    key={`${item.phase}-details`}
                                    className="vertical-timeline-element-work no-box-shadow"
                                    visible={true}

                                    contentStyle={{
                                        textAlign: index % 2 !== 0 ? "left" : "right",
                                        background: "transparent",
                                    }}
                                    contentArrowStyle={{
                                        borderRight: index % 2 !== 0
                                            ? "6px solid #438446"
                                            : "6px solid transparent",
                                        borderLeft: index % 2 === 0
                                            ? "6px solid #438446"
                                            : "6px solid transparent",
                                    }}
                                    iconStyle={{ background: "#438446", color: "#fff" }}
                                >
                                    <p className="custom-inner">{item.details}</p>
                                </VerticalTimelineElement>
                            </>
                        ))}
                        <div ref={progressIconRef} className="progress-icon"></div>
                    </VerticalTimeline>
                </Container>
            </div>
        </>
    );
};

export default RoadMaps;
