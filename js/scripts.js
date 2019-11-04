function PlacesBeen() {
  this.places = []
  this.currentId = 0
}

PlacesBeen.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

PlacesBeen.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PlacesBeen.prototype.findPlace = function(id) {
  // console.log(fuck);
  for (var i=0; i< this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        return this.places[i];
      }
    }
    return false;
  };
}


function Place(placeName, landMarks, timeOfYear, funThings, foodHere) {
  this.placeName = placeName,
  this.landMarks = landMarks,
  this.timeOfYear = timeOfYear,
  this.funThings = funThings,
  this.foodHere = foodHere
}

var PlacesBeen = new PlacesBeen();
var place1 = new Place("Portland", "Waterfront", "Spring", "Night Market", "Food Trucks");
var place2 = new Place("Long Beach", "The Pike", "Summer", "LA street market", "Tacos");
PlacesBeen.addPlace(place1);
PlacesBeen.addPlace(place2);

var results1 = PlacesBeen.findPlace(1);
var results2 = PlacesBeen.findPlace(2);

// var placesBeen = new PlacesBeen();
//
// function dislayLocations (placesToDisplay) {
//
// }


$(document).ready(function() {
var pickedPlace1 = document.getElementById("place1");
var pickedPlace2 = document.getElementById("place2");
pickedPlace1.onclick = function place() {
  console.log(place1);
  $(".output").text(place1.placeName + " " + place1.landMarks);
}

});
