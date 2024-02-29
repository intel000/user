import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { Link } from 'react-router-dom'
const User = () => {
    let [result,setResult]=useState([])
    let [reload,setReload]=useState(false)
    useEffect(()=>{
      axios.get("http://localhost:4500/employee")
      .then((response)=>{setResult(response.data)})
      .catch(()=>{console.log("errrrrrrrrrr");})
      setReload(false)
    },[reload])

    let userdelete=(id)=>{
      axios.delete(`http://localhost:4500/employee/${id}`)
      setReload(true)
    }
  return (
    <div id={style.ublock}>
      {
        result.map((element)=>{
            return(
                <article>
                  <h1>ID :{element.id}</h1>
                  <h1>NAME :{element.empname}</h1>
                  <h1>COMPANY :{element.empcompany}</h1>
                  <h1>SALARY :{element.empsalary}</h1>
                  <nav>
                  <Link to={`/edit/${element.id}`}><button>EDIT</button></Link>
                  <button onClick={()=>{userdelete(element.id)}}>DELETE</button>
                  </nav>
                </article>
            )
        })
      }
    </div>
  )
}

export default User