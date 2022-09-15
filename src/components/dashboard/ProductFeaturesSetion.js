import React from 'react';
import { Box, Typography } from "@material-ui/core";
import HealthRecord from "../../assets/HealthRecord.png";
import ExpertDoctor from "../../assets/ExpertDoctor.png";
import ProductFeaturesBackground from "../../assets/ProductFeaturesBackground.png";

const ProductFeaturesSetion = () => {
  return (
      <Box sx={{ backgroundImage: `url(${ProductFeaturesBackground})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
          <Typography sx={{ textAlign: "center", p: 4, fontSize: { lg: "44px", md: "33px", sm: "33px", xs: "22px" } }} color="#425162" fontWeight="600">Product Features</Typography>
          <Box sx={{ display: "flex", flexDirection: { lg: 'row', md:'row',sm:'column',xs:'column'},width:{lg:'80%',md:'80%',sm:'100%',},margin:"auto"}}>
              <Box sx={{m:5,flex:3,width:{lg:'100%',md:'80%',sm:'60%',xs:'50%'}}}><img src={ExpertDoctor} style={{width:"100%",height:"auto"}} /></Box>
              <Box sx={{flex:6,width:{lg:"50%",md:"50%",sm:'80%',xs:'90%'},margin:"auto"}}>
                  <Typography sx={{ fontSize: { lg: '34px', md: '30px', sm: '30px', xs: '17px', m: { lg: '0px 0px 40px', md: '0px 0px 40px,', sm: '0px 0px 30px',xs:'0px 3px 20px' } } }} color="#425162" margin="">Consult an Expert Doctor</Typography>
                  <ul>
                      <li> <Typography sx={{ lineHeight: "1.44", fontSize: { lg: '16px', md: '15px', sm: '12px', xs: '10px' }, fontFamily: "Montserrat" }}>
                          Book appointments for video consultation with an expert doctor to discuss your health reports and get medical advice.
                      </Typography></li>
                      <li> <Typography sx={{ lineHeight: "1.44", fontSize: { lg: '16px', md: '15px', sm: '12px', xs: '10px' }, fontFamily: "Montserrat" }}>
                          Crisp video calling with integrated smart screen & noise-cancelling mic.
                      </Typography></li>
                      <li> <Typography sx={{ lineHeight: "1.44", fontSize: { lg: '16px', md: '15px', sm: '12px', xs: '10px' }, fontFamily: "Montserrat" }}>
                          Share live patient data with doctor via integrated digital devices like stethoscope, ECG, dermascope & otoscope.
                      </Typography></li>
                      <li> <Typography sx={{ lineHeight: "1.44", fontSize: { lg: '16px', md: '15px', sm: '12px', xs: '10px' }, fontFamily: "Montserrat" }}>
                          Print digital prescription and start treatment immediately.
                      </Typography></li>
                  </ul>
              </Box> 
          </Box>
          <Box>
              <Box sx={{ display: "flex", flexDirection: { lg: 'row', md: 'row', sm: 'column-reverse', xs: 'column-reverse' } ,width:{lg:'80%',md:'80%',sm:'80%',xs:'100%'},margin:'auto'}}>
                  <Box sx={{ flex: 6, width: {lg:'50%',md:'50%',sm:'80%',xs:'90%'}, margin: "auto"}}>
                      <Typography sx={{ fontSize: { lg: '34px', md: '30px', sm: '30px', xs: '17px', m: { lg: '0px 0px 40px', md: '0px 0px 40px,', sm: '0px 0px 30px', xs: '0px 3px 20px' } } }} color="#425162">Easily Access Health Record
                  </Typography>
                  <ul>
                          <li><Typography sx={{fontSize: { lg: '16px', md: '15px', sm: '12px', xs: '10px' }, fontFamily: "Montserrat" }} color="#425162">Store each patient’s health profile online based on biometric scanning.</Typography></li>
                          <li><Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '12px', xs: '10px' }, fontFamily: "Montserrat" }} color="#425162" >Patients can access their EHR by using patient mobile app.</Typography></li>
                          <li><Typography fontSize="16px" color="#425162" sx={{ fontSize: { lg: '16px', md: '15px', sm: '12px', xs: '10px' }, fontFamily: "Montserrat" }}>Doctors can manage their appointments with doctor mobile app.</Typography></li>
                          <li><Typography color="#425162" marginBottom="16px" sx={{ lineHeight: "1.44", fontSize: { lg: '16px', md: '15px', sm: '12px', xs: '10px' }, fontFamily: "Montserrat" }}>Clients get access to MIS report and analytics on cloud-based dashboard.</Typography></li>
                      </ul>
                  </Box>
                  <Box sx={{ m: 5, flex: 3, width: { lg: '100%', md: '80%', sm: '60%', xs: '50%' } }}>
                  <img src={HealthRecord} style={{width:'100%',height:'auto'}}></img>
                  </Box>
                  </Box>
          </Box>
    </Box>
  )
}

export default ProductFeaturesSetion
