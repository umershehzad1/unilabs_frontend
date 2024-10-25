import React from 'react'

const SectionHeading = ({ heading, subHeading }) => {
    return (
        <>
            <div className="section-heading text-center">
                <h1 className='text-white mb-0'>{heading}</h1>
                {subHeading && <p className='text-white mb-0'>{subHeading}</p>}
            </div>

        </>
    )
}

export default SectionHeading