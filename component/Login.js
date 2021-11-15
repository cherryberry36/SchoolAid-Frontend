import React, {useState} from 'react'
import Passwordlock from "../images/passwordlock.png"
import Schoolaid from "../images/schoolaidlogo.png"

export default function Login(props) {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    console.log(username)
    console.log(password)

    function handleLogin() {
        fetch("http://localhost:1234/api/signin", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username, password})
        })
        .then((response) => response.json())
        .then(jsonRes => {
            if(jsonRes.success) {
                props.history.push("/Postreview")
            }
        })
        .catch((error) => console.log(error))
    }
    return (
        <div id="logincontainer">
            <div  id="loginimg">
                <img alt="passwordlock"src={Passwordlock} height={300} width={400}/>
            </div>
            <div id="logindetails">
                <img alt="schoolaidlogo"src={Schoolaid} height={30} width={30}/>
                <p>Welcome to SchoolAid</p>
                <p id="loginbeheard">Be Heard!Write a review</p>
                <div className="logintext">
                <p id="loginusername" className="loginpassword">Username</p>
                <input className="logininput" onChange={(e) => setUsername(e.target.value) }/>
                </div>
                <div className="logintext">
                <p className="loginpassword">Password</p>
                <input className="logininput" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div id="accountsignup">
                <p id="forgotpassword">Forgot Password?</p>
                </div>
                <button className="button" onClick={handleLogin}>LOGIN</button>
                <p id="forgotpassword">New to SchoolAid? <a href="http://localhost:3000/signup">sign-up</a></p>




            </div>
            
        </div>
    )
}
