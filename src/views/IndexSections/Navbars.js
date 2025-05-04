
import React from "react";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Navbars() {
  return (
    <div className="section section-navbars">
      <img alt="..." className="path" src={require("../../assets/img/path3.png")} />
      <Container id="menu-dropdown">
        <Row>
          <Col md="6">
            <h4>Menu</h4>
            <Navbar className="bg-primary" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" >
                  Menu
                </NavbarBrand>
                <button className="navbar-toggler" aria-expanded={false}>
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
                <Collapse navbar isOpen={false}>
                  <Nav navbar>
                    <NavItem className="active">
                      <NavLink
                        href="#pablo"
                        
                      >
                        <p>Link</p>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        
                      >
                        <p>Link</p>
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav>
                      <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                        color="default"
                        data-toggle="dropdown"
                        href="http://example.com"
                        id="navbarDropdownMenuLink"
                        nav
                      >
                        <p>Dropdown</p>
                      </DropdownToggle>
                      <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                        <DropdownItem
                          href="#pablo"
                          
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          
                        >
                          Something else here
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Container>
            </Navbar>
          </Col>
          <Col md="6">
            <h4>Menu with Icons</h4>
            <Navbar className="bg-info" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" >
                  Icons
                </NavbarBrand>
                <button className="navbar-toggler" aria-expanded={false}>
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
                <Collapse navbar isOpen={false}>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        
                      >
                        <i aria-hidden={true} className="tim-icons icon-send" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        
                      >
                        <i
                          aria-hidden={true}
                          className="tim-icons icon-single-02"
                        />
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav>
                      <DropdownToggle
                        caret
                        color="default"
                        data-toggle="dropdown"
                        href="#pablo"
                        id="navbarDropdownMenuLink"
                        nav
                        
                      >
                        <i
                          aria-hidden={true}
                          className="tim-icons icon-settings-gear-63"
                        />
                      </DropdownToggle>
                      <DropdownMenu
                        aria-labelledby="navbarDropdownMenuLink"
                        right
                      >
                        <DropdownItem header>Dropdown header</DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          
                        >
                          Something else here
                        </DropdownItem>
                        <div className="divider" />
                        <DropdownItem
                          href="#pablo"
                          
                        >
                          Separated link
                        </DropdownItem>
                        <div className="divider" />
                        <DropdownItem
                          href="#pablo"
                          
                        >
                          One more separated link
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
        <h3 className="title mb-3">Navigation</h3>
      </Container>
      <div id="navbar">
        <div className="navigation-example">
          {/* Navbar Primary */}
          <Navbar className="bg-primary" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="#pablo" >
                  Primary color
                </NavbarBrand>
                <button className="navbar-toggler" aria-expanded={false}>
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <Collapse navbar isOpen={false}>
                <Nav className="ml-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" >
                      <i className="tim-icons icon-world" />
                      Discover
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" >
                      <i className="tim-icons icon-single-02" />
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" >
                      <i className="tim-icons icon-settings-gear-63" />
                      Settings
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          {/* End Navbar Primary */}
          {/* Navbar Info */}
          <Navbar className="bg-info" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="#pablo" >
                  Info Color
                </NavbarBrand>
                <button className="navbar-toggler" aria-expanded={false}>
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <Collapse navbar isOpen={false}>
                <Nav className="ml-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" >
                      Discover
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" >
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" >
                      Settings
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          {/* End Navbar Info */}
          {/* Navbar Success */}
          <Navbar className="bg-success" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="#pablo" >
                  Success Color
                </NavbarBrand>
                <button className="navbar-toggler" aria-expanded={false}>
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <Collapse navbar isOpen={false}>
                <Nav className="ml-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" >
                      <i className="tim-icons icon-world" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" >
                      <i className="tim-icons icon-single-02" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" >
                      <i className="tim-icons icon-settings-gear-63" />
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          {/* End Navbar Success */}
          {/* Navbar Warning */}
          <Navbar className="bg-warning" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="#pablo" >
                  Warning Color
                </NavbarBrand>
                <button className="navbar-toggler" aria-expanded={false}>
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <Collapse navbar isOpen={false}>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#pablo" >
                      <i className="fab fa-facebook-square" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" >
                      <i className="fab fa-twitter" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" >
                      <i className="fab fa-google-plus" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" >
                      <i className="fab fa-instagram" />
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          {/* End Navbar Warning */}
          {/* Navbar Danger */}
          <Navbar className="bg-danger" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="#pablo" >
                  Danger Color
                </NavbarBrand>
                <button className="navbar-toggler" aria-expanded={false}>
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <Collapse navbar isOpen={false}>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#pablo" >
                      <i className="fab fa-facebook-square" />
                      Share
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" >
                      <i className="fab fa-twitter" />
                      Tweet
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" >
                      <i className="fab fa-pinterest" />
                      Pin
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          {/* End Navbar Danger */}
          {/* Navbar Transparent */}
          <Navbar className="navbar-transparent" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="#pablo" >
                  Transparent
                </NavbarBrand>
                <button className="navbar-toggler" aria-expanded={false}>
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <Collapse navbar isOpen={false}>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#pablo" >
                      <i className="fab fa-facebook-square" />
                      Facebook
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" >
                      <i className="fab fa-twitter" />
                      Twitter
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" >
                      <i className="fab fa-instagram" />
                      Instagram
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          {/* End Navbar Transparent*/}
        </div>
      </div>
    </div>
  );
}
