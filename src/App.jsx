import React from 'react'
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom'
import Home from './Page/Home'
import About from './Page/About'
import Products from './Page/Products'
import Gallery from './Page/Gallery'
import Blog from './Page/Blog'
import Team from './Page/Team'
import Contact from './Page/Contact'
import Navbar1 from './Component/Navbar1'
import Navbar from './Component/Navbar'
import Navbar3 from './Component/Navbar3'
const App = () => {
  return (
    <Router >
      <Navbar1/>
      <Navbar/>
      <Navbar3/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/team' element={<Team/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
  )
}

export default App







