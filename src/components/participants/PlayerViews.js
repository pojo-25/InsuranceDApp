import React, { useState, useEffect, useContext, useHistory } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Rock from "../../assets/rock.png";
import Paper from "../../assets/paper.png";
import Scissors from "../../assets/scissors.png";
import Spinner from "react-bootstrap/Spinner";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import {Alert} from 'react-bootstrap';

import * as Reach from "@reach-sh/stdlib/ALGO";


import { Context } from "../../Context";



const GameButton = ({ src, txt, action }) => {
    return (
        <Col sm={4}>
            <button style={{ borderRadius: "10px" }} onClick={action} className="p-3">
                <img height="120em" className="mb-3" src={src} alt="" />
                <h3>{txt}</h3>
            </button>
        </Col>
    );
}

export const GetHand = ({ getHand }) => {
    return (
        <Container className="mt-4">
            <h2>Make a move:</h2>
            <br />
            <Row>
                <GameButton src={Rock} txt="Rock" action={() => getHand(0)} />
                <GameButton src={Paper} txt="Paper" action={() => getHand(1)} />
                <GameButton src={Scissors} txt="Scissors" action={() => getHand(2)} />
            </Row>
        </Container>
    );
}

export const SeeOutcome = ({ outcome }) => {

    const txts = [
        "Bob has won!",
        "Draw!",
        "Alice has won!"
    ];

    return (
        <Container className="mt-4">
            <h2>{txts[outcome]}</h2>
        </Container>
    );
}

export const InformTimeout = () => {
    return (
        <Container className="mt-4">
            <h2>Observed timeout</h2>
        </Container>
    );
}

export const InformPaymentCount = ({paymentCount}) => {
    return (
        <Container className="mt-4">
            <Alert color="primary">
                Subscriber is paying {paymentCount } . payment
            </Alert>
        </Container>
    );
}



export const BalanceInfo = ({ getControlBalance }) => {
/*     console.log("Component BalanceInfo ");
    const xVal  = 0;
     

    useEffect(()=>{

          (async () => {
            const data = await getControlBalance();
      
         })();

          
    }, []) 
   

    return (
        <Container className="mt-4">
            <h2>Waiting for contract</h2>
            <Spinner animation="border" />
        </Container>
    ); */



       //const history = useHistory();
       const [payment, setPayment] = useState(20);
       //const payment = 1;
   
       const [show, setShow] = useState(false);
   
   
   
       const handlePayment = async () => {
           setShow(true);
   
           setTimeout(function (){
                getControlBalance(payment);
           }, 2000); // How long do you want the delay to be (in milliseconds)? 
   
          
          // history.push("/app/bob");
       }
       
   
       return (
           <Container className="h-100">
               <div className="mt-3">
                   <Row>
                       <Col>
                       <Card className="p-3">
                       <Form.Group>
                               <Form.Label> Enter Limit Amount </Form.Label>
                                   <Form.Control
                                       value={payment}
                                       onChange={(e) => setPayment(e.target.value)}
                                       type="number"
                                       placeholder="Enter payment amount" />
                               </Form.Group>
                           <Button variant="primary" onClick={()=>handlePayment()}>Set Limit  Amount</Button>
                           </Card>
                           <PaymentModal show={show} infoText= "Sending Limit Amount to Contract"/>
                       </Col>
                   </Row>
               </div>
           </Container>
       );

}

export const SubscriberBalanceBeforePayment = ({ getSubscriberBalanceBeforePayment, cardInfoTitle, cardInfoText, cardInfoButton }) => {

    const [beforeBalance, setBeforeBalance] = useState(0);
    const [account, setAccount, balance , setBalance, , , , , , , , , , ,regularPaymentCount, setRegularPaymentCount ] = useContext(Context);
    const [showResults, setShowResults] = useState(false);
    const [balanceValFormatted, setBalanceValFormatted] = useState("");
   


    const handleBalanceBeforePayment = async () => {
        const balanceVal = (await Reach.balanceOf(account));
        setBalanceValFormatted(Reach.formatCurrency(balanceVal, 4)); 

        setBeforeBalance(Reach.bigNumberToNumber(balanceVal));
        setShowResults(true);
       
        alert("Subscriber is paying " + (regularPaymentCount) + " . payment\n" );

        setTimeout(function (){
            getSubscriberBalanceBeforePayment(balanceVal);
        }, 2000); // How long do you want the delay to be (in milliseconds)?
      
    }
    


    return (
        <Container className="mt-4">
        <Col>
                <Card className="p-3">
                        <Card.Title>{cardInfoTitle} </Card.Title>
                        <hr className="mt-1" />
                        { showResults   
                            ?<Card.Text>
                                {cardInfoText}  {balanceValFormatted} 
                            </Card.Text>
                            : null
                         }
                       
                        <Button block variant="primary" onClick={()=>handleBalanceBeforePayment()}>{cardInfoButton} </Button>
                    </Card>
                </Col>

            
        </Container>
    );
}


