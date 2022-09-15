import { flexbox } from '@material-ui/system'
import React from 'react';
import { Button, Box, Typography } from '@material-ui/core'
import classes from './Footer.module.css';
import Logo from '../main_logo.png';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#1C2431" }}>
      <Box sx={{width:"80%",margin:"auto",p:5,}}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center",}}>
          <Box>
            <img src={Logo} alt="logo" height="44" width="180" />
          </Box>
          <Box>
            <Typography color="#FFFFFF" sx={{ fontSize: { lg: '15px', md: '15px', sm: '8px', xs: '5px' } }} fontWeight="500">Empowering healthcare institutions to create their own comprehensive TeleMedicine Network</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
