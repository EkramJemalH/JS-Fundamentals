const clock=document.getElementById("clock");
const start=document.getElementById("start");
const Stop=document.getElementById("Stop");
const reset=document.getElementById("Reset");
let timer=null;
let startTime=0;
let elapsedTime=0;//duration between the start and end
let isRunning=false;
function startclock(){
    if(!isRunning){
        startTime=Date.now()-elapsedTime;//returns the amount of time that has passed 
        timer=setInterval(update,1000);
        isRunning=true;
    }
   
}

function stopclock(){
 if(isRunning){
    clearInterval(timer);//stop the watch
    elapsedTime=Date.now()-startTime;
    isRunning=false;
 }
}
function resetclock(){
    clearInterval(timer);
    startTime=0;
    elapsedTime=0;
    isRunning=false;
    clock.textContent="00:00:00";
}

function update(){
    const currenttime=Date.now();//gets the current time
    elapsedTime=currenttime-startTime;//calculate how mucj time have passed 
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2,0);
    let min = Math.floor((elapsedTime / (1000 * 60)) % 60).toString().padStart(2,0);
    let sec = Math.floor((elapsedTime / 1000) % 60).toString().padStart(2,0);

    clock.textContent = `${hours}:${min}:${sec}`;
}
start.addEventListener("click", startclock);
Stop.addEventListener("click", stopclock);
reset.addEventListener("click",resetclock);