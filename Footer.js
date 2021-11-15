import React from 'react'
import Instagram from "../images/instagram.png"
import Email from "../images/email.png"
import Phonecall from "../images/phonecall.png"
import Schoolaid from "../images/schoolaidlogo.png"


export default function Footer() {
    return (
        <div> 
            <div id="footercontainer">
                <p>Contact Us</p>
                <div id="footerdivs">
                    <div id="schoolaiddiv">
                        <img className="footerdivsimg" alt="schoolaidlogo"src={Schoolaid} height={30} width={30}/>    
                        <p className="logo">SchoolAid</p>
                        <div className = "vertical" id="vertical_footer"></div>
                    </div>
                    <div id="footerdivcontentcontainer">
                        <div className="footerdivcontent">
                            <img className="footerdivsimg" alt="phonecall"src={Phonecall} height={30} width={30}/>        
                            <p>09096724820</p>
                        </div>
                        <div className="footerdivcontent">
                        <img className="footerdivsimg" alt="instagram"src={Email} height={30} width={30}/>
                            <p>customercare@schoolaid.com</p>
                        </div>
                        <div className="footerdivcontent"> 
                            <img className="footerdivsimg" alt="instagram"src={Instagram} height={30} width={30}/>  
                            <p>@SchoolAid</p>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
