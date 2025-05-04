import * as React from 'react';
import PublicIcon from '@mui/icons-material/Public';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AddCardIcon from '@mui/icons-material/AddCard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

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
        "Basic reports & inventory",
        "Single admin user ",
        "Taxes Enrolled (ETIMS)",
        "For PC users"
      ],
      img: require("../../../assets/img/services/medal.png"),
      buttonColor: "primary"
    },
    {
     title: "Advanced Package",
      description: "Best Value",
      price: "Ksh 50,000",
      features: [
        "Priority email & phone support",
        "Advanced reports & inventory",
        "Up to 5 users (Employees)",
        "Supplier management System",
        "Taxes Enrolled (ETIMS) ",
        "For PC users"
      ],
      img: require("../../../assets/img/services/belt.png"),
      buttonColor: "success"
    },
    {
      title: "Premium Package",
      description: "Premium Plan",
      price: "Ksh 70,000",
      features: [
        "Transcations Management",
        "Comprehensive reports & inventory",
        "10+ users (Employees) ",
        "Customer Relations",
        "Tax Enrolled (ETIMS)",
        "Advanced loyalty & discounts",
        "Third-party API (payment)",
        "For PC users  "
      ],
      img: require("../../../assets/img/services/crown.png"),
      buttonColor: "info"
    }
  ];



const Pos = () => {


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
            
                                Point of Sale (POS) Systems

                            </h3>
                            <p className="text-white mb-3" style={{ fontSize: 18 }}>
                                POS systems are vital for retail and hospitality businesses. They streamline the transaction process, manage inventory, and enhance customer interactions. These systems help in reducing errors, speeding up checkouts, and providing valuable sales data that can drive business decisions.
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
                                        href="/"
                                       
                                    >
                                        <i className="fab fa-tiktok" />
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
                            <div style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <img
                                    alt="..."
                                    className="img-fluid"
                                    src={require("../../../assets/img/services/pos2.png")}
                                />
                            </div>

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
                                            <PublicIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Efficient Transactions</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize:16 }}>
                                            Speed up sales processes with quick and accurate transaction handling, reducing wait times and improving customer satisfaction.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-primary" style={{ marginBottom: 10 }}>
                                            <CreditScoreIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Inventory Management</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize:16 }}>
                                            Real-time tracking of stock levels helps prevent stockouts and overstock situations, ensuring optimal inventory levels.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-warning" style={{ marginBottom: 10 }}>
                                            <AddCardIcon sx={{ color: "#00bbff", fontSize: 50 }} />,

                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Sales Data</h4>
                                        <hr className="line-warning" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }}>
                                            Collects valuable insights into sales trends, helping businesses make informed decisions and tailor marketing strategies.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }}  >
                                        <div className="icon icon-success" style={{ marginBottom: 20 }}>
                                            <ManageAccountsIcon sx={{ color: "#00bbff", fontSize: 50 }} />,

                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Ease of Use</h4>
                                        <hr className="line-success" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }}>
                                            Intuitive interfaces make training staff quick and easy, reducing downtime and operational disruptions.
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


export default Pos