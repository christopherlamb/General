javascript:
/***************************************************************************
// Author: Sam Lombardo, http://github.com/AweSamNet
// 
// Note: To set up this scriptlet, see setup instruction at 
// https://github.com/AweSamNet/General/tree/master/Scriptlets
// 
// Usage:
// 1.   Load your favorite YouTube video
// 2.   Run this scriptlet (if you created a bookmark for it, click it now)
// 2.a. Notice the new Looping controls under the video
// 3.   Move the video along to the spot you want to loop from
// 4.   Click the "Loop at current time" button
// 5.   Enjoy endlessly :)
/**************************************************************************/

if(!document.getElementById('controlFrame')) 
{
    var player = document.getElementById('movie_player');
    var loopTime = 0;
    var doLoop = false;

    var controlFrame = document.createElement("span");
    controlFrame.id = "controlFrame";
    controlFrame.style.border = "1px solid white";
    controlFrame.style.backgroundColor = "#F70926  ";
    controlFrame.style.display= "block";
    controlFrame.style.height = "30px";
    controlFrame.style.marginBottom = "5px";
    controlFrame.style.width = "274px";
    controlFrame.style.color ="#fff";
    controlFrame.style.padding = "5px";


    var loopAt = getSpan("No loop.");
    loopAt.style.width = "80px";
    loopAt.style.border = "1px solid #fff";
    loopAt.style.margin = "3px";
    loopAt.style.color = "#737373";
    loopAt.style.backgroundColor = "#fff";
    


    var setPosition = getSpanButton("Loop at current time");
    setPosition.style.width = "120px";
    setPosition.style.clear = "both";
    setPosition.style.borderRadius = "2px";
    setPosition.style.border = "1px solid white";
    setPosition.onclick = function() {
        loopTime = player.getCurrentTime();
        loopAt.innerHTML = loopTime;
        player.seekTo(0);
        player.playVideo();
        doLoop = true;
        setTimeout(loop, 1000);
    };

    var clear = getSpanButton("clear");
    clear.onclick = function() {
        doLoop = false;
        loopAt.innerHTML = "No loop.";
    };

    var afterThisGuy = document.getElementById('content-separator');
    insertAfter(controlFrame, afterThisGuy.firstChild);
    controlFrame.appendChild(setPosition);
    controlFrame.appendChild(loopAt);
    controlFrame.appendChild(clear);
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function loop(){    
    var currentTime = player.getCurrentTime();
    if(loopTime > 1 && loopTime <= currentTime)
    {
        player.seekTo(0);
        player.playVideo();   
    }
    if(doLoop) setTimeout(loop, 1000);
}

function getSpan(innerHTML){
    var control = document.createElement("span");

    control.style.zIndex = 1000;
    control.style.display = "inline-block";
    control.style.padding = "2px";
    control.style.borderRadius = "2px";
    control.style.border = "1px solid white";
    control.style.height = "15px";
    control.innerHTML = innerHTML;
    
    
    return control;
}

function getSpanButton(innerHTML){
    var control = getSpan(innerHTML);
    control.style.cursor = "pointer";
    
    return control;
}
