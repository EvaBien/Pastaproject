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


//test part
console.log(document.querySelector("#f-option").checked);
console.log(document.querySelector("#s-option").checked);
console.log(document.querySelector("#t-option").checked);

console.log(answer1);

}

//call

console.log(document.querySelector("#nextButton1"));

document.querySelector('#nextButton1').addEventListener("click", function(event) {
  //VerifAnswer1();
  document.querySelector("question-wrapper.set1").style.display="none";
  document.querySelector("question-wrapper.set2").style.display="inline";
});

