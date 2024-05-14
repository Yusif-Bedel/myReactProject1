import React, { useEffect, useState } from 'react'
import './basket.css'
const basket = () => {
    const [basket,setBasket]=useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [])
    useEffect(()=>{
        localStorage.setItem("basket",JSON.stringify(basket))
    },[basket])
    function deleteItem(id) {
        let basketItem = basket.find((e) => e.id == id);
    
        if (basketItem.count > 1){
          basketItem.count-=1;
          basketItem.totalPrice = basketItem.price * basketItem.count;
          setBasket([...basket]);
        } else {
          setBasket([...basket.filter((e) => e.id != id)]);
        }
      }
    
      const AddToBasket = (id) => {
        let basketItem = basket.find((e) => e.id == id);
    
        basketItem.count++;
        basketItem.totalPrice = basketItem.price * basketItem.count;
        setBasket([...basket]);
      };
  return (
        <table style={{paddingTop:"200px"}}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Add</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {basket.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img width={"60px"} src={item.image} alt="" />
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.count}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteItem(item.id)}>
                  Delete
                </button>
              </td>
              <td>
                <button className="btn btn-primary" onClick={() => AddToBasket(item.id)}>
                  Add
                </button>
              </td>
            </tr>
          ))}
            </tbody>
        </table>
  )
}

export default basket
