import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
        <div className="navHead">
            <div className='navHeadLeft'>
                <a href="#">+12312-3-1209</a>
                <a href="#"> SUPPORT@COLORLIB.COM</a>
            </div>
            <div className='navHeadRight'>
                <a href="#">LOGIN</a>
            </div>
        </div>
        <div className="navFoot">
           <div className='navFootLeft'>
                <Link to={"/"}><img src="https://preview.colorlib.com/theme/shop/img/logo.png" alt="" /></Link>  
           </div>
           <div className='navFootRight'>
                <ul>
                    <li><Link to={"/"}>HOME</Link></li>
                    <li><a href="#">CATEGORY</a></li>
                    <li><a href="#">MEN</a></li>
                    <li><a href="#">WOMEN</a></li>
                    <li><a href="#">LATEST</a></li>
                    <li><Link to={"/basket"}>BASKET</Link></li>
                </ul> 
           </div>
        </div>
    </nav>
  )
}

export default Header
