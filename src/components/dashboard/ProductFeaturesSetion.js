import React from 'react';
import { Box, Typography } from "@material-ui/core";
import HealthRecord from "../../assets/HealthRecord.png";
import ExpertDoctor from "../../assets/ExpertDoctor.png";
import ProductFeaturesBackground from "../../assets/ProductFeaturesBackground.png";

const ProductFeaturesSetion = () => {
  return (
      <Box sx={{ backgroundImage: `url(${ProductFeaturesBackground})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
          <Typography sx={{textAlign:"center",p:4}} fontSize="44px" color="#425162" fontWeight="600">Product Features</Typography>
          <Box sx={{display:"flex",flexDirection:"row",width:"80%",margin:"auto"}}>
              <Box sx={{m:5,flex:3}}><img src={ExpertDoctor} /></Box>
              <Box sx={{flex:6,width:"50%",margin:"auto"}}>
                  <Typography fontSize="34px" color="#425162" margin="0px 0px 40px">Consult an Expert Doctor</Typography>
                  <ul>
                      <li style={{ lineHeight: "1.44", fontSize: "16px", fontFamily:"Montserrat"}}>Book appointments for video consultation with an expert doctor to discuss your health reports and get medical advice.</li>
                      <li style={{ lineHeight: "1.44", fontSize: "16px", }}>Crisp video calling with integrated smart screen & noise-cancelling mic.</li>
                      <li style={{ lineHeight: "1.44", fontSize: "16px", }}>Share live patient data with doctor via integrated digital devices like stethoscope, ECG, dermascope & otoscope.</li>
                      <li style={{ lineHeight: "1.44", fontSize: "16px", }}>Print digital prescription and start treatment immediately.</li>
                  </ul>
              </Box> 
          </Box>
          <Box>
              <Box sx={{ display: "flex", flexDirection: "row", width: "80%", margin: "auto" }}>
                  <Box sx={{ flex: 6, width: "50%", margin: "auto" }}>
                  <Typography fontSize="34px" color="#425162" margin="0px 0px 40px">Easily Access Health Record
                  </Typography>
                  <ul>
                      <li><Typography fontSize="16px" color="#425162" marginBottom="16px" lineHeight="1.44px">Store each patient’s health profile online based on biometric scanning.</Typography></li>
                      <li><Typography fontSize="16px" color="#425162" marginBottom="16px" lineHeight="1.44px">Patients can access their EHR by using patient mobile app.</Typography></li>
                      <li><Typography fontSize="16px" color="#425162" marginBottom="16px" lineHeight="1.44px">Doctors can manage their appointments with doctor mobile app.</Typography></li>
                      <li><Typography fontSize="16px" color="#425162" marginBottom="16px" lineHeight="1.44px">Clients get access to MIS report and analytics on cloud-based dashboard.</Typography></li>
                      </ul>
                  </Box>
                  <Box sx={{ m: 5, flex: 3 }}>
                  <img src={HealthRecord}></img>
                  </Box>
                  </Box>
          </Box>
    </Box>
  )
}

export default ProductFeaturesSetion
