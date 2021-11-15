import React from "react"
import Schoolaid from "../images/schoolaidlogo.png"




export default function Navbar() {
    return (
        <div>
            <div>
                <nav>
                    <div id="firstinfo">
                        <img alt="schoolaidlogo"src={Schoolaid} height={30} width={30}/>
                        <p id="schoolaid">SchoolAid</p>
                    </div>
                    <div id="navinfo">
                            <ul>
                            <li ><a href ="http://localhost:3000/about" >ABOUT US</a></li>
                            <li ><a href ="http://localhost:3000/reviews" >REVIEWS</a></li>
                            <li id= "login" ><a href ="http://localhost:3000/login" >LOGIN</a></li>
                            </ul>
                    </div>
                </nav>
            </div>
        </div>
            
    )
}
