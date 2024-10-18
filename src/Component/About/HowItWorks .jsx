import React from 'react';
import { Box, Typography } from '@mui/material';

const HowItWorks = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 6 }, py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        color="#063799"
        sx={{ textAlign: 'center', mb: 4 }}
      >
        How Does the Site Work? How is it Different from Other Sites?
      </Typography>

      {/* Section explaining how the site works */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'left' }}>
          How It Works
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          sx={{ 
            fontSize: { xs: '14px', sm: '16px', md: '18px' }, // Responsive font size
            lineHeight: { xs: 1.4, sm: 1.6, md: 1.8 }, // Responsive line height
          }}
        >
          When you become a member, you are required to fill out a comprehensive profile that includes information about your religious background, lifestyle, interests, references, description about self, and criteria you are looking for in another person. We then select matchmakers (up to 2) for you based on your location, age, and religious orientation. Matchmakers will then get to know you better through phone calls, emails, and when appropriate contact you for a face-to-face interview. There is <strong>NO BROWSING</strong> of other member profiles. Your matchmaker selects profiles of potential matches and gives you access to those profiles for your review. In turn, your matchmaker will <strong>ONLY</strong> show your profile & picture to potential matches. Members can review certain information that each single filled in their profile. Based on the other person’s profile and input from the matchmaker, a single then “declines” or “accepts” a potential match through the system. All responses are kept in strict confidence, only accessible to matchmakers and respective singles. Each member has 10 days to approve or decline a match and the system will block the same match from being suggested twice. When two members both agree to a match, SawYouAtSinai forwards contact information so the singles can arrange a conversation and then plan a date. Men should contact women within three (3) days of receiving the phone number. If he cannot call the woman, then he should contact the matchmaker to let her know when he will be calling. When appropriate, a member can update her/his status in the system to easily keep the matchmaker apprised of the progress of the relationship (i.e., "spoke on phone", "went on first date", "dating exclusively", "engaged"). In addition, you are encouraged to form a relationship with the matchmaker so he/she can assist you through the dating process (when you desire and require input).
        </Typography>
      </Box>

      {/* Section explaining how the system works */}
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="body1" 
          paragraph 
          sx={{ 
            color: '#063799', 
            fontWeight: 'bold', 
            fontSize: { xs: '14px', sm: '16px', md: '18px' }, // Responsive font size
            lineHeight: { xs: 1.4, sm: 1.6, md: 1.8 }, // Responsive line height
          }}
        >
          Matchmakers are there to continue to screen members, recommend matches, and assist (where requested) during the dating process. It is up to you to decide which matchmakers you want to work with, with whom you want to accept a date and to what extent you would like a matchmaker’s input and feedback during the dating process.
        </Typography>
      </Box>
    </Box>
  );
};

export default HowItWorks;
