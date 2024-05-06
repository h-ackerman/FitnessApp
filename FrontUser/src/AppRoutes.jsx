import React from 'react'
import { Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <div>
    <Routes>
      
        <Route exact path="/home" element={<Home/>} />


      </Routes>     
    </div>
  )
}
