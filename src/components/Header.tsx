import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Header: React.FC = () => {
  const iconButtonStyle = {
    '&:hover': { backgroundColor: 'transparent' },
  };

  return (
    <AppBar 
      position="fixed" 
      color="transparent" 
      elevation={0} 
      sx={{ 
        width: '100%',
        top: 0,
        borderBottom: '1px solid rgba(255,255,255,0.3)',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 1100,
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          About me 
        </Typography>
        <Box>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/vijayashekarc"
            target="_blank"
            rel="noopener noreferrer"
            disableRipple
            sx={iconButtonStyle}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://github.com/vijayashekarc"
            target="_blank"
            rel="noopener noreferrer"
            disableRipple
            sx={iconButtonStyle}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="mailto:vijayashekar@gmail.com"
            disableRipple
            sx={iconButtonStyle}
          >
            <EmailIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 