class Objective {
    constructor({image,title,description}) {
      this.image = image
      this.title = title
      this.description = description
    }

    static buildArrayOfObjectives(data = []){
        const tab = []
        data.forEach(e => {
            tab.push(new Objective(e))
        });
        return tab

    }
  }

export default Objective