//global var
var answer1;
var answer2;
var answer3;

//functions
function VerifAnswer1(){
    if (document.querySelector("#rep1").checked == true){
        answer1=1;
    } else if (document.querySelector("#rep2").checked == true){
        answer1=2;
    } else {
        answer1=3;
    }
}

function VerifAnswer2(){
    if (document.querySelector("#rep4").checked == true){
        answer2=1;
    } else if (document.querySelector("#rep5").checked == true){
        answer2=2;
    } else {
        answer2=3;
    }
}

function VerifAnswer3(){
    if (document.querySelector("#rep7").checked == true){
        answer3=1;
    } else if (document.querySelector("#rep8").checked == true){
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
  console.log(document.querySelector("#rep1").checked);
  console.log(document.querySelector("#rep2").checked);
  console.log(document.querySelector("#rep3").checked);
  
  console.log(answer1);

  document.querySelector("div.question-wrapper.set1").style.display="none"; //you need to add "div." before everything to explain that it is a div
  document.querySelector("div.question-wrapper.set2").style.display="flex";
});

document.querySelector("#nextButton2").addEventListener("click", function(event) {
  VerifAnswer2();
  document.querySelector("div.question-wrapper.set2").style.display="none";
  document.querySelector("div.question-wrapper.set3").style.display="flex";
});

document.querySelector("#resultButton").addEventListener("click", function(event) {
  document.querySelector("div.question-wrapper.set3").style.display="none";
  document.querySelector("div.informations").style.display="flex";
    //show results

    // if the 3 answers are the same
    if ( (answer1==answer2) & (answer1==answer3) == true ) {
        if (answer1==1 == true) { document.querySelector(".elegant").style.display = "flex"; }
        else if (answer1==2 == true) { document.querySelector(".crazy").style.display = "flex"; }
        else { document.querySelector(".shy").style.display = "flex"; }
    }

    // if the 3 answers are different
    if ( (answer1!=answer2) & (answer1!=answer3) & (answer2!=answer3) == true ) { document.querySelector(".creapyPasta").style.display = "flex"; }

    // if there are different proportions
    if ( (answer1+answer2+answer3==4) == true) { document.querySelector(".elegant").style.display = "flex"; }
    if ( (answer1+answer2+answer3==8) == true) { document.querySelector(".shy").style.display = "flex"; }
    if ( (answer1+answer2+answer3==5) == true) {
        if ( (answer1==3) | (answer2==3) | (answer3==3) == true) { document.querySelector(".elegant").style.display = "flex"; }
        else { document.querySelector(".crazy").style.display = "flex"; }
    }
    if ( (answer1+answer2+answer3==7) == true) {
        if ( (answer1==2) | (answer2==2) | (answer3==2) == true) { document.querySelector(".crazy").style.display = "flex"; }
        else { document.querySelector(".shy").style.display = "flex"; }
    }
});

