import cut from '../assets/icons/cutlery.png'
import hotel from '../assets/icons/building.png'
import culture from '../assets/icons/cultures.png'
import popular from '../assets/icons/popularity.png'

const getOption = (url) => {
    return {
      url,
      size : {width: 90, height: 120, f: 'px', b: 'px',},
      scaledSize: {width: 30, height: 30, f: 'px', b: 'px',},
  }
}

export default {
    buttonFilters: [
      {
      icon : popular,
      text : "Popular",
    },
    {
      icon : cut,
      text : "Foods & drinks",
    },
    {
      icon : hotel,
      text : "Hotels",
    },
    {
      icon : culture,
      text : "Culture",
    },

      

    ],
    center: {lat:50.629250, lng:3.057256},
    destinationPosition : {lat:43.610767, lng:3.876716},
    ourMap: null,
    startingFromPosition : {lat:50.629250, lng:3.057256},
    mapId: "1b9043be205e5baa",
    contentString : 
    '<div id="content">' +
    "</div>" +
    "kejdbkjzedbkjzbdkzd </div>",
    infowindow : null,
    currentFilter : "Popular",
    isLoadingFilterData : true,
    distanceBetweenPlacesAndRoad : 30,
    restaurantsMarkerOptions: getOption(cut),
    hotelsMarkerOptions: getOption(hotel),
    cultureMarkerOptions: getOption(culture),
    currentShowedPlaces : [],
    tripPlacesSelected : []
  }
