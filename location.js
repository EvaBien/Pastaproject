// JavaScript Document
const inputcity = document.querySelector('#inputcity'); 
const get = document.querySelector('#getlocation'); 
const show =document.querySelector('#show')


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
	show.innerHTML="latitude: " + position.coords.latitude + 
	"longitude: " + position.coords.longitude;	
}

get.addEventListener('click',getLocation);