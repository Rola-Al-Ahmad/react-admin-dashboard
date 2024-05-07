import React, { useEffect, useState } from "react"
import Header from "./header/Header"
import '../App.css'
import Footer from "./footer/Footer"
import { Outlet, useLocation  } from "react-router-dom";

const Layout = () => {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode"))
  }
  const [dark, setMode] = useState(getMode())
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
  }, [dark]);

  const location = useLocation();
  return (
    <>
      <div className={dark ? "app" : "light"}>
        <Header dark={dark} setMode={setMode} />
        <Outlet />
        {
          location.pathname !== '/inbox' && <Footer />
        }
      </div>
    </>
  )
}

export default Layout