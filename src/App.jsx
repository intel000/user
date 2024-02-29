import React from 'react'
import Home from './Component/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Createuser from './Component/Createuser'
import User from './Component/User'
import Edit from './Component/Edit'
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Home></Home>

     <Routes>
      <Route element={<Createuser></Createuser>} path='/'></Route>
      <Route element={<User></User>} path='/user'></Route>
      <Route element={<Edit></Edit>} path='/edit/:emp'></Route>
      
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App