import Board from '@/components/team/Board'
import Contributers from '@/components/team/Contributers'
import React from 'react'
import { Container } from 'react-bootstrap'

const page = () => {
    return (
        <>
            <Container >
                
                <Contributers />
                <Board />
            </Container>
        </>
    )
}

export default page