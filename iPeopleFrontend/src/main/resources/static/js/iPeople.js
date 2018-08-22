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
	var SaveBTNnew = document.getElementById("SaveBtn_new");
	SaveBTNnew.addEventListener("click", function () {
		SendKIMToBackend("http://localhost:8090/IPeopleKIM/");
	})
}

function GenerateKIM() {
	httpGetAsyncPassResponse("http://localhost:8090/IPeopleKIM/newKim", GetNewKimFromResponse);
}

function SendKIMToBackend(theUrl) {
	var obj = new Object();
	obj.vorname = document.getElementById("vn_input").value
	obj.nachname = document.getElementById("nn_input").value
	obj.kim = document.getElementById("kim_input").value
	obj.geburtstag = document.getElementById("birthday_input").value;
	var jsonstring = JSON.stringify(obj);
	document.getElementById("json_input").value = jsonstring;
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("PUT", theUrl + obj.kim, true); // true for asynchronous 
	xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlHttp.send(jsonstring);
}

function ParseJSONandDoLogic(response) {
	var obj = JSON.parse(response);
	document.getElementById("json_input").value = obj.nachname + " " + obj.vorname;
}

function GetNewKimFromResponse(response){
	var obj = JSON.parse(response);
	document.getElementById("kim_input").value = obj.kim;
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
