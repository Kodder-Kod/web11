import * as React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import LanIcon from '@mui/icons-material/Lan';

import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';

import SchoolIcon from '@mui/icons-material/School';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';



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
    price: "Ksh 30,000",
    features: [
      "Student enrollment",
      "Attendance tracking",
      "Single-user access",
      "Basic reports"
    ],
    img: require("../../../assets/img/services/medal.png"),
    buttonColor: "primary"
  },
  {
    title: "Advanced Package",
    description: "Best Value",
    price: "Ksh 50,000",
    features: [
      "Up to 5 users",
      "Grade management",
      "Parent-teacher communication",
      "Class schedules",
      "Online assignments",
      "Priority support"
    ],
    img: require("../../../assets/img/services/belt.png"),
    buttonColor: "success"
  },
  {
    title: "Premium Package",
    description: "Premium Plan",
    price: "Ksh 80,000",
    features: [
      "Unlimited users",
      "Performance analytics",
      "Mobile app for parents & students",
      "Exam scheduling & results",
      "Fee management system",
      "Library management",
      "Third-party integrations",
      "24/7 support"
    ],
    img: require("../../../assets/img/services/crown.png"),
    buttonColor: "info"
  }
];




const School = () => {


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

                School Management System
              </h3>
              <p className="text-white mb-3" style={{ fontSize: 18 }}>
                School management system automates and manages the administrative and academic processes of educational institutions. It includes features for student enrollment, attendance tracking, grade management, and communication with parents and teachers.
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
                src={require("../../../assets/img/services/school.png")}
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

                      <LanIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                    </div>
                    <h4 className="info-title" style={{ marginBottom: 20 }} >Administrative Efficiency</h4>
                    <hr className="line-primary" style={{ marginBottom: 20 }} />
                    <p style={{ marginBottom: 20, fontSize: 16 }}>
                      Streamlines administrative tasks, reducing paperwork and freeing up time for staff.
                    </p>
                  </div>
                </Col>
                <Col lg="3">
                  <div style={{ margin: 20 }} >
                    <div className="icon icon-primary" style={{ marginBottom: 10 }}>
                      <SchoolIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                    </div>
                    <h4 className="info-title" style={{ marginBottom: 20 }} >Academic Management</h4>
                    <hr className="line-primary" style={{ marginBottom: 20 }} />
                    <p style={{ marginBottom: 20, fontSize: 16 }}>
                      Simplifies grading and assessment processes, ensuring accuracy and transparency.
                    </p>
                  </div>
                </Col>
                <Col lg="3">
                  <div style={{ margin: 20 }} >
                    <div className="icon icon-warning" style={{ marginBottom: 10 }}>
                      <FamilyRestroomIcon sx={{ color: "#00bbff", fontSize: 50 }} />,

                    </div>
                    <h4 className="info-title" style={{ marginBottom: 20 }}>Parental Engagement</h4>
                    <hr className="line-warning" style={{ marginBottom: 20 }} />
                    <p style={{ marginBottom: 20, fontSize: 16 }}>
                      Enhances communication between school and parents, keeping them informed about their child's progress.
                    </p>
                  </div>
                </Col>
                <Col lg="3">
                  <div style={{ margin: 20 }}  >
                    <div className="icon icon-success" style={{ marginBottom: 20 }}>
                      <SupportAgentRoundedIcon sx={{ color: "#00bbff", fontSize: 50 }} />,

                    </div>
                    <h4 className="info-title" style={{ marginBottom: 20 }}>Resource Allocation</h4>
                    <hr className="line-success" style={{ marginBottom: 20 }} />
                    <p style={{ marginBottom: 20, fontSize: 16 }}>
                      Efficient management of school resources, including classrooms, teaching materials, and staff.
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


export default School