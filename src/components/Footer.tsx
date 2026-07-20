import React from 'react';
import { Box, Typography, IconButton, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code'; // For LeetCode
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {
  const iconStyle = {
    transition: 'color 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'primary.main',
    },
  };

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4, 
        mt: 'auto', 
        borderTop: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton color="inherit" href="https://github.com/vijayashekarc" target="_blank" disableRipple sx={iconStyle}>
            <GitHubIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.linkedin.com/in/vijayashekarc" target="_blank" disableRipple sx={iconStyle}>
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" href="https://leetcode.com/u/vijayashekarc/" target="_blank" disableRipple sx={iconStyle}>
            <CodeIcon />
          </IconButton>
          <IconButton color="inherit" href="mailto:vijayashekar@gmail.com" disableRipple sx={iconStyle}>
            <EmailIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
          A traditional software engineer.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
