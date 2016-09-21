"use strict"

function Person() {
    this.initialize = function(nameInput, ageInput){
        this.name = nameInput;
        this.age = ageInput;
    }
    
    this.describe = function() {
        console.log(this.name + this.age);
    }
}

function Student() {
    Person.call(this);
    
    this.learn = function(subject) {
        console.log(this.name + " just learned " + subject);
    }
}

function Teacher() {
    Person.call(this);
    
    this.teach = function(subject) {
        console.log(this.name + " just taught " + subject);
    }
}


var r = new Teacher();

r.initialize("Robert", 32);
r.teach("Octopus Capture 101");


