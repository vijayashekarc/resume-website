import React, { useState } from 'react';
import { Box, Typography, Avatar, Container } from '@mui/material';
import { keyframes } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';

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
          src={process.env.PUBLIC_URL + "/profile.jpg"}
          onError={() => setImgError(true)}
          sx={{
            width: 240,
            height: 260,
            mb: 4,
            border: '4px solid',
            borderColor: 'primary.main',
            boxShadow: '0 4px 20px rgba(55, 34, 216, 0.48)',
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
            background: 'linear-gradient(45deg,rgb(161, 154, 248) 10%,rgb(236, 219, 255) 90%)',
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
          Flutter Developer | Competitive Programmer | Tech Enthusiast | Music Composer & Producer
        </Typography>
      </Box>
    </Container>
  );
};

export default Profile; 