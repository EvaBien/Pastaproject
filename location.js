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
	show.innerHTML="latitude: " + position.coords.latitude + 
	"longitude: " + position.coords.longitude;	
}

function initMap() {
  var center = {lat: lat, lng: lng};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: center});
  var marker = new google.maps.Marker({position: center, map: map});
}

const showmap = () =>{
	document.querySelector('#map').style.display="flex";
}
get.addEventListener('click',showmap);
window.onload = getLocation();