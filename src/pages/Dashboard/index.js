import React, { useState,useEffect, useRef } from 'react';
import { Button, Container, Typography, Card, CardMedia, CardContent, CardActions, Grid } from '@material-ui/core';
// import classes from "../../style/dashboard/dashboard.module.scss";
import classes from "./Dashboard.module.css";
import { connect } from "react-redux";
import { dashboard } from "../../redux/actions";
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
import HeroSection from '../../components/dashboard/HeroSection';
import ProductSection from '../../components/dashboard/ProductSection';
import ProductFeaturesSetion from '../../components/dashboard/ProductFeaturesSetion';
import PartnershipSection from '../../components/dashboard/PartnershipSection';
import AwardsSection from '../../components/dashboard/AwardsSection';
import OurPartnerSection from '../../components/dashboard/OurPartnerSection';
import ContactUs from "../../components/dashboard/ContactUs";
import 'typeface-raleway'


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
    <Box onClick={() => scrollPrev()} sx={{  display: "flex", alignItems: "center", justifyContent: "center", m: 2, color: "#F57059", fontWeight: "bolder",  }}>
      <FaAngleLeft fontSize="40px" />
    </Box>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Box onClick={() => scrollNext()} sx={{
     display: "flex", alignItems: "center", justifyContent: "center",m:2,color:"#F57059",fontWeight:"bolder" }}>
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
     
      <HeroSection />
      <ProductSection />
      <ProductFeaturesSetion />
      <PartnershipSection />
      <AwardsSection />
      <ContactUs />        
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