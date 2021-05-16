'reach 0.1';
'use strict';


export const main =
  Reach.App(
    {},
    [
    Participant('Subscriber', {
      request: Fun([UInt], UInt), 
      getUserRequest: Fun([UInt], Object({ isRequested: Bool,
      requestedPayment: UInt })),
      getSubscriberBalanceAfterPayment: Fun([], UInt),  
      showAnyValue: Fun([UInt], Null),  
      showPaymentCount: Fun([UInt], Null),  
      getPayment: Fun([], UInt), 
      getSubscriberBalanceBeforePayment: Fun([], UInt), 
      getSubscriberLastBalance: Fun([], UInt), 
    }),

    Participant('InsuranceCompany', { getControlBalance: Fun([], UInt),
                  approve: Fun([UInt, UInt], Bool),  
                  showAnyValue: Fun([UInt], Null),
                  getInsuranceCompanyBalance: Fun([], UInt),   
                  approveUserRequest: Fun([UInt, Bool, UInt], Bool),            
    })
    ],

    (Subscriber, InsuranceCompany) => {
      Subscriber.publish();
      commit();

      const mat = 2;

      InsuranceCompany.only(() => {
        const getControlBalance = declassify(interact.getControlBalance()); 
        assume(getControlBalance > 0); 
      });
      InsuranceCompany.publish(getControlBalance);
      commit();

      Subscriber.only(() => {   
        const howMuch = declassify(interact.getPayment());
        assume(howMuch > 0); 
        assume(getControlBalance > howMuch); 
      });
      Subscriber.publish(howMuch);
      commit();

     /* Subscriber.publish();
      require(howMuch > 0);
      require(getControlBalance > howMuch);
      
      commit();

      Subscriber.only(() => {
        
        const cycleCount = getControlBalance / howMuch;
        assume(cycleCount > 0); 
      });
      Subscriber.publish(cycleCount);
     
      commit();
      */
  

      Subscriber.publish();
 

      var [bal, usgVal, paymentCount]  = [0, 0, 0];
      invariant(bal == 0);
      while ( usgVal == 0 ) {
        //assert(cycleCount > 0);

        commit();

        Subscriber.only(() => {
          interact.showPaymentCount(paymentCount + 1);
        });

     

        Subscriber.only(() => {
          const tempBalanceofSubscriber0 =  declassify(interact.getSubscriberBalanceBeforePayment()); 
        });
        
        Subscriber.publish(tempBalanceofSubscriber0);

        commit();
        
        wait(mat);
        
        Subscriber.pay(howMuch);
        
        //transfer(balance()).to(InsuranceCompany);

        commit();

        Subscriber.only(() => {
          const  { isRequested, requestedPayment } = declassify(interact.getUserRequest(balance()));
          assume(requestedPayment <= balance());
         });
        Subscriber.publish(isRequested, requestedPayment);
        require(requestedPayment <= balance());
        commit();

        InsuranceCompany.only(() => {
              const result = declassify(interact.approveUserRequest(balance(), isRequested, requestedPayment)); 
        });
        InsuranceCompany.publish(result);
        
       
  
        commit();
        
        
       // Subscriber.publish();
        


        Subscriber.only(() => {
          const tempBalanceofSubscriber =  declassify(interact.getSubscriberBalanceAfterPayment()); 
        });
        
        Subscriber.publish(tempBalanceofSubscriber);
       

        if ( tempBalanceofSubscriber >= getControlBalance) {
         
          if(result) {
            transfer(requestedPayment).to(Subscriber);
          }
          //transfer(balance()).to(InsuranceCompany);
          [bal, usgVal,paymentCount ] = [bal, 0, paymentCount + 1];
          continue; }
        else {
          [bal, usgVal, paymentCount] = [bal, 1, paymentCount];
          continue;
        } 


      }

      commit();
      Subscriber.only(() => {
        const tempBalanceofSubscriberX =  declassify(interact.getSubscriberLastBalance());
      });
      Subscriber.publish(tempBalanceofSubscriberX);
      transfer(balance()).to(InsuranceCompany);
      commit();

      InsuranceCompany.only(() => {
        const tempBalanceofInsuranceCompanyY =  declassify(interact.getInsuranceCompanyBalance());
      });
      InsuranceCompany.publish(tempBalanceofInsuranceCompanyY);




        
      

        

      commit(); } );
