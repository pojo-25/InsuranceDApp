import React, { useContext } from "react";
import { Context } from "../../Context";

/**
 * @dev Uygulama boyunca ne kadar bakiyeniz olduğunu gösterir
 * Düzgün çalışması için her para transferinden sonra 
 * Context'teki balance'ı güncellemeniz gerekli.
 */
const RegularPayment = () => {

    const [account, , balance, , , , , , , , , , , ,regularPaymentCount, setRegularPaymentCount ] = useContext(Context);
    var regularPaymentCountAsString = "";

    if(regularPaymentCount >= 0) {
        console.log("ddddddddddddddddd " + regularPaymentCount);
        regularPaymentCountAsString = regularPaymentCount;
    }
        
    else {
        console.log("eeeeeeeeeeeeeeeeeeeee" + regularPaymentCount)
        regularPaymentCountAsString = 0;

    }
        

    return (
        Object.keys(account).length !== 0
            ? (<span className=" ml-3 p-2" style={{
                backgroundColor: "white",
                boxShadow: "2px 2px #ddd",
            }}>
                <strong>{regularPaymentCountAsString}. payment is executing </strong>
            </span>)
            : <div />
    );

   
}

export default RegularPayment;