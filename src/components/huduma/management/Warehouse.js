import * as React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
  
 
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
import SchemaIcon from '@mui/icons-material/Schema';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import GradingIcon from '@mui/icons-material/Grading';
import InventoryIcon from '@mui/icons-material/Inventory';

const pricingPlans = [
    {
      title: "Basic Package",
      description: "Entry Plan",
      price: "Ksh 30,000",
      features: [
        "Inventory management",
        "Single-user access",
        "Basic order fulfillment",
        "Daily reports"
      ],
      img: require("../../../assets/img/services/medal.png"), // Corrected image format
      buttonColor: "primary"
    },
    {
     title: "Advanced Package",
      description: "Best Value",
      price: "Ksh 50,000",
      features: [
        "Up to 5 users",
        "Automated inventory tracking",
        "Shipping management",
        "Order processing",
        "Supplier management",
        "Priority support"
      ],
      img: require("../../../assets/img/services/belt.png"), // Corrected image format
      buttonColor: "success"
    },
    {
      title: "Premium Package",
      description: "Premium Plan",
      price: "Ksh 80,000",
      features: [
        "Unlimited users",
        "Real-time analytics",
        "Mobile app for tracking",
        "Third-party integrations",
        "Custom workflows",
        "Barcode scanning",
        "Multi-location support",
        "24/7 premium support"
      ],
      img: require("../../../assets/img/services/crown.png"), // Corrected image format
      buttonColor: "info"
    }
  ];
  


const Warehouse = () => {


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
            
                                Warehouse Management System
                            </h3>
                            <p className="text-white mb-3" style={{ fontSize: 18 }}>
                                Warehouse management system (WMS) automates and optimizes warehouse operations, including inventory management, order fulfillment, and shipping. It aims to improve efficiency, accuracy, and overall warehouse productivity.
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
                                src={require("../../../assets/img/services/warehouse.png")}
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
                     
                                            <InventoryIcon  sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Inventory Control</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                       <p style={{ marginBottom: 20,fontSize:16 }} >
                                            Provides accurate real-time inventory tracking, reducing stock discrepancies and ensuring proper stock levels.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-primary" style={{ marginBottom: 10 }}>
                                            <GradingIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Order Accuracy</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                       <p style={{ marginBottom: 20,fontSize:16 }} >
                                            Enhances order picking and fulfillment accuracy, reducing errors and returns, leading to higher customer satisfaction.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-warning" style={{ marginBottom: 10 }}>
                                            < SchemaIcon sx={{ color: "#00bbff", fontSize: 50 }} />,

                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Space Utilization</h4>
                                        <hr className="line-warning" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20,fontSize:16 }} >
                                            Optimizes warehouse layout and space utilization, improving storage efficiency and maximizing available space.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }}  >
                                        <div className="icon icon-success" style={{ marginBottom: 20 }}>
                                            < AutoGraphIcon sx={{ color: "#00bbff", fontSize: 50 }} />,

                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Operational Efficiency</h4>
                                        <hr className="line-success" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20,fontSize:16 }} >
                                            Streamlines receiving, putaway, picking, and shipping processes, increasing productivity and reducing operational costs.
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


export default Warehouse