console.log("testing the event");
// number 2nd option to add event
function makeRed(){
    document.body.style.backgroundColor= "red";
}
function makeTomato(){
    document.body.style.backgroundColor= "tomato";
}
// this is number 3rd option

const makeBlueButton = document.getElementById("make-blue");
    makeBlueButton.onclick = makeBlue;
    
    function makeBlue(){
        document.body.style.backgroundColor = "blue";
    }

// this is number 4th option
const makePurpleButton = document.getElementById("make-purple")
makePurpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = "purple"
}
// this is 4th option

const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);
function makePink(){
    document.body.style.backgroundColor= "pink"
}

// this is option number 4

const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function makeGreen(){
 document.body.style.backgroundColor= "green"
});

// final option
// we will use this option