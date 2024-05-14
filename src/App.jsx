import {   RouterProvider, createBrowserRouter } from "react-router-dom"
import route from '../src/routes/route.jsx'
import "./App.css"
import { useEffect, useState } from "react"
import MainContext from "./context/context.jsx"
import axios from "axios"
  
function App() {
  const router=createBrowserRouter(route)
  const [menData,setMenData]=useState([])
  const [womenData,setWomenData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/men").then(res=>{
        setMenData([...res.data])
    })
  },[])
  useEffect(()=>{
    axios.get("http://localhost:3000/women").then(res=>{
      setWomenData([...res.data])
      console.log(res.data)
    })
  },[])
  const contextData={
    menData,setMenData,womenData,setWomenData
  }
  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router}/>
    </MainContext.Provider>
    
  )
}

export default App
