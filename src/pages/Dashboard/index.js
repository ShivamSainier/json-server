import React, { useEffect, useRef } from 'react';
import { Button, Container, Typography, Card, CardMedia, CardContent, CardActions, Grid } from '@material-ui/core';
// import classes from "../../style/dashboard/dashboard.module.scss";
import classes from "./Dashboard.module.css";
import { connect } from "react-redux";
import { dashboard } from "../../redux/actions";
import img from "./img.png";
import exercise from "./exercise.png";
import vector from "./Vector.png";
import ex1 from "./ExercisesImages/ex1.png";
import ex2 from "./ExercisesImages/ex2.png";
import ex3 from "./ExercisesImages/ex3.png";
import allImg from "./ExercisesImages/allImg.png";

function Dashboard({ fetchUserData, getAllCardData, get_page_data, pageData, cardData, userData, fetchExercisesData, exerciseData }) {
  const Sectionref = useRef(null)
  useEffect(() => {
    fetchUserData();
    getAllCardData();
    fetchExercisesData();
    get_page_data();
  }, [])
  console.log("exercise data", exerciseData)

  const goToSection = () => window.scrollTo({ top: Sectionref.current.offsetTop, behavior: "smooth" })
  return (
    <div>
      <div>
        <section>
          <div className={`${classes.mainSection}`}>
            <Grid container>
              <Grid item md={6} sm={6} xs={6}>
                <div style={{ marginTop: 60 }}>
                  <div className="d-flex justify-content-center">
                    <p className={classes.mainTitle}>The Future of Rehabilitation</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div style={{ display: 'inline-block', margin: '20px' }}>
                      <p className={classes.subTitle}>The Path to Recovery Starts Right Here!</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className={classes.mainPara}>
                      TraceLyfe comes with effective and objective rehabilitation programes tailored to needs of our valued customers.
                    </p>
                  </div>
                  <div>
                    <button className={classes.getStarted}>Get Started</button>
                  </div>
                </div>
              </Grid>
              <Grid item md={6} sm={6} xs={6}>
                <div style={{ marginTop: 60 }}>
                  <div className="d-flex justify-content-center">
                    <img src={`${img}`} alt="image" height="522.66" width="594.02"></img>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
        <section>
          <div className={`${classes.content}`}>
            <h5 className={classes.stats}>Some of our great stats</h5>
            <div>
              <ul className={classes.ulList}>
                <li>
                  <div className={classes.listITems}>
                    <h4 className={classes.main_heading}>64K</h4>
                    <p className={classes.main_sub_heading}>Checkups</p>
                  </div>
                </li>
                <li>
                  <div className={classes.listITems}>
                    <h4 className={classes.main_heading}>4K</h4>
                    <p className={classes.main_sub_heading}>Health Employees</p>
                  </div>
                </li>
                <li>
                  <div className={classes.listITems}>
                    <h4 className={classes.main_heading}>120K</h4>
                    <p className={classes.main_sub_heading}>Data Analyzed</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </section>
        <section className={classes.thirdSection}>
          <div className={classes.partnerProgram}>
            <Grid container>
              <Grid item xs={12} sm={6} md={6}>
                <div>
                  <p className={classes.Lorem_Ipsum}>
                    Lorem Ipsum
                  </p>
                  <p style={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "800",
                    fontSize: "40px",
                    lineHeight: "48px",
                    letterSpacing: "-0.03em",
                    color: "#0A0A0A",
                    marginBottom: "10px"
                  }}>
                    What you get
                  </p>
                  <p style={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "140%",
                    letterSpacing: "-0.02em",
                    color: "#64607D",
                    width: "430px"
                  }}>
                    We want to save your time from constant worry of future health problems by tracking body vitals regularly to check for any abnormalities.
                  </p>
                  <div>
                    <Button variant="contained" sx={{
                      backgroundColor: "#F57059", color: "white", width: "205px", height: "47px", fontFamily: 'Poppins',
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "13px",
                      lineHeight: "30px",
                      marginTop: "50px"
                    }}>Join Partner Program</Button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} >
                <Grid container >
                  <Grid item sm={6} md={6} xs={6}>
                    <div>
                      <h4 className={classes.loermHeading}>Instant Doctor Access</h4>
                      <p className={classes.loermP}>Regular medical checkups to keep track of body vitals. It helps with preventative healthcare and early detaction of furture health issues.</p>
                    </div>
                  </Grid>
                  <Grid item sm={6} md={6} xs={6}>
                    <div>
                      <h4 className={classes.loermHeading}>Exercise on the Go</h4>
                      <p className={classes.loermP}> Motivating employees to keep within their health goals while monitoring their physical activity and sleep quality.</p>
                    </div>
                  </Grid>
                  <Grid item sm={6} md={6} xs={6}>
                    <div>
                      <h4 className={classes.loermHeading}>Dedicated Physiotherapist</h4>
                      <p className={classes.loermP}>TraceLyfe let’s you manage all the health data all at once. Our central health data app is just a tap away with all the insights and detailed data.</p>
                    </div>
                  </Grid>
                  <Grid item sm={6} md={6} xs={6}>
                    <div>
                      <h4 className={classes.loermHeading}>Personalized Packages</h4>
                      <p className={classes.loermP}>Tracelyfe analyses the data to predict and identify trends and patterns, get actionable insights and control the spread of diseases.</p>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </section>
        <section className={classes.exercisesSection}>
          <div className={classes.exercises}>
            <Grid container>
              <Grid item sm={12} md={6} xs={12} >
                <img width="492" src={`${exercise}`} alt="exercises image" className={classes.exerciseImg}></img>
                <img width="392" src={`${vector}`} alt="Vector image" className={classes.vectorImg}></img>
              </Grid>
              <Grid item sm={5} md={6} xs={12}>
                <div style={{ marginTop: "10%" }}>
                  <h3 style={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "32px",
                    lineHeight: "48px",
                    letterSpacing: "-0.03em", color: "#0A0A0A"
                  }}>Why Choose TraceLyfe
                  </h3>
                </div>
                <div style={{ backgroundColor: "#F5F5F7", width: "490px", padding: "15px", borderRadius: "3px", marginTop: "20px" }}>
                  <h5 style={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "30px",
                    letterSpacing: "-0.03em",
                    color: "#0A0A0A"
                  }}>AI Driven Pose Detection</h5>
                  <p style={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "140%",
                    letterSpacing: "-0.02em",
                    color: "#64607D",
                    width: "403px",
                    paddingTop: "10px"
                  }}>TraceLyfe uses Artificial Intelligence driven real-time pose detection technique to help you get that tricky exercise right. </p>
                </div>
                <ul style={{ listStyleType: "none", marginTop: "20px" }}>
                  <li className={classes.exerciseList}>Quick Recovery</li>
                  <li className={classes.exerciseList}>Improve Specialized Facilities</li>
                  <li className={classes.exerciseList}>Improve Specialized Facilities</li>
                </ul>
              </Grid>
            </Grid>
          </div>
        </section>
        <section className={classes.featured_section}>
          <div className={classes.featured_packages_section} >
            <h1 className={classes.featured_packages}>Featured Packages</h1>
            <div className={classes.cards}>
              <div>
                <Card sx={{ width: "388px", height: "233px", background: "#F5F5F7" }}>
                  <CardContent>
                    <Typography sx={{
                      fontFamily: 'Poppins',
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "24px",
                      lineHeight: "36px"
                    }}>
                      Back Pain Relief
                    </Typography>
                    <Typography sx={{
                      fontFamily: 'Poppins',
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "18px",
                      lineHeight: "30px",
                      letterSpacing: "-0.02em",
                      color: "#6B6B6B",
                      width: "325px"
                    }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card sx={{ width: "388px", height: "233px", background: "#F5F5F7" }}>
                  <CardContent>
                    <Typography sx={{
                      fontFamily: 'Poppins',
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "24px",
                      lineHeight: "36px"
                    }}>
                      Joint Pain Relief
                    </Typography>
                    <Typography sx={{
                      fontFamily: 'Poppins',
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "18px",
                      lineHeight: "30px",
                      letterSpacing: "-0.02em",
                      color: "#6B6B6B",
                      width: "325px"
                    }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card sx={{ width: "388px", height: "233px", background: "#F5F5F7" }}>
                  <CardContent>
                    <Typography sx={{
                      fontFamily: 'Poppins',
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "24px",
                      lineHeight: "36px"
                    }}>
                      Knee Correction
                    </Typography>
                    <Typography sx={{
                      fontFamily: 'Poppins',
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "18px",
                      lineHeight: "30px",
                      letterSpacing: "-0.02em",
                      color: "#6B6B6B",
                      width: "325px"
                    }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className={classes.exercisesSection}>
          <div className={classes.sampleExercises}>
            <p className={classes.samEx}>Sample Exercises</p>
          </div>
          <div className={classes.sampleImages}>
            <img src={`${allImg}`} alt="exercises image"></img>
          </div>
        </section>
        <section className={classes.refrences}>
          <div>
            <h1 style={{
              fontFamily: 'Poppins',
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "40px",
              lineHeight: "48px",
              textAlign: "center",
              letterSpacing: "-0.03em",
              color: "#0A0A0A",
            }}>Reference Clients</h1>
          </div>
          <div className={classes.refrencesList}>
            <div>
              <Card sx={{ width: "388px", backgroundColor: "#F5F5F7" }}>
                <CardMedia
                  component="img"
                  height="248px"
                  image="/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="div" sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "36px",
                    letterSpacing: "0.02em",
                    color: "#393E45"
                  }} >
                    Case Study Heading
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "140%",
                    letterSpacing: "-0.02em",
                    color: "#64607D"
                  }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",

                    letterSpacing: "-0.02em",
                    color: "#F15D4A"
                  }}>Read full case study</Typography>
                </CardActions>
              </Card>
            </div>
            <div>
              <Card sx={{ width: "388px", backgroundColor: "#F5F5F7" }}>
                <CardMedia
                  component="img"
                  height="248px"
                  image="/static/images/cards/contemplative-reptile.jpg"

                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="p" sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "36px",
                    letterSpacing: "0.02em",
                    color: "#393E45"
                  }} >
                    Case Study Heading
                  </Typography>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "140%",
                    letterSpacing: "-0.02em",
                    color: "#64607D"
                  }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",

                    letterSpacing: "-0.02em",
                    color: "#F15D4A"
                  }}>Read full case study</Typography>
                </CardActions>
              </Card>
            </div>
            <div>
              <Card sx={{ width: "388px", backgroundColor: "#F5F5F7" }}>
                <CardMedia
                  component="img"
                  height="248px"
                  image="/static/images/cards/contemplative-reptile.jpg"

                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="p" sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "36px",
                    letterSpacing: "0.02em",
                    color: "#393E45"
                  }} >
                    Case Study Heading
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "140%",
                    letterSpacing: "-0.02em",
                    color: "#64607D"
                  }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",

                    letterSpacing: "-0.02em",
                    color: "#F15D4A"
                  }}>Read full case study</Typography>
                </CardActions>
              </Card>
            </div>
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