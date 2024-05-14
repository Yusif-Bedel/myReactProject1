import React from 'react'
import Header from '../../layout/admin/Header/Header'
import Footer from '../../layout/admin/Footer/Footer'
import { Outlet } from 'react-router'
const AminRoot = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AminRoot
