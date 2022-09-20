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
    const handleChange = (e, newValue) => {
        setValue(newValue);
    };
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
      <Box sx={{backgroundColor:"#FFFFFF"}} id="products">
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: {lg:3,md:3,sm:2,xs:1}, p: {lg:10,md:8,sm:7,xs:5} , backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat", backgroundPosition:"center bottom",backgroundSize:"cover"}}>
              <Typography sx={{ fontSize: { lg: "44px", md: "33px", sm: "33px", xs: "28px" } }} fontColor="#425162" fontWeight="600">
                  Our Products
              </Typography>
              <Tabs value={value} onChange={handleChange} textColor="secondry" sx={{ width: { md: "80%", lg: "80%", sm: "80%", xs: "80%",display:'flex' ,justifyContent:"space-between"},width:{lg:'20%',md:'30%',sm:'35%',xs:'35%'},margin:"auto"}} indicatorColor={""}> 
                  <Tab label="Health BOX" {...a11yProps(0)} sx={{ backgroundColor: value==0?" #36426c":'transparent', color:value==0?"white":"#36426c", fontSize: { lg: "22px", md: "18px", sm: "16px", xs: "8px" }, padding: { lg: "8px 30px", md: "6px 28px", sm: "4px 26px", xs: "1px 10px" }, margin: "0px 10px", borderRadius: "40px", border: 3 }} />
              </Tabs>
            </Box>
          <TabPanel value={value} index={0}>
              <HealthBox />
          </TabPanel>
        
    </Box>
  )
}

export default ProductSection