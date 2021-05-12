import { Component } from "react";
import * as Backend from "../../build/index.main.mjs";
import * as Reach from "@reach-sh/stdlib/ALGO";

import { Context } from "../../Context";
import InsuranceCompanyViews from "./InsuranceCompanyViews";

class InsuranceCompany extends Component {
    static contextType = Context;

    constructor(props) {
        super(props);

        this.state = {
            appState: "",
            args: [],
            resGetControlBalance: null,
            resApproveUserRequest: null,
            approveRequestArgs: null,
            resGetCompanyLastBalance:null, 
        };

        this.getControlBalanceExt = this.getControlBalanceExt.bind(this);
        this.approveUserRequestExt = this.approveUserRequestExt.bind(this);
        this.getInsuranceCompanyBalanceExt = this.getInsuranceCompanyBalanceExt.bind(this);
        
    }

    componentDidMount() {
        const [, , , , , , ctc, , ctcArgs, , , ] = this.context;
        this.interval = setInterval(async () => this.updateBalance(), 10000);

        //const wagerNumber = Reach.parseCurrency(ctcArgs[0].wager);
        //this.wager = wagerNumber;

        Backend.InsuranceCompany(ctc[0], this);
    }

    async updateBalance() {
        const [account, , , setBalance, , , , , , , , , , ,regularPaymentCount ,setRegularPaymentCount] = this.context;

        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance);
        //setRegularPaymentCount(regularPaymentCount + 1);
    }

    random() { return Reach.hasRandom.random(); }


    async getControlBalance() {
        const controlBalance = await new Promise(res => {
            this.setState({
                appState: "getControlBalance",
                resGetControlBalance: res,
            });
        });
        this.setState({
            appState: "",
        });
        
        return controlBalance;
    }

    getControlBalanceExt(controlBalanceExt) {
        const amt = Reach.parseCurrency(controlBalanceExt);
        this.state.resGetControlBalance(amt);
    }


    async informTimeout() {
        this.setState({
            appState: "informTimeout",
        });
    }

    async seeOutcome(outcome) {
        const outcomeNumber = Reach.bigNumberToNumber(outcome);
        this.setState({
            appState: "seeOutcome",
            args: [outcomeNumber],
        });
    }

    async approveUserRequest(balance, isUserRequsted, userRequestedPayment) {

        var requestedObj = new Object();
        requestedObj.isRequested = isUserRequsted;
        requestedObj.balance = Reach.bigNumberToNumber(balance);
        requestedObj.userRequestedPayment = Reach.bigNumberToNumber(userRequestedPayment);

       
        const isApproved = await new Promise(res => {
            this.setState({
                appState: "approveUserRequest",
                resApproveUserRequest: res,
                approveRequestArgs: requestedObj,
            });
        });

        this.setState({
            appState: "",
        });

        return isApproved;
    }
    approveUserRequestExt(isApproved) {
        this.state.resApproveUserRequest(isApproved);

    }


    async getInsuranceCompanyBalance() {
        
        const lastBalanceOfCompany = await new Promise(res => {
            this.setState({
                appState: "getInsuranceCompanyBalance",
                resGetCompanyLastBalance: res,
            });
        });
        this.setState({
            appState: "finishedState",
        });
        return lastBalanceOfCompany;
    }

    getInsuranceCompanyBalanceExt(companyLastBalance) {
        this.state.resGetCompanyLastBalance(companyLastBalance);
    }


    render() {
        return (<InsuranceCompanyViews
            appState={this.state.appState}
            args={this.state.args}
            getControlBalanceReady={this.state.resGetControlBalance !== null} 
            getControlBalance={this.getControlBalanceExt}
            approveRequestReady={this.state.resApproveUserRequest !== null}
            approveRequest={this.approveUserRequestExt}
            approveRequestArgs={this.state.approveRequestArgs}
            getCompanyBalanceReady={this.state.resGetCompanyLastBalance !== null}
            getInsuranceCompanyBalance={this.getInsuranceCompanyBalanceExt}
            
            />);
    }
}

export default InsuranceCompany;