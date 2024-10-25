import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'
import Marquee from 'react-fast-marquee'
import SectionHeading from '../shared/SectionHeading'


const logos = [
    { src: "/google.png", alt: "Google Logo" },
    { src: "/google.png", alt: "Amazon Logo" },
    { src: "/google.png", alt: "Facebook Logo" },
    { src: "/google.png", alt: "Google Logo" },
    { src: "/google.png", alt: "Amazon Logo" },
    { src: "/google.png", alt: "Facebook Logo" },
    { src: "/google.png", alt: "Google Logo" },
    { src: "/google.png", alt: "Amazon Logo" },
    { src: "/google.png", alt: "Facebook Logo" },
    { src: "/google.png", alt: "Google Logo" },
    { src: "/google.png", alt: "Amazon Logo" },
    { src: "/google.png", alt: "Facebook Logo" },
]

const PoweredBy = () => {
    return (
        <>
            <Container fluid className='px-0  pb-3'>
                <SectionHeading heading={"Powered By"} />
                <Marquee className='pt-5'>
                    {logos.map((logo, index) => (
                        <React.Fragment key={index}>
                            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <div style={{ width: "150px", padding: "0 10px" }}>
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        layout="responsive"
                                        width={150}
                                        height={100}
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                                {index < logos.length - 0 && (
                                    <Image
                                        src={"/star.png"}
                                        alt={"star"}
                                        width={40}
                                        height={40}
                                        className='star'
                                    />

                                )}
                            </div>
                        </React.Fragment>
                    ))}
                </Marquee>
            </Container>
        </>
    )
}

export default PoweredBy
