// JavaScript Document
const inputcity = document.querySelector('#inputcity'); 
const name = document.querySelector('#name');
const check = document.querySelector('#startcheck'); 
const show =document.querySelector('#show')
const photo =document.querySelector('#photo')
var city = 'Paris'
var long =''
var lati =''
const getcityname = () => {  
	city = inputcity.value.toString();
	if (inputcity.value.length < 1) {
		city = 'Paris'
	}
} 
const focuson = () => {
	inputcity.value = ''
}
const getLocation = () =>{
	if (navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(showPosition);
	}
	else
	{
		show.innerHTML="Not support!";
	}
}
function showPosition(position)
{
	lati= position.coords.latitude.toFixed(2); 
	long= position.coords.longitude.toFixed(2);	
}
const getweather = () => {
	fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lati+'&lon='+long +'&units=metric&appid=e0111a42fec4f030d3e262962f0cb07a')
	.then(responseData => 
		responseData.json())
  	.then(responseData =>{
		show.innerHTML=responseData.name +' now is '+responseData.main.temp + ' ℃.'+responseData.weather[0].main;
		photo.src= 'img/' + responseData.weather[0].main+ '.jpg';
	})
}


inputcity.addEventListener('keyup', getcityname); 
inputcity.addEventListener('focus',focuson);
check.addEventListener('click',getLocation)
check.addEventListener('click',getweather);