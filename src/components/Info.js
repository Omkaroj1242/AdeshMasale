import React from 'react'
import al1 from '../utilities/info/al1.png'
import al2 from '../utilities/info/al2.png'
import al3 from '../utilities/info/al3.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'


const Info = () => {
    return (
        <div className='Info2'>
            <div className='img1'><img src={al1} /></div>
            <div className='img2'><img src={al2} /></div>
            <div className='img3'><img src={al3} /></div>
            <div className='infoContent'>
                <div className='infoHeading'>The Essence of Indian Spices</div>
                <div className='infoText'>Welcome to Aadesh Masala, an Indian spices brand that is dedicated to bringing the flavors of traditional Indian cuisine to
                    every household in India.
                    Our mission is to provide the best quality spices to our customers, ensuring that every meal is full of flavor and packed with nutrition.
                    Over the years, we have grown from a small local business to a national brand, serving customers across India.
                    We take pride in our commitment to quality, sourcing the freshest and finest ingredients to make our spices.
                    Our products are free from any harmful additives, ensuring that our customers can enjoy healthy and delicious meals.
                </div>
            </div>
            <a className='viewButton'>
                <div className='button'>
                    <FontAwesomeIcon className='fa-2xl faIcon' icon={faCircleArrowRight} style={{ color: "#030303", }} />
                    <div className='buttonText'>View More</div>
                </div>
            </a>
        </div>
    )
}

export default Info