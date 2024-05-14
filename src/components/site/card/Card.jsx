import React, { useEffect, useState } from 'react'
import './Card.css'
import axios from 'axios'
const Card = ({item}) => {
  
  const [basket,setBasket]=useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [])
  useEffect(()=>{
    localStorage.setItem("basket",JSON.stringify(basket))
  },[basket])
  function AddToBasket(id) {
    let basketItem=basket.find((e)=>e.id==id)
    if(basketItem){
      basketItem.count += 1
      basketItem.totalPrice = parseFloat(basketItem.totalPrice) + parseFloat(basketItem.price);
      setBasket([...basket])
    }else{
      const newBasketItem={
        ...item,
          count:1,
          totalPrice:item.price,
        }
        setBasket([...basket,newBasketItem])
    }
  }
  
  return (

    <div className='card'>
      <img src={item.image} alt=""/>
      <h4>{item.title}</h4>
      <span>{item.price}$</span>
      <div className='hoveredCard'>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-layer-group"></i>
        <i onClick={()=>{
          AddToBasket(item.id)
        }} class="fa-solid fa-cart-shopping"></i>
        <i class="fa-solid fa-expand"></i>
      </div>
    </div>
  )
}

export default Card
