import React,{useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import img from "../../assets/ProductBackground.png";
import HealthAtm from './Components/HealthAtm';
import HealthBox from './Components/HealthBox';
import Slide from '@mui/material/Slide';

const ProductSection = () => {
    const [value, setValue] = useState(0);
    const handleChange = (e,newValue) => {
        setValue(newValue);
    }

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    };


    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

  return (
      <Box sx={{backgroundColor:"#FFFFFF"}}>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 3, p: 10, backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat", backgroundPosition:"center bottom",backgroundSize:"cover"}}>
              <Typography fontSize="44px" fontColor="#425162" fontWeight="600">
                  Our Products
              </Typography>
              
         
          <Tabs value={value} onChange={handleChange} textColor="secondry" sx={{ width: "36%", margin: "auto", textAlign: "center" ,p:5}} indicatorColor={""}>
              <Tab label="Health ATM" {...a11yProps(0)} sx={{ backgroundColor: value == 0 ? "#364263" : "transparent", color: value == 0 ? "white" : "#364263", fontSize: "22px", padding: "8px 30px", margin: "0px 10px", borderRadius: "40px", border:3 }} />
              <Tab label="Health BOX" {...a11yProps(1)} sx={{ backgroundColor: value == 1 ? "#364263" : "transparent", color: value == 1 ? "white" : "#364263", fontSize: "22px", padding: "8px 30px", margin: "0px 10px", borderRadius: "40px",border:3 }}  />
              </Tabs>
            </Box>
          <TabPanel value={value} index={0}>
              <Slide direction="up" timeout={5000}>
                  <HealthAtm />
              </Slide>
             
          </TabPanel>
          <TabPanel value={value} index={1}>
              <HealthBox />
              </TabPanel>
        
    </Box>
  )
}

export default ProductSection