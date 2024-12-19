import React from 'react'
import { Button, Container } from 'react-bootstrap'
import SectionHeading from '../shared/SectionHeading'

const WhyUnilabs = () => {
    return (
    

        
        <Container className='text-center py-5 why'>
            <SectionHeading heading={"WHY UNILABS?"} />
            <hr className='text-white' />
            <h3>Safe and Secure</h3>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum.</p>
            <div className="d-flex gap-4 justify-content-center pt-4">
                <Button className="greenBtn">Learn More</Button>
                <Button className="transparentBtn rounded-0">DA Gpaper V2</Button>
            </div>
        </Container>

    )
}

export default WhyUnilabs