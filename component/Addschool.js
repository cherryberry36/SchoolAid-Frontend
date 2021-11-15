import React from 'react'
import Newschooldetails from './Newschooldetails'

export default function Addschool() {
    return (
        <div id="addschool_container">
             <p id="postreview_welcome">Welcome Username, Add a School. </p>
        <div id="addschool">     
            <div className="addschooldiv">
                <div >
                    <label className="addschool_inputtext">Category: </label>
                    <input className="addschoolinput"></input>
                </div>
                <div>
                    <label  className="addschool_inputtext">Name of School: </label>
                    <input  className="addschoolname"></input>
                </div>
            </div>
            <div className="addschooldiv">
                <div>
                    <label  className="addschool_inputtext">Address: </label>
                    <input  className="addschoolname"></input>
                </div>
                <div>
                    <label  className="addschool_inputtext" >City: </label>
                    <input  className="addschoolinput" id="addschool_city"></input>
                </div>
            </div>
            <div class="addschooldiv">
                <div>
                    <label  className="addschool_inputtext" id="addschool_state">State: </label>
                    <input  className="addschoolinput"></input>
                </div>
                <div>
                    <label  className="addschool_inputtext">Website: </label>
                    <input  className="addschoolname"></input>
                </div>
            </div>           
    </div>   
            <div id="writereview" className="writereview">
                  <input type="text" placeholder="Write a review"></input>
            </div>
            <button className="button" id="addschool_button">SUBMIT</button> 
            <Newschooldetails />
            
        </div>
    )
}
