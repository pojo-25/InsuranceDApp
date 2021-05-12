import React, { useState, createContext } from "react";

export const Context = createContext(null);

export const ContextProvider = props => {
    const [account, setAccount] = useState("");
    const [balance, setBalance] = useState(0);
    const [ctcInfo, setctcInfo] = useState("");
    const [ctc, setCtc] = useState([]);
    const [ctcArgs, setCtcArgs] = useState([]);
    const [controlBalance, setControlBalance] = useState(0);
    const [getPayment, setGetPayment] = useState(0);
    const [regularPaymentCount, setRegularPaymentCount] = useState(0);

    return (
        <Context.Provider value={[
            account, setAccount,
            balance, setBalance,
            ctcInfo, setctcInfo,
            ctc, setCtc,
            ctcArgs, setCtcArgs,
            controlBalance, setControlBalance,
            getPayment, setGetPayment,
            regularPaymentCount, setRegularPaymentCount,
        ]}>
            {props.children}
        </Context.Provider>
    );
}