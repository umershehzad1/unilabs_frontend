"use client"
import React from 'react'
import SectionHeading from '../shared/SectionHeading'
import { Card, Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
const Youtube = () => {
  const bootcamps = [
    {

      imageUrl: "/youtube.png",
    },
    {

      imageUrl: "/youtube.png",
    },
    {

      imageUrl: "/youtube.png",
    },
    {

      imageUrl: "/youtube.png",
    },
    {
      imageUrl: "/youtube.png",
    },
    {
      imageUrl: "/youtube.png",
    },
    {
      imageUrl: "/youtube.png",
    },
    {
      imageUrl: "/youtube.png",
    },
  ];

  return (
    <>

      <Container>
        <div className="text-center">
          <Image src={"/youtubeicon.png"} width={100} height={80} alt="icon" />
        </div>


        <SectionHeading heading={"YouTube"} />
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          className='py-5'
          spaceBetween={50}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          style={{ position: 'relative' }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4.2,
              spaceBetween: 20,
            },
          }}
          loop={true}
        >
          {bootcamps.map((bootcamp, index) => (
            <SwiperSlide key={index}>
              <Card className='border-0 bg-transparent'>
                <Image src={bootcamp.imageUrl}
                  alt='video'
                  layout="responsive"
                  width={0}
                  height={200}
                  style={{ width: "100%" }}
                  objectFit="cover"
                />
                <Card.Body className='px-0'>
                  <div className="d-flex gap-3">
                    <div>
                      <Image src={bootcamp.imageUrl}
                        alt='video'
                        width={40}
                        height={40}
                        style={{ borderRadius: "60%" }}
                      />
                    </div>
                    <div>
                      <Card.Title className='m-0 text-white'>Card Title</Card.Title>
                      <Card.Text style={{ color: "#AAAAAA" }} className='small'>
                        Channel Name
                      </Card.Text>
                    </div>
                  </div>

                </Card.Body>
              </Card>

            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

    </>
  )
}

export default Youtube