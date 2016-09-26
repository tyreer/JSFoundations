'use strict'

targetJSONButton();
targetTxtButton();
targetHTMLButton();


function makeXMLHttpRequest (URL, callbackParamater) {
    var thisRequest = new XMLHttpRequest();
    thisRequest.addEventListener("load", callbackParamater);
    thisRequest.open("GET", URL);
    thisRequest.send();
}

// *****************************************************************************
//This works, but I feel like the JSONHelper function is hard to justify

function targetJSONButton() {
    var JSONButton = document.getElementById("loadjson");
	JSONButton.addEventListener("click", JSONHelper);
}

function JSONHelper() {
    makeXMLHttpRequest("animals.json", writeJSON);
}
        
function writeJSON() {
    if (this.status === 200) {
        var JSONResults = JSON.parse(this.responseText);
        var JSONHtmlString = "";
       
       for(var prop in JSONResults) {
           
           JSONHtmlString += "<ui> \ " + prop;
       
           for (var i=0; i<JSONResults[prop].length; i++){
               JSONHtmlString += "<li> ";
               JSONHtmlString += JSONResults[prop][i];
               JSONHtmlString += "</li> ";
            }
            
            JSONHtmlString += "\ </ui> ";
       }
        document.getElementById("json").innerHTML = JSONHtmlString;
    } 
    //else {ERROR HANDLING EXTRA CREDIT HERE};
}

// *****************************************************************************
//TEXT

function targetTxtButton() {
    var txtButton = document.getElementById("loadtext");
	txtButton.addEventListener("click", textHelper);
}

function textHelper() {
    makeXMLHttpRequest("text.txt", writeTxt);
}

function writeTxt() {
    document.getElementById("text").innerHTML = this.responseText;
}

// *****************************************************************************
//HTML

function targetHTMLButton() {
    var HTMLButton = document.getElementById("loadhtml");
	HTMLButton.addEventListener("click", HTMLHelper);
}

// Using this HTML specific function in order to specify the response type as a document. This allows for the insertion of DOM nodes in the writeHTML callback.

function HTMLHelper() {
    var thisRequest = new XMLHttpRequest();
    thisRequest.addEventListener("load", writeHTML);
    thisRequest.open("GET", "html.html");
    thisRequest.responseType = "document";
    thisRequest.send();
}

// *****************************************************************************
//HTML as a DOM

function writeHTML() {
    document.getElementById("html").innerHTML = this.response.body.outerHTML;
}


