import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <section className='hero'>
        <img src="https://preview.colorlib.com/theme/shop/img/header-img.png" alt="" />
        <div className='heroRight'>
            <p>Flat <span>75%Off</span></p>
            <h1>IT’S HAPPENING THIS SEASON!</h1>
            <a href="#">PURCHASE NOW</a>
        </div>
    </section>
  )
}

export default Hero
