import './App.css'
import { Routes, Route } from "react-router-dom";

import Auth from './components/Auth/Auth'
import React from 'react'
import Navbar from './Utility/Navbar'
import YourCart from './Utility/YourCart'
import SingleProduct from './components/Product/Single-Product'
import Product from "../src/components/Product/Product"
import Footer from './Utility/Footer'
function App() {

  return (
   <>


<Routes>
  {/* Home route */}
<Route path="/" element={<Product />} />
{/* view single product  */}
<Route path="/Products/:id" element={<SingleProduct />} />    
{/* view all product with all category */}
<Route path="/Products" element={<Product />} />
{/* Login route  */}
<Route path="/login" element={<Auth />} />
{/* <Route path="/" element={<Home />} /> */}

</ Routes>

   </>
  )
}

export default App
