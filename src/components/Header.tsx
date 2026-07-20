import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Container, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

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
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.default,
        transition: 'background-color 0.3s ease',
        zIndex: 1100,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'text.primary' }}>
            About me 
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <IconButton
              color="inherit"
              onClick={colorMode.toggleColorMode}
              disableRipple
              sx={{ ...iconButtonStyle, color: 'text.primary', mr: 2 }}
            >
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/vijayashekarc"
              target="_blank"
              rel="noopener noreferrer"
              disableRipple
              sx={{ ...iconButtonStyle, color: 'text.primary' }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://github.com/vijayashekarc"
              target="_blank"
              rel="noopener noreferrer"
              disableRipple
              sx={{ ...iconButtonStyle, color: 'text.primary' }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="mailto:vijayashekarc@gmail.com"
              disableRipple
              sx={{ ...iconButtonStyle, color: 'text.primary' }}
            >
              <EmailIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 