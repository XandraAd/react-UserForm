/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import EditUserForm from './EditUserForm';


function Users(props) {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  

  const handleClose = () => setOpen(false);
  const handleOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleUserUpdate = (updatedUser) => {
    props.editSelectedUser(updatedUser.id, updatedUser);
  };

  const handleRemove = (user) => {
    props.deleteUser(user.id);
  };
  

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '13%',
            left: '52%',
            transform: 'translate(-70%, -20%)',
            bgcolor: 'background.paper',
            color: 'black',
            boxShadow: 30,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit User
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 5 }}>
            <EditUserForm user={selectedUser} handleData={handleUserUpdate}/>
          </Typography>
        </Box>
      </Modal>  

      <div>
        <h2>List of Users</h2>
        {props.allUsers.map((user) => (
          <div key={user.id}>
            <div>
              <h3>name: {user.name}</h3>
              <p>email: {user.email}</p>
              <p>gen: {user.gen}</p>
            <div>
              <Button
                  onClick={() => handleOpen(user)}
                  variant="outlined"
                  endIcon={<EditIcon />}
                >
                  Edit
              </Button>
              <Button onClick={() =>props.deleteUser(user.id)} 
              color="secondary" variant="contained" startIcon={<DeleteIcon />}>Delete
              </Button>
            </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default Users;
