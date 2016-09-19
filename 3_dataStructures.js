"use strict"

//Online routine data structure 
var myOnlineRoutine = {
	time: "5 minutes",
	useful: false,
	platforms: ["New York Times", "Pitchfork", "Snapchat"]
};

//TriMet data structure 
var triMetRunningVehicles = {
    bus: {
        line35: [
            {
                currentLatitude: 5,
                currentLongitude: 10,
                currentSpeed: 20,
                full: false, 
                idNumber: 123,
                timeVsSchedule: 10
            },
            {
                currentLatitude: 15,
                currentLongitude: 20,
                currentSpeed: 20,
                full: true, 
                idNumber: 124,
                timeVsSchedule: -10
            }
        ]
    },
    lightRail: {
        blue: [ 
            {
                currentLatitude: 5,
                currentLongitude: 10,
                currentSpeed: 20,
                full: false, 
                idNumber: 125,
                timeVsSchedule: 10
            }
        ],
        red: []
    },
    streetcar: {
        line9: [
            ]
    },
    commuterRail: {},
    tram: {}
}


console.log(triMetRunningVehicles.bus.line35[0]);