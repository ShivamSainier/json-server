import React, { useEffect, useRef } from 'react';
import { Button, Container, Typography, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
// import classes from "../../style/dashboard/dashboard.module.scss";
import classes from "./Dashboard.module.css";
import { connect } from "react-redux";
import { dashboard } from "../../redux/actions";

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
          <div className={`${classes.videoContainer}`}>
            <video autoPlay="" loop="" className={`${classes.video}`}
              muted="" playsInline="" data-wf-ignore="true" data-object-fit="cover">
              <source
                src="https://assets.website-files.com/5c7fe7d904beac7c6ce5de13/5ce2bfa37e30fb4b202219fb_physitrack_background_video_new_3-transcode-transcode.mp4"
                data-wf-ignore="true" />
              <source
                src="https://assets.website-files.com/5c7fe7d904beac7c6ce5de13/5ce2bfa37e30fb4b202219fb_physitrack_background_video_new_3-transcode-transcode.webm"
                data-wf-ignore="true" />
            </video>
            <div>
              <h1 className={`${classes.videoHead}`}>The world leader in remote patient engagement.</h1>
            </div>
            <div className={`${classes.videoGrid}`}>
              {pageData && pageData.data[0].map((item, index) => (
                <Card className='inline-block' key={index}>
                  <CardContent>
                    <div className='d-flex justify-content-center' style={{ marginBottom: 10 }}>
                      <img src="https://assets.website-files.com/5c7fe7d904beac7c6ce5de13/5ce7980100fd6e4643026134_pt_icon_hospital.svg" alt="" />
                    </div>
                    <Typography className={classes.videoCardTitle} color="textSecondary" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions className="d-flex justify-content-center">

                  </CardActions>
                </Card>
              ))
              }
            </div>
            <div style={{ marginTop: 60 }}>
              <div className="d-flex justify-content-center">
                <Button size="large" color='main' variant='contained'>Try 30 days for free</Button>
              </div>
              <div className="d-flex justify-content-center">
                <div style={{ display: 'inline-block', margin: '20px' }}>
                  OR
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <Button
                  size="large" color='alter' variant='contained'>Try Online Demo Version</Button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={`${classes.sectionHero}`}>
            <h1 className={`${classes.subH1}`}>Exercise library</h1>
          </div>
          <div className={`${classes.content}`}>
            <div className={`${classes.contentGrid}`}>
              <div className={`${classes.innerBlock}`}>
                <div className={`${classes.innerBlockIcon}`}>
                  <img height={40}
                    src="https://assets.website-files.com/5c7fe7d904beac7c6ce5de13/5c7fe7d904beac68b7e5e010_Icon-camera.png"
                    alt="" className="exercise-intro-icon" />
                </div>
                <div><strong>10000+</strong>&nbsp;HD Videos</div>
              </div>
              <div className={`${classes.innerBlock}`}>
                <div className={`${classes.innerBlockIcon}`}>
                  <img
                    src="https://assets.website-files.com/5c7fe7d904beac7c6ce5de13/5c7fe7d904beaca84fe5de5b_Icon-volume.png"
                    alt="" className="exercise-intro-icon" height={40} />
                </div>
                <div><strong>Professionally</strong> narrated <br />in 🇬🇧🇪🇸🇳🇱🇩🇪🇫🇷🇵🇱🇧🇷🇮🇹</div>
              </div>
              <div className={`${classes.innerBlock}`}>
                <div className={`${classes.innerBlockIcon}`}>
                  <img height={40}
                    src="https://assets.website-files.com/5c7fe7d904beac7c6ce5de13/5c7fe7d904beac1443e5e055_Icon-update.png"
                    alt="" className="exercise-intro-icon" />
                </div>
                <div><strong>100+</strong> new videos each quarter</div>
              </div>
              <div className={`${classes.innerBlock}`}>
                <div className={`${classes.innerBlockIcon}`}>
                  <img height={40}
                    src="https://assets.website-files.com/5c7fe7d904beac7c6ce5de13/5c7fe7d904beac68a4e5e02d_Icon-add.png"
                    alt="" className="exercise-intro-icon" />
                </div>
                <div><strong>Add your own</strong> videos and photos</div>
              </div>
            </div>
          </div>
        </section>

        <section ref={Sectionref}>
          {pageData &&
            pageData.data[2].map((item, index) => (
              <div className={`${classes.imageSection}`}>
                <div className={`${classes.imageOverlay}`}>
                  <div className={`${classes.container}`}>
                    <div className={`${classes.row}`}>
                      <div className={`${classes.textColumn}`}>
                        <h2 className="section-title column">{item.title} <br /><strong>Expertly created</strong>.</h2>
                        <p>
                          {item.content}
                        </p>
                      </div>
                      <div className="w-hidden-small w-hidden-tiny w-col w-col-6"></div>
                    </div>
                  </div>
                </div>
              </div>

            ))
          }

        </section>
        <section>
          <div className={`${classes.sectionHero}`}>
            <h1 className={`${classes.subH1}`}>Sample Exercise</h1>
            <Button
              variant="outlined" size="large" color="main">
              Preview all 10000+ exercises in our demo version
            </Button>
          </div>
          {
            [1, 2, 3].map((d, index) => (
              <div key={index}>
                <div className="spacer"></div>
                <h4 className={`text-center ${classes.title}`}>Musculoskeletal</h4>
                <Container className='d-flex justify-content-between w-100'>
                  {
                    [4, 5, 6].map((i) => (
                      <Card key={i} variant="outlined" style={{ display: 'inline-block', width: 300 }}>
                        <CardMedia
                          style={{ width: 300, height: 150, boxShadow: '0 0 26px 0 rgb(0 0 0 / 7%)' }}
                          image="https://assets.website-files.com/5c7fe7d904beac7c6ce5de13/5c7fe7d904beac7000e5e157_2.png"
                          title="Paella dish"
                        />
                        <Typography padding={1} style={{ fontSize: '12px', color: '#aaa', textAlign: 'center' }}>
                          GHjt ER(90) unsupported with resistance
                        </Typography>
                      </Card>
                    ))
                  }
                </Container>
              </div>
            ))
          }
        </section>

        <section>
          <div className={`${classes.scientifically}`}>
            <div className={`${classes.provenContainer}`}>
              <div>
                {
                  pageData &&
                  pageData.data[4].map((item, index) => (<><h2 className={`${classes.head}`}>{item.heading} </h2>
                    <div className={`${classes.subHead}`}>
                      {item.content}
                    </div>
                  </>))
                }

              </div>

            </div>
          </div>
        </section>
        <section>
          <div className={`${classes.client}`}>
            <h2 className={`${classes.head}`}>Reference clients</h2>
            {
              pageData &&
              pageData.data[5].map((item, index) => (<> <div className={`${classes.suhHead}`}>

                <strong>{item.content}</strong>
              </div> </>))
            }


            <div className={`${classes.clientsWrapper}`}>
              <div className={`${classes.references}`}>
                {
                  pageData && pageData.data[6].map((k) => (
                    <div key={k} className={`${classes.clientItem}`}>
                      <img className={`${classes.logo}`}
                        src={k.image} alt="" />
                    </div>
                  ))
                }
                {
                  [15, 16, 17, 18, 19, 110, 111, 112, 113, 114].map((k) => (
                    <div className={`${classes.clientItem}`}>
                      <img className={`${classes.logo}`} src="https://assets.website-files.com/5c7fe7d904beac770ee5de4c/5d149a3b35f95978fa6b90ee_us_americare_physical_therapy.png" alt="AmeriCare Physical Therapy" />
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="spacer"></div>
            <div className='d-flex align-items-center'>
              <Button
                variant="outlined" size="large" color="main">
                Case studies
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
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