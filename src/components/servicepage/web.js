import * as React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
  
import LanguageIcon from '@mui/icons-material/Language';
import ApiIcon from '@mui/icons-material/Api';

import StorageIcon from '@mui/icons-material/Storage';
import WebhookIcon from '@mui/icons-material/Webhook';
import BugReportIcon from '@mui/icons-material/BugReport';

import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import WebIcon from '@mui/icons-material/Web';


import SecurityIcon from '@mui/icons-material/Security';
import AdsClickIcon from '@mui/icons-material/AdsClick';

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
import IndexNavbar from '../../components/Navbars/IndexNavbar';
import ContactApi from '../../components/PageHeader/Contact';






const items = [
    {
        icon: <WebhookIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'API Development',
        pin: "/services/web/api",
        description:
            "Create APIs with skill and might,  Connecting systems for seamless flight."
    },
    {
        icon: <LanguageIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Web and App Development',
        pin: "/services/web/dev",
        description:
            "Crafting websites and apps with flair,  Development that’s beyond compare."
    },
    {
        icon: <StorageIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Hosting',
        pin: "/services/web/hosting",
        description:
            "Reliable hosting, swift and sound,  Your site is safe and always found."
    },
    {
        icon: <SecurityIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Web Security',
        pin: "/services/web/security",
        description:
            "Guard your site with layers tight,  Security to keep threats out of sight."
    },
    {
        icon: <BugReportIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Testing',
        pin: "/services/web/testing",
        description:
            "Find the bugs and fix them right,  Testing ensures your code’s in flight."
    },
    {
        icon: <AdsClickIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Ads',
        pin: "/services/web/ads",
        description:
            "Promote with ads that reach the crowd,  Marketing that stands out loud."
    },
];


const Web = () => {


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
                                Custom Web / App Development
                            </h3>
                            <p className="text-white mb-3" style={{ fontSize: 16 }} >
                                Create a unique presence with custom web and app development. Our creativity and expertise ensure the best functionality and experience. We offer tailored solutions that cater to your specific business needs, providing comprehensive services from design to deployment. This guide highlights key components within custom web and app development, focusing on Ads, API Development, Hosting, Testing, and Web Security.
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
                                src={require("../../assets/img/services/webpage.png")}
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


                        <div className="mx-auto max-w-2xl px-1 sm:px-6 lg:max-w-7xl lg:px-8 ">
                            <h3 className="sm:text-4xl semibold text-white text-center" style={{ fontSize: 35, fontWeight: "bold" }}>
                                Tailored Web & App Development
                            </h3>
                            <p className="sm:text-xl font-semibold text-white text-center mb-5" style={{ fontSize: 18 }}>
                                Stand out with custom web and app development designed to fit your unique business needs. Our expert team combines creativity and technical skill to deliver top-notch functionality and user experience. From initial design to final deployment, we provide end-to-end solutions including Ads, API Development, Hosting, Testing, and Web Security. Let us help you create a powerful digital presence that drives success.
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
                                        <NavLink href={item.pin} >


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

                                            <ApiIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20, fontSize: 18, fontWeight: "bold" }} >Tailored Solution</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize: 16 }} >
                                            Specifically designed to meet your unique business needs, ensuring optimal functionality.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-warning" style={{ marginBottom: 10 }}>
                                            <WebIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20, fontSize: 18, fontWeight: "bold" }}>Enhanced User Experience:</h4>
                                        <hr className="line-warning" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize: 16 }}>
                                            Custom development focuses on intuitive design and efficient performance, improving user satisfaction.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div style={{ margin: 20 }}  >
                                        <div className="icon icon-success" style={{ marginBottom: 20 }}>
                                            <ManageHistoryIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20, fontSize: 18, fontWeight: "bold" }}>Comprehensive Services</h4>
                                        <hr className="line-success" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize: 16 }}>
                                            From initial design to deployment, includes API development, testing, and robust security measures for a complete solution.
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


export default Web