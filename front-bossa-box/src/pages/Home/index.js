import React from 'react'
import logo from '../../assets/logo.jpg'
import style from './style.css'

function Home() {
  return (
    <>
      <div className="logon-container">
        <section className="form">
          <img src={logo} alt="logo" />
          <form>
            <h1>Faça seu Logon </h1>
            <input type="text" placeholder="Sua ID"></input>
            <button className="button" type="submit">
              Entrar
            </button>
          </form>
        </section>
      </div>
    </>
  )
}

export default Home
