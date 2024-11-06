import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import { FaX } from 'react-icons/fa6';
import ReactPlayer from 'react-player';
import SectionHeading from '../shared/SectionHeading';
const Unique = () => {
    const [showVideo, setShowvedio]=useState(false)
    const videoUrl ="https://youtu.be/Tmk-PGpja1E"
const uniqueItems = [
        { id: 1, icon: "/verified.gif",name:"Claim Back" },
        { id: 2, icon: "/customize.gif",name:"Tradable Vesting"},
        { id: 3, icon: "/box.gif",name:"Community Voting" },
    ];
const router=useRouter()
    const handleClick=(index)=>{

        if(index===2){

            router.push("/launchpad")
        }


if(index==0){
    setShowvedio(true)


}
    }
    const handleCloseModal = () => {
        setShowvedio(false); 
    }

    return (
        <>
            <Modal show={showVideo} onHide={handleCloseModal} centered size='lg' className="vedio-custom-player p-5 ">
                <Modal.Header className="d-flex justify-content-end border-0">
                    <button
                        type="button"
                        className="text-white btn bg-transparent border-0 "
                        onClick={handleCloseModal}

                    >
<FaX/>                    </button>
                </Modal.Header>
                <Modal.Body className=" p-5 pt-0">
                    <ReactPlayer playing={true} url={videoUrl} width="100%" height="400px" />
                </Modal.Body>
            </Modal>
            <Container>
                <SectionHeading 
                    heading={"Unique About Launchpad"} 
                    subHeading={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute mollit anim id est laborum."} 
                />
                <Row className='justify-content-center py-4'>
                    {uniqueItems.map((item,index) => (
                        <Col onClick={()=>handleClick(index)} style={{cursor:"pointer"}} xs={12} lg={4} className='text-center  my-3' key={item.id}>
                            <div data-aos="zoom-in" className='d-flex align-items-center' style={{ background: "#C1EBC2", width: "210px", height: "210px", borderRadius: "60%", margin: "auto" }}>
                                <div className='d-flex align-items-center' style={{ background: "#91E095", width: "150px", height: "150px", borderRadius: "60%", margin: "auto", boxShadow: "0px 0px 20px 0px #00000066" }}>
                                    <div className='d-flex align-items-center justify-content-center' style={{ background: "linear-gradient(90deg, #4CAF50 0%, #204921 100%)", width: "80px", height: "80px", borderRadius: "60px", margin: "auto", boxShadow: "0px 0px 20px 0px #00000066" }}>
                               
                                        <Image src={item.icon} width={40} height={40} alt="icon" />
                                    </div>
                                </div>
                            </div>
                            <h5 className='text-white mt-2'>{item.name}</h5>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Unique;
