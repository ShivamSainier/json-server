import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import img from "../../../assets/HealthBox.png";
import backgroundImage from "../../../assets/HealthAtmBackground.png";
import "@fontsource/montserrat"; 

const HealthBox = () => {
    const windowSize = window;
    const lg = windowSize > 1200;
    const sm = windowSize >= 768;
    const md = windowSize >= 992;
    const xs = windowSize <= 768;
    console.log("lg\n", lg,"\nsm\n",sm,"\nmd\n",md,"\nxs\n",xs);
    return (
        <Box sx={{ display: "flex", flexDirection: {lg:"row",md:"row",sm:"column",xs:"column"}, width: {lg:'80%',md:'80%',sm:'100%',xs:'100%'}, margin: "auto", justifyContent: "space-around", }}>
            <Box sx={{backgroundImage: `url(${backgroundImage})`,backgroundSize:"cover",width:{lg:'20%',md:'20%',sm:'40%',xs:'40%'},margin:'auto',}}>
                <img src={img} alt="img" style={{ width:'100%',height:'auto' }}  />
            </Box>
            <Box sx={{m:{lg:10,md:8,sm:6,xs:5,width:{sm:'100%',xs:'100%'}}}}> 
                <Typography sx={{ fontSize: { lg: '42px', md: '32px', sm: '26px', xs: '24px' }, textAlign: { sm: 'center', xs: 'center' }}}} color="#425162" margin="0px 0px 24px" fontWeight="550">
                    Health Box
                </Typography>
                <Typography sx={{ fontSize: { lg: '16px', md: '12px', xs: '12px', sm: '12px' }, lineHeight: { lg: '1.44', md: '1.44', sm: '1.40', xs: '1.10' } }} color="#425162" fontFamily="montserrat">
                    Portable briefcase-like health kit that can be easily carried by a doctor or primary healthcare professional for door-to-door health checkup visits.
                </Typography>
                <ul>
                    <li style={{ listStyleType: " ." }}><Typography sx={{ fontSize: { lg: '16px', md: '12px', xs: '12px', sm: '12px' }, lineHeight:{ lg: '1.44',md:'1.44',sm:'1.40',xs:'1.10' } }} color="#425162"  fontFamily="montserrat">High-resolution Camera, touch screen & noise-cancelling mic for smooth video consultation with doctors.</Typography></li>
                    <li><Typography sx={{ fontSize: { lg: '16px', md: '12px', xs: '12px', sm: '12px' }, lineHeight: { lg: '1.44', md: '1.44', sm: '1.40', xs: '1.10' } }} color="#425162" >18+ parameters checked in less than 5 minutes.</Typography></li>
                    <li><Typography sx={{ fontSize: { lg: '16px', md: '12px', xs: '12px', sm: '12px' }, lineHeight: { lg: '1.44', md: '1.44', sm: '1.40', xs: '1.10' } }} color="#425162"  fontFamily="montserrat">Integrated doctor consultation platform with doctor login and patient management.</Typography></li>
                </ul>
            </Box>
        </Box>
    )
}

export default HealthBox;
