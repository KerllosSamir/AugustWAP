window.onload=function ()
{
    document.getElementById("btnBigDec").onclick=runFontChange;
    document.getElementById("chkBold").onchange=modifyFont;
    document.getElementById("btnBigLatin").onclick=modifyTextToBigLatin;
    document.getElementById("btnMalkovitch").onclick=modifyTextToMalkovitch;

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
        document.body.style.backgroundImage = "url('TextDecorator/hundred-dollar-bill.jpg')";
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

function modifyTextToBigLatin()
{
    let txtDecorate = document.getElementById("txtDecorate");
}
function modifyTextToMalkovitch() {
    let txtDecorate = document.getElementById("txtDecorate");

    let words=txtDecorate.value.split(' ').map((elem)=>
    {
        if (elem.length>=5)
        {
            return 'Malkovich';
        }
        return elem;
    });

    txtDecorate.value=words.join(' ');
}