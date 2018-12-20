// JavaScript Document
const inputcity = document.querySelector('#inputcity'); 
const get = document.querySelector('#getlocation'); 
const show =document.querySelector('#show')
const newmap =document.getElementById('#map')
var lat,lng;
var map, infoWindow;

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
	lat = position.coords.latitude;
	lng = position.coords.longitude;
	fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng +'&units=metric&appid=e0111a42fec4f030d3e262962f0cb07a')
	.then(responseData => 
		responseData.json())
  	.then(responseData =>{
		show.innerHTML='We guess you are now in '+responseData.name +', Click the button to find the most close Pasta.';
		photo.src= 'img/' + responseData.weather[0].main+ '.jpg';
	})
}

function initMap() {
  var center = {lat: lat, lng: lng};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: center});
  var marker = new google.maps.Marker({position: center, map: map});
}

const showmap = () =>{
	document.querySelector('#map').style.display="inherit";
	show.innerHTML= "That's it, have a good meal."
}
get.addEventListener('click',showmap);
window.onload = getLocation();