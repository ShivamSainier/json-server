import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import img from "../../../assets/HAtm.png";
import HealthAtmBackground from "../../../assets/HealthAtmBackground.png";
import backgroundImage from "../../../assets/HealthAtmBackground.png";


const HealthAtm = () => {
  return (
      <Box sx={{ display: "flex", flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, width: { lg: '80%', md: '80%', sm: '100%', xs: '100%' }, margin: "auto", justifyContent: "space-around", }}>
          <Box sx={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", width: { lg: '40%', md: '40%', sm: '30%', xs: '30%' }, margin: 'auto', }}>
              <img src={img} alt="img" style={{width:"100%"}} />
          </Box>
          <Box sx={{ m: { lg: 10, md: 8, sm: 6, xs: 5, width: { sm: '100%', xs: '100%' } } }}>
              <Typography sx={{ fontSize: { lg: '42px', md: '32px', sm: '26px', xs: '24px' }, textAlign: { sm: 'center', xs: 'center', lg: 'left', md: 'right' } }} color="#425162" margin="0px 0px 24px" fontWeight="550">
                  Health ATM
              </Typography>
              <Typography sx={{ fontSize: { lg: '16px', md: '12px', xs: '12px', sm: '12px' }, lineHeight: { lg: '1.44', md: '1.44', sm: '1.40', xs: '1.10' } }} color="#425162" lineHeight="1.44">
                  Smart health kiosk that can be easily installed at railway stations, clinics, hospitals, corporate offices, schools, anganwadi centres, gram panchayats etc.
              </Typography>
              <ul>
                  <li><Typography sx={{ fontSize: { lg: '16px', md: '12px', xs: '12px', sm: '12px' }, lineHeight: { lg: '1.44', md: '1.44', sm: '1.40', xs: '1.10' } }} color="#425162" >Consists of multiple FDA & CE approved diagnostics devices.</Typography></li>
                  <li><Typography sx={{ fontSize: { lg: '16px', md: '12px', xs: '12px', sm: '12px' }, lineHeight: { lg: '1.44', md: '1.44', sm: '1.40', xs: '1.10' } }} color="#425162" >High-resolution Camera and Touch screen.</Typography></li>
                  <li><Typography sx={{ fontSize: { lg: '16px', md: '12px', xs: '12px', sm: '12px' }, lineHeight: { lg: '1.44', md: '1.44', sm: '1.40', xs: '1.10' } }} color="#425162" >More than 60+ parameters checked in less than 15 minutes.</Typography></li>
                  <li><Typography sx={{ fontSize: { lg: '16px', md: '12px', xs: '12px', sm: '12px' }, lineHeight: { lg: '1.44', md: '1.44', sm: '1.40', xs: '1.10' } }} color="#425162" >Integrated Doctor consultation platform with doctor login and patient management.</Typography></li>
              </ul>
          </Box>
    </Box>
  )
}

export default HealthAtm
