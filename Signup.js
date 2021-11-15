import React, { useState } from 'react'
import Passwordlock from "../images/passwordlock.png"
import Schoolaid from "../images/schoolaidlogo.png"

export default function Signup(property) {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmpassword] = useState("")
    
    function handleSignup() {
        fetch("http://localhost:1234/api/signup", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email, username, password, confirmPassword })
        })
        .then((response) => response.json()) 
        .then(jsonRes => {
            if(jsonRes.success) {
                property.history.push("/login")
            }
        })
        .catch((error) => console.log(error))   
    }

    return (
        <div id="logincontainer">
            <div  id="signupimg">
                <img alt="passwordlock"src={Passwordlock} height={300} width={400}/>
            </div>
            <div id="logindetails">
                <img alt="schoolaidlogo"src={Schoolaid} height={30} width={30}/>
                <p>Welcome to SchoolAid</p>
                <p id="loginbeheard">Be Heard!Write a review</p>
                <div className="logintext">
                    <p id="loginusername" className="loginpassword">E-mail</p>
                    <input className="logininput" onChange={(e) => setEmail(e.target.value) }/>
                </div>
                <div className="logintext">
                    <p className="loginpassword">Username</p>
                    <input className="logininput" onChange={(e) => setUsername(e.target.value) }/>
                </div>
                <div className="logintext">
                    <p className="loginpassword">Password</p>
                    <input className="logininput" onChange={(e) => setPassword(e.target.value) }/>
                </div>
                <div className="logintext">
                    <p className="loginpassword">Confirm Password</p>
                    <input className="logininput" onChange={(e) => setConfirmpassword(e.target.value) }/>
                </div>
                <button className="button" onClick={handleSignup} >SIGNUP</button>
            </div>
            
        </div>
    )
}
