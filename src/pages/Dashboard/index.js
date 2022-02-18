import React from 'react';
import { Button, Container, Typography, Card, CardMedia } from '@material-ui/core';
// import classes from "../../style/dashboard/dashboard.module.scss";
import classes from "./Dashboard.module.css";

function index() {
  return (
    <>
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
                        alt="" class="exercise-intro-icon"/>
                    </div>
                  <div><strong>10000+</strong>&nbsp;HD Videos</div>
              </div>
              <div className={`${classes.innerBlock}`}>
                  <div className={`${classes.innerBlockIcon}`}>
                    <img
                        src="https://assets.website-files.com/5c7fe7d904beac7c6ce5de13/5c7fe7d904beaca84fe5de5b_Icon-volume.png"
                        alt="" class="exercise-intro-icon" height={40}/>
                  </div>
                  <div><strong>Professionally</strong> narrated <br/>in 🇬🇧🇪🇸🇳🇱🇩🇪🇫🇷🇵🇱🇧🇷🇮🇹</div>
              </div>
              <div className={`${classes.innerBlock}`}>
                  <div className={`${classes.innerBlockIcon}`}>
                    <img height={40}
                      src="https://assets.website-files.com/5c7fe7d904beac7c6ce5de13/5c7fe7d904beac1443e5e055_Icon-update.png"
                      alt="" class="exercise-intro-icon"/>
                  </div>
                  <div><strong>100+</strong> new videos each quarter</div>
              </div>
              <div className={`${classes.innerBlock}`}>
                  <div className={`${classes.innerBlockIcon}`}>
                    <img height={40}
                      src="https://assets.website-files.com/5c7fe7d904beac7c6ce5de13/5c7fe7d904beac68a4e5e02d_Icon-add.png"
                      alt="" class="exercise-intro-icon"/>
                  </div>
                  <div><strong>Add your own</strong> videos and photos</div>
              </div>
          </div>
        </div>
      </section>

      <section>
        <div className={`${classes.imageSection}`}>
            <div className={`${classes.imageOverlay}`}>
                <div className={`${classes.container}`}>
                    <div className={`${classes.row}`}>
                        <div className={`${classes.textColumn}`}>
                            <h2 class="section-title column">Crystal clear. <br/><strong>Expertly created</strong>.</h2>
                            <p>Research studies clearly demonstrate that <strong> videos are vastly superior to illustrations in explaining exercise technique
                              </strong>.
                                <br/><br/>
                                Created by  <strong>
                                    clinical experts from Australia, Europe, US
                                    and around the world
                                </strong>
                                , we film our exercises in ultra-HD
                                (4K) and from different angles.
                                    <br/><br/>
                                All exercise videos are  <strong>professionally narrated</strong>
                                to give your patients complete confidence to do their exercises correctly.
                            </p>
                        </div>
                        <div class="w-hidden-small w-hidden-tiny w-col w-col-6"></div>
                    </div>
                </div>
            </div>
        </div>
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
          [1,2,3].map((d)=>(
            <div key={d}>
              <div className="spacer"></div>
              <h4 className={`text-center ${classes.title}`}>Musculoskeletal</h4>
              <Container className='d-flex justify-content-between w-100'>
                {
                  [4,5,6].map((i)=>(
                    <Card key={i} variant="outlined" style={{display:'inline-block',width:300}}>
                        <CardMedia
                          style={{width:300,height:150,boxShadow:'0 0 26px 0 rgb(0 0 0 / 7%)'}}
                          image="https://assets.website-files.com/5c7fe7d904beac7c6ce5de13/5c7fe7d904beac7000e5e157_2.png"
                          title="Paella dish"
                        />
                        <Typography padding={1} style={{fontSize:'12px',color:'#aaa',textAlign:'center'}}>
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
            <h2 className={`${classes.head}`}>Scientifically proven</h2>
            <div className={`${classes.subHead}`}>
              Physitrack is scientifically proven to increase home exercise adherence and patient confidence.
            </div>
            <div className={`${classes.para}`}>
              <a href="https://journals.lww.com/ajpmr/Abstract/2019/10000/Does_a_Web_Based_Exercise_Programming_System.3.aspx" target="_blank">
                American Journal of Physical Medicine Rehabilitation
              </a>
              : October 2019 - Volume 98 - Issue 10 - p 850–858
              <br/>doi: 10.1097/PHM.0000000000001204
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={`${classes.client}`}>
          <h2 className={`${classes.head}`}>Reference clients</h2>
          <div className={`${classes.suhHead}`}>
            Physitrack is used by 
            <strong>100,000+</strong> healthcare professionals in 102 countries,
            including physical therapists, MDs, surgical specialists, exercise 
            physiologists and chiropractors in public and private healthcare. 
            <br/>Physitrack has been a key part of Apple’s Mobility Partner Program since 2015.
          </div>
          <div className={`${classes.clientsWrapper}`}>
            <div className={`${classes.references}`}>
              {
                [5,6,7,8,9,10,11,12,13,14].map((k)=>(
                  <div key={k} className={`${classes.clientItem}`}>
                    <img className={`${classes.logo}`}
                      src="https://assets.website-files.com/5c7fe7d904beac770ee5de4c/5e7c6252abd43d849d84a2f7_0.png" alt=""/>
                  </div>
                ))
              }
              {
                [15,16,17,18,19,110,111,112,113,114].map((k)=>(
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
    </>
  )
}

export default index