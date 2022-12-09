function biggerText(){
    document.getElementById("text").style.fontSize = "4em";
}

function fancyText(){
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById('text').style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
    document.getElementById("text").style.textDecorationColor = "blue";
}

function normalText(){
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
}

function mooText(){
    var str = document.getElementById('text').value;
    var parts = str.split(".");
    text.value = parts.join("-Moo. ");
}