
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="h1-seo" style={{ fontSize: 35 }}>Chisend</h1>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink href="/#Home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#services">
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#about">
                  About Us
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink href="/#portfolio">
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#testimony">
                  Testimonies
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#contact">
                  Contact Us
                </NavLink>
              </NavItem>

            </Nav>
          </Col>
          <Col md="3">
            <h3 className="title">Follow us:</h3>
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
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
