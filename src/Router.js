import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import App from './App'
import Home from './Home'
import Navbar from './Navbar'
import { UserProvider} from './Usercontext'


const Router = () => {
  return (
        <>   
        <App/>
    <UserProvider>
        <Routes>      
        {/* <Route path='/' element={<App />} />    */}
        <Route path='/Home' element={<Home />} />   
        <Route path='/About' element={<About />} />   
        </Routes>        
        </UserProvider>
        </>
    )
}

export default Router