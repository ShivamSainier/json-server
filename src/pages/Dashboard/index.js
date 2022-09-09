import React, { useState,useEffect, useRef } from 'react';
import { Button, Container, Typography, Card, CardMedia, CardContent, CardActions, Grid } from '@material-ui/core';
// import classes from "../../style/dashboard/dashboard.module.scss";
import classes from "./Dashboard.module.css";
import { connect } from "react-redux";
import { dashboard } from "../../redux/actions";
import img from "./img.png";
import vector from "./Vector.png";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosPerson } from "react-icons/io";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { motion } from "framer-motion";
import exercise1 from "./ExercisesImages/exercise1.png";
import exercise2 from "./ExercisesImages/exercise2.png";
import exercise3 from "./ExercisesImages/exercise3.png";
import exercise4 from "./ExercisesImages/exercise4.png";
import exercise5 from "./ExercisesImages/exercise5.png";
import exercise6 from "./ExercisesImages/exercise6.png";
import exercise7 from "./ExercisesImages/exercise7.png";
import exercise8 from "./ExercisesImages/exercise8.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const exercises_images = [exercise1,exercise2,exercise3,exercise4,exercise5,exercise6,exercise7,exercise8,
]

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const Menu = (list) => list.map(el => {
  console.log("list", list);
  return (
    <div>{el.name}</div>
  );
});
const Arrows = () => (
  <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center"
    }}
  >
    Some other content
    <div style={{ marginLeft: "10px", display: "flex" }}>
      <LeftArrow /> <RightArrow />
    </div>
  </div>
);




function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Box onClick={() => scrollPrev()} sx={{ "&:hover": {
        backgroundColor: "#F57059",
        color:"white"
      }, display: "flex", alignItems: "center", justifyContent: "center", m: 2, color: "#F57059", fontWeight: "bolder",  }}>
      <FaAngleLeft fontSize="40px" />
    </Box>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Box onClick={() => scrollNext()} sx={{
      "&:hover": {
        backgroundColor: "#F57059",
        color:"white"
      },display: "flex", alignItems: "center", justifyContent: "center",m:2,color:"#F57059",fontWeight:"bolder" }}>
      <FaAngleRight fontSize="40px" />
    </Box>
  );
};


function Card__({img}) {
  return (
    <Card sx={{ height:"350px",margin:3 ,textAlign:"center"}}>
    <Box sx={{ height: '300px', }}>
      <Box sx={{margin:2,backgroundColor:"white",}}>
        <img src={img} alt="exercise image" />
      </Box>
      <Box sx={{backgroundColor:"white",textTransform:"uppercase",fontWeight:"bolder"}}>
      image
        
      </Box>
      </Box>
      </Card>
  );
}

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));




