import { useState } from 'react'
import './App.css'
import Users from './component/users'
import UsersForm from './component/UsersForm'




function App() {
  const [users, setUsers] = useState([
    {
      name:"Sandra",
      email:"sss@gmail.com",
      gen:24
    },
    {
      name:"Bernard",
      email:"fatherb@gmail.com",
      gen:24
    },
    {
      name:"Bernard",
      email:"fatherb@gmail.com",
      gen:24
    }
  ]);

  function handleAddUser( UsersForm) {
    setUsers([...users,  UsersForm]);
  }

  

  return (
    <>
    <div className='main-section'>
    <UsersForm handleData={handleAddUser} />
   <Users allUsers={users}/>
    </div>
  
    </>
  )
}

export default App
