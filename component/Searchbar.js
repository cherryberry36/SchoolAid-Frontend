import React from 'react'
// import Axios from "axios"

export default function Searchbar({data}) {
    // const getSchool =() =>{
    //     Axios.get("http://localhost:1234/api/findSchool")
    //     .then((response) =>{ 
    //         console.log(response)
    //        return(getSchool)
    //     })
    // }

    return (
        <div>
              <input placeholder="Find a School" />  
              <div className ="dataresult">
                 {/* {data.map((value, key) => {
                 return <div> {value.name}</div>})} */}
              </div> 
        </div>
    )
}
