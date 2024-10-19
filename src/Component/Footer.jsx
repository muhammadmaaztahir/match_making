import React from 'react';
import { AppBar, Box, Container, Grid, Typography, TextField, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Footer() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#060606', marginTop: 'auto', padding: '20px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
              <span>MATCH</span>
              <span style={{ color: '#F63131' }}>MAKER</span>
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: '#FFFF', fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }} className="hover:underline">Home</a>
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }} className="hover:underline">About Us</a>
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }} className="hover:underline">Success</a>
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }} className="hover:underline">Matchmakers</a>
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }} className="hover:underline">Events</a>
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: '#FFFF', fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              Email: <a href="mailto:example@gmail.com" style={{ color: 'white', textDecoration: 'none' }} className="hover:underline">example@gmail.com</a>
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              Phone: <a href="tel:+1234567890" style={{ color: 'white', textDecoration: 'none' }} className="hover:underline">+1 234 567 890</a>
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              Address: 123 Matchmaker St, City, Country
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: '#FFFF', fontWeight: 'bold' }}>
              Newsletter
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Your Email"
              sx={{ backgroundColor: 'white', borderRadius: 1, width: '100%', marginBottom: 1 }}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: "#F63131", color: "black", borderRadius: 1 }}
              fullWidth
              endIcon={<ArrowForwardIcon />}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', marginTop: 2 }}>
          <hr />
          <Typography variant="body2" sx={{ color: 'white' }}>
            © {new Date().getFullYear()} MATCHMAKER. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
}
