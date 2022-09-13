import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Typography } from "@material-ui/core";
import HIC from "../../assets/PartnerImages/HIC.png";
import SmartCity from "../../assets/PartnerImages/SmartCity.png";
import NGO from "../../assets/PartnerImages/NGO.png";
import Panchayat from "../../assets/PartnerImages/Panchayat.png";
import Location from "../../assets/PartnerImages/Location.png";
import background from "../../assets/PartnershipBackground.png";

const PartnershipSection = () => {
  return (
    <Box sx={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", color: "white",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center" }}>
      <Box sx={{ width: "80%", margin: "auto" }}>
        <Box textAlign="center" padding="10px" margin="20px">
          <Typography fontSize="44px" fontWeight="600">Partnerships</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
          <Card sx={{ height: "231px", width: "322px", display: "flex", justifyContent: "center", borderRadius: "8px" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={HIC} alt="Helth insurence Company" />
              <Typography fontSize="17px" >Health Insurance Company
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ height: "231px", width: "322px", display: "flex", justifyContent: "center", borderRadius: "8px" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={Location} alt="Retail Location
" />
              <Typography fontSize="17px" >Health Insurance Company
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ height: "231px", width: "322px", display: "flex", justifyContent: "center", borderRadius: "8px" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={NGO} alt="NGO" />
              <Typography fontSize="17px" >Health Insurance Company
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ height: "231px", width: "322px", display: "flex", justifyContent: "center", borderRadius: "8px" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={HIC} alt="Helth insurence Company" />
              <Typography fontSize="17px" >Health Insurance Company
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ height: "231px", width: "322px", display: "flex", justifyContent: "center", borderRadius: "8px" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={SmartCity} alt="Smart City" />
              <Typography fontSize="17px" >Smart City
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ height: "231px", width: "322px", display: "flex", justifyContent: "center", borderRadius: "8px" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <img src={Panchayat} alt="Grampanchayat" />
              <Typography fontSize="17px" >Health Insurance Company
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}

export default PartnershipSection
