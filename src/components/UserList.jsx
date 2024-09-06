import { useEffect, useState } from "react";
import UserTable from "./UserTable";
import axios from "axios";
function UserList(){
    const db = 'http://localhost:3004'
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [newUsers, setNewUsers] = useState({
        name: '',
        email: '',
    })  
  useEffect(()=> {
      axios.get(`${db}/usuario`)
      .then((response)=>{
        setUsers(response.data)
      })
  }, [])
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setNewUsers({...newUsers, [name]: value})

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(`${db}/usuario`, newUsers)
    .then((response)=>{
        setUsers([...users, response.data])
        setNewUsers([...users, response.data])
        })
    .catch((error)=>  setError(error))
}
  const handleDelete = (userId) => {
    setUsers(users.filter((user)=>user.id !== userId))
    setNewUsers(newUsers.filter((newuser)=>newuser.id !== userId))
  }
  const handleEdit = (edit) => {
    axios.put(`${db}/usuario`, edit)
    .then((response)=>{
        setUsers([...edit, response.data])
        setNewUsers([...users, response.data])
        })
  }
    return(
        <>
        <h1>Registro de Usuarios</h1>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={newUsers.name} name="name" onChange={handleInputChange}/>
            <label>Email:</label>
            <input type="text" value={newUsers.email} name="email" onChange={handleInputChange}></input>
            <button type="Submit">Enviar Formulario</button>
        </form>
        {error && <p>Error: {error}</p>}
        <UserTable users={users} newUsers={newUsers}onDelete={handleDelete} Edit={handleEdit}></UserTable>
        </>
    )
}
export default UserList;