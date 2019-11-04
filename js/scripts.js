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

PlacesBeen.prototype.findLocation = function (id) {
  for (var i=0; i< this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        return this.places[i];
      }
    }
  };
  return false;
}


function place(placeName, landMarks, timeOfYear, funThings, foodHere) {
  this.placeName = placeName,
  this.landMarks = landMarks,
  this.timeOfYear = timeOfYear,
  this.funThings = funThings,
  this.foodHere = foodHere
}

var placesBeen = new PlacesBeen();
var place1 = new place("Portland", "Waterfront", "Spring", "Night Market", "Food Trucks");
var place2 = new place("Long Beach", "The Pike", "Summer", "LA street market", "Tacos");
placesBeen.addPlace(place1);
placesBeen.addPlace(place2);
