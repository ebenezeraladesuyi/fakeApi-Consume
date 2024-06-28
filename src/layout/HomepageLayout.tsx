// import React from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "../components"
import Footer from "../components/block/Footer"

const HomepageLayout = () => {
  return (
    <div>
        <Header />

        <Outlet />

        <Footer />
    </div>
  )
}

export default HomepageLayout