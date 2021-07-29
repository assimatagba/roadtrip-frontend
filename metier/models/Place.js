class Place {
    constructor({image,title,description}) {
      this.image = image
      this.title = title
    }

    static buildArrayOfPlaces(data = []){
        const tab = []
        data.forEach(e => {
            tab.push(new Place(e))
        });
        return tab

    }
  }

export default Place