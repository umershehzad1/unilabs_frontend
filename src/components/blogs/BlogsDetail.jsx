import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const BlogsDetail = () => {
    return (
        <>
            <Container
                fluid
                className="pt-5"
                style={{
                    backgroundImage: `url(/blogsbg.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'left center',
                    minHeight: '80vh',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white'
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1
                    }}
                ></div>
                <Container>



                    <Row className="align-items-center py-5" style={{ position: 'relative', zIndex: 2 }}>
                        <Col xs={12} lg={6} className="manage mx-auto">
                            <h1>
                                Lorem ipsum dolor
                            </h1>

                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container className='py-4'>
                <p className='text-white fs-5'>Vestibulum egestas amet, morbi facilisis semper mi placerat ac. Et tristique mus vel eu libero, lacus sit consectetur. Tristique dapibus fringilla in lectus ullamcorper tristique risus id nunc. Enim mi a, sapien velit dolor sagittis. Erat posuere aliquam, sit maecenas a neque lectus commodo scelerisque. Volutpat purus facilisis egestas risus convallis libero morbi est orci. Senectus a senectus cursus consectetur egestas eu fringilla eu phasellus. Tristique mollis velit.</p>
                <h2 className='text-white'>Adipiscing lacus dui rutrum quam. In morbi facilisis elit.</h2>
                <p className='text-white fs-5'>Vestibulum egestas amet, morbi facilisis semper mi placerat ac. Et tristique mus vel eu libero, lacus sit consectetur. Tristique dapibus fringilla in lectus ullamcorper tristique risus id nunc. Enim mi a, sapien velit dolor sagittis. Erat posuere aliquam, sit maecenas a neque lectus commodo scelerisque. Volutpat purus facilisis egestas risus convallis libero morbi est orci. Senectus a senectus cursus consectetur egestas eu fringilla eu phasellus. Tristique mollis velit.</p>
                <Image
                    src={"/laptop.png"}
                    width={0}
                    height={0}
                    layout="responsive"
                    style={{ width: "100%", height: "100%" }}
                    alt="Blog Image"
                    className='py-3'
                />
                <p className='text-white fs-5'>Vestibulum egestas amet, morbi facilisis semper mi placerat ac. Et tristique mus vel eu libero, lacus sit consectetur. Tristique dapibus fringilla in lectus ullamcorper tristique risus id nunc. Enim mi a, sapien velit dolor sagittis. Erat posuere aliquam, sit maecenas a neque lectus commodo scelerisque. Volutpat purus facilisis egestas risus convallis libero morbi est orci. Senectus a senectus cursus consectetur egestas eu fringilla eu phasellus. Tristique mollis velit.</p>
                <p className='text-white fs-5'>Vestibulum egestas amet, morbi facilisis semper mi placerat ac. Et tristique mus vel eu libero, lacus sit consectetur. Tristique dapibus fringilla in lectus ullamcorper tristique risus id nunc. Enim mi a, sapien velit dolor sagittis. Erat posuere aliquam, sit maecenas a neque lectus commodo scelerisque. Volutpat purus facilisis egestas risus convallis libero morbi est orci. Senectus a senectus cursus consectetur egestas eu fringilla eu phasellus. Tristique mollis velit.</p>
                <h2 className='text-white'>Adipiscing lacus dui rutrum quam. In morbi facilisis elit.</h2>
                <p className='text-white fs-5'>Vestibulum egestas amet, morbi facilisis semper mi placerat ac. Et tristique mus vel eu libero, lacus sit consectetur. Tristique dapibus fringilla in lectus ullamcorper tristique risus id nunc. Enim mi a, sapien velit dolor sagittis. Erat posuere aliquam, sit maecenas a neque lectus commodo scelerisque. Volutpat purus facilisis egestas risus convallis libero morbi est orci. Senectus a senectus cursus consectetur egestas eu fringilla eu phasellus. Tristique mollis velit.</p>
                <p className='text-white fs-5'>Vestibulum egestas amet, morbi facilisis semper mi placerat ac. Et tristique mus vel eu libero, lacus sit consectetur. Tristique dapibus fringilla in lectus ullamcorper tristique risus id nunc. Enim mi a, sapien velit dolor sagittis. Erat posuere aliquam, sit maecenas a neque lectus commodo scelerisque. Volutpat purus facilisis egestas risus convallis libero morbi est orci. Senectus a senectus cursus consectetur egestas eu fringilla eu phasellus. Tristique mollis velit.</p>
            </Container>
        </>
    )
}

export default BlogsDetail