


import * as React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import SchoolIcon from '@mui/icons-material/School';
import StoreIcon from '@mui/icons-material/Store';


import { AiFillAndroid } from "react-icons/ai";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';



import {
    //Container,
    //Card,

    Typography,
    Grid,
    // Button,
    Box,
 
} from "@mui/material";

import {
    Button,
    Card,
   
    NavLink,
 
    Container,
    Row,
    Col,
    UncontrolledTooltip,

} from "reactstrap";
// core components

import { Stack } from "@mui/system";
import Footer from  "../../components/Footer/Footer.js";
import IndexNavbar from  '../../components/Navbars/IndexNavbar';
import HotelIcon from '@mui/icons-material/Hotel';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ContactApi from  '../../components/PageHeader/Contact';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';





const items = [
    {
        icon: <SchoolIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'School Management System',
        pin: "/services/management/School",
        description:
            "For schools and classes, manage with grace,  Our system keeps every detail in place."
    },
    {
        icon: <MedicationLiquidIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Hospital Management System',
        pin: "/services/management/Hospital",
        description:
            "Hospitals run smoothly with our smart plan,  Managing health with a touch of our hand."
    },
    {
        icon: <LocalShippingIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Supply Chain Management System',
        pin: "/services/management/Supplychain",
        description:
            "From supplier to store, we manage the flow,  Optimizing chains to make business grow."
    },
    {
        icon: <HotelIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Hospitality and Hotel Management System',
        pin: "/services/management/Hospitality",
        description:
            "For hotels and guests, our system's the key,  Managing stays with efficiency."
    },
    {
        icon: <StoreIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Asset Management System',
        pin: "/services/management/Asset",
        description:
            "Track your assets with ease and cheer,  Our system ensures everything’s near."
    },
    {
        icon: <WarehouseIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Warehouse Management System',
        pin: "/services/management/Warehouse",
        description:
            "In your warehouse, our system will aid, Managing stock so your plans don’t fade."
    },
];


const Management = () => {

    React.useEffect(() => {
        document.body.classList.toggle("landing-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("landing-page");
        };
    }, []);

    return (
        <>
            <IndexNavbar />
            <div className="page-header">
                <img
                    alt="..."
                    className="path"
                     src={require("../../assets/img/blob.png")}
                />
                <img
                    alt="..."
                    className="path2"
                     src={require("../../assets/img/path2.png")}
                />
                <img
                    alt="..."
                    className="shapes triangle"
                     src={require("../../assets/img/triunghiuri.png")}
                />
                <img
                    alt="..."
                    className="shapes wave"
                     src={require("../../assets/img/waves.png")}
                />
                <img
                    alt="..."
                    className="shapes squares"
                     src={require("../../assets/img/patrat.png")}
                />
                <img
                    alt="..."
                    className="shapes circle"
                     src={require("../../assets/img/cercuri.png")}
                />
                <div className="content-center">
                    <Row className="row-grid justify-content-between align-items-center text-left">
                        <Col lg="6" md="6">
                        <h3 className=" sm:text-5xl font-semibold text-black  " style={{ fontSize: 35, fontWeight: "bold", }}>
                                Management Systems
                            </h3>
                            <p className="text-white mb-3" style={{fontSize:16}}>
                                Management systems are designed to streamline and optimize various operations within different industries. They help organizations manage resources efficiently, improve service delivery, and enhance overall productivity. This guide provides an overview of key management systems and their benefits
                            </p>
                            <div className="btn-wrapper mb-3">
                                <p className="category text-success d-inline">
                                Social Media  
                                </p>
                                <Button
                                    className="btn-link"
                                    color="success"
                                    href="#Services"
                                   
                                    size="sm"
                                >
                                    <i className="tim-icons icon-minimal-right" />
                                </Button>
                            </div>
                            <div className="btn-wrapper">
                              <div className="btn-wrapper profile" style={{ display: 'flex', flexDirection: 'row' }}>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://x.com/ChisendTech"
                id="tooltip622135962"
                target="_blank"
                style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row' }}
              >
                <FaXTwitter size={18} />
              </Button>

              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.facebook.com/profile.php?id=61572321430238"
                id="tooltip230450801"
                target="_blank"
                style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row' }}
              >
                <FaFacebookSquare size={20} />
              </Button>

              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="http://tiktok.com/@chisend0"
                id="tooltip318450378"
                target="_blank"
                style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row' }}
              >
                <AiFillTikTok size={20} />
              </Button>

              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Follow us
              </UncontrolledTooltip>
            </div>
                            </div>
                        </Col>
                        <Col lg="6" md="5">
                            <img
                                alt="..."
                                className="img-fluid floating"
                                 src={require("../../assets/img/services/manage2.png")}
                            />
                        </Col>
                    </Row>
                </div>
            </div>



            <section id="#Services">
                <Box
                    id="highlights"
                    sx={{
                        pt: { xs: 4, sm: 12 },
                        pb: { xs: 8, sm: 16 },
                        color: 'white',


                    }}
                >
                    <Container
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: { xs: 3, sm: 6 },
                        }}
                    >


