// import React from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "../components"

const homeLayout = () => {
  return (
    <div>
        <Header />

        <Outlet />
    </div>
  )
}

export default homeLayout