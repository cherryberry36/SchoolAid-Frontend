import React from 'react'
import Pencils from "../images/pencils.jpg"
import Mary from "../images/mary.png"

export default function About() {
    return (
        <div id="aboutcontainer">
             <img id="aboutimage"alt="pencils"src={Pencils} height={200} width={1210}/>
             <p id="aboutschoolaid">About SchoolAid</p>
             <div id="abouttextdiv">
                 <p id="abouttext">At SchoolAid,our goal is to help parents make decisions without stress and hassle when looking for a school for their children.Our real and unique reviews help you to consider or eliminate schools right from the comfort of your homes.</p>
             </div>
             <div id="productdesigner" >
                 <img  id="productdesignerimg"alt="product designer"src={Mary} height={150} width={150}/>
                 <p id="productdesignertext">Funmilayo Williams<br/>Product Designer</p>
             </div>
        </div>
    )
}
