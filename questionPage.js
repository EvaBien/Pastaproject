//global var
var answer1;
var answer2;
var answer3;

//functions
function VerifAnswer1(){
    if (document.querySelector("#f-option").checked == true){
        answer1=1;
    } else if (document.querySelector("#s-option").checked == true){
        answer1=2;
    } else {
        answer1=3;
    }
}

function VerifAnswer2(){
    if (document.querySelector("#f-option").checked == true){
        answer2=1;
    } else if (document.querySelector("#s-option").checked == true){
        answer2=2;
    } else {
        answer2=3;
    }
}

function VerifAnswer3(){
    if (document.querySelector("#f-option").checked == true){
        answer3=1;
    } else if (document.querySelector("#s-option").checked == true){
        answer2=2;
    } else {
        answer2=3;
    }
}

//call

console.log(document.querySelector("#nextButton1"));

document.querySelector('#nextButton1').addEventListener("click", function(event) {
  VerifAnswer1();
  //test fonctionnement fonction
  console.log(document.querySelector("#f-option").checked);
  console.log(document.querySelector("#s-option").checked);
  console.log(document.querySelector("#t-option").checked);
  
  console.log(answer1);

  document.querySelector("div.question-wrapper.set1").style.display="none"; //you need to add "div." before everything to explain that it is a div
  document.querySelector("div.question-wrapper.set2").style.display="inline";
});

document.querySelector("#nextButton2").addEventListener("click", function(event) {
  //VerifAnswer2();
  document.querySelector("div.question-wrapper.set2").style.display="none";
  document.querySelector("div.question-wrapper.set3").style.display="inline";
});

document.querySelector("#resultButton").addEventListener("click", function(event) {
  //VerifAnswer3();
  window.location = "personalityPage.html";
});

