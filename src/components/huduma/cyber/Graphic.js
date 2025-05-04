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
import AbcIcon from '@mui/icons-material/Abc';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import EngineeringIcon from '@mui/icons-material/Engineering';
import GroupsIcon from '@mui/icons-material/Groups';


const pricingPlans = [
    {
      title: "Basic Package",
      description: "Entry Plan",
      price: "Ksh 5,000",
      features: [
        "1 custom graphic design",
        "Basic edits",
        "Email support",
        "2 revisions"
      ],
      img: require("../../../assets/img/services/medal.png"), // Corrected image format
      buttonColor: "primary"
    },
    {
     title: "Advanced Package",
      description: "Best Value",
      price: "Ksh 12,000",
      features: [
        "Up to 3 custom designs",
        "Advanced edits",
        "Email & phone support",
        "5 revisions",
        "Branding consultation"
      ],
      img: require("../../../assets/img/services/belt.png"), // Corrected image format
      buttonColor: "success"
    },
    {
      title: "Premium Package",
      description: "Premium Plan",
      price: "Ksh 20,000",
      features: [
        "Unlimited custom designs",
        "Premium edits",
        "Dedicated design team",
        "10 revisions",
        "Social media graphics",
        "Print and digital formats",
        "24/7 premium support"
      ],
      img: require("../../../assets/img/services/crown.png"), // Corrected image format
      buttonColor: "info"
    }
  ];
  


const Graphics = () => {


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
            
                                Graphic Design and Photoshop
                            </h3>
                            <p className="text-white mb-3" style={{ fontSize: 18 }}>
                                Graphic design and Photoshop services offer creative solutions for branding, marketing materials, and visual content. These services enhance the visual appeal and effectiveness of your business communications.
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
                                src={require("../../../assets/img/services/graphics.png")}
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
                                         
                                            < AbcIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Brand Identity</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                       <p style={{ marginBottom: 20,fontSize:16 }} >
                                            Helps create a strong brand identity with visually appealing and consistent designs that resonate with your target audience.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-primary" style={{ marginBottom: 10 }}>
                                            <GroupsIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Marketing Impact</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                       <p style={{ marginBottom: 20,fontSize:16 }} >
                                            Enhances the effectiveness of marketing campaigns with compelling visuals that attract and engage customers.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-warning" style={{ marginBottom: 10 }}>
                                            <EngineeringIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                           
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Professional Quality</h4>
                                        <hr className="line-warning" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20,fontSize:16 }} >
                                            Delivers high-quality graphic designs that enhance the professionalism and credibility of your business.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }}  >
                                        <div className="icon icon-success" style={{ marginBottom: 20 }}>
                                            <SettingsSuggestIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                           
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Customization</h4>
                                        <hr className="line-success" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20,fontSize:16 }} >
                                            Offers tailored design solutions that meet specific business needs and preferences, ensuring uniqueness and relevance.
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


export default Graphics