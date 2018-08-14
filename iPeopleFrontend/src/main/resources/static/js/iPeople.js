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
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", theUrl, false); // false for synchronous request
	xmlHttp.send(null);
	return xmlHttp.responseText;
}

function httpGetAsync(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            return xmlHttp.responseText;
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}