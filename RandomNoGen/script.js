const rollBtn=document.getElementById("rollBtn");
const label=document.getElementById("label");
let min=1;
let max=6;
let RandomNum;

rollBtn.addEventListener("click",function(){
    RandomNum=Math.floor(Math.random()*max)+min;
    label.textContent=RandomNum;
})