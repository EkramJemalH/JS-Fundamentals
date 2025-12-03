const checkBox=document.getElementById("checkbox");
const Visa=document.getElementById("VisaBtn");
const MasterCard=document.getElementById("masterCardBtn");
const Paypal=document.getElementById("paypalBtn");
const Subscribe=document.getElementById("subPar");
const Payment=document.getElementById("payPar");
const submitBtn=document.getElementById("submitBtn");
 
submitBtn.addEventListener("click",function(){
 
    if(checkBox.checked){
        Subscribe.textContent="You have subscribed";
    }else{
        Subscribe.textContent="You have NOT subscribe YET!!!";
    }


    if(Visa.checked){
        Payment.textContent="You will now pay with visa";
    }
    else if(MasterCard.checked){
        Payment.textContent="You will now pay with Master Card";
    }
    else if(Paypal.checked){
        Payment.textContent="You will now pay with paypal";
    }
    else{
        Payment.textContent="You need to conform a payment method";
    }
})