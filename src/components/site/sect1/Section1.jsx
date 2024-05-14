import React from 'react'
import './Section1.css'
const Section1 = () => {
  return (
    <section className='section1'>
        <h2>Shop for Different Categories</h2>
        <p className='salam'>Who are in extremely love with eco friendly system.</p>
        <div className='section1Bottom'>
            <div className='section1Left'>
                <div className='section1LeftTop'>
                    <div style={{position:"relative"}} className='section1LeftTopLeft'>
                        <img src="https://preview.colorlib.com/theme/shop/img/c1.jpg.webp" alt="" />
                        <div className='hover'>
                            <p>Shop Now</p>
                        </div>
                    </div>
                    <div style={{position:"relative"}} className='section1LeftTopRight'>
                        <img src="https://preview.colorlib.com/theme/shop/img/c2.jpg.webp" alt="" />
                        <div className='hover'>
                            <p>Shop Now</p>
                        </div>
                    </div>
                </div>
                <div style={{position:"relative"}} className='section1LeftBottom'>
                    <img src="https://preview.colorlib.com/theme/shop/img/c3.jpg.webp" alt="" />
                    <div className='hover'>
                        <p>Shop Now</p>
                    </div>
                </div>
            </div>
            <div style={{position:"relative"}} className='section1Right'>
                <img src="https://preview.colorlib.com/theme/shop/img/c4.jpg.webp" alt="" />
                <div className='hover'>
                    <p>Shop Now</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section1
