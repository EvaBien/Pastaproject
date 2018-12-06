// JavaScript Document
const inputcity = document.querySelector('#inputcity'); 
const name = document.querySelector('#name');
const check = document.querySelector('#startcheck'); 
const show =document.querySelector('#show')
var city = 'Paris'

const getcityname = () => {  
	city = inputcity.value.toString();
	if (inputcity.value.length < 1) {
		city = 'Paris'
	}
} 
const focuson = () => {
	inputcity.value = ''
}
const getweather = () => {
	fetch('https:/api.openweathermap.org/data/2.5/weather?q='+city+'&appid=e0111a42fec4f030d3e262962f0cb07a')
	.then(res =>res.json())
  	.then(responseData =>{
		show.innerHTML=responseData.name +' today is '+responseData.base
	})
}

inputcity.addEventListener('keyup', getcityname); 
inputcity.addEventListener('focus',focuson);
check.addEventListener('click',getweather);