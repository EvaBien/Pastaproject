// JavaScript Document
const inputname = document.querySelector('#inputname'); 
const name = document.querySelector('#name');
const input = document.querySelector('#input'); 


inputname.addEventListener('keyup', changename); 
inputname.addEventListener('focus',focuson);
input.addEventListener('click',doshow);

//Trying to get the test results
//var radios = document.getElementsByName('answer');
//var valeur;
//for(var i = 0; i < boutons.length; i++){
// if(boutons[i].checked){
// valeur = boutons[i].value;
// }
//}

var result1 = document.getElementsByName(answer1).checked.value;
console.log(result1);