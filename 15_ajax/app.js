// ***************************************
// Works! But ugly?
// Could be broken out

'use strict'

//txtButton

function targetTxtButton() {
    var txtButton = document.getElementById("loadtext");
	txtButton.addEventListener("click", getText);
	
	function getText() {
	    var textRequest = new XMLHttpRequest();
        textRequest.addEventListener("load", writeTxtButton);
        textRequest.open("GET", "text.txt");
        textRequest.send();
        
    	function writeTxtButton() {
            document.getElementById("text").innerHTML = textRequest.responseText;
    	}
	}
}

targetTxtButton();


//HTML

function targetHtmlButton() {
    var HtmlButton = document.getElementById("loadhtml");
	HtmlButton.addEventListener("click", getHtml);
	
	function getHtml() {
	    var htmlRequest = new XMLHttpRequest();
        htmlRequest.addEventListener("load", writeTxtButton)
        htmlRequest.open("GET", "html.html");
        htmlRequest.send();
        
    	function writeTxtButton() {
            document.getElementById("html").innerHTML = htmlRequest.responseText;
    	}
	}
}

targetHtmlButton();

//JSON

function targetJSONButton() {
    var JSONButton = document.getElementById("loadjson");
	JSONButton.addEventListener("click", getJSON);
	
	function getJSON() {
	    var JSONRequest = new XMLHttpRequest();
        JSONRequest.addEventListener("load", writeJSON);
        JSONRequest.open("GET", "animals.json");
        JSONRequest.send();
        
    	function writeJSON() {
    	    var JSONResults = JSON.parse(JSONRequest.responseText);
    	    var JSONHtmlString = "";
    	   
    	   for(var prop in JSONResults) {
    	       
    	       JSONHtmlString += "<ui> \ " + prop + "\ </ui> \  ";
    	   
    	       for (var i=0; i<  JSONResults[prop].length; i++){
    	       JSONHtmlString += "<li> ";
    	       JSONHtmlString += JSONResults[prop][i];
    	       JSONHtmlString += "</li> ";
    	    }
    	   }
            document.getElementById("json").innerHTML = JSONHtmlString;
    	}
	}
}

targetJSONButton();
