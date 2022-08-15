import React from 'react'
import About from './components/About'
import MyImage from './components/MyImage'
import Name from './components/NameInfo'
import Linked from './components/linkedButton'
import Mail from "./components/mailButton"
import Footer from "./components/footer"
import './App.css';

export default function App(){
    return(
        <div className="main-card">
      <MyImage/>
        <Name/>
        <Linked/>  
        <Mail/>
        <br/>
        <About/>
        <Footer/>
    </div>
    )
}