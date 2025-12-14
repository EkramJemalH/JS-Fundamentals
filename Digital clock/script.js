const clock=document.getElementById("clock");
function updateclock(){
    const now=new Date();
    let hours=now.getHours().toString().padStart(2,0);
    const meidiem= hours>12?"PM":"AM";
    const min=now.getMinutes().toString().padStart(2,0);
    const second=now.getSeconds().toString().padStart(2,0);
    const timestrings=`${hours}:${min}:${second} ${meidiem}`;
    clock.textContent=timestrings;
}
updateclock();
setTimeout(updateclock,1000);