<template>
    <div>
        <div class="headerDesktop pl-5 d-none d-md-block d-lg-block">

            <h1 class="mb-3">Turn your road trip into an adventure.</h1>

            <h3 class="mb-3">Build your route in Roadtrippers and then use our turn-by-turn navigation to lead the way.</h3>

            <h5 class="mb-3">Let's get started</h5>

            <div class="row">
                 <button class="btn btn-sm btn-light d-flex justify-content-center align-items-center ml-4 mr-1">
                <img height="30" width="30"  src="../assets/travel-bag.png"/>
            <p>Plan Your trip</p>

            </button>

            <button class="btn btn-sm btn-light d-flex justify-content-center align-items-center">
                <img height="30" width="30"  src="../assets/explore.png"/>
            <p>Explore Places</p>

            </button>
            </div>


    <div class="headerDesktop__form d-flex mt-4 btn btn-light pb-4 mb-4 justify-content-center align-items-center">
        <MapsInputAutoComplete :onSelectCallback="setPointA" label="Starting from" sectionClasses="mr-3" placeholder="Starting from"> </MapsInputAutoComplete>
        <MapsInputAutoComplete :onSelectCallback="setPointB" label="Destination" sectionClasses="" placeholder="Destination"> </MapsInputAutoComplete>

        <button style="height:40px" class="btn btn-sm btn-primary mt-5 ml-3" @click="submit">Search</button>
    </div>
                

        </div>


     <div class="headerMobile d-block d-sm-block d-md-none d-lg-none">

           <div class="main_img"> </div>


            <div class="main_content ">
                    <h1 class="mb-3">Turn your road trip into an adventure.</h1>

            <h3 class="mb-3 ">Build your route in Roadtrippers and then use our turn-by-turn navigation to lead the way.</h3>

            <h5 class="mb-3">Let's get started</h5>

            <div class="row">
                 <button class="btn btn-sm btn-light d-flex justify-content-center align-items-center ml-auto mr-1">
                    <img height="30" width="30"  src="../assets/travel-bag.png"/>
                    <p>Plan Your trip</p>
                 </button>

                    <button class="btn btn-sm btn-light d-flex justify-content-center align-items-center  mr-auto">
                        <img height="30" width="30"  src="../assets/explore.png"/>
                    <p>Explore Places</p>
                    </button>
            </div>


    <div class="headerMobile__form d-flex mt-4 btn btn-light pb-4 mb-4">
        <MapsInputAutoComplete :onSelectCallback="option => $store.state.pointAoption = option" label="Starting from" sectionClasses="mr-3" placeholder="Starting from"> </MapsInputAutoComplete>
        <MapsInputAutoComplete :onSelectCallback="option => $store.state.pointBoption = option" label="Destination" sectionClasses="" placeholder="Destination"> </MapsInputAutoComplete>
    </div>
            
            </div>
           
                

        </div>

    </div>
</template>

<script>
import AutoCompleteInput from '../components/AutoCompleteInput'
import MapsInputAutoComplete from '../components/MapsInputAutoComplete'
    export default {
        components:{
            AutoCompleteInput,
            MapsInputAutoComplete
        },
        methods : {
            setPointA(option) {this.$store.state.pointAoption = option , console.log(this.$store.state)},
            setPointB(option) {this.$store.state.pointBoption = option},
            submit(){
                const state = this.$store.state
                if(state.pointAoption && state.pointBoption) {
                    this.$buefy.dialog.alert('Discover your roadtrip')

                   this.$router.push({ path: `/map` })
                    return 
                }
                     this.$buefy.dialog.alert({
                    message: "Veuillez choisir un lieu de départ et d'arrivée ",
                    type: 'is-danger',
                    hasIcon: true,
                    icon: 'times-circle',
                    iconPack: 'fa',
                    ariaRole: 'alertdialog',
                    ariaModal: true
                })


            }
        },
        mounted(){
            const state = this.$store.state
            const testUser = {
                username : "Richard",
                age : 25
            }

            this.$store.state.user = testUser
            console.log(state)
        }
        
    }
</script>

<style lang="css" scoped>


.headerDesktop{
    background-image: url('https://images.pexels.com/photos/1696742/pexels-photo-1696742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: calc(65vh);

    
}
.headerDesktop h1{
        font-size: 50px;
        /* width: 60vw; */
        font-weight: bold;
        color: white;
    }
.headerDesktop h3{
        font-size: 30px;
        /* width: 60vw; */
        font-weight: bold;
        color: white;
    }

    .headerDesktop h5{
        font-size: 20px;
        /* width: 50vw; */
        font-weight: bold;
        color: white;
    }
.headerDesktop__form{
    width: 50vw;
    background-color: white;
}





/* */


.headerMobile .main_img{
    background-image: url('https://images.pexels.com/photos/4084276/pexels-photo-4084276.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    height: calc(30vh);

    
}
.headerMobile .main_content{
    background-image: url('https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&h=650&w=940');
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
}
.headerMobile  h1{
        font-size: 30px;
        width: 100vw;
        font-weight: bold;
        color: white;
    }
.headerMobile h3{
        font-size: 20px;
        width: 100vw;
        font-weight: bold;
        color: white;
    }

    .headerMobile h5{
        font-size: 20px;
        width: 50vw;
        font-weight: bold;
        color: white;
    }
.headerMobile__form{
    width: 100vw;

    background-color: wheat;
}
</style>