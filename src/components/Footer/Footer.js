import { flexbox } from '@material-ui/system'
import React from 'react';
import { Button, Box, Typography } from '@material-ui/core'
import classes from './Footer.module.css'
export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#1C2431" }}>
      <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"80%",margin:"auto",p:5,}}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center",}}>
          <Box>
            <Typography color="#FFFFFF">Logo</Typography>
          </Box>
          <Box>
            <Typography color="#FFFFFF" fontSize="15px" fontWeight="500">Empowering healthcare institutions to</Typography>
            <Typography color="#FFFFFF" fontSize="15px" fontWeight="500">create their own comprehensive</Typography>
            <Typography color="#FFFFFF" fontSize="15px" fontWeight="500">TeleMedicine Network</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
          <Box>
            <Typography color="#FFFFFF" fontSize="20px" fontWeight="500">GET IN TOUCH</Typography>
          </Box>
          <Box>
            <Typography color="#FFFFFF" fontSize="15px" fontWeight="500">TRACELYFE.COM</Typography>
            <Typography color="#FFFFFF" fontSize="15px" fontWeight="500">Privacy Policy</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
          <Box>
            <Typography color="#FFFFFF" fontSize="20px" fontWeight="500">IMPORTANT LINKS</Typography>
          </Box>
          <Box>
            <Typography color="#FFFFFF" fontSize="15px" fontWeight="500">About us</Typography>
            <Typography color="#FFFFFF" fontSize="15px" fontWeight="500">News</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
          <Box>
            <Typography color="#FFFFFF" fontSize="20px" fontWeight="500">Apps</Typography>
          </Box>
          <Box>
            <Typography color="#FFFFFF" fontSize="15px" fontWeight="500">Play Store</Typography>
            <Typography color="#FFFFFF" fontSize="15px" fontWeight="500">Apps Store</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
