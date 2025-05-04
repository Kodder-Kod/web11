import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,

} from "reactstrap";

import React, { useState } from 'react'

import { db } from "../../config";
import { ref,  push,  } from 'firebase/database';


const ContactApi = () => {

    const [userName, setUserName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    const sendMessage = async (e) => {
        e.preventDefault();
        try {
            const dbRef = ref(db, `chisendwebsite/messages/`);

            const newbranchRef = push(dbRef, {

                Name: userName,
                Email: email,
                Phone: phone,
                Meassge: message,

            });

            const newCreditKey = newbranchRef.key;

            setUserName("")
            setPhone("")
            setEmail("")
            setMessage("")


            alert("Message was sent successfully")
        }
        catch (error) {

            console.error("Error sending message: ", error);
            alert("Failed . Try again")
        }


    };

    return (

        <>
            <section className="section">
                <div className="squares square2" />
                <div className="squares square3" />
                <div className="squares square7" />

                <Container>

                    <div className="mx-auto max-w-2xl py-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
                        <h1 className="h1-seo" style={{ fontSize: 35, fontWeight: "bold", }}>Contact </h1>
                        <hr className="line-success" />
                    </div>

                    <Row>

                        <Col md="6">
                            <Card className="card-plain">
                                <CardBody>
                                    <Form >
                                        <Row>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label>Your Name</label>
                                                    <Input
                                                        placeholder="Betty"
                                                        type="text"
                                                        value={userName}
                                                        onChange={(e) => setUserName(e.target.value)}
                                                        style={{ border: '1px solid #dcdcdc '}}
                                                        />
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label classname="text-white">Email address</label>
                                                    <Input placeholder="Betty@email.com"
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        style={{ border: '1px solid #dcdcdc '}}
                                                        />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label>Phone</label>
                                                    <Input placeholder="0712345678" type="tel"
                                                        pattern="[0-9]*"
                                                        inputMode="numeric"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        style={{ border: '1px solid #dcdcdc '}}
                                                        />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label>Message</label>
                                                    <Input placeholder="Hello there!"
                                                        type="textarea"
                                                        value={message}
                                                        onChange={(e) => setMessage(e.target.value)}
                                                        style={{
                                                            height: '170px', // Set a fixed height
                                                            border: '1px solid #dcdcdc ', // Set border style
                                                            borderRadius: '10px', // Optional: round corners
                                                            padding: '10px' // Optional: add some padding \

                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button
                                            className="btn-round float-right"
                                            color="primary"
                                            data-placement="right"
                                            id="tooltip341148792"
                                            onClick={sendMessage}
                                        >
                                            Send Message
                                        </Button>

                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>


                        <Col className="ml-auto" md="4">

                            <div className=" info-horizontal "  >
                                <div className="icon icon-primary  ">
                                    <i className="tim-icons icon-square-pin" />
                                </div>
                                <div className="description">
                                    <h4 className="info-title" style={{fontStyle:18, fontWeight:"bold"}}>Find us at the office</h4>
                                    <p style ={{fontSize:16}}>
                                        Chisend Shop , Nairobi <br />
                                        Mon - Sat , 7:00am - 8:00pm <br />
                                        Nairobi , Kenya <br />
                                    </p>
                                </div>
                            </div>

                            <div className="info info-horizontal ">
                                <div className="icon icon-primary">
                                    <i className="tim-icons icon-mobile" />
                                </div>
                                <div className="description">
                                    <h4 className="info-title" style ={{fontSize:18, fontWeight:"bold"}}>Connect with us </h4>
                                    <p style ={{fontSize:16}}>
                                        Chisend contact <br />
                                        +254798833211 <br />
                                        chisendtech@gmail.com
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}


export default ContactApi