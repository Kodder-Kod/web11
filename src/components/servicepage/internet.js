

import * as React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

import VideocamIcon from '@mui/icons-material/Videocam';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';


import CloudIcon from '@mui/icons-material/Cloud';

import {
    Typography,
    Grid,
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
import Footer from "../../components/Footer/Footer.js";
import RouterIcon from '@mui/icons-material/Router';
import IndexNavbar from '../../components/Navbars/IndexNavbar';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ContactApi from '../../components/PageHeader/Contact';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SecurityIcon from '@mui/icons-material/Security';
import CellWifiIcon from '@mui/icons-material/CellWifi';






const items = [
    {
        icon: <FingerprintIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Biometric and Automatic Gates',
        pin: "/services/internet/biometric",
        description:
            "Secure your access with a modern touch,  Biometric gates protect you as much."
    },
    {
        icon: <VideocamIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'CCTVs',
        pin: "/services/internet/CCTV",
        description:
            "Watch over your space with CCTV’s view,  Keeping your premises safe and true."
    },
    {
        icon: <CloudIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Cloud Services',
        pin: "/services/internet/Cloud",
        description:
            "Store and access from anywhere high,  Cloud services reach up to the sky."
    },
    {
        icon: <SettingsRemoteIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Network Solutions',
        pin: "/services/internet/network",
        description:
            "Networks that function without a hitch,  Solutions that make your tech seamlessly switch."
    },
    {
        icon: <TravelExploreIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'SEO (Search Engine Optimization)',
        pin: "/services/internet/seo",
        description:
            "Boost your rank with SEO’s might,  Shining your website in the search results' light."
    },
    {
        icon: <RouterIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Internet Services and Hotspot',
        pin: "/services/internet/internet",
        description:
            "Connect with ease, stay online,  Our internet services are truly fine."
    },
];


const Internet = () => {

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
                                Internet and Routing Services
                            </h3>
                            <p className="text-white mb-3" style={{ fontSize: 16 }}>
                                Internet and routing services are essential for connecting devices and networks, ensuring seamless communication and data transfer. These services include configuring and managing internet connections, setting up routers and network infrastructure, and providing secure and reliable internet access. This guide provides an overview of various categories within internet and routing services, focusing on Biometric and Automatic Gates, CCTVs, Cloud Services, Internet Services and Hotspot, Network Solutions, and SEO.
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
                        <Col lg="6" md="6">
                            <img
                                alt="..."
                                className="img-fluid"
                                src={require("../../assets/img/services/network.png")}
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
                                Internet & Routing Services
                            </h3>
                            <p className="sm:text-xl font-semibold text-white text-center mb-5" style={{ fontSize: 18 }}>
                                Ensure seamless connectivity and efficient communication with our expert internet and routing services. We specialize in configuring and managing internet connections, setting up routers and network infrastructure, and delivering secure, reliable internet access. Explore our comprehensive offerings including Biometric and Automatic Gates, CCTV systems, Cloud Services, Internet and Hotspot solutions, Network Solutions, and SEO services, all designed to optimize and protect your digital environment.
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


                                        <NavLink href={item.pin}>

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

                                            <AccountTreeIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20, fontWeight: "bold", fontSize: 18, }} >Enhanced Network Performance</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize: 16, }} >
                                            By setting up routers and optimizing network infrastructure, internet and routing services improve network performance, ensuring faster data transmission and better overall efficiency.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-warning" style={{ marginBottom: 10 }}>
                                            < SecurityIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20, fontWeight: "bold", fontSize: 18, }}>Secure and Reliable Access</h4>
                                        <hr className="line-warning" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize: 16, }}>
                                            These services provide secure and reliable internet access, essential for maintaining privacy, protecting data integrity, and preventing unauthorized access.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div style={{ margin: 20 }}  >
                                        <div className="icon icon-success" style={{ marginBottom: 20 }}>
                                            <CellWifiIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20, fontWeight: "bold", fontSize: 18, }}>Seamless Connectivity</h4>
                                        <hr className="line-success" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize: 16, }}>
                                            Internet and routing services facilitate seamless communication and data transfer by configuring and managing internet connections, ensuring devices and networks are interconnected effectively.
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


export default Internet