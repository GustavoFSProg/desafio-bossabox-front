import React, { useState, useEffect } from 'react'
import './style.css'
import api from '../../services/api'

function UsersList() {
  // const [lista, setLista] = useState({})
  const [resposta, setResposta] = useState([])

  async function handleLIst() {
    let { data } = await api.get('/users/list')
    return setResposta(data)
  }

  useEffect(() => {
    handleLIst()
  }, [])

  return (
    <div className="container">
      <div className="title">
        <h1>Usuarios Cadastrados</h1>
      </div>
      <ul>
        {resposta.map((users) => (
          <li key={users._id}>
            <strong>Nome:</strong>
            <p>{users.name}</p>
            <strong>Email</strong>
            <p>{users.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersList
