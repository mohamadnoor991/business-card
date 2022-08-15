import React from 'react'
import link from "../images/lin.png"
// import ReactDOM from 'react-dom'

 export default function Linked(){
    return(
        <div>
            <a href="https://www.linkedin.com/in/mohamad-badr/">
     <button className="buttonlinked">
       <img src={link}/>
     <span className="linkedtitle">Linked</span>
    </button>
        </a>
        </div>
    )
}
