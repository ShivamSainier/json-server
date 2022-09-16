import React from 'react';
import classes from "../../style/dashboard/HeroSection.module.css";
import heroImage from "../../assets/heroSection.png";
import {Box, Typography} from "@material-ui/core"
import { FaBoxOpen } from 'react-icons/fa';

const HeroSection = () => {
  return (
      <>
          <Box sx={{backgroundColor:"#FFFFFF"}}>
              <Box sx={{ display: "flex", flexDirection: {lg:"row",md:"row",sm:"column-reverse",xs:"column-reverse"}, width:{md:"80%",lg:"80%",sm:"100%",xs:"100%"}, margin: "auto", backgroundColor: "#FFFFFF" ,justifyContent:{md:'space-around',lg:"space-between",sm:"center",xs:"center",},alignItems:{xs:'center',sm:'center'}}}>
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: { lg: 'left', md:'left',sm:'center',xs:"center"}}}>
                      <Typography color="#425162" sx={{ fontSize: { lg: "44px", md: "33px", sm: "22px", xs: "15px" } }} fontWeight="600" fontFamily="sans-serif">
                       Reimagining Digital Healthcare
                  </Typography>
                      <Typography color="#425162" sx={{ fontSize: { lg: "18px", md: "12px", sm: "10px", xs: "9px" },lineHeight:{lg:"1.90",md:"1.70",sm:"1.50",xs:"1.20"} }}>
                          Remote health monitoring solutions to make primary healthcare easily accessible
                  </Typography>
                  <Box sx={{ width: {lg:"296px",sm:"110px",md:"130px",xs:"90px"}, height: {lg:"80px",md:"40px",xs:"30px",sm:"30px"}, backgroundImage: "linear-gradient(262deg, #aed874, #8ec640)", borderRadius: "40px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow:"6px 10px 30px 0 rgb(0 0 0 / 23%)",m:{lg:4,md:3,sm:2,xs:1}}}>
                          <Typography color="white" sx={{ fontSize: { lg: '24px', md: '10px', sm: '12px', xs: "7px" } }} fontWeight="600" fontFamily="Montserrat">Play Video</Typography>
                  </Box>
              </Box>
                  <Box>
                  <Box sx={{textAlign:"Center",width:{lg:"100%",md:"80%",sm:"50%",xs:"50%"},margin:'auto'}}>
                      <img src={heroImage} height="auto" width="100%" />
                      </Box>
                  </Box>
                  
              </Box>
          </Box>
          </>
  )
}

export default HeroSection
