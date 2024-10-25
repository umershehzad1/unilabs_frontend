import React from 'react'

const SectionHeading = ({ heading, paragraph }) => {
    return (
        <>
            <div className="section-heading text-center">
                <h1 className='text-white mb-0'>{heading}</h1>
                {paragraph && <p className='text-white mb-0'>{paragraph}</p>}
            </div>

        </>
    )
}

export default SectionHeading