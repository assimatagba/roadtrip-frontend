export default class TripPlacesState{
    constructor(){
        this.places = []
    }

    add(place){
        this.places.push(place)
    }

    getPlaces(){
        return this.places
    }

}