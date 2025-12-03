const inputBtn=document.getElementById("inputBtn");
const celiusBtn=document.getElementById("celiusBtn");
const farenheitBtb=document.getElementById("fahrenheitBtn");
const submitBtn=document.getElementById("submitBtn");
const result=document.getElementById("resultDisplay");
let temp;
function convert(){
    if(celiusBtn.checked){
        temp=Number(inputBtn.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1) + "C";
    }
    else if(farenheitBtb.checked){
        temp=Number(inputBtn.value);
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(1) + "F";//to fixed will only give us one number past the decimal point
    }
    else{
        result.textContent="Please select a unit"
    }
}
submitBtn.addEventListener("click",function(){
    convert();
})