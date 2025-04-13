import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Vijayashekar C
        </Typography>
        <Box>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/vijayashekarc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://github.com/vijayashekarc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://leetcode.com/u/vijayashekarc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="mailto:vijayashekar"
          >
            <EmailIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 