import React from 'react'
import Homepage from "../images/homepage.jpg"
import { useHistory } from 'react-router'
import Searchbar from './Searchbar'


     
export default function Landing() {

    let history = useHistory()


    return (
        <div>
            <div id="container">
                <div id="textdiv">
                    <p id="textone">Every Review, Someone’s Experience!</p>
                    <p id="texttwo">FIND SCHOOLS. READ REVIEWS. WRITE REVIEWS</p>
                    <p id="textthree">Looking for a school for your child? Make informed decisions!</p>
                     <Searchbar />
                <div id="speakerdiv">
                    <p id ="beheardtext">Had a feel good or bad experience of a school?Express how you feel!<br/> Be Heard! Create a review. Help others know!</p>
                    <button className="button" onClick= {(()=> {history.push("/signup")})}> GET STARTED</button>
                </div> 
                </div>
                <div id="imgdiv">
                    <img alt="schoolchildren"src={Homepage} height={450} width={425}/>
                </div>
            </div>
        </div>
       
    )
}
