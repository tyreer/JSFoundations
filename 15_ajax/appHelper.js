'use strict'

targetJSONButton();
targetTxtButton();
targetHTMLButton();

// *****************************************************************************
//This works, but I feel like the JSONHelper function is hard to justify

function targetJSONButton() {
    var JSONButton = document.getElementById("loadjson");
	JSONButton.addEventListener("click", JSONHelper);
}

function JSONHelper() {
    makeXMLHttpRequest("animals.json", writeJSON);
}

function makeXMLHttpRequest (URL, callbackParamater) {
    var thisRequest = new XMLHttpRequest();
    thisRequest.addEventListener("load", callbackParamater);
    thisRequest.open("GET", URL);
    thisRequest.send();
}
        
function writeJSON() {
    if (this.status === 200) {
        var JSONResults = JSON.parse(this.responseText);
        var JSONHtmlString = "";
       
       for(var prop in JSONResults) {
           
           JSONHtmlString += "<ul>\ " + prop;
       
           for (var i=0; i<  JSONResults[prop].length; i++){
               JSONHtmlString += "<li> ";
               JSONHtmlString += JSONResults[prop][i];
               JSONHtmlString += "</li> ";
            }
            
           JSONHtmlString += "\ </ul> ";
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
    document.getElementById("loadtext").innerHTML = this.responseText;
}

// *****************************************************************************
//HTML

function targetHTMLButton() {
    var HTMLButton = document.getElementById("loadhtml");
	HTMLButton.addEventListener("click", HTMLHelper);
}

function HTMLHelper() {
    makeXMLHttpRequest("html.html", writeHTML);
}

function writeHTML() {
    document.getElementById("html").innerHTML = this.responseText;
}


// / ***************************************
// Trying to pass in the URL and callback function, but this executes without waiting for the click!

// function targetJSONButton() {
//     var JSONButton = document.getElementById("loadjson");
// 	JSONButton.addEventListener("click", JSONhelper ("animals.json", callback));
// }

// function JSONhelper (URL, callbackParamater) {
//     var thisRequest = new XMLHttpRequest();
//     thisRequest.addEventListener("load", callbackParamater);
//     thisRequest.open("GET", URL);
//     thisRequest.send();
// }

// function callback () {
//     writeJSON(this.responseText);
// }
        
// function writeJSON(response) {
//     var JSONResults = JSON.parse(response);
//     var JSONHtmlString = "";
   
//   for(var prop in JSONResults) {
       
//       JSONHtmlString += "<ui> \ " + prop + "\ </ui> \  ";
   
//       for (var i=0; i<  JSONResults[prop].length; i++){
//       JSONHtmlString += "<li> ";
//       JSONHtmlString += JSONResults[prop][i];
//       JSONHtmlString += "</li> ";
//     }
//   }
//     document.getElementById("json").innerHTML = JSONHtmlString;
// }

// targetJSONButton();

// / ***************************************
//Not sure why the innerHTML is changed despite the lack of a click
// function requestHelper(url, target) {
	    
// 	    var thisRequest = new XMLHttpRequest();
//         thisRequest.addEventListener("load", callback);
//         thisRequest.open("GET", url);
//         thisRequest.send();
        
//         function callback() {
//             target.innerHTML = thisRequest.responseText;
//         }
// }

// function targetTxtButton() {
//     var txtButton = document.getElementById("loadtext");
// 	txtButton.addEventListener("click", requestHelper("text.txt", txtButton));
// }

// targetTxtButton();


// //HTML

// function targetHtmlButton() {
//     var HtmlButton = document.getElementById("loadhtml");
// 	HtmlButton.addEventListener("click", getHtml);
	
// 	function getHtml() {
// 	    var htmlRequest = new XMLHttpRequest();
//         htmlRequest.addEventListener("load", writeTxtButton)
//         htmlRequest.open("GET", "html.html");
//         htmlRequest.send();
        
//     	function writeTxtButton() {
//             document.getElementById("html").innerHTML = htmlRequest.responseText;
//     	}
// 	}
// }

// targetHtmlButton();

// //JSON

// function targetJSONButton() {
//     var JSONButton = document.getElementById("loadjson");
// 	JSONButton.addEventListener("click", getJSON);
	
// 	function getJSON() {
// 	    var JSONRequest = new XMLHttpRequest();
//         JSONRequest.addEventListener("load", writeJSON);
//         JSONRequest.open("GET", "animals.json");
//         JSONRequest.send();
        
//     	function writeJSON() {
//     	    var JSONResults = JSON.parse(JSONRequest.responseText);
//     	    var JSONHtmlString = "";
    	   
//     	   for(var prop in JSONResults) {
    	       
//     	       JSONHtmlString += "<ui> \ " + prop + "\ </ui> \  ";
    	   
//     	       for (var i=0; i<  JSONResults[prop].length; i++){
//     	       JSONHtmlString += "<li> ";
//     	       JSONHtmlString += JSONResults[prop][i];
//     	       JSONHtmlString += "</li> ";
//     	    }
//     	   }
    	    
//     	    // ***************************************
//     	   // for (var i=0; i<JSONResults.fuzzy.length; i++){
//     	   //    JSONHtmlString += "<li> ";
//     	   //    JSONHtmlString += JSONResults.fuzzy[i];
//     	   //    JSONHtmlString += "</li> ";
//     	   // }
    	    
//     	   // JSONHtmlString += "<ui> \ SPIKEY \ </ui> \  ";
    	   
//             document.getElementById("json").innerHTML = JSONHtmlString;
//     	}
// 	}
// }

// targetJSONButton();

// ***************************************
// Works! But illogical because this loads the Ajax request even if it's not necessary.

// 'use strict'

// //Define Ajax requests
// var textRequest = new XMLHttpRequest();
// textRequest.addEventListener("load", targetTxtButton);
// textRequest.open("GET", "text.txt");
// textRequest.send();

// // var htmlRequest = new XMLHttpRequest();
// // htmlRequest.addEventListener("load", targetHtmlButton);
// // htmlRequest.open("GET", "html.html");
// // htmlRequest.send();

// function targetTxtButton() {
// 	document.getElementById("loadtext").addEventListener("click", loadText);
	
// 	function loadText(){
// 	    this.innerHTML = textRequest.responseText;
// 	}
// }

// function targetHtmlButton() {
// 	document.getElementById("loadhtml").addEventListener("click", loadHtml);
	
// 	function loadHtml(){
// 	    document.getElementById("html").innerHTML = htmlRequest.responseText;
// 	}
// }