import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
    return (
        <Container className="h-100">
            <Row>
                <Col xs={2} />
                <Col xs={8} className="mt-4">
                    <h1 className="display-4">About the Project</h1>
                    <hr style={{ width: "10rem" }} />
                    <p className="text-left mt-3">In this project, subscriber periodically pays some amount of money to insurance company. Subscriber sometimes can arbitrarily request money from the company.
                    When the company approves this request, the amount requested by the subscriber is transferred to the subscriber's account.
                  </p>
               
                    <h2 className="text-left">How to Use</h2>
                    <p className="text-left mt-3">
                    Firstly, insurance company sets the minimum limit algo for the finishig the application. If subscriber's account lower than this limit ALGO, 
                    subscriber stops the regular payment.  After this process  subscriber sets regular payment amount and starts to pay this amount periodically. 
                    While subscriber pays the regular payment, subscriber can also request some amount of ALGO from the insurance company. When insurance company
                    receive this request, the company assesses this request. When insurance company approves this request, requested amount of ALGOs transferred 
                    to subscriber. 

                 
                 </p>
                
                </Col>
                <Col xs={2} />
            </Row>
        </Container>
    );
}

export default About;