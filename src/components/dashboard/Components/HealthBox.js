import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import img from "../../../assets/HealthBox.png";
import backgroundImage from "../../../assets/HealthAtmBackground.png";

const HealthBox = () => {
    return (
        <Box sx={{ display: "flex", flexdirection: "row", width: "80%", margin: "auto", justifyContent: "space-around", height: "80vh", }}>
            <Box sx={{flex:2, backgroundImage: `url(${backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center" }}>
                <img src={img} alt="img" width="360" height="460" />
            </Box>
            <Box sx={{flex:3}}> 
                <Typography fontSize="42px" color="#425162" margin="0px 0px 24px" fontWeight="550">
                    Health Box
                </Typography>
                <Typography fontSize="16px" color="#425162" lineHeight="1.44">
                    Portable briefcase-like health kit that can be easily carried by a doctor or primary healthcare professional for door-to-door health checkup visits.
                </Typography>
                <ul>
                    <li><Typography fontSize="16px" color="#425162" lineHeight="1.44">High-resolution Camera, touch screen & noise-cancelling mic for smooth video consultation with doctors.</Typography></li>
                    <li><Typography fontSize="16px" color="#425162" lineHeight="1.44">18+ parameters checked in less than 5 minutes.</Typography></li>
                    <li><Typography fontSize="16px" color="#425162" lineHeight="1.44">Integrated doctor consultation platform with doctor login and patient management.</Typography></li>
                </ul>
            </Box>
        </Box>
    )
}

export default HealthBox;
