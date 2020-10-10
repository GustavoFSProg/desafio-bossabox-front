import React, { useState, useEffect } from 'react'
import { FiSend, FiTrash2 } from 'react-icons/fi'
import './style.css'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'

function UsersList() {
  // const history = useHistory()
  const [resposta, setResposta] = useState([])

  async function handleLIst() {
    let { data } = await api.get('/users/list')
    return setResposta(data)
  }

  useEffect(() => {
    handleLIst()
  }, [])

  async function handleDeleteUser(id) {
    try {
      await api.delete(`/users/${id}`)

      // window.reload()
      return alert('Eureka')
    } catch (error) {
      return error
    }
  }

  return (
    <div className="container">
      <div className="title">
        <h1>Usuarios Cadastrados</h1>

        <ul>
          {resposta.map((users) => (
            <li key={users.id}>
              <strong>Nome:</strong>
              <p>{users.name}</p>
              <strong>Email</strong>
              <p>{users.email}</p>

              <button type="button" onClick={() => handleDeleteUser(users.id)}>
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UsersList
