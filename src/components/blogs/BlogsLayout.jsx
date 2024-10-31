"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BlogsCards from './BlogsCards'
import ShortcutCards from './ShortcutsCards';
import BlogsVideo from './BlogsVideo';
import BlogsHero from './BlogsHero';

const BlogsLayout = () => {
    const blogs = [
        {
            title: "Porttitor pharetra, consectetur viverra est nisl a, vulputate id...",
            date: "13 Sept, 2024",
            author: "ATM",
            description: "Dui massa sapien ornare leo. Sagittis, sollicitudin sed integer ",
            image: "/blogs.png",
        },
        {
            title: "Another blog title...",
            date: "12 Sept, 2024",
            author: "XYZ",
            description: "Another blog description goes here...",
            image: "/blogs.png",
        },
        {
            title: "Another blog title...",
            date: "12 Sept, 2024",
            author: "XYZ",
            description: "Another blog description goes here...",
            image: "/blogs.png",
        },
        {
            title: "Another blog title...",
            date: "12 Sept, 2024",
            author: "XYZ",
            description: "Another blog description goes here...",
            image: "/blogs.png",
        },
        {
            title: "Another blog title...",
            date: "12 Sept, 2024",
            author: "XYZ",
            description: "Another blog description goes here...",
            image: "/blogs.png",
        },
        {
            title: "Another blog title...",
            date: "12 Sept, 2024",
            author: "XYZ",
            description: "Another blog description goes here...",
            image: "/blogs.png",
        },
        {
            title: "Another blog title...",
            date: "12 Sept, 2024",
            author: "XYZ",
            description: "Another blog description goes here...",
            image: "/blogs.png",
        },
    ];
    return (
        <>


            <Container className="py-5">
                <h1 className='text-white'>Blogs</h1>
                <hr className='text-white' />
                <Row>
                    <Col xs={12} lg={8}>

                        <BlogsCards blogs={blogs} />
                    </Col>
                    <Col xs={12} lg={4}>
                       
                        <ShortcutCards blogs={blogs} />
                        <BlogsVideo />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default BlogsLayout