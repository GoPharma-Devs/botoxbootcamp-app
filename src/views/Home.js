import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png'
import Butulinica from '../assets/butulinica.png'
import Allergan from '../assets/allergan.png'
function Home() {
  return (
    <section className="home">
      <div className="contenedor-logo">
        <img className="logo" src={Logo} alt="Botox-BootCamp 2021" />
      </div>
      <Link
      className="btn-flotante"
        to={{ pathname: "/login"}}> ENTRAR</Link>
      <div className="contenedor-patrocinadores">
        <img src={Butulinica} alt="Botox-BootCamp 2021" />
        <img  src={Allergan} alt="Botox-BootCamp 2021" />
      </div>
      <small>⚡️ Powered by Go-Pharma</small>
    </section>
  )
}

export default Home