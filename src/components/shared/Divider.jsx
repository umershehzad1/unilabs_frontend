import React from 'react'
import { Col } from 'react-bootstrap'

const Divider = () => {
    return (

        <>
            <Col xs={12} lg={4} className='mx-auto py-3'>
                <div style={{ width: "100%", height: "10px", borderRadius: "30px", backgroundColor: "#8ef694" }} />

            </Col>
        </>
    )
}

export default Divider