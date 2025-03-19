// CODE RESOURCES FROM : Jay Escoton (2023)
// Don't Forget to Credit the respective Developer

//Javascript of my Portfolio-main
var mode = "lightmode";
var mode = "darkmode";
//For Portfolio-Home
function colormode() {
    if (mode == "lightmode") {
        mode = "darkmode";
        document.body.style.backgroundColor = "white";
        document.getElementById("profile-page").style.color = "black";
        document.getElementById("colormode-trigger").innerHTML = "DARK";
    }else if (mode = "darkmode") {
        mode = "lightmode";
        document.body.style.backgroundColor = "rgb(13, 13, 13)";
        document.getElementById("profile-page").style.color = "white";
        document.getElementById("colormode-trigger").innerHTML = "LIGHT";
    }
}

//For Portfolio-services
function colormode2() {
    if (mode == "lightmode") {
        mode = "darkmode";
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black";
        document.getElementById("card-icon1").style.backgroundColor = "lightgray";
        document.getElementById("card-icon2").style.backgroundColor = "lightgray";
        document.getElementById("card-icon3").style.backgroundColor = "lightgray";
        document.getElementById("card-icon4").style.backgroundColor = "lightgray";
        //Card Border
        document.getElementById("Card1").style.borderColor = "black";
        document.getElementById("Card2").style.borderColor = "black";
        document.getElementById("Card3").style.borderColor = "black";
        document.getElementById("Card4").style.borderColor = "black";        
    }else if (mode == "darkmode") {
        mode = "lightmode";
        document.body.style.backgroundColor = "rgb(13, 13, 13)";
        document.body.style.color = "white";
        document.getElementById("card-icon1").style.backgroundColor = "white";
        document.getElementById("card-icon2").style.backgroundColor = "white";
        document.getElementById("card-icon3").style.backgroundColor = "white";
        document.getElementById("card-icon4").style.backgroundColor = "white";
        //Card Border
        document.getElementById("Card1").style.borderColor = "white";
        document.getElementById("Card2").style.borderColor = "white";
        document.getElementById("Card3").style.borderColor = "white";
        document.getElementById("Card4").style.borderColor = "white";
    }
}

//For portfolio-about
function colormode3() {
    if (mode == "lightmode") {
        mode = "darkmode";
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black";
        
    }else if (mode == "darkmode") {
        mode = "lightmode";
        document.body.style.backgroundColor = "rgb(13, 13, 13)";
        document.body.style.color = "white";
    }
}