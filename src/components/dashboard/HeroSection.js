import React from 'react';
import classes from "../../style/dashboard/HeroSection.module.css";
import heroImage from "../../assets/heroSection.png";
import {Box, Typography} from "@material-ui/core"
import { FaBoxOpen } from 'react-icons/fa';

const HeroSection = () => {
  return (
      <>
          <Box sx={{backgroundColor:"#FFFFFF"}}>
          <Box style={{ display: "flex", flexDirection: "row", width: "80%", margin: "auto", backgroundColor: "#FFFFFF" ,justifyContent:"space-between"}}>
              <Box style={{display:"flex",flexDirection:"column",gap:4,justifyContent:"center"}}>
                  <Typography color="#425162" fontSize="44px" fontWeight="600"  fontFamily="sans-serif">
                    Reimagining
                  </Typography>
                  <Typography color="#425162" fontSize="44px" fontWeight="600" fontFamily="sans-serif">
                      Digital Healthcare
                  </Typography>
                  <Typography color="#425162" fontSize="18px" lineHeight="1.90">
                          Remote health monitoring solutions  
                  </Typography>
                  <Typography color="#425162" fontSize="18px" lineHeight="1.90">
                     
                      to make primary healthcare easily accessible
                  </Typography>
                  <Box sx={{ width: "296px", height: "80px", backgroundImage: "linear-gradient(262deg, #aed874, #8ec640)", borderRadius: "40px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow:"6px 10px 30px 0 rgb(0 0 0 / 23%)",m:4}}>
                      <Typography color="white" fontSize="24px" fontWeight="600" fontFamily="Montserrat">Play Video</Typography>
                  </Box>
                   
              </Box>
              <Box>
                  <Box>
                      <img src={heroImage} />
                      </Box>
                  </Box>
                  
              </Box>
          </Box>
          </>
  )
}

export default HeroSection
