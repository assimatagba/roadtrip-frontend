<template>
  <div class="tripRecap">
    <h1 style="font-size : 2rem" class="text-center my-3 bg-light">This is your trip recap !</h1>

    <div style="width : 30%" class="card pl-3 mb-2">
        <p>
            <img src="https://image.flaticon.com/icons/png/512/1389/1389783.png" height="20" width="20" alt="">
            OPERATIONAL : The place is opened
        </p>

        <p>
            <img src="https://image.flaticon.com/icons/png/512/694/694604.png" height="20" width="20" alt="">
            UNAVAILABLE : The place is closed 
        </p>

    </div>

    <div v-for="place in $store.state.tripPlacesSelected" :key="place.name" class="card">
        <h5 class="card-header d-flex align-items-center bg-dark text-light"> 
            <img class="mr-2" :src="place.icon" height="20" width="20" alt="">
             {{place.name}}   
            
            <span class="ml-3"> | <i class="fa fa-star"></i> {{place.rating}}  </span>
            <span class="ml-3"> | <img src="https://image.flaticon.com/icons/png/512/1389/1389783.png" height="20" width="20" alt=""> {{place.business_status}}  </span>
        </h5>
        <div class="card-body">

            <div class="row">
                <div class="col-md-3" v-for="photo in place.photos.slice(0,4)" :key="photo.getUrl()">
                    <img height="20"  :src="photo.getUrl()" alt="photo">
                </div>
            </div>

            <p class="ml-3 bg-light mt-3"> <i class="fa fa-star"></i> {{place.types}}  </p>


        </div>
    </div>


  </div>
</template>


<script>
export default {
    mounted(){
        console.log(this)
        console.log(this.$store.state.tripPlacesSelected)
    }
}
</script>