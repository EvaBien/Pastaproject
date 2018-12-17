// JavaScript Document

//Trying to get the test results
//var radios = document.getElementsByName('answer');
//var valeur;
//for(var i = 0; i < boutons.length; i++){
// if(boutons[i].checked){
// valeur = boutons[i].value;
// }
//}

var madiv = document.querySelector("#answerChoices1")

if (document.querySelector("#f-option".checked)){
    answer1=1;
} else if (document.querySelector("#s-option".checked)){
    answer1=2;
} else {
    answer1=3;
}

console.log(document.querySelector("#f-option").checked);
console.log(document.querySelector("#s-option").checked);
console.log(document.querySelector("#t-option").checked);

console.log(answer1);