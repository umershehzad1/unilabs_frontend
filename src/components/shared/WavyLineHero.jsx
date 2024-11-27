import { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";

const WavyLineHero = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const animateIcons = () => {
            if (!containerRef.current) return;

            const path = containerRef.current.querySelector(".wavy-path");
            if (!path) return;

            const pathLength = path.getTotalLength();

            const icons = [
                { id: "icon1", delay: 0 },
                { id: "icon2", delay: 3 },
                { id: "icon3", delay: 6 },
                { id: "icon4", delay: 8 },
            ];

            const animate = (timestamp) => {
                icons.forEach((icon) => {
                    const element = containerRef?.current?.querySelector(`#${icon.id}`);
                    if (!element) return;

                    const time = ((timestamp /5000) + icon.delay) % 10;
                    const distance = (time / 10) * pathLength;
                    const point = path.getPointAtLength(distance);
                    element.style.left = `${point.x}px`;
                    element.style.top = `${point.y}px`;
                });

                requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
        };

        animateIcons();
    }, []);

    return (
        <div className="starts-bg">
            <div ref={containerRef} className=" position-relative w-100 h-100">
                <svg
                    className="wavy-line"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 200"
                >
                    <path
                        className="wavy-path"
                        d="M0 100 Q150 0, 300 100 T600 100 T900 100 T1200 100"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="1"
                        filter="url(#glow)"
                    />
                    <defs>
                        <filter id="glow" height="300%" width="300%" x="-75%" y="-75%">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
                {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar id={`icon${index + 1}`} key={index} className="icon position-absolute" />
                ))}
            </div>
        </div>
    );
};

export default WavyLineHero;
