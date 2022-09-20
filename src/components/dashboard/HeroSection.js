import React from 'react';
import classes from "../../style/dashboard/HeroSection.module.css";
import heroImage from "../../assets/heroSection.png";
import {Box, Divider, Typography} from "@material-ui/core"
import { FaBoxOpen } from 'react-icons/fa';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { motion } from "framer-motion"


import Button from '@mui/material/Button';

const animationConfiguration = {
    initial: { opacity: 0,scale:0.7 },
    animate: { opacity: 1,scale:1 },
    exit: { opacity: 0 },
};

const HeroSection = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  return (
      <>
          <Dialog
              open={open}
              onClose={handleClose}
              fullWidth
              maxWidth='lg'
              
              aria-labelledby="responsive-dialog-title"
          >
              <DialogTitle id="responsive-dialog-title">
                  <Typography sx={{
                      fontFamily: "Poppins",
                      fontWeight: "700",
                      color: "#293259",
                      fontSize:{lg:'48px',md:'40px',sm:'38px',xs:'28px'},
                      marginTop: 6
                  }}>{"Our Privacy Policy"}</Typography>
                  <Divider />
              </DialogTitle>
              <DialogContent>
                  <DialogContentText>
                      <section className={classes.privacyPolicy}>
                          <Box>
                              <Typography sx={{ fontSize: { lg:'16px',md:'14px',sm:'14px',xs:'13px'}}}>Owner and Data Controller Name: <b>TraceLyfe</b>.  Address: <b>Gurgaon , sector 38 SAS tower , 9th floor</b>.</Typography>
                          </Box>
                          <Box>

                              <Typography sx={{ fontSize: { lg: '16px', md: '14px', sm: '14px', xs: '13px' } }}>
                                  Types of Data collected Among the types of Personal Data that this Application collects, by itself or through third parties, there are: first name; phone number; email address. Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection. Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application. Unless specified otherwise, all Data requested by this Application is mandatory and failure to provide this Data may make it impossible for this Application to provide its services. In cases where this Application specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service. Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner. Any use of Cookies – or of other tracking tools – by this Application or by the owners of third-party services used by this Application serves the purpose of providing the Service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available. Users are responsible for any third-party Personal Data obtained, published or shared through this Application and confirm that they have the third party’s consent to provide the Data to the Owner. Mode and place of processing the Data
                              </Typography>
                              <Typography sx={{ fontSize: { lg: '16px', md: '14px', sm: '14px', xs: '13px' } }}>
                                  Methods of processing The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data. The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of this Application (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Owner at any time. Legal basis of processing The Owner may process Personal Data relating to Users if one of the following applies:
                              </Typography>
                          </Box>
                          <Box>

                              <ul>
                                  <li>
                                      <Typography sx={{ fontSize: { lg: '16px', md: '14px', sm: '14px', xs: '13px' } }}>
                                          Users have given their consent for one or more specific purposes. Note: Under some legislations the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law.
                                      </Typography>
                                  </li>
                                  <li>
                                      <Typography sx={{ fontSize: { lg: '16px', md: '14px', sm: '14px', xs: '13px' } }}>
                                          Provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof.
                                        </Typography>
                                  </li>
                                  <li>
                                      <Typography sx={{ fontSize: { lg: '16px', md: '14px', sm: '14px', xs: '13px' } }}>
                                          Processing is necessary for compliance with a legal obligation to which the Owner is subject.
                                        </Typography>

                                  </li>
                                  <li>
                                      <Typography sx={{ fontSize: { lg: '16px', md: '14px', sm: '14px', xs: '13px' } }}>
                                          Processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner.
                                          </Typography>
                                  </li>
                                  <li>
                                      <Typography sx={{ fontSize: { lg: '16px', md: '14px', sm: '14px', xs: '13px' } }}>
                                          Processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.
                                      </Typography>

                                  </li>
                                  <li>
                                      <Typography sx={{ fontSize: { lg: '16px', md: '14px', sm: '14px', xs: '13px' } }}>
                                          In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.
                                      </Typography>
                                  </li>
                              </ul>
                              <Typography sx={{ fontSize: { lg: '16px', md: '14px', sm: '14px', xs: '13px' } }}>
                                  Place The Data is processed at the Owner’s operating offices and in any other places where the parties involved in the processing are located. Depending on the User’s location, data transfers may involve transferring the User’s Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data. Users are also entitled to learn about the legal basis of Data transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data. If any such transfer takes place, Users can find out more by checking the relevant sections of this document or inquire with the Owner using the information provided in the contact section. Retention time Personal Data shall be processed and stored for as long as required by the purpose they have been collected for. Therefore:
                              </Typography>
                              <Typography sx={{ fontSize: { lg: '16px', md: '14px', sm: '14px', xs: '13px' } }}>
                                  The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority. Once the retention period expires, Personal Data shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period. The purposes of processing The Data concerning the User is collected to allow the Owner to provide its Services, as well as for the following purposes: Contacting the User. Users can find further detailed information about such purposes of processing and about the specific Personal Data used for each purpose in the respective sections of this document. Detailed information on the processing of Personal Data Personal Data is collected for the following purposes and using the following services: Contacting the User The rights of Users Users may exercise certain rights regarding their Data processed by the Owner. In particular, Users have the right to do the following:
                              </Typography>
                          </Box>
                          <Box>
                              <ul className={classes.main_paragraph}>
                                  <li>
                                      <Typography sx={{ fontSize: { lg: '16px', md: '14px', sm: '14px', xs: '13px' } }}>
                                          Withdraw their consent at any time. Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data.
                                          </Typography>
                                  </li>
                                  <li>
                                      <Typography sx={{ fontSize: { lg: '16px', md: '14px', sm: '14px', xs: '13px' } }}>
                                          Object to processing of their Data. Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent. Further details are provided in the dedicated section below.
                                          </Typography>
                                  </li>
                                  <li>
                                      <Typography sx={{ fontSize: { lg: '16px', md: '14px', sm: '14px', xs: '13px' } }}>
                                          Access their Data. Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing, and obtain a copy of the Data undergoing processing.
                                      </Typography>
                                  </li>
                                  <li>
                                      <Typography sx={{ fontSize: { lg: '16px', md: '14px', sm: '14px', xs: '13px' } }}>
                                          Verify and seek rectification. Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected.
                                          </Typography>
                                  </li>
                                  <li>
                                      <Typography sx={{ fontSize: { lg: '16px', md: '14px', sm: '14px', xs: '13px' } }}>
                                          Restrict the processing of their Data. Users have the right, under certain circumstances, to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it.
                                          </Typography>
                                  </li>
                                  <li>
                                      <Typography sx={{ fontSize: { lg: '16px', md: '14px', sm: '14px', xs: '13px' } }}>
                                          Have their Personal Data deleted or otherwise removed. Users have the right, under certain circumstances, to obtain the erasure of their Data from the Owner.
                                          </Typography>
                                  </li>
                                  <li>
                                      <Typography sx={{ fontSize: { lg: '16px', md: '14px', sm: '14px', xs: '13px' } }}>
                                      Receive their Data and have it transferred to another controller. Users have the right to receive their Data in a structured, commonly used, and machine-readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that the Data is processed by automated means and that the processing is based on the User’s consent, on a contract which the User is part of, or on pre-contractual obligations thereof.
                                      </Typography>
                                  </li>
                                  <li>
                                      <Typography sx={{ fontSize: { lg: '16px', md: '14px', sm: '14px', xs: '13px' } }}>
                                          Lodge a complaint. Users have the right to bring a claim before their competent data protection authority.
                                          </Typography>
                                  </li>
                              </ul>
                              <Typography sx={{ fontSize: { lg: '16px', md: '14px', sm: '14px', xs: '13px' } }}>
                                  Details about the right to object to processing Where Personal Data is processed for a public interest, in the exercise of an official authority vested in the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object to such processing by providing a ground related to their particular situation to justify the objection. Users must know that, however, should their Personal Data be processed for direct marketing purposes, they can object to that processing at any time without providing any justification. To learn, whether the Owner is processing Personal Data for direct marketing purposes, Users may refer to the relevant sections of this document. How to exercise these rights Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible and always within one month. Additional information about Data collection and processing Legal action The User’s Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action arising from improper use of this Application or the related Services. The User declares to be aware that the Owner may be required to reveal personal data upon request of public authorities. Additional information about User’s Personal Data In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular Services or the collection and processing of Personal Data upon request. System logs and maintenance For operation and maintenance purposes, this Application and any third-party services may collect files that record interaction with this Application (System logs) use other Personal Data (such as the IP Address) for this purpose. Information not contained in this policy More details concerning the collection or processing of Personal Data may be requested from the Owner at any time. Please see the contact information at the beginning of this document. How “Do Not Track” requests are handled This Application does not support “Do Not Track” requests. To determine whether any of the third-party services it uses honor the “Do Not Track” requests, please read their privacy policies. Changes to this privacy policy The Owner reserves the right to make changes to this privacy policy at any time by giving notice to its Users on this page and possibly within this Application and/or – as far as technically and legally feasible – sending a notice to Users via any contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom.  Should the changes affect processing activities performed on the basis of the User’s consent, the Owner shall collect new consent from the User, where required.


                                  </Typography>

                          </Box>


                      </section >
                  </DialogContentText>
              </DialogContent>
              <DialogActions sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <Button onClick={handleClose} autoFocus sx={{ textAlign: "center", backgroundColor:"#A3D262",color:"#FFFFFF"}}>
                      Agree
                  </Button>
              </DialogActions>
          </Dialog>
          <Box sx={{ backgroundColor: "#FFFFFF" }}>
              <motion.div variants={animationConfiguration} initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
              >
              <Box sx={{ display: "flex", flexDirection: {lg:"row",md:"row",sm:"column-reverse",xs:"column-reverse"}, width:{md:"80%",lg:"80%",sm:"100%",xs:"100%"}, margin: "auto", backgroundColor: "#FFFFFF" ,justifyContent:{md:'space-around',lg:"space-between",sm:"center",xs:"center",},alignItems:{xs:'center',sm:'center'}}}>
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: { lg: 'left', md:'left',sm:'center',xs:"center"}}}>
                      <Typography color="#425162" sx={{ fontSize: { lg: "44px", md: "33px", sm: "22px", xs: "15px" } }} fontWeight="600" fontFamily="sans-serif">
                       Reimagining Digital Healthcare
                  </Typography>
                      <Typography color="#425162" sx={{ fontSize: { lg: "18px", md: "12px", sm: "10px", xs: "9px" },lineHeight:{lg:"1.90",md:"1.70",sm:"1.50",xs:"1.20"} }}>
                          Remote health monitoring solutions to make primary healthcare easily accessible
                  </Typography>
                  <Box sx={{ width: {lg:"296px",sm:"110px",md:"130px",xs:"90px"}, height: {lg:"80px",md:"40px",xs:"30px",sm:"30px"}, backgroundImage: "linear-gradient(262deg, #aed874, #8ec640)", borderRadius: "40px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow:"6px 10px 30px 0 rgb(0 0 0 / 23%)",m:{lg:4,md:3,sm:2,xs:1}}}>
                          <Typography color="white" sx={{ fontSize: { lg: '24px', md: '10px', sm: '12px', xs: "7px" ,cursor:'pointer'} }} fontWeight="600" fontFamily="Montserrat" onClick={handleClickOpen}>Our Policy</Typography>
                  </Box>
              </Box>
                  <Box>
                  <Box sx={{textAlign:"Center",width:{lg:"100%",md:"80%",sm:"70%",xs:"70%"},margin:'auto'}}>
                      <img src={heroImage} height="auto" width="100%" />
                      </Box>
                  </Box>
              </Box>
              </motion.div>
          </Box>
          </>
  )
}

export default HeroSection
