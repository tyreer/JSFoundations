"use script"

function Vehicle(type, line, currentLatitude, currentLongitude, currentSpeed, full, idNumber, timeVsSchedule) {
      this.type = type;
      this.line = line;
      this.currentLatitude = currentLatitude;
      this.currentLongitude = currentLongitude;
      this.currentSpeed = currentSpeed;
      this.full = full;
      this.idNumber = idNumber;
      this.timeVsSchedule = timeVsSchedule;
      this.basicInfo = ["City: Portland", "State: Oregon", "Agency: Trimet"];
}

Vehicle.prototype.printNow = function() {
      console.log("Vehicle type: " + this.type);
      console.log("Vehicle line: " + this.line);
      console.log("Vehicle location: " + this.currentLatitude + "°N, " + this.currentLongitude + "°W");
};

Vehicle.prototype.move = function(latitude, longitude) {
      this.currentLatitude += latitude;
      this.currentLongitude += longitude;
};

var vehicleOne = new Vehicle("bus", "line35", 5, 10, 20, false, 123, 10);
var vehicleTwo = new Vehicle("lightrail", "blue", 5, 10, 20, false, 124, 10);
var vehicleThree = new Vehicle("bus", "line8", 5, 10, 20, false, 125, 10);


vehicleTwo.printNow();
vehicleTwo.move(100, 200);
vehicleTwo.printNow();

