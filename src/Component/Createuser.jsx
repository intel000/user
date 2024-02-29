import React, { useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Createuser = () => {
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
     let userpage=useNavigate()
    let getname=(a)=>{
        setName(a.target.value)
    }
    let getsalary=(b)=>{
        setSalary(b.target.value)
    }
    let getcompany=(c)=>{
        setCompany(c.target.value)
    }

    let click=(e)=>{
        e.preventDefault()
        let placeholder={
            empname:name,
            empsalary:salary,
            empcompany:company
        }
        axios.post("http://localhost:4500/employee",placeholder)
        .then(()=>{console.log("sucessfully data stored");})
        .catch(()=>{console.log("errrrrrr");})

        userpage("/user")
    }
  return (
    <div id={style.cblock}>
      <nav>
        <form action="">
            <label htmlFor="">NAME :</label>
            <input type="text" value={name} onChange={getname}/><br />
            <label htmlFor="">SALARY :</label>
            <input type="text" value={salary} onChange={getsalary}/><br />
            <label htmlFor="">COMPANY :</label>
            <input type="text" value={company} onChange={getcompany}/><br />
            <button onClick={click}>SUBMIT</button>
        </form>
      </nav>
    </div>
  )
}

export default Createuser