export const SubscriberBalanceAfterPayment = ({ getSubscriberBalanceAfterPayment, cardInfoTitle, cardInfoText, cardInfoButton }) => {

    const [afterBalance, setAfterBalance] = useState(0);
    const [account, setAccount, balance , setBalance, , , , , , , , , , , regularPaymentCount, setRegularPaymentCount] = useContext(Context);
    const [showResults, setShowResults] = useState(false);
    const [balanceValFormatted, setBalanceValFormatted] = useState("");
    


    const handleBalanceAfterPayment = async () => {

        const balanceVal = (await Reach.balanceOf(account));
        
        setAfterBalance(Reach.bigNumberToNumber(balanceVal));
        setBalanceValFormatted((Reach.formatCurrency(balanceVal, 4)));
        setShowResults(true);
        setTimeout(function (){
            //alert(regularPaymentCount + ". payment is executing");
            getSubscriberBalanceAfterPayment(balanceVal);
        }, 2000); // How long do you want the delay to be (in milliseconds)? 
    }

    return (
        <Container className="mt-4">
        <Col>
                <Card className="p-3">
                        <Card.Title>{cardInfoTitle} </Card.Title>
                        <hr className="mt-1" />
                        { showResults   
                            ?
                            <Card.Text>
                                {cardInfoText}  {balanceValFormatted} 
                            </Card.Text>
                            : null
                         }

                        
                        <Button block variant="primary" onClick={()=>handleBalanceAfterPayment()}>{cardInfoButton} </Button>
                    </Card>
                </Col>

            
        </Container>
    );
}


export const SubscriberLastBalanceScreen = ({ getSubscriberLastBalance, cardInfoTitle, cardInfoText, cardInfoButton }) => {

    const [lastBalance, setLastBalance] = useState(0);
    const [account, setAccount, balance , setBalance] = useContext(Context);
    const [showResults, setShowResults] = useState(false);
    const [balanceValFormatted, setBalanceValFormatted] = useState("");
    



    const handleLastBalance = async () => {

        const balanceVal = (await Reach.balanceOf(account));
        setLastBalance(Reach.bigNumberToNumber(balanceVal));
        setBalanceValFormatted((Reach.formatCurrency(balanceVal, 4)));
        setShowResults(true);

        setTimeout(function (){
            getSubscriberLastBalance(balanceVal);
        }, 2000); // How long do you want the delay to be (in milliseconds)? 
    }

    return (
        <Container className="mt-4">
        <Col>
                <Card className="p-3">
                        <Card.Title>{cardInfoTitle} </Card.Title>
                        <hr className="mt-1" />

                        { showResults   
                            ?
                            <Card.Text>
                            {cardInfoText}  {balanceValFormatted} 
                             </Card.Text>
                            : null
                         }

                        
                        <Button block variant="primary" onClick={()=>handleLastBalance()}>{cardInfoButton} </Button>
                    </Card>
                </Col>

            
        </Container>
    );
}



export const CompanyLastBalanceScreen = ({ getInsuranceCompanyBalance, cardInfoTitle, cardInfoText, cardInfoButton }) => {

    const [lastBalance, setLastBalance] = useState(0);
    const [account, setAccount, balance , setBalance] = useContext(Context);
    const [showResults, setShowResults] = useState(false);
    const [balanceValFormatted, setBalanceValFormatted] = useState("");

    const handleLastBalance = async () => {

        const balanceVal = (await Reach.balanceOf(account));
        
        setLastBalance(Reach.bigNumberToNumber(balanceVal));
        setBalanceValFormatted((Reach.formatCurrency(balanceVal, 4)));
        setShowResults(true);

        setTimeout(function (){
            getInsuranceCompanyBalance(balanceVal);
        }, 2000); // How long do you want the delay to be (in milliseconds)? 
    }

    return (
        <Container className="mt-4">
                <Col>
                    <Card className="p-3">
                        <Card.Title>{cardInfoTitle} </Card.Title>
                        <hr className="mt-1" />

                        { showResults   
                            ?
                            <Card.Text>
                            {cardInfoText}  {balanceValFormatted} 
                             </Card.Text>
                            : null
                         }
                        <Button block variant="primary" onClick={()=>handleLastBalance()}>{cardInfoButton} </Button>
                    </Card>
                </Col>

            
        </Container>
    );
}



