function getCatFact() {
	document.getElementById('responseArea').innerHTML = ""
	var xhr1 = new XMLHttpRequest();
	xhr1.open("GET", "https://catfact.ninja/fact");
	xhr1.onreadystatechange = function(e) {
		document.getElementById("responseArea").innerHTML = xhr1.responseText;
	};
	xhr1.send();
}


function getIPAddress() {
	document.getElementById('responseArea').innerHTML = ""
	var xhr1 = new XMLHttpRequest();
	xhr1.open("GET", "https://api.ipify.org?format=json");
	xhr1.onreadystatechange = function(e) {
		document.getElementById("responseArea").innerHTML = xhr1.responseText;
	};
	xhr1.send();
}

function getBitcoinPrice() {
	document.getElementById('responseArea').innerHTML = ""
	var xhr1 = new XMLHttpRequest();
	xhr1.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
	xhr1.onreadystatechange = function(e) {
		document.getElementById("responseArea").innerHTML = xhr1.responseText;
	};
	xhr1.send();
}
