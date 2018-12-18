/global var
var madiv = document.querySelector("#answerChoices1")
var answer1;
var answer2;
var answer3;

//functions
function VerifAnswer1(){
    if (document.querySelector("#f-option").checked){
        answer1=1;
    } else if (document.querySelector("#s-option").checked){
        answer1=2;
    } else {
        answer1=3;
    }

//test part
console.log(document.querySelector("#f-option").checked);
console.log(document.querySelector("#s-option").checked);
console.log(document.querySelector("#t-option").checked);

console.log(answer1);

}

function VerifAnswer2(){
    if (document.querySelector("#f-option").checked){
        answer2=1;
    } else if (document.querySelector("#s-option").checked){
        answer2=2;
    } else {
        answer2=3;
    }
}

function VerifAnswer3(){
    if (document.querySelector("#f-option").checked){
        answer3=1;
    } else if (document.querySelector("#s-option").checked){
        answer2=2;
    } else {
        answer2=3;
    }
}

//call

console.log(document.querySelector("#nextButton1"));
document.querySelector('#nextButton1').addEventListener("click", function(event) {
  VerifAnswer1();
  document.querySelector(".set1").style.display="none";
  document.querySelector(".set2").style.display="inline";
});

document.querySelector("nextButton2").addEventListener("click", function(event) {
  VerifAnswer2();
  window.location = "questions3.html";
});

document.querySelector("#resultButton").addEventListener("click", function(event) {
  VerifAnswer3();
  window.location = "personalityPage.html";
});

//show results

if ((answer1==answer2)&&(answer1==answer3)) {
    if (answer1==1) { document.getElementByClassName("elegant").style.display = "inline"; }
    else if (answer1==2) { document.getElementByClassName("crazy").style.display = "inline"; }
    else { document.getElementByClassName("shy").style.display = "inline"; }
}

if ((answer1!=answer2)&&(answer1!=answer3)&&(answer2!=answer3)) { document.getElementByClassName("creapyPasta").style.display = "inline"; }

if ((answer1+answer2+answer3==4)) { document.getElementByClassName("elegant").style.display = "inline"; }
if ((answer1+answer2+answer3==8)) { document.getElementByClassName("shy").style.display = "inline"; }
if ((answer1+answer2+answer3==5)) {
    if (answer1==3)||(answer2==3)||(answer3==3)) { document.getElementByClassName("elegant").style.display = "inline"; }
    else { document.getElementByClassName("crazy").style.display = "inline"; }
}
if ((answer1+answer2+answer3==7)) {
    if (answer1==2)||(answer2==2)||(answer3==2)) { document.getElementByClassName("crazy").style.display = "inline"; }
    else { document.getElementByClassName("shy").style.display = "inline"; }
}