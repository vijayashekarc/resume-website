import React from 'react';
import { Box, Typography, Avatar, Divider, useTheme } from '@mui/material';
import { keyframes } from '@mui/system';

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

const CurrentStack: React.FC = () => {
  const theme = useTheme();
  
  const getIconUrl = (iconName: string) => {
    if (!iconName) return '';
    if (iconName.startsWith('http')) return iconName;
    return `https://cdn.simpleicons.org/${iconName}`;
  };

  const stackGroups = [
    {
      category: 'Programming Language',
      items: [
        { name: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
      ]
    },
    {
      category: 'Cloud',
      items: [
        { name: 'AWS (S3, EC2, Lambda, SES)', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
        { name: 'GCP (Auth, Compute Engine)', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Google_Cloud_icon_%282026%29.svg' }
      ]
    },
    {
      category: 'AI Agent IDE',
      items: [
        { name: 'Antigravity', icon: 'https://avatars.githubusercontent.com/u/242056456?s=200&v=4' },
        { name: 'Codex', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
        { name: 'Cursor', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/cursor-ai-code-icon.png' }
      ]
    },
    {
      category: 'AI Tools',
      items: [
        { name: 'Claude Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Claude-ai-icon.svg' },
        { name: 'ChatGPT', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/OpenAI_logo_2025_%28symbol%29.svg/960px-OpenAI_logo_2025_%28symbol%29.svg.png' },
        { name: 'Gemini', icon: 'https://www.gstatic.com/lamda/images/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg' }
      ]
    },
    {
      category: 'Version Control',
      items: [
        { name: 'Github (Personal)', icon: 'github' },
        { name: 'Bitbucket (At work)', icon: 'bitbucket' }
      ]
    },
    {
      category: 'Default IDE',
      items: [
        { name: 'Visual Studio Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
        { name: 'IntelliJ IDEA (for Java only)', icon: 'https://images.icon-icons.com/3053/PNG/512/intellij_macos_bigsur_icon_190061.png' },
      ]
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{
          animation: `${fadeIn} 1s ease-out`,
          mb: 4,
          fontWeight: 'bold',
          color: 'text.primary'
        }}
      >
        What I use currently ?
      </Typography>
      
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 4,
          '& > *': {
            animation: `${fadeIn} 1s ease-out`,
            animationFillMode: 'both',
          },
        }}
      >
        {stackGroups.map((group, index) => (
          <Box
            key={index}
            sx={{
              animationDelay: `${index * 0.15}s`,
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                {group.category}
              </Typography>
              <Divider sx={{ mt: 1, mb: 2, borderColor: 'divider' }} />
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {group.items.map((skill, skillIndex) => (
                <Box
                  key={skillIndex}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    p: 1.5,
                    pr: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: '4px',
                    bgcolor: 'background.paper',
                    transition: 'all 0.2s',
                    '&:hover': {
                      borderColor: theme.palette.mode === 'light' ? '#CCCCCC' : 'rgba(255, 255, 255, 0.24)',
                      bgcolor: 'action.hover',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <Avatar 
                    src={getIconUrl(skill.icon)} 
                    alt={skill.name}
                    sx={{ 
                      width: 32,
                      height: 32,
                      bgcolor: 'transparent', 
                      '& img': { objectFit: 'contain' } 
                    }}
                  >
                    {skill.name[0]}
                  </Avatar>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary' }}>
                    {skill.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CurrentStack;
