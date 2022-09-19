import { Box } from '@material-ui/core';
import React from 'react';
import howWeWork from "../../assets/howWeWork.png";
import howWeWorkBackground from "../../assets/howWeWorkBackground.png";

const HowWeWork = () => {
  return (
      <div>
          <Box>
              <Box sx={{ backgroundColor: "#F0F9FF", p: 2 }}>
                  <Box sx={{ width: "80%", margin: 'auto'}}>
                      <Box sx={{lg:'80%',md:'90%',sm:'90%',xs:'90%'}}>
                          <img src={howWeWork} style={{width:"100%",margin:'auto'}} />
                      </Box>
              </Box>
              </Box>
          </Box>
      
    </div>
  )
}

export default HowWeWork
