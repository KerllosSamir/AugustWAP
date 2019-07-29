window.onload=function ()
{
    document.getElementById("btnBigDec").onclick=runFontChange;
    document.getElementById("chkBold").onchange=modifyFont;
}

function runFontChange()
{
    let id;
    if (!id)
    {
        id=setInterval(changeTetxAreaFont,500);
    }
    else
    {
        id=null;
    }
}

function modifyFont() {

    var chkBold = document.getElementById("chkBold");
    var txtDecorate = document.getElementById("txtDecorate");
    if (chkBold.checked) {
        txtDecorate.style.fontWeight = "green";
        txtDecorate.style.color = "red";
        txtDecorate.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('textdecorator/hundred-dollar-bill.jpg')";
    }
    else
    {
        txtDecorate.style.fontWeight = "";
        txtDecorate.style.color = "";
        txtDecorate.style.textDecoration = "";
        document.body.style.backgroundImage = "";
    }
}

function changeTetxAreaFont()
{
    let currentFont = parseInt(window.getComputedStyle(document.getElementById("txtDecorate")).fontSize);
    currentFont += 2;
    document.getElementById("txtDecorate").style.fontSize = currentFont + "pt";
}