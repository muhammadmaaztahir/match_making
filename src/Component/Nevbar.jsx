import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import { AiOutlineMenu } from 'react-icons/ai'; // React icons for the hamburger menu icon
import { RiCarFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#060606' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
          <span>MATCH</span>
          <span style={{ color: '#F63131' }}>MAKER</span>
        </Typography>

        {/* Desktop Menu */}
        <Hidden smDown>
          <Box className= 'items-center' sx={{ display: 'flex', gap: 3 }}>
            <Link color="inherit" to="/">Home</Link>
            <Link color="inherit" to="/about">About Us</Link>
            <Link color="inherit" to="/succes">Success</Link>
            <Link color="inherit" to="/matchmaker">Matchmakers</Link>
            <Link color="inherit" to="events">Events</Link>
            <Button
              sx={{
                backgroundColor: "#F63131",
                color: "black",
                borderRadius: "24px" // Adjust the value as needed for the desired roundness
              }}
              href="#">
              Login
            </Button>
            <Button
              sx={{
                backgroundColor: "#F63131",
                color: "black",
                borderRadius: "24px" // Adjust the value as needed for the desired roundness
              }}>
              Signup
            </Button>

          </Box>
        </Hidden>

        {/* Mobile Hamburger Icon */}
        <Hidden mdUp>
          <IconButton
            size="large"
            aria-label="menu"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <AiOutlineMenu size={30} />
          </IconButton>;

          RiCarFill
        </Hidden>
      </Toolbar>

      <Menu
        anchorEl={mobileMenuAnchor}
        open={Boolean(mobileMenuAnchor)}
        onClose={handleMobileMenuClose}
      >
        <MenuItem onClick={handleMobileMenuClose} component="a" href="#">Home</MenuItem>
        <MenuItem onClick={handleMobileMenuClose} component="a" href="#">About Us</MenuItem>
        <MenuItem onClick={handleMobileMenuClose} component="a" href="#">Success</MenuItem>
        <MenuItem onClick={handleMobileMenuClose} component="a" href="#">Matchmakers</MenuItem>
        <MenuItem onClick={handleMobileMenuClose} component="a" href="#">Events</MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <Button backgroundColor="#F63131" fullWidth>Signup</Button>
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <Button backgroundColor="#F63131" fullWidth>Signup</Button>
        </MenuItem>
      </Menu>
    </AppBar>
  );
}
