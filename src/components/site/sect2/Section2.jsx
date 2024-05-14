import React, { useContext} from 'react'
import Card from '../card/Card'
import MainContext from '../../../context/context'
import './Section2.css'
const Section2 = () => {
  const {menData,setMenData,womenData,setWomenData}=useContext(MainContext)
  return (
    <section className='section2'>
      <div className="s2Color">
        <div className="s2Content">
          <h2>New realeased Products for Men</h2>
          <p>Who are in extremely love with eco friendly system.</p>

          <div className="section2Bottom">
            {
              menData.map((item,index)=>{
              return(<Card key={index} item={item}/>)
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2
