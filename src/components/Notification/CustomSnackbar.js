// CustomSnackbar.js
import React, { useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';

const CustomSnackbar = ({ message, duration, onClose, open }) => {
  useEffect(() => {
    if (open) {
      // Nếu open được set thành true, bạn có thể thực hiện các hành động cần thiết tại đây
      // Ví dụ: gửi request, thay đổi trạng thái, v.v.
    }
  }, [open]);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    onClose && onClose();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={handleSnackbarClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <SnackbarContent
        message={message}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
        style={{
          color: '#fff',
          fontSize: '16px',
          backgroundColor: '#F5AE00',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
        }}
      />
    </Snackbar>
  );
};

export default CustomSnackbar;
