import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import img from "../../../assets/HealthAtm.png";
import HealthAtmBackground from "../../../assets/HealthAtmBackground.png"

const HealthAtm = () => {
  return (
      <Box sx={{display:"flex",flexdirection:"row",width:"80%",margin:"auto",justifyContent:"space-around",height:"80vh",}}>
          <Box sx={{ flex: 2, textAlign: "center", backgroundImage: `url(${HealthAtmBackground})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center top"}}>
              <img src={img} alt="img" width="360" height="460" />
          </Box>
          <Box sx={{flex:3}}>
              <Typography fontSize="42px" color="#425162" margin="0px 0px 24px" fontWeight="550">
                  Health ATM
              </Typography>
              <Typography fontSize="16px" color="#425162" lineHeight="1.44">
                  Smart health kiosk that can be easily installed at railway stations, clinics, hospitals, corporate offices, schools, anganwadi centres, gram panchayats etc.
              </Typography>
              <ul>
                  <li><Typography fontSize="16px" color="#425162" >Consists of multiple FDA & CE approved diagnostics devices.</Typography></li>
                  <li><Typography fontSize="16px" color="#425162" >High-resolution Camera and Touch screen.</Typography></li>
                  <li><Typography fontSize="16px" color="#425162" >More than 60+ parameters checked in less than 15 minutes.</Typography></li>
                  <li><Typography fontSize="16px" color="#425162" >Integrated Doctor consultation platform with doctor login and patient management.</Typography></li>
              </ul>
          </Box>
    </Box>
  )
}

export default HealthAtm
