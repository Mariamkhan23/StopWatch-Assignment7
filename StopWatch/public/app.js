
var sec = 0;
var mSec = 0;
var min = 0;
var hour = 0;
var hsec = document.getElementById("sec");
var hmiliSec = document.getElementById("miliSec");
var hmin = document.getElementById("min");
var hhour = document.getElementById("hour");
var interval;

function timer(){
    mSec++;
    document.getElementById("miliSec").innerHTML = mSec;
    if (mSec >= 100){
        sec++;
        document.getElementById("sec").innerHTML = sec;
        mSec = 0;
    }

     else if( sec >= 60){
         min++;
         document.getElementById("min").innerHTML = min;
         sec = 0;
    }

    else if( min >= 60){
        hour++;
        document.getElementById("hour").innerHTML = hour;
        min = 0;
   }

   
}
    function start(){
        clearInterval(interval);
        interval =  setInterval(timer, 10);
    }

    function stop(){
        clearInterval(interval);
    }

    function reset(){
        min = 0;
        sec = 0;
        mSec = 0;
        hour = 0;
        document.getElementById("hour").innerHTML = 0;
        document.getElementById("min").innerHTML = 0;
        document.getElementById("sec").innerHTML = 0;
        document.getElementById("miliSec").innerHTML = 0;
        clearInterval(interval);s

    }
   