<div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
    <h3 className="sm:text-4xl font-semibold text-white text-center" style={{ fontSize: 35, fontWeight: "bold" }}>
        Advanced Management Systems
    </h3>
    <p className="sm:text-xl font-semibold text-white text-center mb-5" style={{ fontSize: 18 }}>
        Elevate your operations with our cutting-edge management systems. Designed to streamline and optimize processes across various industries, our solutions enhance resource management, improve service delivery, and boost overall productivity. Explore how our management systems can transform your organization, making it more efficient and responsive to your needs.
    </p>
</div>


                        <Grid container spacing={1}>
                            {items.map((item, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Stack
                                        direction="column"
                                        color="inherit"
                                        component={Card}
                                        spacing={1}
                                        useFlexGap
                                        sx={{
                                            p: 3,
                                            height: '90%',
                                            border: '1px solid',
                                            borderColor: '#5e72e4',
                                            background: 'transparent',
                                            borderRadius: 15,
                                            backgroundColor: 'grey.900',
                                        }}
                                    >

                                        <NavLink href={item.pin}  >

                                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                                                <Box>{item.icon} </Box>
                                            </div>

                                            <div style={{ marginBottom: 15 }}>

                                                <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>

                                                    <Typography fontWeight="Bold" gutterBottom>
                                                        {item.title}
                                                    </Typography>

                                                </div>
                                            </div>
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                                                <Typography variant="body2" sx={{ color: 'grey.400', }} style={{ fontStyle: "light" }} >
                                                    {item.description}
                                                </Typography>
                                            </div>
                                            <div style={{ marginTop: 20 }}>
                                                <NavLink href={item.pin} style={{ color: "#00bbff", }} >
                                                    Read More  ...
                                                </NavLink>
                                            </div>
                                        </NavLink>
                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

            </section>

            <section className="section " >

                <Container>
                    <Row className="justify-content-center">
                        <Col lg="12">
                            <div >
                             
                            <h3 className=" sm:text-5xl font-semibold text-black text-center " style={{ fontSize: 35, fontWeight: "bold", }}>Your benefits</h3>
                            </div>

                            <Row className="row-grid justify-content-center" >
                                <Col lg="4">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-primary" style={{ marginBottom: 10 }}>
                                  
                                         
                                            <MoreTimeIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20,fontSize:18, fontWeight:"bold" }} >Efficient Resource Management</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20,fontSize:16 }} >
                                        Management systems streamline how resources are allocated and utilized, reducing inefficiencies and minimizing waste.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-warning" style={{ marginBottom: 10 }}>
                                            <PrecisionManufacturingIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                      
                                           
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 ,fontSize:18, fontWeight:"bold" }}>Increased Operational Productivity</h4>
                                        <hr className="line-warning" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20,fontSize:16 }}>
                                        By automating routine tasks and improving communication channels, management systems empower teams to work more effectively, resulting in higher overall productivity. </p>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div style={{ margin: 20 }}  >
                                        <div className="icon icon-success" style={{ marginBottom: 20 }}>
                                     
                                            <MiscellaneousServicesIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                           
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 ,fontSize:18, fontWeight:"bold" }}>Enhanced Service Delivery</h4>
                                        <hr className="line-success" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 ,fontSize:16 }}>
                                        These systems organize and optimize workflows, leading to more consistent, reliable, and timely delivery of services.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <ContactApi />

            <Footer />
        </>
    )
}


export default Management