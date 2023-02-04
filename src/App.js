import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalContext'
import WorkList from './components/WorkList';
import Login from './components/Login';
import WorkListHome from './components/WorkListHome';
import DetailJob from './components/DetailJob';

const App = () => {
 
 
  return (
    <>
    <BrowserRouter>
    <GlobalProvider>

      <Navbar/>

      <Routes>

        <Route path='/' element={<WorkListHome/>} />

        <Route path='/lowongan' element={<WorkList/> }/>
        <Route path='/lowongan/:Id' element={<DetailJob/> }/>
        <Route path='/login' element={<Login/> }/>

      </Routes>

      <Footer/>
    </GlobalProvider>
    </BrowserRouter>
        
    
    </>
  )

  
}

export default App
