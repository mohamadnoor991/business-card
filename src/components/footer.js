import React from 'react'
import insta from "../images/insta.png"
import twitter from "../images/twitter.png" 
import face from "../images/face.png" 
import git from "..//images/git.png" 

function Footer(){
    return(
<div className="footer">
<a href="">
<img className="image1" src={insta} />
</a>
<a href="">
<img className="image2" src={twitter}/>
</a>
<a href="">
<img className="image3" src={face}/>
</a>
<a href="">
<img className="image4" src={git}/>
</a>
</div>
    )
}  
export default Footer