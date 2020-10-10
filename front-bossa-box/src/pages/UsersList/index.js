import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'
import api from '../../services/api'

export default function UsersList() {
  const [lista, setLista] = useState('')

  useEffect(() => {
    handleLista()
  }, [])

  async function handleLista() {
    try {
      const { data } = await api.get('/users/list')
      setLista(data)
      console.log(lista)
      return lista
    } catch (error) {
      return error
    }
  }

  return (
    <div className="container">
      <h1>Usuarios Cadastrados</h1>
      <ul>
        {lista.map((users) => (
          <li key={users.id}>
            <strong>User:</strong>
            <p>{lista.name}</p>
            <strong>Descrição</strong>
            <p>{lista.email}</p>
            <strong>Valor:</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}
