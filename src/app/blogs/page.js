import BlogsCards from '@/components/blogs/BlogsCards'
import BlogsHero from '@/components/blogs/BlogsHero'
import BlogsLayout from '@/components/blogs/BlogsLayout'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='blogsbg'>
                <BlogsHero />
            </div>

            <BlogsLayout />
        </>
    )
}

export default page