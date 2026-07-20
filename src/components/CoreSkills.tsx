import React from 'react';
import { Box, Typography, Paper, Chip, Avatar } from '@mui/material';
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

const CoreSkills: React.FC = () => {
  // Mapping skills to their SimpleIcons identifier
  // We leave out the hex code so it uses the original brand colors!
  const getIconUrl = (iconName: string) => {
    if (!iconName) return '';
    if (iconName.startsWith('http')) return iconName;
    return `https://cdn.simpleicons.org/${iconName}`;
  };

  const skills = [
    { 
      category: 'Programming Languages', 
      items: [
        { name: 'Python (Proficient)', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
        { name: 'Java', icon: 'https://icon.icepanel.io/Technology/svg/Java.svg' }, // Falls back to 'J' if not available
        { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
        { name: 'C - Language', icon: 'c' }
      ] 
    },
    { 
      category: 'AI Tools', 
      items: [
        { name: 'Claude Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg' },
        { name: 'Gemini API', icon: 'googlegemini' },
        { name: 'Tensor Flow', icon: 'tensorflow' },
        { name: 'Jupyter Notebook', icon: 'jupyter' }
      ] 
    },
    { 
      category: 'Frontend & Backend', 
      items: [
        { name: 'Django', icon: 'django' },
        { name: 'SpringBoot', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg' },
        { name: 'Flask', icon: 'flask' },
        { name: 'React', icon: 'react' },
        { name: 'Material-UI', icon: 'mui' },
        { name: 'Node.js', icon: 'nodedotjs' },
        { name: 'Express.js', icon: 'express' },
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' }
      ] 
    },
    { 
      category: 'Database', 
      items: [
        { name: 'Postgres', icon: 'postgresql' },
        { name: 'SQL', icon: 'mysql' },
        { name: 'MongoDB', icon: 'mongodb' }
      ] 
    },
    { 
      category: 'Tools & Technologies', 
      items: [
        { name: 'Bitbucket', icon: 'bitbucket' },
        { name: 'Github', icon: 'https://www.svgrepo.com/show/303548/git-icon-logo.svg' },
        { name: 'Ubuntu / Linux', icon: 'ubuntu' },
        { name: 'AWS Cloud Services', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
        { name: 'Google AI Studio', icon: 'google' }
      ] 
    },
    { 
      category: 'Experienced IDE', 
      items: [
        { name: 'Antigravity', icon: 'https://avatars.githubusercontent.com/u/242056456?s=200&v=4' },
        { name: 'Codex', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
        { name: 'Visual Studio Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
        { name: 'IntelliJ IDEA', icon: 'intellijidea' },
        { name: 'Android Studio', icon: 'androidstudio' }
      ] 
    },
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
        }}
      >
        Core Skills
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          '& > *': {
            flex: '1 1 300px',
            minWidth: '300px',
            animation: `${fadeIn} 1s ease-out`,
            animationFillMode: 'both',
          },
        }}
      >
        {skills.map((skillGroup, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: 4,
              animationDelay: `${index * 0.15}s`,
            }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              {skillGroup.category}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              {skillGroup.items.map((skill, skillIndex) => (
                <Chip
                  key={skillIndex}
                  label={skill.name}
                  variant="outlined"
                  avatar={
                    <Avatar 
                      src={getIconUrl(skill.icon)} 
                      alt={skill.name}
                      sx={{ 
                        bgcolor: 'transparent', 
                        '& img': { objectFit: 'contain' } 
                      }}
                    >
                      {skill.name[0]}
                    </Avatar>
                  }
                  sx={{
                    borderColor: '#E5E5E5',
                    bgcolor: '#FFFFFF',
                    color: 'text.primary',
                    fontWeight: 500,
                    transition: 'border-color 0.2s',
                    '&:hover': {
                      borderColor: '#CCCCCC',
                      bgcolor: '#F9F9F9',
                    },
                    '& .MuiChip-avatar': {
                      bgcolor: 'transparent',
                    }
                  }}
                />
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default CoreSkills; 