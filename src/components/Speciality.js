import React from 'react'
import naturalImg from '../utilities/info/Natural-logo.webp'
import healthyImg from '../utilities/info/Heart-logo.webp'
import flavourImg from '../utilities/info/FL-logo.webp'
import vegImg from '../utilities/info/Veg-logo.webp'


const Speciality = () => {
  return (
    <>
        <div className='Info d-flex flex-row'>
            <div className='block'>
                <div>
                <img src={naturalImg} />
                </div>
                <h3>Natural</h3>
                <p>Our spices are made from the finest natural ingredients, ensuring that you get the best flavors without any harmful additives.</p>
            </div>
            <div className='block'>
                <div><img src={healthyImg} /></div>
                <h3>Healthy</h3>
                <p>Our spices are not only delicious but also packed with health benefits, helping you lead a healthier lifestyle.</p>
            </div>
            <div className='block'>
                <div><img src={flavourImg}/></div>
                <h3>Flavour Lock</h3>
                <p>We use the latest techniques to lock in the flavor and aroma of our spices, so you can enjoy their freshness and goodness for longer.</p>
            </div>
            <div className='block'>
                <div><img src={vegImg}/></div>
                <h3>Pure Veg</h3>
                <p>Our spices are 100% pure and vegetarian, making them the perfect choice for anyone looking for a healthy and ethical food option.</p>
            </div>
        </div>
    </>
  )
}

export default Speciality