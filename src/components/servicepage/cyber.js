
import * as React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

import CompareIcon from '@mui/icons-material/Compare';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import SmsIcon from '@mui/icons-material/Sms';

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
import Footer from  "../../components/Footer/Footer.js";
import IndexNavbar from  '../../components/Navbars/IndexNavbar';
import ContactApi from  '../../components/PageHeader/Contact';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PodcastsIcon from '@mui/icons-material/Podcasts';


const items = [
    {
        icon: <SmsIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Bulk SMS',
        pin: "/services/cyber/bulksms",
        description:
            "Send messages in bulk with ease, Connect with your clients as you please."
    },
    {
        icon: <RecordVoiceOverIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'IT Consulting',
        pin: "/services/cyber/consultant",
        description:
            "With expert advice and guidance true, We’ll streamline your IT for success anew."
    },
    {
        icon: <DocumentScannerIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Document Making (e.g., Menus, Excel, PPT)',
        pin: "/services/cyber/documents",
        description:
            "Craft documents with flair and style, Menus, PPTs, and Excel all worthwhile."
    },
    {
        icon: <AccountTreeIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Projects and Writing Assignments',
        pin: "/services/cyber/project",
        description:
            "For projects and papers, we’ll do it right, Our solutions are clear, precise, and bright."
    },
    {
        icon: <CompareIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Graphic Design and Photoshop',
        pin: "/services/cyber/graphics",
        description:
            "Designs that pop and images that gleam, Photoshop magic fulfills every dream."
    },
    {
        icon: <AccountBalanceIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Taxes in eCitizen and All Other eCitizen Assistance',
        pin: "/services/cyber/tax",
        description:
            "From taxes to forms, we’ll guide your way, With eCitizen help, you'll save the day."
    },
];



const Cyber = () => {


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
            
                                e-Cyber Services and IT Consulting
                            </h3>
                            <p className="text-white mb-3"  style={{fontSize:16}} >
                                Ensure smooth IT operations with our help desk and consulting services, providing 24/7 support for e-Citizen, tax management, document handling, and more. Our expertise covers a wide range of IT solutions tailored to meet the unique needs of businesses and individuals. This guide highlights key components within e-Cyber Services and IT Consulting, focusing on Bulk SMS, IT Consulting, Document Making (e.g., menus, Excel, PPT, graphics), Project Management, Taxes in eCitizen and all other eCitizen Assistance, Projects, and Writing Assignments.
                            </p>
                            <div className="btn-wrapper mb-3">
                                <p className="category text-success d-inline">
                                Social Media  
                                </p>
                                <Button
                                    className="btn-link"
                                    color="success"
                                    href="#pablo"
                                   
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
                                 src={require("../../assets/img/services/data.png")}
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
                            <h3 className="sm:text-5xl font-semibold text-black text-center" style={{ fontSize: 35, fontWeight: "bold" }}>
                                Cutting-Edge IT Services
                            </h3>
                            <p className="sm:text-2xl font-semibold text-black text-center mb-5" style={{ fontSize: 18 }}>
                                Discover a realm of innovative IT services designed to supercharge your business. From custom software and dynamic web/app development to insightful data analysis, robust networking solutions, and dedicated help desk support, our expert team is here to propel your success. Experience the difference and let us craft the perfect IT strategy to meet your unique needs.
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

                                            <AccessTimeFilledIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20, fontSize:18, fontWeight:"bold" }} >24/7 Support and Help Desk</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 , }} />
                                       <p style={{ marginBottom: 20,fontSize:16 }} >
                                            Ensures continuous IT support for e-Citizen services, tax management, document handling, and more, maintaining smooth operations around the clock.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-warning" style={{ marginBottom: 10 }}>
                                            <PodcastsIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20, fontSize:18, fontWeight:"bold"}}>Wide Range of IT Solutions</h4>
                                        <hr className="line-warning" style={{ marginBottom: 20  ,}} />
                                        <p style={{ marginBottom: 20,fontSize:16 }} >
                                            Offers tailored IT solutions covering diverse needs such as Bulk SMS, IT consulting, document creation (e.g., menus, Excel, PPT, graphics), project management, and tax assistance within e-Citizen, catering to both businesses and individuals.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div style={{ margin: 20 }}  >
                                        <div className="icon icon-success" style={{ marginBottom: 20 }}>
                                            <SettingsSuggestIcon sx={{ color: "#00bbff", fontSize: 50 }} />,

                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20, fontSize:18, fontWeight:"bold" }}>Expertise and Customization</h4>
                                        <hr className="line-success" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20,fontSize:16 }} >
                                            Provides specialized expertise in various IT domains, ensuring solutions are customized to meet specific business and personal requirements, enhancing efficiency and effectiveness.
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


export default Cyber