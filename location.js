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
		document.getElementById('map'), {zoom: 13, center: center});
	var marker = new google.maps.Marker({position: center, map: map});
	var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var icons = {
    	pasta: {
            icon:  'img/logo.png'
          }
        };
	var features = [
          {
            position: new google.maps.LatLng(48.8484579,2.5507486),
            type: 'pasta'
          }, {
            position: new google.maps.LatLng(48.8387987,2.6327705),
            type: 'pasta'
          }, {
            position: new google.maps.LatLng(48.8155822,2.6210117),
            type: 'pasta'
          }, {
            position: new google.maps.LatLng(48.8372593,2.5815725),
            type: 'pasta'
          }, {
            position: new google.maps.LatLng(48.8272094,2.5350738),
            type: 'pasta'
          }, {
            position: new google.maps.LatLng(48.8155822,2.6210117),
            type: 'pasta'
          }, {
            position: new google.maps.LatLng(48.8062275,2.5283468),
            type: 'pasta'
          } ];
		features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        });
}

const showmap = () =>{
	document.querySelector('#map').style.display="inherit";
	show.innerHTML= "That's it, have a good meal."
}
get.addEventListener('click',showmap);
window.onload = getLocation();