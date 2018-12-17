// JavaScript Document

//Trying to get the test results
//var radios = document.getElementsByName('answer');
//var valeur;
//for(var i = 0; i < boutons.length; i++){
// if(boutons[i].checked){
// valeur = boutons[i].value;
// }
//}

//global var
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
document.querySelector("#nextLink1").addEventListener("click", function(event) {
  VerifAnswer1();
  window.location = "questions2.html";
});

document.querySelector("#nextLink2").addEventListener("click", function(event) {
  VerifAnswer2();
  window.location = "questions3.html";
});

document.querySelector("#nextLink3").addEventListener("click", function(event) {
  VerifAnswer3();
  window.location = "personalityPgae.html";
});



