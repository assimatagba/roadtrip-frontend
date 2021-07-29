// class Geometry {
//     constructor(lat,lng){
//         this.lat = lat,
//         this.lng = lng
//     }
// }

class ThingToDo {
    constructor({}) {
        this.name
        this.business_status
        this.formatted_address
        this.photos = []
        this.rating
        this.user_ratings_total
        this.types = [ "museum", "tourist_attraction", "point_of_interest", "establishment" ]
        this.permanently_closed
        this.geometry = {
            location: {
                lat: "",
                lng: ""
            }
        }
      
    }

    static buildArrayOfThingToDo(data = []){
        const tab = []
        data.forEach(e => {
            tab.push(new ThingToDo(e))
        });
        return tab

    }
  }

export default ThingToDo