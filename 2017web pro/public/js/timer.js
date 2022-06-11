var timer = document.getElementById("timer");
/*second*/
var sec = 0;
/*minute*/
var min = 0; 
var times;
/*timer function*/
function timerbegin() {
    times = setInterval(function () {
        var str_sec = sec;
        var str_min = min;
        if ( sec < 10) {
        str_sec = "0" + sec;
        }
        if ( min < 10 ) {
        str_min = "0" + min;
        }
        var time = str_min + ":" + str_sec;
        timer.innerHTML = time;
        sec++;
        if (sec > 59){
        sec = 0;
        min++;
        }
    }, 1000);
}

/*break times*/
var pausetime = 0;

/*log of flow time and break time*/
var log;

/*Determine if the play button is pressed for the first time*/
var first=0;

var play = document.getElementById("play");
var pause = document.getElementById("pause");
/*Click the play button*/
play.onclick = ()=>{
    timerbegin();
    play.style.display="none";
    pause.style.display="block";
}
/*Click the pause button*/
pause.onclick = ()=>{
    clearInterval(times);
    play.style.display="block";
    pause.style.display="none";
}

var stop = document.getElementById("stop");
/*Click the stop button*/
stop.onclick = ()=>{
    play.style.display="block";
    pause.style.display="none";
    clearInterval(times);
    sec = 0;
    min = 0;
    timer.innerHTML = "00:00";
}
