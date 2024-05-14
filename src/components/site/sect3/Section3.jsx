// import React, { useContext, useEffect, useState } from 'react'
// import "./Section3.css"
// import MainContext from '../../../context/context'
// import Card from '../card/Card'
// import axios from 'axios'
// const Section3 = () => {
//   const [inpValue,setInpValue]=useState("")
//   const [priceVal,setPriceVal]=useState("default")
//   const [search,setSearch]=useState([])
//   const{menData,setMenData,womenData,setWomenData}=useContext(MainContext)
//   useEffect(()=>{
//     axios.get("http://localhost:3000/women").then(res=>{
//       if(inpValue.trim()!=" "){
//         const result=res.data.filter((item)=>{
//           return item.title.split(" ").join("").toLowerCase().includes(inpValue.trim().toLowerCase())
//         })
//         if(priceVal=='lth'){
//           setSearch([...result.sort((a,b)=>a.price-b.price)])
//         }
//         else if(priceVal=='htl'){
//           setSearch([...result.sort((a,b)=>b.price-a.price)])
//         }
        
//         else{
//           setSearch([...result])
//         }
//       }
//       else{
//         let result=res.data
//         if(priceVal=='lth'){
//           setSearch([...result.sort((a,b)=>a.price-b.price)])
//         }
//         else if(priceVal=='htl'){
//           setSearch([...result.sort((a,b)=>b.price-a.price)])
//         }
        
//         else{
//           setSearch([...result])
//         }
//       }
//     })
//   },[inpValue,priceVal])
//   return (
//     <section className='section3'>
//         <h2>New realeased Products for Women</h2>
//         <p>Who are in extremely love with eco friendly system.</p>
//         <input value={inpValue}  type="text" placeholder='Search...' style={{padding:"10px"}} onChange={(e)=>{
//           setInpValue(e.target.value)
//         }}/>
//           <select value={priceVal} name="sorting" id="sorting" onChange={(e)=>{
//             setPriceVal(e.target.value)
//           }}>
//             <option value="default">Deafult</option>
//             <option value="htl">High to Low</option>
//             <option value="lth">Low to High</option>
//           </select>
//         <div className="section3Bottom">

//             {
//               womenData.map((item,index)=>{
//               return(<Card key={index} item={item} />)
//               })
//             }
//           </div>
//     </section>
//   )
// }

// export default Section3
import React, { useContext, useEffect, useState } from 'react';
import "./Section3.css";
import MainContext from '../../../context/context';
import Card from '../card/Card';
import axios from 'axios';

const Section3 = () => {
  const [inpValue, setInpValue] = useState("");
  const [priceVal, setPriceVal] = useState("default");
  const [search, setSearch] = useState([]);
  const { womenData, setWomenData } = useContext(MainContext);

  useEffect(() => {
    axios.get("http://localhost:3000/women").then(res => {
      let result = res.data;

      if (inpValue.trim() !== "") {
        result = result.filter(item =>
          item.title.replace(/\s/g, "").toLowerCase().includes(inpValue.trim().toLowerCase())
        );
      }

      if (priceVal === 'lth') {
        result.sort((a, b) => a.price - b.price);
      } else if (priceVal === 'htl') {
        result.sort((a, b) => b.price - a.price);
      }

      setSearch([...result]);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [inpValue, priceVal]);

  return (
    <section className='section3'>
      <h2>New released Products for Women</h2>
      <p>Who are in extremely love with eco friendly system.</p>
      <input
        value={inpValue}
        type="text"
        placeholder='Search...'
        style={{ padding: "10px" }}
        onChange={(e) => setInpValue(e.target.value)}
      />
      <select
        value={priceVal}
        name="sorting"
        id="sorting"
        onChange={(e) => setPriceVal(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="htl">High to Low</option>
        <option value="lth">Low to High</option>
      </select>
      <div className="section3Bottom">
        {search.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
export default Section3