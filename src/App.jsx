/* eslint-disable no-undef */
import { useState } from 'react'
import './App.css'
import Users from './component/Users'
import UsersForm from './component/UsersForm'




function App() {
  const [users, setUsers] = useState([
    {
      name:"Sandra",
      email:"sss@gmail.com",
      gen:24,
      id:"5666fg66666565"
    },
    {
      name:"Bernard",
      email:"fatherb@gmail.com",
      gen:24,
      id:"dfgr6767677gzgz"
    },
    {
      name:"Bernard",
      email:"fatherb@gmail.com",
      gen:24,
      id:"wes456tfrt8uhz"
    }
  ]);

  function handleAddUser(userForm) {
    userForm.id=Math.random().toString()
    setUsers([...users, userForm]);
  }

  function editSelectedUser(id, updatedUser) {
    setUsers(users.map(
      user => (user.id === id ? updatedUser : user)));
  }

  function handleUserUpdate(id, updatedUser) {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          return { ...updatedUser };
        } else {
          return user;
        }
      })
    );
  }

  function handleRemove(id) {
    setUsers(users.filter(
      user =>( user.id !== id)));
  }
  
  

 

  

  return (
    <>
    <div className='main-section'>
    <UsersForm handleData={handleAddUser} />
    
   <Users allUsers={users} editSelectedUser={editSelectedUser} handleUserUpdate={handleUserUpdate} deleteUser={handleRemove}/>
    </div>
  
    </>
  )
}

export default App
