class FlyOffer {
    constructor({id,placeTitle,image,compagnyLogo,publishedDate,departuresDates,avgPrice,currentPrice}) {
      this.id = id
      this.placeTitle = placeTitle
      this.image = image
      this.compagnyLogo = compagnyLogo
      this.publishedDate = publishedDate
      this.departuresDates = departuresDates
      this.avgPrice = avgPrice
      this.currentPrice = currentPrice
    }

    static buildArrayOfFlyOffers(data = []){
        const tab = []
        data.forEach(e => {
            tab.push(new FlyOffer(e))
        });
        return tab

    }
  }

export default FlyOffer