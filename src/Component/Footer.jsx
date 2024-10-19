import React from 'react';
import { AppBar, Box, Container, Grid, Typography, TextField, Button } from '@mui/material';

export default function Footer() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#060606', marginTop: 'auto', padding: '20px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#FFFF', fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              <a href="#" className="text-red-600 hover:underline">Home</a>
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              <a href="#" className="text-red-600 hover:underline">About Us</a>
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              <a href="#" className="text-red-600 hover:underline">Success</a>
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              <a href="#" className="text-red-600 hover:underline">Matchmakers</a>
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              <a href="#" className="text-red-600 hover:underline">Events</a>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#FFFF', fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              Email: <a href="mailto:example@gmail.com" className="text-red-600">example@gmail.com</a>
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              Phone: <a href="tel:+1234567890" className="text-red-600">+1 234 567 890</a>
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              Address: 123 Matchmaker St, City, Country
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#FFFF', fontWeight: 'bold' }}>
              Subscribe to Our Newsletter
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Your Email"
              sx={{ backgroundColor: 'white', borderRadius: 1, width: '100%', marginBottom: 1 }}
            />
            <Button variant="contained" sx={{ backgroundColor: "#F63131", color: "black", borderRadius: 1 }} fullWidth>
              Subscribe
            </Button>
          </Grid>
        </Grid>
        <Box>
           
        </Box>
        <Box sx={{ textAlign: 'center', marginTop: 2 }}>
          <Typography variant="body2" sx={{ color: 'white' }}>
            © {new Date().getFullYear()} MATCHMAKER. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
}
