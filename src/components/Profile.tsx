import React, { useState } from 'react';
import { Box, Typography, Avatar, Container, Button } from '@mui/material';
import { keyframes } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Profile: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 8,
          animation: `${fadeIn} 1s ease-out`,
        }}
      >
        <Avatar
          src={process.env.PUBLIC_URL + "/Profile.jpg"}
          onError={() => setImgError(true)}
          sx={{
            width: 240,
            height: 260,
            mb: 4,
            border: '4px solid',
            borderColor: 'primary.main',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
            backgroundColor: imgError ? 'primary.main' : 'transparent',
          }}
        >
          {imgError && <PersonIcon sx={{ fontSize: 100 }} />}
        </Avatar>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            background: 'linear-gradient(45deg, #1a73e8 10%, #9c27b0 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Vijayashekar C
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{
            mb: 4,
            textAlign: 'center',
            maxWidth: '600px',
          }}
        >
          Backend Developer - Django |   Python |  AI | Tech Enthusiast |    Competitive Programmer 
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            variant="contained"
            href={process.env.PUBLIC_URL + "/resume/resume.pdf"}
            download="Vijayashekar_C_Resume.pdf"
            startIcon={<DownloadIcon />}
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              borderRadius: '8px',
              width: '200px',
              py: 1.5,
              boxShadow: 'none',
              '&:hover': {
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }
            }}
          >
            Download Resume
          </Button>

          <Button
            variant="outlined"
            href="#contact"
            startIcon={<SendIcon />}
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              borderRadius: '8px',
              width: '200px',
              py: 1.5,
              borderWidth: '2px',
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                borderWidth: '2px',
                borderColor: 'primary.main',
                bgcolor: 'action.hover',
              }
            }}
          >
            Contact me
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile; 