import React from 'react'
import {Route , Routes} from "react-router-dom"
import Homepage from './pages/homepage'
import SignIn from './pages/signin'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<SignIn/>}/>
    </Routes>
  )
}

export default App