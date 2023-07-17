import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


const UpdateProfile = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Handle the save action here
    // You can include your profile update logic
    // e.g., make an API call, update state, etc.
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className='edit-btn'
        sx={{
          position: 'absolute',
          right: '20px',
          bottom: '27%',
          backgroundColor: '#6C5DD3',
          color: 'white',
          padding: '10px',
          borderRadius: '15px',
        }}
      >
        <ModeEditOutlineIcon /> Edit Profile
      </Button>

      <div>
        <Dialog open={open} onClose={handleClose}  >
          <DialogTitle>Update Profile</DialogTitle>
          <DialogContent>
           
            {/* Place your form or profile update fields here */}
            {/* This content will appear in the dialog */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave} color="primary">Save</Button>
          </DialogActions>
        </Dialog>
      </div>
<Box>
      <Typography variant='body1' sx={{ color: 'rgba(255,255,255,0.80)', textAlign: 'center' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Tortor, consectetur purus amet, accumsan nulla. Ut urna placerat morbi cursus pulvinar nunc adipiscing.
        Tortor, consectetur purus amet, accumsan nulla. Ut urna placerat morbi cursus pulvinar nunc adipiscing.
      </Typography>
      </Box>
    </>
  );
};

// export default UpdateProfile;
