document.body.onload = test;

//format
/*

*/

var x = document.getElementById("demo");

//the int part of lat and long will be the first letter
//see the table

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

function test(){
				var fileIn;
				$.ajax({
								url: "../tmp/countries.csv",
								async: false,
								success: function(indata){print(indata);}
				});
				x.innerHTML = "made it";
				getLocation();
				x.innerHTML = fileIn;
}