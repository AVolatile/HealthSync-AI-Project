import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/brain.webp';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFFFF">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img 
        src={Logo} 
        alt="logo" 
        style={{ 
          width: '100px', // Set the desired width
          height: 'auto', // Adjust the height proportionally to the width
          borderRadius: '50%', // Make the image circular (optional)
          objectFit: 'cover' // Ensures the image covers the given dimensions without distortion
        }} 
      />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">
      Powered by DevAccelerator 2024
    </Typography>
  </Box>
);

export default Footer;
