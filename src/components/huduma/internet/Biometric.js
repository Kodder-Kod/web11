import * as React from 'react';
 
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
} from "reactstrap";
// core components


import Footer from "../../../components/Footer/Footer.js";
import IndexNavbar from '../../../components/Navbars/IndexNavbar';
import ContactApi from '../../../components/PageHeader/Contact';
import SecurityIcon from '@mui/icons-material/Security';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const pricingPlans = [
    {
      title: "Basic Package",
      description: "Entry Plan",
      price: "Ksh 30,000",
      features: [
        "Single biometric access point",
        "Basic access control features",
        "Email support",
        "Installation guide"
      ],
      img: require("../../../assets/img/services/medal.png"), // Corrected image format
      buttonColor: "primary"
    },
    {
     title: "Advanced Package",
      description: "Best Value",
      price: "Ksh 50,000",
      features: [
        "Dual biometric access points",
        "Advanced access control features",
        "Email & phone support",
        "User management system",
        "Installation assistance",
        "Access logs and reports"
      ],
      img: require("../../../assets/img/services/belt.png"), // Corrected image format
      buttonColor: "success"
    },
    {
      title: "Premium Package",
      description: "Premium Plan",
      price: "Ksh 80,000",
      features: [
        "Multiple biometric access points",
        "Comprehensive access control features",
        "Dedicated support team",
        "Integration with security systems",
        "Real-time access monitoring",
        "Customizable settings",
        "Training for staff",
        "Full system documentation"
      ],
      img: require("../../../assets/img/services/crown.png"), // Corrected image format
      buttonColor: "info"
    }
  ];
  



const Biometric = () => {


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
            
                                Biometric and Automatic Gates
                            </h3>
                            <p className="text-white mb-3" style={{ fontSize: 18 }}>
                                Biometric and automatic gate systems offer advanced security solutions by integrating biometric technology with automated access control. These systems enhance security, streamline access management, and improve overall operational efficiency.
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
                                <div className="button-container">
                                    <Button
                                        className="btn-icon btn-simple btn-round btn-neutral"
                                        color="default"
                                        href="#pablo"
                                        
                                    >
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-simple btn-round btn-neutral"
                                        color="default"
                                        href="https://twitter.com/"
                                       
                                    >
                                        <i className="fab fa-twitter" />
                                    </Button>
                                     <Button
                                        className="btn-icon btn-simple btn-round btn-neutral"
                                        color="default"
                                        href="https://facebook.com/"
                                       
                                    >
                                        <i className="fab fa-facebook" />
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <img
                                alt="..."
                                className="img-fluid"
                                src={require("../../../assets/img/services/biometric.png")}
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
                                          
                                            <SecurityIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Enhanced Security</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize:16 }}>
                                            Utilizes biometric authentication methods, such as fingerprint or facial recognition, to ensure secure access.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-primary" style={{ marginBottom: 10 }}>
                                            <AutoGraphIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Operational Efficiency</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize:16 }}>
                                            Automates access control, reducing the need for manual intervention and streamlining entry and exit processes.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-warning" style={{ marginBottom: 10 }}>
                                            <MonitorHeartIcon sx={{ color: "#00bbff", fontSize: 50 }} />,

                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Access Monitoring</h4>
                                        <hr className="line-warning" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize:16 }}>
                                            Provides real-time tracking and logging of access events, improving monitoring and incident response
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }}  >
                                        <div className="icon icon-success" style={{ marginBottom: 20 }}>
                                            <ThumbUpIcon sx={{ color: "#00bbff", fontSize: 50 }} />,

                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>User Convenience</h4>
                                        <hr className="line-success" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize:16 }}>
                                            Divide details about your product or agency work into
                                            Offers a seamless and quick access experience for authorized personnel, reducing wait times and improving user satisfaction.
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

            <ContactApi />

            <Footer />
        </>
    )
}


export default Biometric