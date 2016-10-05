'use strict'

makeAJAXRequest ();

function makeAJAXRequest () {
    
    var request = new XMLHttpRequest();
    
    request.addEventListener("load", writeResponse);
    
    request.open("GET","http://eloquentjavascript.net/author");
    // request.setRequestHeader("Accept", "text/plain");
    // request.setRequestHeader("Accept", "text/html");
    // request.setRequestHeader("Accept", "application/json");
    
    request.setRequestHeader("Accept", "application/rainbows+unicorns");
    
    request.send();
}

function writeResponse() {
    console.log(this.responseText);
}