export const GetPayment = ({ getPayment }) => {

    //const history = useHistory();
    const [payment, setPayment] = useState(10);
    //const payment = 1;

    const [show, setShow] = useState(false);



    const handlePayment = async () => {
        setShow(true);

        setTimeout(function (){
            getPayment(payment);
        }, 2000); // How long do you want the delay to be (in milliseconds)? 

       
       // history.push("/app/bob");
    }
    

    return (
        <Container className="h-100">
            <div className="mt-3">
                <Row>
                    <Col>
                    <Card className="p-3">
                    <Form.Group>
                            <Form.Label> Enter Regular Payment Amount</Form.Label>
                                <Form.Control
                                    value={payment}
                                    onChange={(e) => setPayment(e.target.value)}
                                    type="number"
                                    placeholder="Enter payment amount" />
                            </Form.Group>
                        <Button variant="primary" onClick={()=>handlePayment()}>Set Monthly Payment Amount</Button>
                        </Card>
                        <PaymentModal show={show} infoText= "Sending Payment Amount to Contract" />
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

const PaymentModal = ({ show, infoText }) => {
    return (
        <Modal show={show} centered className="text-center">
            <Modal.Body>
                <h2>{infoText}</h2>
                <Spinner animation="border" />
            </Modal.Body>
        </Modal>
    );
}




export const ToastGeneral = ({ toastHeaderInfo, toastBodyInfo, otherInfo }) => {
    //const [showToast, setShowToast] = useState(true);
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    const screenHeight = window.innerHeight;

    const faucetToastStyle = {
        top: `${screenHeight * .8}px`,
        left: "2em",
    };
    return (
        <Toast
            className="position-absolute m-3"
            style={faucetToastStyle}
            onClose={handleClose()}
            show={show}
            delay={5000}
            autohide>

            <Toast.Header>
                <strong className="mr-auto">{toastHeaderInfo}</strong>
            </Toast.Header>

            <Toast.Body>
                {toastBodyInfo} is {otherInfo}
            </Toast.Body>
        </Toast>
    );
}

export const UserRequestScreen = ({ getUserRequest }) => {

    //const history = useHistory();
    const [payment, setPayment] = useState(10);
    const [show, setShow] = useState(false);

    const handleUserRequest = async () => {
        const userRequestOption = document.querySelector("#userReqestOption").value;

        var requestedObj = new Object();
        var isUserRequsted = false;

        if(userRequestOption === "Yes")
            isUserRequsted = true;
        else
            isUserRequsted = false;

        if(isUserRequsted) {
            requestedObj.isRequested = true;
            requestedObj.requestedPayment = Reach.parseCurrency(payment);
        } else {
            requestedObj.isRequested = false;
            requestedObj.requestedPayment = Reach.parseCurrency(0);;
        }

        setShow(true);
        setTimeout(function (){
            getUserRequest(requestedObj);
        }, 2000); // How long do you want the delay to be (in milliseconds)? 
       // history.push("/app/bob");
    }
    

    return (
        <Container className="h-100">
            <div className="mt-3">
                <Row>
                    <Col>
                    <Card className="p-3">
                        <Form.Group>
                            <Form.Label> Do you want to request any money from insurance company? </Form.Label>
                                <Form.Control
                                    value={payment}
                                    onChange={(e) => setPayment(e.target.value)}
                                    type="number"
                                    placeholder="Enter requested payment amount" />
                                    
                                    <Form.Control as="select" defaultValue="Choose..." id="userReqestOption">
                                        <option val="1" > Yes</option>
                                        <option val="0"> No </option>
                                    </Form.Control>
                        </Form.Group>
                        <Button variant="primary" onClick={()=>handleUserRequest()}> Request Money from Insurance Company</Button>
                        </Card>
                        <PaymentModal show={show} infoText= "Sending Requested Payment Amount to Contract"/>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}


export const ApproveUserRequestScreen = ({ approveRequest, approveRequestArgs}) => {

    const [beforeBalance, setBeforeBalance] = useState(0);
    const [account, setAccount, balance , setBalance] = useContext(Context);

    const userRequestedPaymentFormatted = Reach.formatCurrency(approveRequestArgs.userRequestedPayment, 4);
    const balancedFormatted = Reach.formatCurrency(approveRequestArgs.balance, 4);
    

    var isUserRequestString = "No";

    if(approveRequestArgs.isRequested)
        isUserRequestString = "Yes";

    


    const handleAproveUserRequest = async (isApproved) => {
        if(isApproved)
            console.log("gelen parametre  true " );
        else
            console.log("gelen parametre false");


        setTimeout(function (){
            approveRequest(isApproved);
        }, 4000); // How long do you want the delay to be (in milliseconds)? 
        

        
    }

    if(!approveRequestArgs.isRequested) {
        approveRequest(false);
        return (  
            <Container className="mt-4">
            <h2>Waiting for contract</h2>
            <Spinner animation="border" />
            </Container>);
    }
    
    else
    {
        return (
            <Container className="mt-4">
                <Col>
                    <Card className="p-3">
                        <Card.Title> Approve Sunscriber's Request Payment  </Card.Title>
                        <hr className="mt-1" />
                        <Card.Text>
                            Is there a request from the user : {isUserRequestString}
                        </Card.Text>
                        <Card.Text>
                            Sunscriber's Request Amount : {userRequestedPaymentFormatted}
                        </Card.Text>
                        <Card.Text>
                            Current Balance Amount : {balancedFormatted}
                        </Card.Text>

                        <Row>
                            <Col sm={6} >
                                <Button block variant="success" onClick={()=> handleAproveUserRequest(true)}>Yes</Button>
                            </Col>
                            <Col sm={6} >
                                <Button block variant="danger" onClick={()=>  handleAproveUserRequest(false)}>No</Button>
                            </Col>
                        </Row>

                    </Card>
                </Col>

                
            </Container>
        );
    }
}

export const FinishScreen = () => {
    return (
        <Container className="mt-4">
            <h2>Insurance dApp is end </h2>
        </Container>
    );
}




