import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const Edit = () => {
let userid=useParams()

let [name,setName]=useState("")
let [salary,setSalary]=useState("")
let [company,setCompany]=useState("")
let up=useNavigate()
    useEffect(()=>{
       axios.get(`http://localhost:4500/employee/${userid.emp}`)
       .then((res)=>{setName(res.data.empname)
    setSalary(res.data.empsalary)
    setCompany(res.data.empcompany)})
       .catch(()=>{console.log("errrrrrr");})
    },[])

    let updatename=(a)=>{
        
        setName(a.target.value)
    }
    let updatesalary=(a)=>{
        setSalary(a.target.value)
    }
    let updatecompany=(a)=>{
        setCompany(a.target.value)
    }

    let updateform=()=>{
        let payload={
            empname:name,
            empsalary:salary,
            empcompany:company
        }
        axios.put(`http://localhost:4500/employee/${userid.emp}`,payload)
        .then(()=>{console.log("sucessfully updated");})
        .catch(()=>{console.log("errrrrrrrr");})
        up("/user")
    }
    return (
        <div id={style.cblock}>
            <nav>
            <form action="">
                <label htmlFor="">NAME :</label>
                <input type="text" value={name} onChange={updatename}/><br />
                <label htmlFor="">SALARY :</label>
                <input type="text" value={salary} onChange={updatesalary}/><br />
                <label htmlFor="">COMPANY :</label>
                <input type="text" value={company} onChange={updatecompany}/><br />
                <button onClick={updateform}>UPDATE</button>
                
            </form>
            </nav>
        </div>
    )
}

export default Edit