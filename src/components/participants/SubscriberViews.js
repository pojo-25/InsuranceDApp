import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { GetHand, InformTimeout, SeeOutcome, SubscriberBalanceBeforePayment, GetPayment, ToastGeneral, InformPaymentCount, UserRequestScreen,
     SubscriberBalanceAfterPayment, SubscriberLastBalanceScreen, FinishScreen} from "./PlayerViews";

const SubscriberViews = ({ appState, args, getHandReady, getHand, acceptWagerReady, acceptWager, getPaymentReady, getPayment, getSubscriberBalanceBeforePaymentReady, getSubscriberBalanceBeforePayment, paymentCount,
                    getUserRequestReady,getUserRequest, getSubscriberBalanceAfterPaymentReady, getSubscriberBalanceAfterPayment, getSubscriberLastBalanceReady, getSubscriberLastBalance }) => {

              

    switch (appState) {
       /*  case "acceptWager":
            console.log("acceptWager app state " + acceptWagerReady);
            return (
                acceptWagerReady
                    ? <AcceptWager wager={args[0]} acceptWager={acceptWager} />
                    : <h1>Loading the contract</h1>); */
        case "getHand":
            return (
                getHandReady
                    ? <GetHand getHand={getHand} />
                    : <h1>Loading the contract</h1>);

        case "informTimeout":
            return (<InformTimeout />);
        case "seeOutcome":
            return (<SeeOutcome outcome={args[0]} />);
        case "getPayment":
                return (
                    getPaymentReady
                        ? <GetPayment  getPayment={getPayment} />
                        : <h1>Loading the contract</h1>);
        case "getSubscriberBalanceBeforePayment":
            return (
                getSubscriberBalanceBeforePaymentReady
                    ? <SubscriberBalanceBeforePayment  getSubscriberBalanceBeforePayment={getSubscriberBalanceBeforePayment}
                    cardInfoTitle = "Subscriber Balance Before Payment"
                    cardInfoText = "Subscriber Balance is "
                    cardInfoButton = "Get Subscriber Balance "/>
                    : <h1>Loading the contract</h1>);
        case "showPaymentCount":
            /* return (  <ToastGeneral
                toastHeaderInfo = " Payment "
                toastBodyInfo = "Payment Count is "
                otherInfo = {paymentCount}
                
                
                />); */
            
            return (<InformPaymentCount paymentCount={paymentCount} />);
        case "getUserRequest":
            return (
                getUserRequestReady
                    ? <UserRequestScreen  getUserRequest={getUserRequest}
                    />
                    : <h1>Loading the contract</h1>);
        case "getSubscriberBalanceAfterPayment":
            return (
                getSubscriberBalanceAfterPaymentReady
                    ? <SubscriberBalanceAfterPayment  getSubscriberBalanceAfterPayment={getSubscriberBalanceAfterPayment}
                    cardInfoTitle = "Subscriber Balance After Payment"
                    cardInfoText = "Subscriber Balance is "
                    cardInfoButton = "Get Subscriber Balance "/>
                    : <h1>Loading the contract</h1>);         
        case "getSubscriberLastBalance":
            return (
                getSubscriberLastBalanceReady
                    ? <SubscriberLastBalanceScreen  getSubscriberLastBalance={getSubscriberLastBalance}
                    cardInfoTitle = "Subscriber Last Balance "
                    cardInfoText = "Subscriber Balance is "
                    cardInfoButton = "Get Subscriber Balance "/>
                    : <h1>Loading the contract</h1>);   
        case "finishedState":
            return (<FinishScreen />);     
        
        

        default:
            break;
    }
    return (
        <Container className="mt-4">
            <h2>Waiting for contract</h2>
            <Spinner animation="border" />
        </Container>
    );
}

/* export const AcceptWager = ({ wager, acceptWager }) => {

    const history = useHistory();

    const handleReject = () => {
        history.push("/");
    }

    return (
        <Container className="mt-4">
            <h2 className="text-center">Wager is {wager} ALGO.</h2>
            <p className="text-center">Do you accept it?</p>
            <Row>
                <Col sm={6} >
                    <Button block variant="success" onClick={acceptWager}>Yes</Button>
                </Col>
                <Col sm={6} >
                    <Button block variant="danger" onClick={handleReject}>No</Button>
                </Col>
            </Row>
        </Container>
    );
} */



export default SubscriberViews;