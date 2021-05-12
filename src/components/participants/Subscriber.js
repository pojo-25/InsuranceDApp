import { Component } from "react";
import * as Backend from "../../build/index.main.mjs";
import * as Reach from "@reach-sh/stdlib/ALGO";


import { Context } from "../../Context";
import SubscriberViews from "./SubscriberViews";




class Subscriber extends Component {
    static contextType = Context;

    constructor(props) {
        super(props);

        this.state = {
            appState: "",
            args: [],
            resGetPayment: null,
            resGetSubscriberBalanceBeforePayment: null,
            paymentCount : 0,
            resGetUserRequest: null,
            resGetSubscriberBalanceAfterPayment: null,
            resGetSubscriberLastBalance: null, 
            
        };

        this.getPaymentExt = this.getPaymentExt.bind(this);
        this.getSubscriberBalanceBeforePaymentExt = this.getSubscriberBalanceBeforePaymentExt.bind(this);
        this.getUserRequestExt = this.getUserRequestExt.bind(this);
        this.getSubscriberBalanceAfterPaymentExt = this.getSubscriberBalanceAfterPaymentExt.bind(this);
        this.getSubscriberLastBalanceExt = this.getSubscriberLastBalanceExt.bind(this);
    }

    componentDidMount() {
        const [, , , , , , ctc, , , , , ] = this.context;
        this.interval = setInterval(async () => this.updateBalance(), 20000);

        Backend.Subscriber(ctc[0], this);
    }

    async updateBalance() {
        const [account, , , setBalance, , , , , , , , , , ,regularPaymentCount ,setRegularPaymentCount] = this.context;

        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance);
       // setRegularPaymentCount(regularPaymentCount + 1);
    }

    random() { return Reach.hasRandom.random(); }

  /*   async acceptWager(wager) {
        const fmtWager = Reach.formatCurrency(wager, 4);
        return await new Promise(res => {
            console.log("acceptWager is called");
            this.setState({
                appState: "acceptWager",
                args: [fmtWager,],
                resAcceptWager: res,
            });
        });
    }
    acceptWagerExt() {
        console.log("acceptWager is called");
        this.state.resAcceptWager();
    }
 */

    async getPayment() {
       
        const paymentAmount = await new Promise(res => {
            this.setState({
                appState: "getPayment",
                resGetPayment: res,
            });
        });
        this.setState({
            appState: "",
        });
        return Reach.parseCurrency(paymentAmount);
    }

    getPaymentExt(payment) {
        this.state.resGetPayment(payment);
    }

    async getBalance(who) {
        return await Reach.balanceOf(who);
    }

    async getSubscriberBalanceBeforePayment() {
        
        const beforePaymentAmount = await new Promise(res => {
            this.setState({
                appState: "getSubscriberBalanceBeforePayment",
                resGetSubscriberBalanceBeforePayment: res,
            });
        });
        this.setState({
            appState: "",
        });
        return beforePaymentAmount;
    }

    getSubscriberBalanceBeforePaymentExt(subscriberBalanceBeforePayment) {
        this.state.resGetSubscriberBalanceBeforePayment(subscriberBalanceBeforePayment);
    }

    async getSubscriberBalanceAfterPayment() {
        
        const afterPaymentAmount = await new Promise(res => {
            this.setState({
                appState: "getSubscriberBalanceAfterPayment",
                resGetSubscriberBalanceAfterPayment: res,
            });
        });
        this.setState({
            appState: "",
        });
        return afterPaymentAmount;
    }

    getSubscriberBalanceAfterPaymentExt(subscriberBalanceAfterPayment) {
        this.state.resGetSubscriberBalanceAfterPayment(subscriberBalanceAfterPayment);
    }

    async getSubscriberLastBalance() {
        
        const lastBalanceOfSubscriber = await new Promise(res => {
            this.setState({
                appState: "getSubscriberLastBalance",
                resGetSubscriberLastBalance: res,
            });
        });
        this.setState({
            appState: "finishedState",
        });
        return lastBalanceOfSubscriber;
    }

    getSubscriberLastBalanceExt(subscriberLastBalance) {
        this.state.resGetSubscriberLastBalance(subscriberLastBalance);
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

    async showPaymentCount(paymentCountFromBacked) {
        const paymentCountFromBacked0 = Reach.bigNumberToNumber(paymentCountFromBacked);
        this.setState({
            appState: "showPaymentCount",
            paymentCount: paymentCountFromBacked0,
        });
        const [account, , , setBalance, , , , , , , , , , ,regularPaymentCount ,setRegularPaymentCount] = this.context;
        setRegularPaymentCount(paymentCountFromBacked0);
    }

    async getUserRequest() {
        
        const userRequestObj = await new Promise(res => {
            this.setState({
                appState: "getUserRequest",
                resGetUserRequest: res,
            });
        });
        this.setState({
            appState: "",
        });
        return userRequestObj;
    }

    getUserRequestExt(userRequestObj) {
        this.state.resGetUserRequest(userRequestObj);
    }


    


    render() {
        return (<SubscriberViews
            appState={this.state.appState}
            args={this.state.args}
            acceptWagerReady={this.state.resAcceptWager !== null}
            acceptWager={this.acceptWagerExt} 
            getPaymentReady={this.state.resGetPayment !== null}
            getPayment={this.getPaymentExt} 
            getSubscriberBalanceBeforePaymentReady={this.state.resGetSubscriberBalanceBeforePayment !== null}
            getSubscriberBalanceBeforePayment={this.getSubscriberBalanceBeforePaymentExt}
            paymentCount = {this.state.paymentCount}
            getUserRequestReady={this.state.resGetUserRequest !== null}
            getUserRequest={this.getUserRequestExt} 
            getSubscriberBalanceAfterPaymentReady={this.state.resGetSubscriberBalanceAfterPayment !== null}
            getSubscriberBalanceAfterPayment={this.getSubscriberBalanceAfterPaymentExt}
            getSubscriberLastBalanceReady={this.state.resGetSubscriberLastBalance !== null}
            getSubscriberLastBalance={this.getSubscriberLastBalanceExt}
          
            
            />);
    }
}

export default Subscriber;