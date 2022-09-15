import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Typography } from "@material-ui/core";
import img1 from "../../assets/our partner/img1.png";
import img2 from "../../assets/our partner/img2.png";
import img3 from "../../assets/our partner/img3.png";
import img4 from "../../assets/our partner/img4.png";
import img5 from "../../assets/our partner/img5.png";
import img6 from "../../assets/our partner/img6.png";
import img7 from "../../assets/our partner/img7.png";
import img8 from "../../assets/our partner/img8.png";
import img9 from "../../assets/our partner/img9.png";
import img10 from "../../assets/our partner/img10.png";
import img11 from "../../assets/our partner/img11.png";
import img12 from "../../assets/our partner/img12.png";
import img13 from "../../assets/our partner/img13.png";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ourPartnerBAckground from "../../assets/ourPartnerBAckground.png";



const partners = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
];

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
        <Box onClick={() => scrollPrev()} sx={{ display: "flex", alignItems: "center", justifyContent: "center", m: 2, color: "#F57059", fontWeight: "bolder", }}>
            Left
        </Box>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
    return (
        <Box onClick={() => scrollNext()} sx={{
            display: "flex", alignItems: "center", justifyContent: "center", m: 2, color: "#F57059", fontWeight: "bolder"
        }}>
           right
        </Box>
    );
};

function Card__({ img }) {

    return (
        <Card sx={{  margin: 2, textAlign: "center" }}>
            <Box>
                <Box sx={{ margin: 0, backgroundColor: "white", }}>
                    <img src={img} alt="exercise image" />
                </Box>
            </Box>
        </Card>
    );
}

const OurPartnerSection = () => {
    return (
        <>
            <Box sx={{ backgroundImage: `url(${ourPartnerBAckground})`, backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: "cover", m: 2 }}>
                <Box sx={{ height: "80vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography fontSize="44px" fontWeight="600" color="#425162" textAlign="center">Our Partners</Typography>
                    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} transitionBehavior="smooth">
                        {partners.map(img => <Card__ img={img} />)}
                    </ScrollMenu>
                </Box>
            </Box>
        </>
    )
};

export default OurPartnerSection
