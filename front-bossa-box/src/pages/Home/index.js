import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import './style.css'
import api from '../../services/api'

function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  async function handleHome(e) {
    e.preventDefault()

    try {
      const data = { name, email, password }

      await api.post('/users', data)
      console.log(data)
      alert(`Cadastro efetuado com sucesso!`)
      history.push('/')
    } catch (error) {
      alert('Erro no cadastro!!')
    }
  }

  function Redirect() {
    history.push('/usersList')
  }

  return (
    <>
      <div className="logon-container">
        <section className="form">
          <img src={logo} alt="logo" />
          <form onSubmit={handleHome}>
            <h1>Faça seu Cadastro </h1>
            <input
              type="name"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
              name="name"
              value={name}
            />

            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
            />

            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              value={password}
            />

            <button className="button" type="submit">
              Cadastrar
            </button>

            <button className="button" type="button" onClick={Redirect}>
              Listar
            </button>
          </form>
        </section>
      </div>
    </>
  )
}

export default Home
