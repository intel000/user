import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section id={style.navbar}>
      <Link to="/"><h1>CREATE-USER</h1></Link>
      <Link to="/user"><h1>USER</h1></Link>
    </section>
  )
}

export default Home