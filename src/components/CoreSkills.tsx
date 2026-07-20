import React from 'react';
import { Box, Typography, Paper, Chip, Avatar, useTheme } from '@mui/material';
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
  const theme = useTheme();
  
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
        { name: 'C - Language', icon: 'https://img.icons8.com/?size=512&id=40670&format=png' }
      ] 
    },
    { 
      category: 'AI Tools', 
      items: [
        { name: 'Claude Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg' },
        { name: 'Gemini API', icon: 'https://www.gstatic.com/lamda/images/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg' },
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
        { name: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' },
        { name: 'Figma', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Figma-Logo.svg' }
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
        { name: 'Postman', icon: 'postman' },
        { name: 'Docker', icon: 'https://www.svgrepo.com/show/331370/docker.svg' },
        { name: 'Ubuntu / Linux', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/UbuntuCoF.svg' },
        { name: 'Git', icon: 'https://www.svgrepo.com/show/303548/git-icon-logo.svg' },
        
      ] 
    },
    { 
      category: 'Other Experiences', 
      items: [
        { name: 'Arduino IDE', icon: 'https://img.icons8.com/?size=512&id=13444&format=png' },
        { name: 'Android Studio', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Android_Studio_Logo_%282023%29.svg/960px-Android_Studio_Logo_%282023%29.svg.png' }
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
          color: 'text.primary'
        }}
      >
        Hands on Core Skills
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
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold', color: 'text.primary' }}>
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
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    color: 'text.primary',
                    fontWeight: 500,
                    transition: 'border-color 0.2s, background-color 0.2s',
                    '&:hover': {
                      borderColor: theme.palette.mode === 'light' ? '#CCCCCC' : 'rgba(255,255,255,0.24)',
                      bgcolor: 'action.hover',
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