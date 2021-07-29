import TripPlacesState from "../../../metier/models/TripPlacesState";

test('it should add Place to state ', () => {

  const tripPlacesState = new TripPlacesState()
  tripPlacesState.add({name : "aaaaa"})
  expect(tripPlacesState.getPlaces()[0].name).toBe("aaaaa");

});