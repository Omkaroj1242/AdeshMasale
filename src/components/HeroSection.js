import React from 'react'
import video from '../utilities/home-video.mp4'

const HeroSection = () => {
    return (
        <>
            <div>
                <video autoPlay muted>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default HeroSection