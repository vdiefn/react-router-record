import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import AlbumLayout from './pages/AlbumLayout'
import AlbumIndex from './pages/AlbumIndex'
import AlbumPhoto from './pages/AlbumPhoto'
import AlbumSearch from './pages/AlbumSearch'

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/album' element={<AlbumLayout />}>
            <Route index element={<AlbumIndex />}></Route>
            <Route path=':id' element={<AlbumPhoto />}></Route>
            <Route path='search' element={<AlbumSearch/>}></Route>
          </Route>
        </Routes>
        
      </div>
    </div>
  )
}

export default App
