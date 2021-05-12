import React from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import { GetHand, InformTimeout, SeeOutcome, BalanceInfo, ApproveUserRequestScreen, CompanyLastBalanceScreen, FinishScreen} from "./PlayerViews";


const InsuranceCompanyViews = ({ appState, args, getControlBalanceReady, getControlBalance, approveRequestReady,  approveRequest, approveRequestArgs, getCompanyBalanceReady, getInsuranceCompanyBalance}) => {
    switch (appState) {
        case "informTimeout":
            return (<InformTimeout />);
        case "seeOutcome":
            return (<SeeOutcome outcome={args[0]} />);
        case "getControlBalance":
                return (
                    getControlBalanceReady
                        ? <BalanceInfo getControlBalance={getControlBalance}  />
                        : <h1>Loading Control Balance </h1>);
        case "approveUserRequest":
            return (
                approveRequestReady
                    ? <ApproveUserRequestScreen approveRequest={approveRequest} approveRequestArgs={approveRequestArgs}  />
                    : <h1>Loading Control Balance </h1>);
        case "getInsuranceCompanyBalance":
            return (
                getCompanyBalanceReady
                    ? <CompanyLastBalanceScreen  getInsuranceCompanyBalance={getInsuranceCompanyBalance}
                    cardInfoTitle = "Insurance Company Last Balance "
                    cardInfoText = "Insurance Company Balance is "
                    cardInfoButton = "Get Insurance Company Balance "/>
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

export default InsuranceCompanyViews;