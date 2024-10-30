import ActivePolls from '@/components/launchpad/ActivePolls'
import LaunchPadHero from '@/components/launchpad/LaunchPadHero'
import VotingWeight from '@/components/launchpad/VotingWeight'
import React from 'react'
import { Container } from 'react-bootstrap'

const page = () => {
    return (
        <>
            <div className="position-relative pt-5 launchbg">
                <Container className="py-5">
                    <LaunchPadHero/>
                    <VotingWeight />
                    <ActivePolls />
                </Container>
            </div>
        </>
    )
}

export default page