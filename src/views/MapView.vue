<template>


<div>
  <div class="row">
    <div  class="col-md-3" >
      
      <div class="d-flex pb-3 ml-4 filters_container">
        <div v-for="(item , index) in buttonFilters" :key="index" @click="setCurrentFilter(item)" style="border-radius:10px;min-width:120px;" class="btn btn-sm btn-light text-center mx-1 ">
          <img :src="item.icon" width="20" class="mx-1"> <br>
          <span style="font-size:12px">{{item.text}}</span>
        </div>
      </div>


      <div style="height:500px;width:auto" class="ml-4 px-4 text-center pt-4">

        <h4 class=""> {{currentFilter}}</h4>

        <img v-if="isLoadingFilterData" class=""  width="350px" src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif" alt="" >
          
        
       <div v-if="!isLoadingFilterData" class="row filter_content pb-4">

          <div v-for="(i , j) in currentShowedPlaces" :key="j" style="max-height:300px"  class="card col-md-6">
            <img style="height:200px" class="card-img-top" :src="i.photos && i.photos[0].getUrl()" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{i.name}}</h5>
              <!-- <p class="card-text">description</p> -->
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
            <div  style="width:50px;background-color:red;position:absolute;color:white">
                {{i.rating}}
            </div>
        </div>

       </div>

<div class="d-flex  justify-content-center align-items-center mt-5">
  <!-- <label for="distance">Distance:  </label>
       <input  id="distance" v-model="distanceBetweenPlacesAndRoad"  placeholder="" type="text"> -->
<!-- <label class="mr-2" for="distance">Distance (km) :  </label> -->
  <b-tooltip class="mr-2" label="This is the max distance between road and places 👍🏽">
            <b-button label="Distance (km) :" type="is-dark" />
        </b-tooltip>

        <b-field>
            <b-input placeholder="Distance..."
                type="search"
                icon="magnify"
                icon-clickable
                v-model="distanceBetweenPlacesAndRoad"
                style="max-width:200px"
                >
            </b-input>
        </b-field>

</div>


      </div>
    </div>
    <div class="col-md-9">
      <div class="map-container">
          <GmapMap map-type-id="roadmap" :zoom="7" style="width: 100%; height: 100%" :center="center" ref="mapRef" >
          </GmapMap>
      </div>
    </div>
  </div>
</div>


</template>

<script>
// import cut from '../assets/icons/cutlery.png'
// import hotel from '../assets/icons/building.png'
// import culture from '../assets/icons/cultures.png'
// import popular from '../assets/icons/popularity.png'
import MapViewHelper from './MapViewHelper'
import MapViewMapHelper from './MapViewMapHelper'
import data from './MapViewData'
export default {
    data(){
        return data
    },
 async mounted () {

  const {
    redirectUserIfStartOrDestionationPointIsNotDefined,
    getStartAndDestinationPlaceDetails,
    getPlaceLocationFromPlaceDetails ,
    } = MapViewHelper(this)

   redirectUserIfStartOrDestionationPointIsNotDefined(this)

    const placesDetails = await getStartAndDestinationPlaceDetails(this)
    const placeAdetails = placesDetails[0]
    const placeBdetails = placesDetails[1]
    this.startingFromPosition = getPlaceLocationFromPlaceDetails(placeAdetails)
    this.destinationPosition =  getPlaceLocationFromPlaceDetails(placeBdetails)

if(this.$refs.mapRef){
  window.mapRef = this.$refs.mapRef
}
    window.mapRef.$mapPromise.then((map) => {
    this.ourMap = map 

    const {initialize , route , getRoute , removeAllMarkers} =   MapViewMapHelper(this , google , map)
    getRoute(map)
    initialize()
    route()

    this.setCurrentFilter = (filter) => {
          this.currentFilter = filter.text || filter
          removeAllMarkers()
          route()
        }
    })

    setTimeout(() => {
      this.isLoadingFilterData = false
    }, 1000);

  },
  methods : {
        setCurrentFilter(filter){
          this.currentFilter = filter.text
        }
  },
   computed: {
        
  },
  watch : {
    distanceBetweenPlacesAndRoad : function (val) {

      // TODO : Verify that input is a number

      this.setCurrentFilter(this.currentFilter)
      
    }
  }
}

</script>

<style scoped>

.map-container{
    height: 90vh;
    width: 100%;
}

.filters_container{
  overflow-x : auto;
    width:auto;
    box-shadow:1px 1px 8px gray;
}

.filter_content{
    height: 500px;
    overflow: scroll;
    box-shadow: 1px 1px 5px grey;
}
</style>