// JavaScript Document
const inputcity = document.querySelector('#inputcity'); 
const name = document.querySelector('#name');
const check = document.querySelector('#startcheck'); 
const city = 'london'

const getcityname = () => {  
	city = inputcity.value.substring(0,1).toUpperCase()+inputname.value.substring(1).toLowerCase();
	if (inputcity.value.length < 1) {
		city = 'Paris'
	}
} 
const focuson = () => {
	inputcity.value = ''
}
const getweather = () => {
	return fetch('https:/api.openweathermap.org/data/2.5/weather?q=london'+'&appid=e0111a42fec4f030d3e262962f0cb07a')
	.then(res =>res.json())
	.then(posts =>console.log(posts)) 
}

inputcity.addEventListener('keyup', getcityname); 
inputcity.addEventListener('focus',focuson);
check.addEventListener('click',getweather);