function Dashboard({ fetchUserData, getAllCardData, get_page_data, pageData, cardData, userData, fetchExercisesData, exerciseData }) {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);



  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
      ({ getItemById, scrollToItem }) => {
        const itemSelected = isItemSelected(id);

        setSelected((currentSelected) =>
          itemSelected
            ? currentSelected.filter((el) => el !== id)
            : currentSelected.concat(id)
        );
      };


  const Sectionref = useRef(null)
  useEffect(() => {
    fetchUserData();
    getAllCardData();
    fetchExercisesData();
    get_page_data();
  }, []);
  const goToSection = () => window.scrollTo({ top: Sectionref.current.offsetTop, behavior: "smooth" })
  return (
    <div>
      <div>
        <section>
          <Box style={{backgrundColor:"#F5F5F7",height:{md:"100vh",sm:"90vh"},width:{md:"80%",lg:"80%",sm:"100%",xs:"100%"},marign:"auto",marginTop:"5%"}}>
            <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",width:"80%",margin:"auto"}}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3, }}>
                  <Box sx={{width:{md:"500px"}}}>
                    <Typography color="#0A0A0A" sx={{fontSize:{md:"20px",lg:"20px",sm:"10px",xs:"10px"}}}>The Future of Rehabilitation</Typography>
                  </Box>
                  <Box>
                  <Box sx={{ width:'100%'}}>
                  <Typography color="#0A0A0A" fontWeight="900" sx={{fontSize:{md:"56px",lg:"56px",sm:"36px",xs:"36px"}}}>The Path to
                      <Box sx={{ display:{md:"block",sm:'inline',sm:"inline"}, color: "#F57059" }}>Recovery Starts </Box>
                      <Box sx={{display:"block",color:"#F57059"}}> Right Here!</Box>
                     </Typography>
                    </Box>
                  </Box>
                  <Box sx={{width:{md:"500px"}}}>
                  <Typography color="#757095" lineHeight="140%" sx={{ fontSize: { md: "20px", lg: "20px", sm: "10px", xs: "10px" } }}>
                      TraceLyfe comes with effective and objective rehabilitation programes tailored to needs of our valued customers.
                    </Typography>
                  </Box>
                  <Box>
                  <Button sx={{ fontSize: {md:"14px",lg:"14px",sm:"14px",lg:"14px",xs:"7px"},backgroundColor:"#1B1C31",color:"#fff",height:{lg:"62px",md:"62px",sm:"46px",xs:"36px"},width:{lg:"181px",md:"181px",sm:"180px",xs:"150px"}}}>Get Started</Button>
                  </Box>
                
              </Box>
              <Box sx={{ display: { md: "none", lg: "block", sm: "none", xs: "none" } }}>
                <Box>
                  <div className="justify-content-center">
                    <img src={img} alt="img" /> 
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
        </section>
        <section>
          <Box sx={{ backgroundColor:"#EEEEF4"}}>
            <Box sx={{ display: "flex", flexDirection:{md:"row",lg:"row",sm:"row",xs:"row"}, justifyContent: {md:"space-between",lg:"space-between",sm:"space-around",xs:"sapce-around"}, alignItems: "center", width: { lg: "80%", md: "80%",xs:"80%",sm:"80%" },gap:{xs:0}, margin: "auto" ,height:{md:"161px",lg:"161px",sm:"180px",xs:"280px"}}} margin="auto">
              <Typography sx={{ flexGrow: { md: 2, lg: 2, sm: 1, xs: "1" }, alignItems: "center", fontSize: { lg: "32px", md: "32px", sm: "20px", xs: "10px" }, fontWeight: "550", textShadow: "0px 1px 0px #454545" }}>Some of our great stats</Typography>
              <Box sx={{flexGrow: 1 }} >
                <Box sx={{ display: "flex", textShadow:"0px 1px 0px #454545" ,flexDirection: { md: "row", lg: "row", sm: "row", xs: "column" }, justifyContent: "space-between", gap: { md: 0, lg: 0, xs: 3, sm: 2 } }} textAlign="center" textTransform="upperCase" >
                <Box>
                    <Typography sx={{fontSize:{md:'48px',lg:"48px",sm:"16px",xs:"13px"},fontWeight:"800"}}>64K</Typography>
                    <Typography sx={{ fontSize: { md: '20px', lg: "20px", sm: "20px", xs: "10px" } }}>Checkups</Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontSize: { md: '48px', lg: "48px", sm: "16px", xs: "13px" }, fontWeight: "800" }}>4K</Typography>
                    <Typography sx={{ fontSize: { md: '20px', lg: "20px", sm: "16px", xs: "10px" } }}>Health Employees</Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontSize: { md: '48px', lg: "48px", sm: "16px", xs: "13px" }, fontWeight: "800" }}>120K</Typography>
                    <Typography sx={{ fontSize: { md: '20px', lg: "20px", sm: "16px", xs: "10px" } }}>Data Analyzed</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          </Box>
        </section>
        <section>
          <Box sx={{backgroundColor:"#fff",height:{sm:"100vh",lg:"100vh",md:"100vh",xs:"80vh"},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}}>
            <Grid container spacing={2} width="80%" margin="auto">
              <Grid item xs={12} sm={10} md={6}>
                <Box>
                  <p className={classes.Lorem_Ipsum}>
                    Lorem Ipsum
                  </p>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "800",
                    fontSize: {lg:"40px",md:"40px",sm:"20px",xs:"20px"},
                    lineHeight: "48px",
                    letterSpacing: "-0.03em",
                    color: "#0A0A0A",
                    marginBottom: "10px"
                  }}>
                    What you get
                  </Typography>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: { lg: "20px", md: "20px", sm: "10px", xs: "10px" },
                    lineHeight: "140%",
                    letterSpacing: "-0.02em",
                    color: "#64607D",
                    
                  }}>
                    We want to save your time from constant worry of future health problems by tracking body vitals regularly to check for any abnormalities.
                  </Typography>
                  <Box sx={{textAlign:{sm:"left",xs:"center"}}}>
                    <Button variant="contained" sx={{
                      backgroundColor: "#F57059", color: "white", width: "205px", height: {md:"47px",lg:"47px",sm:"23px",xs:"23px"}, fontFamily: 'Poppins',
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: {lg:"13px",md:"13px",sm:"7px",xs:"7px"},
                      lineHeight: "30px",
                      marginTop: {lg:"50px",md:"50px",xs:"30px",sm:"30px"}
                    }}>Join Partner Program</Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} >
                <Grid container spacing={2} sx={{marginTop:{xs:'30px'}}} >
                  <Grid item sm={6} md={6} xs={6}>
                    <div>
                      <Typography sx={{ fontSize: { md: "20px", lg: "20px", sm: "10px", xs: "15px", }, fontWeight: { md: "800", sm: "800", xs: "800" } }}>Instant Doctor Access</Typography>
                      <Typography sx={{ color: "#64607D", lineHeight: {lg:"30px",md:"30px",sm:"15px",xs:"15px"},fontWeight:"500",fontSize:{lg:"16px",md:"16px",sm:"10px ",xs:"10px"}}}>Regular medical checkups to keep track of body vitals. It helps with preventative healthcare and early detaction of furture health issues.</Typography>
                    </div>
                  </Grid>
                  <Grid item sm={6} md={6} xs={6}>
                    <div>
                      <Typography sx={{ fontSize: { md: "20px", lg: "20px", sm: "10px", xs: "15px", }, fontWeight: { md: "800", sm: "800", xs: "800" } }}>Exercise on the Go</Typography>
                      <Typography sx={{ color: "#64607D", lineHeight: { lg: "30px", md: "30px", sm: "15px", xs: "15px" }, fontWeight: "500", fontSize: { lg: "16px", md: "16px", sm: "10px ", xs: "10px" } }}> Motivating employees to keep within their health goals while monitoring their physical activity and sleep quality.</Typography>
                    </div>
                  </Grid>
                  <Grid item sm={6} md={6} xs={6}>
                    <div>
                      <Typography sx={{ fontSize: { md: "20px", lg: "20px", sm: "15px", xs: "15px", } ,fontWeight: { md: "800", sm: "800", xs: "800" } }}>Dedicated Physiotherapist</Typography>
                      <Typography sx={{ color: "#64607D", lineHeight: { lg: "30px", md: "30px", sm: "15px", xs: "15px" }, fontWeight: "500", fontSize: { lg: "16px", md: "16px", sm: "10px ", xs: "10px" } }}>TraceLyfe let’s you manage all the health data all at once. Our central health data app is just a tap away with all the insights and detailed data.</Typography>
                    </div>
                  </Grid>
                  <Grid item sm={6} md={6} xs={6}>
                    <div>
                      <Typography sx={{ fontSize: { md: "20px", lg: "20px", sm: "15px", xs: "15px", }, fontWeight: { md: "800", sm: "800", xs: "800" } }}>Personalized Packages</Typography>
                      <Typography sx={{ color: "#64607D", lineHeight: {lg:"30px",md:"30px",sm:"15px",xs:"15px"},fontWeight:"500",fontSize:{lg:"16px",md:"16px",sm:"10px ",xs:"10px"}}}>Tracelyfe analyses the data to predict and identify trends and patterns, get actionable insights and control the spread of diseases.</Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </section>
        <section className={classes.exercisesSection}>
          <div className={classes.exercises}>
            <Grid container>
              <Grid item sm={5} md={6} xs={12}>
                <div style={{ marginTop: "10%" }}>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "600",

                    fontSize: {sm:"30px",xs:"30px",md:"60px",lg:"60px"},
                    color:"#222222",
                    lineHeight: {md:"1.10",lg:"1.15",sm:"2.0",xs:"2.0"},
                    textTransform: "uppercase",
                    textShadow: "1px 0px 3px #FF0000",
                    letterSpacing: "0.05em", color: "#0A0A0A"
                  }}>Why Choose
                    <span style={{ display: "block", color: "#F57059", textShadow: "1px 0px 3px #222222", }}>TraceLyfe</span>
                  </Typography>
                </div>
                <Box sx={{ width:{md:"490px",lg:"490px",sm:"400px",xs:"200px"}, padding: "15px", }}>
                  <Typography style={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: {md:"20px",lg:"20px",sm:"20px",xs:"10px"},
                    lineHeight: "140%",
                    letterSpacing: "-0.02em",
                    color: "#444444", 
                   width:{md:"100%",lg:"100%",xs:'390px'},
                    textAlign:"left",
                    paddingTop: "10px"
                  }}>TraceLyfe uses Artificial Intelligence driven real-time pose detection technique to help you get that tricky exercise right. </Typography>
                </Box>
                <Box sx={{color:"#0A0A0A",display:'flex',flexDirection:{md:"row",lg:"row",sm:"column",xs:"column"},gap:2}}>
                  <Typography variant="h4" fontWeight="bold">Quick Recovery</Typography>
                  <Typography variant="h4" fontWeight="bold">Improve Specialized Facilities</Typography>
                </Box>
              </Grid>
            </Grid>
          </div>
          
        </section>
        <section>
          <Box sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",marginTop:{md:"-4%",sm:"-5%",xs:"-10%",lg:"-4%"},gap:{md:0,lg:0,sm:0,xs:2}}}>
            
            <div>
                <motion.div variants={item}>
              <Card sx={{ width: { md: "281px", lg: "281px", sm: "281px", xs: "140px" }, height: { md: "274px", lg: "274px", sm: "274px", xs: "137px" }, background: "#F5F5F7", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <CardContent>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: {md:"18px",lg:"18px",sm:"18px",xs:"10px"},
                    lineHeight: "36px",
                    textAlign: "center"
                  }}>
                    Back Pain Relief
                  </Typography>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: {md:"13px",lg:"13px",sm:"13px",xs:"8px"},
                    letterSpacing: "-0.02em",
                    color: "#6B6B6B",

                  }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Box sx={{ border: "1px solid #F57059", color: "#F57059", padding: { md: "10px 20px",lg:"10px 20px",sm:"10px 20px",xs:"5px 10px"},fontSize:{md:"16px",lg:"16px",sm:"16px",xs:"8px"} }}>
                    Read More
                  </Box>
                </CardActions>
              </Card>
                </motion.div>
            </div>
            <div>
              <Card sx={{ width: { md: "281px", lg: "281px", sm: "281px", xs: "140px" }, height: { md: "274px", lg: "274px", sm: "274px", xs: "137px" }, background: "#F5F5F7", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <CardContent>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: { md: "18px", lg: "18px", sm: "18px", xs: "10px" },
                    lineHeight: "36px",
                    textAlign: "center"
                  }}>
                    Back Pain Relief
                  </Typography>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: { md: "13px", lg: "13px", sm: "13px", xs: "8px" },
                    letterSpacing: "-0.02em",
                    color: "#6B6B6B",
                  }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Box sx={{ border: "1px solid #F57059", color: "#F57059", padding: { md: "10px 20px",lg:"10px 20px",sm:"10px 20px",xs:"5px 10px"},fontSize:{md:"16px",lg:"16px",sm:"16px",xs:"8px"} }}>
                    Read More
                  </Box>
                </CardActions>
              </Card>
            </div>
            <div>
              <Card sx={{ width: { md: "281px", lg: "281px", sm: "281px", xs: "140px" }, height: { md: "274px", lg: "274px", sm: "274px", xs: "137px" }, background: "#F5F5F7", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <CardContent>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: { md: "18px", lg: "18px", sm: "18px", xs: "10px" },
                    lineHeight: "36px",
                    textAlign: "center"
                  }}>
                    Joint Pain Relief
                  </Typography>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: { md: "13px", lg: "13px", sm: "13px", xs: "8px" },
                    letterSpacing: "-0.02em",
                    color: "#6B6B6B",
                  }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Box sx={{ border: "1px solid #F57059", color: "#F57059", padding: { md: "10px 20px",lg:"10px 20px",sm:"10px 20px",xs:"5px 10px"},fontSize:{md:"16px",lg:"16px",sm:"16px",xs:"8px"} }}>
                    Read More
                  </Box>
                </CardActions>
              </Card>
            </div>
            <div>
              <Card sx={{ width: {md:"281px",lg:"281px",sm:"281px",xs:"140px"}, height: {md:"274px",lg:"274px",sm:"274px",xs:"137px"}, background: "#F5F5F7", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <CardContent>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: { md: "18px", lg: "18px", sm: "18px", xs: "10px" },
                    lineHeight: "36px",
                    textAlign: "center"
                  }}>
                    Knee Correction
                  </Typography>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: { md: "13px", lg: "13px", sm: "13px", xs: "8px" },
                    letterSpacing: "-0.02em",
                    color: "#6B6B6B",
                  }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Box sx={{ border: "1px solid #F57059", color: "#F57059", padding: { md: "10px 20px",lg:"10px 20px",sm:"10px 20px",xs:"5px 10px"},fontSize:{md:"16px",lg:"16px",sm:"16px",xs:"8px"} }}>
                    Read More
                  </Box>
                </CardActions>
              </Card>
              
            </div>
            
          </Box>
          </section>
       
            
    
        <section className={classes.exercisesSection_1}>
          <div className={classes.sampleExercises}>
            <Divider><Box sx={{fontSize:{md:'40px',lg:"40px",sm:"40px",xs:"25px"},fontWeight:"bolder"}}>Sample Exercises</Box></Divider>
          </div>
          

          <Box sx={{width:"90%",margin:"auto"}}>
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} transitionBehavior="smooth" Foote="false" >
              {exercises_images.map(img=><Card__ img={img} />)}
            </ScrollMenu>
            { /* <img src={`${allImg}`} alt="exercises image"></img> */ } 
          </Box>
        </section>
        
        <section className={classes.refrences}>
          <div id="refrence_clients">
            <Box sx={{fontSize:{md:'40px',lg:"40px",sm:"40px",xs:"25px"},fontWeight:"bolder",textAlign:"center",my:"20px"}}>Reference Clients</Box>
          </div>
          <div>
            <Box sx={{ display: 'flex', width:{md:"80%",lg:"80%",sm:"80%"},margin:"auto",flexDirection: { md: 'row', lg: 'row', sm: 'row', xs: 'row' }, justifyContent: { md: 'sapce-around', lg: 'center', sm: 'center', xs: 'center' }, alignItems: 'center',gap:1,flexWrap:'wrap', overflowX: "auto"}}>
            <div>
               
              <Card sx={{ width: {md:'200px',lg:'287px',sm:'200px',xs:'143px'}, height: {lg:"545px",md:"420px",sm:"420px",xs:'270px'}, backgroundColor: "#F5F5F7" }}>
               <CardMedia
                 component="img"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  sx={{height: {md:'220px',lg:'287px',sm:'220px',xs:'143px'}}}

                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="p" sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: {md:"16px",lg:'16px',sm:'16px',xs:'11px'},
                    color: "#444444"
                  }} >
                    General Doctor
                  </Typography>
                  <Typography gutterBottom variant="p" component="p" sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "500",
                      fontSize: { md: "15px", lg: '25px', sm: '15px', xs: '10px' },
                    lineHeight: { md: "26px", lg: '36px', sm: '26px', xs: '8px' },
                    color: "#222222"
                  }} >
                    Case Study Heading
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: { md: "13px", lg: '13px', sm: '13px', xs: '8px' },
                    lineHeight: { md: "130%", lg: '140%', sm: '130%', xs: '110%' },
                    letterSpacing: "-0.02em",
                    color: "#444444"
                  }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize:{ md: "10px", lg: '15px', sm: '10px', xs: '8px' },
                    letterSpacing: "-0.02em",
                    color: "#F15D4A"
                  }}>Read full case study</Typography>
                </CardActions>
              </Card>
            </div>
            <div>
              <Card sx={{ width: {md:'200px',lg:'287px',sm:'200px',xs:'143px'}, height: {lg:"545px",md:"420px",sm:"420px",xs:'270px'}, backgroundColor: "#F5F5F7" }}>
                <CardMedia
                  component="img"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  sx={{height: {md:'220px',lg:'287px',sm:'220px',xs:'143px'}}}

                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="p" sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: {md:"16px",lg:'16px',sm:'16px',xs:'11px'},
                    color: "#444444"
                  }} >
                    General Doctor
                  </Typography>
                  <Typography gutterBottom variant="p" component="p" sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "500",
                      fontSize: { md: "15px", lg: '25px', sm: '15px', xs: '10px' },
                    lineHeight: { md: "26px", lg: '36px', sm: '26px', xs: '8px' },
                    color: "#222222"
                  }} >
                    Case Study Heading
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: { md: "13px", lg: '13px', sm: '13px', xs: '8px' },
                    lineHeight: { md: "120%", lg: '140%', sm: '120%', xs: '120%' },
                    letterSpacing: "-0.02em",
                    color: "#444444"
                  }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize:{ md: "10px", lg: '15px', sm: '10px', xs: '8px' },
                    letterSpacing: "-0.02em",
                    color: "#F15D4A"
                  }}>Read full case study</Typography>
                </CardActions>
              </Card>
            </div>
            <div >
                <Card sx={{width: { md: '200px', lg: '287px', sm: '200px', xs: '143px' }, height: { lg: "545px", md: "420px", sm: "420px", xs: '270px' }, backgroundColor: "#F5F5F7" }}>
                 <CardMedia
                  component="img"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  sx={{height: {md:'220px',lg:'287px',sm:'220px',xs:'143px'}}}

                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="p" sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: {md:"16px",lg:'16px',sm:'16px',xs:'11px'},
                    color: "#444444"
                  }} >
                    General Doctor
                  </Typography>
                  <Typography gutterBottom variant="p" component="p" sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "500",
                      fontSize: { md: "15px", lg: '25px', sm: '15px', xs: '10px' },
                    lineHeight: { md: "26px", lg: '36px', sm: '26px', xs: '8px' },
                    color: "#222222"
                  }} >
                    Case Study Heading
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: { md: "13px", lg: '13px', sm: '13px', xs: '8px' },
                    lineHeight: { md: "120%", lg: '140%', sm: '120%', xs: '120%' },
                    letterSpacing: "-0.02em",
                    color: "#444444"
                  }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize:{ md: "10px", lg: '15px', sm: '10px', xs: '8px' },
                    letterSpacing: "-0.02em",
                    color: "#F15D4A"
                  }}>Read full case study</Typography>
                </CardActions>
              </Card>
                
            </div>
            <div>
              <Card sx={{ width: {md:'200px',lg:'287px',sm:'200px',xs:'143px'}, height: {lg:"545px",md:"420px",sm:"420px",xs:'270px'}, backgroundColor: "#F5F5F7" }}>
                <CardMedia
                  component="img"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  sx={{height: {md:'220px',lg:'287px',sm:'220px',xs:'143px'}}}

                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="p" sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: {md:"16px",lg:'16px',sm:'16px',xs:'11px'},
                    color: "#444444"
                  }} >
                    General Doctor
                  </Typography>
                  <Typography gutterBottom variant="p" component="p" sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "500",
                      fontSize: { md: "15px", lg: '25px', sm: '15px', xs: '10px' },
                    lineHeight: { md: "26px", lg: '36px', sm: '26px', xs: '8px' },
                    color: "#222222"
                  }} >
                    Case Study Heading
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: { md: "13px", lg: '13px', sm: '13px', xs: '8px' },
                    lineHeight: { md: "120%", lg: '140%', sm: '142%', xs: '120%' },
                    letterSpacing: "-0.02em",
                    color: "#444444"
                  }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize:{ md: "10px", lg: '15px', sm: '10px', xs: '8px' },
                    letterSpacing: "-0.02em",
                    color: "#F15D4A"
                  }}>Read full case study</Typography>
                </CardActions>
              </Card>
            </div>
          </Box>
          </div>
        </section>
        
      </div >
    </div >
  )
}

const mapStateToProps = (state) => ({
  userData: state.dashboard.userData,
  cardData: state.dashboard.cardData,
  exerciseData: state.dashboard.exerciseData,
  pageData: state.dashboard.pageData,
})

const mapDispatchToProps = (dispatch) => (
  {
    fetchUserData: () => dispatch(dashboard.fetchUserData()),
    getAllCardData: () => dispatch(dashboard.getAllCardData()),
    fetchExercisesData: () => dispatch(dashboard.fetchExercisesData()),
    get_page_data: () => dispatch(dashboard.get_page_data()),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)