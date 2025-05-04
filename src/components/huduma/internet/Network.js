import * as React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
  
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import SecurityIcon from '@mui/icons-material/Security';

// react plugin used to create charts
 
// reactstrap components
import {
    //  Button,
    // Card,
    // CardHeader,
    //  CardBody,
    CardFooter,
    //  CardTitle,
    ListGroupItem,
    ListGroup,
    // Container,
    // Row,
    // Col,
} from "reactstrap";


  import {
  Button,
  Card,
  CardHeader,
  CardBody,

  Container,
  Row,
  Col,
  UncontrolledTooltip,
  
} from "reactstrap";
// core components


import Footer from "../../../components/Footer/Footer.js";

import IndexNavbar from '../../../components/Navbars/IndexNavbar';
import ContactApi from '../../../components/PageHeader/Contact';

const pricingPlans = [
    {
      title: "Basic Package",
      description: "Entry Plan",
      price: "Ksh 10,000",
      features: [
        "Basic network setup",
        "Up to 10 devices",
        "Standard support",
        "Network monitoring"
      ],
      img: require("../../../assets/img/services/medal.png"), // Corrected image format
      buttonColor: "primary"
    },
    {
     title: "Advanced Package",
      description: "Best Value",
      price: "Ksh 40,000",
      features: [
        "Advanced setup",
        "Up to 50 devices",
        "Priority support",
        "Network optimization",
        "Data security tools",
        "Usage analytics"
      ],
      img: require("../../../assets/img/services/belt.png"), // Corrected image format
      buttonColor: "success"
    },
    {
      title: "Premium Package",
      description: "Premium Plan",
      price: "Ksh 70,000",
      features: [
        "Comprehensive setup",
        "Unlimited devices",
        "24/7 support",
        "Custom solutions",
        "Enhanced security",
        "Performance monitoring",
        "Scalability options",
        "Full documentation"
      ],
      img: require("../../../assets/img/services/crown.png"), // Corrected image format
      buttonColor: "info"
    }
  ];
  


const Network = () => {


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
                    src={require("../../../assets/img/blob.png")}
                />
                <img
                    alt="..."
                    className="path2"
                    src={require("../../../assets/img/path2.png")}
                />
                <img
                    alt="..."
                    className="shapes triangle"
                    src={require("../../../assets/img/triunghiuri.png")}
                />
                <img
                    alt="..."
                    className="shapes wave"
                    src={require("../../../assets/img/waves.png")}
                />
                <img
                    alt="..."
                    className="shapes squares"
                    src={require("../../../assets/img/patrat.png")}
                />
                <img
                    alt="..."
                    className="shapes circle"
                    src={require("../../../assets/img/cercuri.png")}
                />
                <div className="content-center">
                    <Row className="row-grid justify-content-between align-items-center text-left">
                        <Col lg="6" md="6">
                            <h3 className=" sm:text-5xl font-semibold text-black  " style={{ fontSize: 35, fontWeight: "bold", }}>
            
                            Network Solutions
                            </h3>
                            <p className="text-white mb-3" style={{ fontSize: 18 }}>
                            Network solutions encompass the design, implementation, and management of business networks. These solutions ensure reliable connectivity, secure data transfer, and efficient communication across the organization.
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
                                src={require("../../../assets/img/services/network.png")}
                            />
                        </Col>
                    </Row>
                </div>
            </div>


            <section className="section " >

                <Container>
                    <Row className="justify-content-center">
                        <Col lg="12">
                            <div >
                                 <h3 className=" sm:text-5xl font-semibold text-black text-center " style={{ fontSize: 35, fontWeight: "bold", }}>Your benefits</h3>
                            </div>

                            <Row className="row-grid justify-content-center" >
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-primary" style={{ marginBottom: 10 }}>
                                  
                                            <OfflineBoltIcon  sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Robust Connectivity</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize:16 }}>
                                        Ensures a reliable and high-performance network infrastructure, supporting seamless communication and data transfer.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-primary" style={{ marginBottom: 10 }}>
                                            < SecurityIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Security Enhancements</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize:16 }}>
                                        Implements advanced security protocols and measures to protect the network from unauthorized access and cyber threats.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-warning" style={{ marginBottom: 10 }}>
                                            < FitScreenIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                           
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Scalability</h4>
                                        <hr className="line-warning" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize:16 }}>
                                        Designs scalable network architectures that can grow with the business, accommodating increasing data and connectivity demands.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }}  >
                                        <div className="icon icon-success" style={{ marginBottom: 20 }}>
                                            <AutoGraphIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                            
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Optimized Performance:</h4>
                                        <hr className="line-success" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize:16 }}>
                                        Monitors and optimizes network performance, reducing latency and improving the efficiency of business operations.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section >

            <Container>
                    <Row style={{ display: "flex", alignItems: "center", justifyContent: 'center' }} >
                        <Col md="4" style={{ marginTop: 100 }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                                  <h3 className=" sm:text-5xl font-semibold text-black text-center " style={{ fontSize: 35, fontWeight: "bold", }}>
                                    Pricing
                                    <hr className="line-info" />
                                </h3>
                            </div>

                        </Col>
                    </Row>



                    <Row style={{ marginTop: 120 }}>
      {pricingPlans.map((plan, index) => (
        <Col md="4" key={index}>
          <Card className="card-coin card-plain">
            <CardHeader>
              <img
                alt="..."
                className="img-center img-fluid"
                src={plan.img}
              />
            </CardHeader>
            <CardBody>
              <Row>
                <Col className="text-center" md="12">
                  <h4 className="text-uppercase">{plan.title}</h4>
                  <span>{plan.description}</span>
                  <hr className={`line-${plan.buttonColor}`} />
                </Col>
              </Row>
              <Row>
                <ListGroup>
                  {plan.features.map((feature, idx) => (
                    <ListGroupItem key={idx}>• {feature}</ListGroupItem>
                  ))}
                </ListGroup>
              </Row>
            </CardBody>
            <CardFooter className="text-center">
              <Button className="btn-simple" color={plan.buttonColor}>
                {plan.price}
              </Button>
            </CardFooter>
          </Card>
        </Col>
      ))}
    </Row>
 



                </Container>
                
            </section>

            <ContactApi/>

            <Footer />
        </>
    )
}


export default Network