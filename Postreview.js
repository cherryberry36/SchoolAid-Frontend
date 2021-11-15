import React from 'react'
import { useHistory } from 'react-router'
import Newschooldetails from './Newschooldetails'
import Schooldetails from './Schooldetails'


export default function Postreview() {

    let history =useHistory();
    
    return (
        <div id="postreview_container">
            <p id="postreview_welcome">Welcome Username, Add a review. </p>
            <div id="postreview_input">
                <label id="postreview_category">Category: </label>
                <input className="postreviewinput"></input>
            </div>
            <div>
                <label id="postreview_findschool">Find a School: </label>
                <input className="postreviewinput"></input>
            </div>
            <div id="postreviewdiv_cannotfindschool">
                <label id="postreview_cannotfindschool">Cannot find School? </label>
                <button className="button" onClick= {(()=> {history.push("/addschool")})}>Click to Add</button>
            </div>
           < Schooldetails />
            <div id="writereview">
                  <input type="text" placeholder="Write a review"></input>
            </div>
            <div><button id="postreviewbutton" className="postreviewbtn">Post</button></div>
            < Newschooldetails />
        
        </div>
    )
}
