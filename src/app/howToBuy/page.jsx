"use client"
import HowToBuySteps from '@/components/HowToBuySteps'
import WavyLineHero from '@/components/shared/WavyLineHero'
import { Fade } from 'react-awesome-reveal'
import { Container } from 'react-bootstrap'

const page = () => {
    return (
        <div className="py-5 overflow-hidden">

        <div className='position-relative py-5  howtobuy '>
            <div className="purple-bg-right"></div>
            <div className="wave1">
                <WavyLineHero />
            </div>
            <div className="wave2">
                <WavyLineHero />
            </div>
            <Container className='text-white text-center px-md-auto px-0'>
                <Fade bottom delay={300}>
                    <h1 className='display-5 fw-bold py-5'>
                        How to Buy <span className="px-2 green">UNIL</span>
                    </h1>
                </Fade>
                <Fade bottom delay={500}>
                    <p className='mx-auto col-md-8 col-lg-6  col-10 fs-3'>
                        We are currently in the Presale of the <span className="px-2 green">UNIL Token.</span>
                        Log-In or Create an account to buy.
                    </p>
                </Fade>
                <HowToBuySteps />
            </Container>
        </div>
        </div>

    )
}

export default page;
