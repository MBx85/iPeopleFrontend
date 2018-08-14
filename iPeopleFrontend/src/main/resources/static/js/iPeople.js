function GetOnLoadStuff() {
	GetGenerateKIMListener();
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

function GenerateKIM() {
	var kim = "123456";
	return kim;
}

function httpGet(theUrl) {
	var finalURL = "http://localhost:8080/KIM/123";
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", finalURL, true); // false for synchronous request
	//xmlHttp.setRequestHeader("origin", "*");
	xmlHttp.send(null);
	return xmlHttp.responseText;
}