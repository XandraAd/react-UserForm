/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Users(props) {
  return (
    <div>
        <h2>List of Users</h2>
        {
        props.allUsers.map((user,index)=>(
        <div key={index}>
            <div>
          <p>name:{user.name}</p>
          <p>email:{user.email}</p> 
          <p>gen:{user.gen}</p>
       </div>
       <hr />
        </div>
        ))
       }
       </div>
  )
}
 export default Users