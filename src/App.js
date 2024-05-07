import React from "react"
import './App.css'
import Layout from './components/layout';
import Home from './components/home/Home';
import Users from './components/Users';
import Orders from './components/Orders';
import Inbox from './components/chatBody/chatBody';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="user" element={<Users />} />
            <Route path="order" element={<Orders />} />
            <Route path="inbox" element={<Inbox />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App