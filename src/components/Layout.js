// Research useContext
// Research GatsbyContext
import React, { useContext } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { GatsbyContext } from "../context/context"

const Layout = ({ children }) => {
  return <>{children}</>
}

export default Layout
