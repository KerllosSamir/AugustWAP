var timerID;
var speed = 250;
var animationASCII=ANIMATIONS["Blank"];
var animationFrames;
window.onload = function ()
{
    document.getElementById("start").onclick = startAnimation;
    document.getElementById("stop").onclick = stopAnimation;
    document.getElementById("animation").onchange=animationChanged;
    document.getElementById("fontsize").onchange=fontsizeChanged;
    document.getElementById("turbo").onchange=speedChanged;

    document.getElementById("text-area").style.fontSize=document.getElementById("fontsize").value;
    
}

function startAnimation() {
    if (!timerID) {
        timerID = setInterval(animate, speed);
        document.getElementById("stop").disabled=false;
        document.getElementById("start").disabled=true;
    } else {
        timerID=null;
    }
}

function animate()
{
    if (!animationFrames || animationFrames.length===0)
    {
        animationFrames=animationASCII.split('=====\n');
    }
    document.getElementById("text-area").value = animationFrames.shift();
}

function stopAnimation() {
    clearInterval(timerID); // cancel the timer
    timerID = null;
    document.getElementById("start").disabled=false;
    document.getElementById("stop").disabled=true;
}

function animationChanged()
{
    animationASCII=ANIMATIONS[document.getElementById("animation").value];
}

function fontsizeChanged()
{
    document.getElementById("text-area").style.fontSize=document.getElementById("fontsize").value;
}


function speedChanged() {
    const turbo=document.getElementById("turbo");

    if (turbo.checked)
    {
        speed=100;
    }
    else
    {
        speed = 250;
    }
    stopAnimation();
    startAnimation();
}