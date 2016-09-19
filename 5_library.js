"use strict"

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

function checkIfRead(libraryData) {
    
    for (var i = 0; i < libraryData.length; i++) {
        libraryData[i].readingStatus ? console.log("You've read: " +  libraryData[i].title + " by " + libraryData[i].author) : console.log("You haven't read: " +  libraryData[i].title + " by " + libraryData[i].author);
    }
}

checkIfRead(library);