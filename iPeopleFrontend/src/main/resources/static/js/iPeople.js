function GetOnLoadStuff() {
	GetGenerateKIMListener();
	GetSaveBtnListener();
}

function GetGenerateKIMListener() {
	var KimBTN = document.getElementById("KimGenBtn");
	KimBTN.addEventListener("click", function () {
		KimBTN.style.display = "none";
		var kimText = document.getElementById("kim_input");
		kimText.value = GenerateKIM();
		kimText.style.display = "inherit";
	})
}

function GetSaveBtnListener() {
	var SaveBTN = document.getElementById("SaveBtn");
	SaveBTN.addEventListener("click", function () {
		httpGetAsyncPassResponse("http://localhost:8080/KIM/123456", ParseJSONandDoLogic);
	})

	var SaveBTNnew = document.getElementById("SaveBtn_new");
	SaveBTNnew.addEventListener("click", function () {
		SendKIMToBackend();
	})
}

function GenerateKIM() {
	var kim = "123456";
	return kim;
}

/* synchronous requests are bad pracitce
function httpGet(theUrl) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", theUrl, false); // false for synchronous request
	xmlHttp.send(null);
	return xmlHttp.responseText;
}*/

function SendKIMToBackend(){
	var obj = new Object();
	obj.vorname = document.getElementById("vn_input").value
	document.getElementById("json_input").value = JSON.stringify(obj);
}

function ParseJSONandDoLogic(response){
	var obj = JSON.parse(response);
	document.getElementById("json_input").value =   obj.nachname + " " + obj.vorname;
}

function httpGetAsyncPassResponse(theUrl, callback) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
		callback(xmlHttp.responseText);
	}
	xmlHttp.open("GET", theUrl, true); // true for asynchronous 
	xmlHttp.send(null);
}

/* THIS IS WORKING
function httpGetAsync(theUrl) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
		var obj = JSON.parse(xmlHttp.responseText);
		document.getElementById("json_input").value = obj.vorname + " " + obj.nachname;
	}

	xmlHttp.open("GET", theUrl, true); // true for asynchronous 
	xmlHttp.send(null);
}
*/
