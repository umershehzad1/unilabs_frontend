"use client"
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

const BlogsVideo = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="pt-3">
            <div>
                <h1 className='text-white'>Featured Video</h1>
                <hr className='text-white' />
            </div>
            {isMounted && (
                <div>
                    <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width="100%" />
                </div>
            )}
        </div>
    )
}

export default BlogsVideo;
