// JavaScript Document
const inputname = document.querySelector('#inputname'); 
const name = document.querySelector('#name');
const input = document.querySelector('#input'); 


const changename = () => {  
	name.innerHTML = inputname.value.substring(0,1).toUpperCase()+inputname.value.substring(1).toLowerCase();
	if (name.innerHTML.length < 1) {
		name.innerHTML = 'Default'
	}
} 
const focuson = () => {
	inputname.value = ''
}
const doshow = () => { 
	event.preventDefault();
	fetch('api.openweathermap.org/data/2.5/weather?q='+'inputname.value').then(response => response.json())
  	.then(data => {
    	const stats = data;
	}
	name.innerHTML = stats.weather;
}  

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