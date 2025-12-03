const decrease=document.getElementById("decreaseBtn");
const reset=document.getElementById("resetBtn");
const increase=document.getElementById("increaseBtn");
const counter=document.getElementById("counter");
count=0
decrease.addEventListener("click",function(){
    count=count-1;
    counter.textContent=count;
})

reset.addEventListener("click",function(){
    count=0;
    counter.textContent=count;
})

increase.addEventListener("click",function(){
    count=count+1;
    counter.textContent=count;
})