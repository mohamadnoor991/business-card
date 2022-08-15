import React from 'react'
import mail from "../images/mail.png"

 function Mail(){
    return(
        <div>
           <a href="mailto:mohamadbader20@yahoo.com">
     <button className="mailbutton">
    
       <img src={mail}/>
     
    <span>Email</span>
    </button>
      </a>
        </div>
    )
}
 export default Mail
